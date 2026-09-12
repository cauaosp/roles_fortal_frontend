import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

console.log("🔍 DEBUG Supabase:");
console.log("  URL:", url);
console.log("  KEY:", key ? `${key.slice(0, 25)}...` : "❌ UNDEFINED");

export const supabase = createClient(url, key);
