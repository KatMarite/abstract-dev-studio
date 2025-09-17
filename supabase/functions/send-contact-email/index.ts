import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Use the correct environment variable names that are available in edge functions
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "https://sfljpsoprxvixxksnowj.supabase.co";
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmbGpwc29wcnh2aXh4a3Nub3dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5MjExNjEsImV4cCI6MjA3MzQ5NzE2MX0.fwjuyK2TCiFPV4Li8fe4w42p1rBz5-sIWLwZAm-GgBk";

console.log('Edge function started, SUPABASE_URL:', SUPABASE_URL);
console.log('Edge function started, SUPABASE_ANON_KEY exists:', !!SUPABASE_ANON_KEY);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

serve(async (req) => {
  console.log('=== REQUEST RECEIVED ===');
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', Object.fromEntries(req.headers.entries()));
  
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, apikey, x-client-info",
  };

  // Handle CORS
  if (req.method === "OPTIONS") {
    console.log('Handling CORS preflight');
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    console.log('Method not allowed:', req.method);
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { 
        "Content-Type": "application/json",
        ...corsHeaders
      },
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
            ...corsHeaders,
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
            ...corsHeaders,
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
          ...corsHeaders,
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
          ...corsHeaders,
        },
      }
    );
  }
});
