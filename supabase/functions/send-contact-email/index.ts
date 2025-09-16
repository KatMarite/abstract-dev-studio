import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { name, email, subject, message }: ContactFormData = await req.json();
    console.log('Processing contact form submission:', { name, email, subject, message });
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log('Validation failed: missing required fields');
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('Supabase client initialized');

    // Store form submission in database
    const { data, error: dbError } = await supabase
      .from("contact")
      .insert([
        {
          name,
          email,
          subject,
          message,
        },
      ])
      .select();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({
          success: false,
          error: `Database error: ${dbError.message}`,
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    console.log('Successfully inserted contact form data:', data);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your message! I'll get back to you within 24 hours.",
        submissionId: data?.[0]?.created_at,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to process your message. Please try again later.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
});
