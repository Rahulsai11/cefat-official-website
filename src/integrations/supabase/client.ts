
import { createClient } from '@supabase/supabase-js';

// Use direct values instead of relying on env variables
const supabaseUrl = 'https://eqnseuptyrecpevhnrto.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxbnNldXB0eXJlY3BldmhucnRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMzA3NTAsImV4cCI6MjA1OTYwNjc1MH0.0K6ySqoGq7eLVH6ob65L1y7hcGw6faoFUkBUlFWGGRM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const sendNotificationEmail = async (type: string, formData: any, recipientEmail: string = 'info@cefat.in') => {
  try {
    const { data, error } = await supabase.functions.invoke('send-notification-email', {
      body: { type, formData, recipientEmail }
    });
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error("Failed to send notification email:", error);
    return { success: false, error };
  }
};
