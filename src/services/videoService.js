import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://eokdsfsfvsfeomkxqiax.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVva2RzZnNmdnNmZW9ta3hxaWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTA0OTMsImV4cCI6MTk4Mzk2NjQ5M30.HibMK-W0diDft0RGB3CMlExOdYYF9AgdTC3xUzvQ9z0"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
} 