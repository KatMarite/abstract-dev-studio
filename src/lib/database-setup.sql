-- Contact form submissions table setup
-- Run this SQL in your Supabase SQL Editor

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'responded', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create RLS policy
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow insert for anyone (public form submissions)
CREATE POLICY "Allow public contact form submissions" 
ON contact_submissions FOR INSERT 
TO anon 
WITH CHECK (true);

-- Only authenticated users can read (for admin purposes)
CREATE POLICY "Only authenticated users can read submissions" 
ON contact_submissions FOR SELECT 
TO authenticated 
USING (true);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);