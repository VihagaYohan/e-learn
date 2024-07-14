import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  /*  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY */
  "https://imcqvwwnlsfotanzkvtt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltY3F2d3dubHNmb3RhbnprdnR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzOTM3NTAsImV4cCI6MjAzNDk2OTc1MH0.-oZx9sasmRVjXIRWUe7flUQWvnTZqMiF70zdNQ6Vt70"
);
