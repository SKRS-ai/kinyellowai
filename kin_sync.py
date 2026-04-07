import requests
import time
from supabase import create_client, Client

# 1. CREDENTIALS
URL = "https://saejdlduvebyepjlofsd.supabase.co"
KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZWpkbGR1dmVieWVwamxvZnNkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTEwNzkzNCwiZXhwIjoyMDkwNjgzOTM0fQ.QCrxgfn9IBwy_rEBY8oaja8DRBgFxuH27EzrDHtOFiY"
supabase: Client = create_client(URL, KEY)

def usa_tech_super_grab():
    print("🇺🇸 TARGETING U.S. TECH HUBS (CA, NY, TX)...")
    
    headers = {
        'User-Agent': 'KinYellowSovereignBot/1.8 (contact: nehemiah@kinyellow.com)',
        'Referer': 'https://kinyellow.com'
    }
    
    # Targeting the top tech cities in one go
    query = """
    [out:json][timeout:180];
    (
      area["name"="San Francisco"]->.sf;
      area["name"="Austin"]->.atx;
      area["name"="New York"]->.nyc;
    );
    (
      node["office"="it"](area.sf);
      node["office"="technology"](area.sf);
      node["office"="it"](area.atx);
      node["office"="technology"](area.atx);
      node["office"="it"](area.nyc);
      node["office"="technology"](area.nyc);
    );
    out body 1000;
    """
    
    # Using the Kumi mirror - high reliability for broad US queries
    url = "https://overpass.kumi.systems/api/interpreter"
    
    try:
        response = requests.post(url, data={'data': query}, headers=headers, timeout=160)
        response.raise_for_status()
        elements = response.json().get('elements', [])
        
        if not elements:
            print("ℹ️ No new unique tech nodes found in these hubs.")
            return

        print(f"✅ SUCCESS! FOUND {len(elements)} U.S. TECH NODES. SYNCING...")
        
        for el in elements:
            tags = el.get('tags', {})
            name = tags.get('name')
            if not name: continue

            # Determine State for Jurisdiction
            addr_state = tags.get('addr:state', '')
            city = tags.get('addr:city', 'Tech Hub')
            
            # Smart-labeling jurisdiction
            if "San Francisco" in city or "CA" in addr_state:
                jurisdiction = "California"
            elif "Austin" in city or "TX" in addr_state:
                jurisdiction = "Texas"
            else:
                jurisdiction = "New York"

            payload = {
                "name": name,
                "jurisdiction": jurisdiction,
                "entity_type": "TECHNOLOGY & AI",
                "address": f"{tags.get('addr:housenumber', '')} {tags.get('addr:street', '')}".strip() or city,
                "city": city,
                "state": addr_state or jurisdiction[:2].upper(),
                "website_url": tags.get('website') or tags.get('contact:website', ''),
                "claimed_status": False 
            }
            
            supabase.table("businesses").upsert(payload, on_conflict="name").execute()
        
        print(f"🚀 {len(elements)} TECH NODES SYNCED TO SUPABASE.")
        
    except Exception as e:
        print(f"❌ ERROR: {e}")

if __name__ == "__main__":
    usa_tech_super_grab()