import {createClient} from "@supabase/supabase-js"


const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL || null;
const supabaseKey =  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || null;

export default () => {
    if(supabaseURL != null && supabaseKey != null) {
        return createClient(supabaseURL, supabaseKey);
    } else {
        console.log("Supabase URL/Key invalid");
        return null;
    }
}