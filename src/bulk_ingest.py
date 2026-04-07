import pandas as pd
from supabase import create_client, Client
import os
import uuid

# --- 1. DEFINE THE ENGINE FIRST (Prevents NameError) ---
def upload_sovereign_allocation(csv_file, location_type, iso_code):
    """
    This is the core instruction set for the 195-nation rollout.
    """
    print(f"\n--- 🌍 Launching {location_type} Ingest [{iso_code}] ---")
    
    # Check if the CSV exists in the folder
    if not os.path.isfile(csv_file):
        print(f"❌ Error: {csv_file} not found in the /src directory.")
        return

    # Using verified KinYellow credentials
    URL = "https://saejdlduvebyepjlofsd.supabase.co"
    KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZWpkbGR1dmVieWVwamxvZnNkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTEwNzkzNCwiZXhwIjoyMDkwNjgzOTM0fQ.QCrxgfn9IBwy_rEBY8oaja8DRBgFxuH27EzrDHtOFiY" 
    supabase: Client = create_client(URL, KEY)

    # UPDATED: Added encoding='latin1' to handle European accents (UnicodeDecodeError fix)
    try:
        df = pd.read_csv(csv_file, encoding='latin1')
    except Exception as e:
        print(f"❌ Read Error on {csv_file}: {e}")
        return

    for index, row in df.iterrows():
        # Create biometric unique slug
        u_id = str(uuid.uuid4())[:4]
        slug = f"{str(row['name']).lower().replace(' ', '-')}-{str(row['city']).lower().replace(' ', '-')}-{u_id}"
        
        data = {
            "business_name": row['name'],
            "category": row['category'],
            "city": row['city'],
            "state_province": row['state'],
            "country": row['country'],
            "iso_country_code": iso_code,
            "location_type": location_type,
            "slug": slug,
            "allocation_group": f"{iso_code}_Batch_1.0"
        }
        
        try:
            supabase.table("global_index").insert(data).execute()
            print(f"✅ Indexed: {row['name']} -> {location_type} ({iso_code})")
        except Exception as e:
            print(f"⚠️ Skip: {row['name']} | Reason: {e}")

# --- 2. EXECUTE THE LAUNCH AT THE BOTTOM ---
if __name__ == "__main__":
    # --- ACTIVE: Asian Global Triangle ---
    upload_sovereign_allocation('japan_seed.csv', 'Nation', 'JPN')
    upload_sovereign_allocation('china_seed.csv', 'Nation', 'CHN')
    upload_sovereign_allocation('india_seed.csv', 'Nation', 'IND')

    # --- COMPLETED: (Commented out) ---
    # upload_sovereign_allocation('new_york_seed.csv', 'State', 'USA')
    # upload_sovereign_allocation('california_seed.csv', 'State', 'USA')
    # upload_sovereign_allocation('texas_seed.csv', 'State', 'USA')