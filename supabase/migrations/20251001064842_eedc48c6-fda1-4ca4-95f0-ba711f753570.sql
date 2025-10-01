-- Remove overly permissive SELECT policy on contact table
-- Contact form submissions contain private customer information and should not be 
-- readable by all authenticated users. If admin access is needed in the future,
-- implement a proper role-based access control system.

DROP POLICY IF EXISTS "Allow authenticated users to read contact submissions" ON contact;