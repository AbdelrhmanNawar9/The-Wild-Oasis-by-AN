import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ytwgbmnfqydwmdexqzvz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0d2dibW5mcXlkd21kZXhxenZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4MDQ4MDYsImV4cCI6MjA0NjM4MDgwNn0.o7qv_g1YEIMzov-xdQ5CHMH7FLWg67Kp6jA_TbtVx0U";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
