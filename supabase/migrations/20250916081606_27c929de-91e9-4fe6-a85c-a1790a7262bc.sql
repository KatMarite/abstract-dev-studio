-- Allow public contact form submissions
CREATE POLICY "Allow public contact form submissions" 
ON contact FOR INSERT 
TO anon 
WITH CHECK (true);

-- Allow authenticated users to read contact submissions (for admin purposes)
CREATE POLICY "Allow authenticated users to read contact submissions" 
ON contact FOR SELECT 
TO authenticated 
USING (true);