import { createClient } from "@supabase/supabase-js";
const URL = "https://jlfwcfniojkzhgswqyox.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsZndjZm5pb2premhnc3dxeW94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3NzU4MTgsImV4cCI6MjA0NzM1MTgxOH0.qILIfo-OM0uwkhXiTTIXZB7mgoIahePRa4g_llDc7IY";
export const supabase = createClient(URL, API_KEY);
