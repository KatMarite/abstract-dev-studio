-- Fix contact form RLS policies
-- The issue is having two RESTRICTIVE INSERT policies that conflict
-- We need one PERMISSIVE policy that allows both anonymous and authenticated inserts

-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Allow anonymous contact form submissions" ON contact;
DROP POLICY IF EXISTS "Allow authenticated contact form submissions" ON contact;

-- Create a single permissive policy that allows anyone to insert
CREATE POLICY "Allow public contact form submissions"
ON contact
FOR INSERT
TO public
WITH CHECK (true);