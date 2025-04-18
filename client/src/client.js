import { createClient } from '@supabase/supabase-js'

const URL = 'https://kaumsdwywfisxlcqxgbd.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthdW1zZHd5d2Zpc3hsY3F4Z2JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0Nzk5NTAsImV4cCI6MjA2MDA1NTk1MH0.N91zALMKpckcHBDSGfkf--DklJSJkK5Pm19DcUJKAt0';

export const supabase = createClient(URL, API_KEY);