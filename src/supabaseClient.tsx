import { createClient } from '@supabase/supabase-js'; // Fixed the name here

const supabaseUrl = 'https://sacjdlduvebyepjlofsd.supabase.co'; // Use the URL from your screenshot
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // Paste your full anon key here

export const supabase = createClient(supabaseUrl, supabaseAnonKey);