import { supabase } from "./client";
export async function postsLoader() {
  const { data } = await supabase
    .from("Posts")
    .select()
    .order("id", { ascending: true });
  return data;
}
