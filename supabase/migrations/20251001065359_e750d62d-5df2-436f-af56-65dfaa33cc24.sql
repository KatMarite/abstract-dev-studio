-- Fix RLS policy to allow anonymous users (anon role) to insert
DROP POLICY IF EXISTS "Allow public contact form submissions" ON contact;

-- Create policy that specifically allows the anon role to insert
CREATE POLICY "Allow anonymous contact form submissions"
ON contact
FOR INSERT
TO anon, authenticated
WITH CHECK (true);