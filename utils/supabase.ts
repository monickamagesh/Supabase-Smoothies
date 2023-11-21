import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ebgmuvgkxibxnuracklm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViZ211dmdreGlieG51cmFja2xtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY3NjAwNDMsImV4cCI6MjAxMjMzNjA0M30.e9JzVc7FeGaFcsgac0jpnQZdu-d1-1Qiegtq_fHr3yA';

export const supabase = createClient(supabaseUrl, supabaseKey);
