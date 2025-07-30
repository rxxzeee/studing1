import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kleflqrwwghmtdvrtbtl.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsZWZscXJ3d2dobXRkdnJ0YnRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5NzI5OTYsImV4cCI6MjA2NzU0ODk5Nn0.1vEe2dHjTXbMIkZAI83WZLC4ONUT4s3CpJLsnfjgbic"
export const supabase = createClient(supabaseUrl, supabaseKey);

