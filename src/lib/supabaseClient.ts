import { createClient } from '@supabase/supabase-js';

/**
 * SOVEREIGN IDENTITY ENGINE - SUPABASE CLIENT
 * Pulls credentials from environment variables for push protection compliance.
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Initialize the Master Client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

if (process.env.NODE_ENV !== 'production') {
  console.log("🔐 KINYELLOW DATABASE ENGINE: Handshake Initialized");
}

/**
 * MASTER SEARCH ENGINE - ALIGNED WITH DATABASE SCHEMA
 * Targets 'businesses' table as seen in Table Editor
 */
export const searchGlobalIndex = async (query: string) => {
  if (!query || query.trim() === "") return [];

  try {
    console.log(`📡 Querying Master Registry for: ${query}`);
    
    const { data, error } = await supabase
      .from('businesses') 
      .select('id, name, description, jurisdiction, entity_type')
      .or(`name.ilike.%${query}%,jurisdiction.ilike.%${query}%,entity_type.ilike.%${query}%`);

    if (error) {
      console.error("❌ Database Handshake Error:", error.message);
      throw error;
    }

    console.log("✅ Registry Data Retrieved:", data);
    return data || [];
  } catch (err) {
    console.error("❌ KinYellow Search Failure:", err);
    return [];
  }
};

/**
 * JURISDICTION ENGINE
 * Targets 'global_index' table
 */
export const getJurisdictionData = async (identifier: string) => {
  if (!identifier) return null;
  try {
    const { data, error } = await supabase
      .from('global_index')
      .select('*')
      .or(`name.ilike.%${identifier}%,slug.eq.${identifier}`)
      .maybeSingle();

    if (error) {
       console.warn("⚠️ Jurisdiction Fetch Warning:", error.message);
       return null;
    }

    return data;
  } catch (err) {
    console.error("❌ Jurisdiction Engine Failure:", err);
    return null;
  }
};