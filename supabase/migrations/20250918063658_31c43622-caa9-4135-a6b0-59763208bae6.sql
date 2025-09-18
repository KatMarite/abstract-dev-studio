-- Fix RLS policy for contact form submissions
-- Drop the existing policy and recreate it correctly
DROP POLICY IF EXISTS "Allow public contact form submissions" ON contact;

-- Create a proper policy that allows anonymous users to insert
CREATE POLICY "Allow anonymous contact form submissions" 
ON contact FOR INSERT 
TO anon 
WITH CHECK (true);

-- Also allow authenticated users to insert (just in case)
CREATE POLICY "Allow authenticated contact form submissions" 
ON contact FOR INSERT 
TO authenticated 
WITH CHECK (true);