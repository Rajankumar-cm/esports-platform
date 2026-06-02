import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://djohisxyahugicokwpox.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqb2hpc3h5YWh1Z2ljb2t3cG94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzNDg3MjYsImV4cCI6MjA5NTkyNDcyNn0.yw1ouxc9eIPAU_ZO1GMHUpZ4bW6ddzrwllb4GmtrVjI';

window.supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
