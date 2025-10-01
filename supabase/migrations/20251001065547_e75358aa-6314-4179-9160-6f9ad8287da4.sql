-- Fix contact table structure - name should not be primary key
-- Drop the existing primary key on name
ALTER TABLE contact DROP CONSTRAINT contact_pkey;

-- Add a proper id column as primary key
ALTER TABLE contact ADD COLUMN id uuid DEFAULT gen_random_uuid() PRIMARY KEY;

-- Make name not nullable as it should be required
ALTER TABLE contact ALTER COLUMN name SET NOT NULL;