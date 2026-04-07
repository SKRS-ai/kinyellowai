import pandas as pd
import os
from bulk_ingest import upload_sovereign_allocation

# --- 1. THE DATA MATRIX ---
# Includes the completed 50 States + The New Global Blocks
expansion_data = {
    # --- UNITED STATES (Location Type: State) ---
    "Pennsylvania": ["Comcast,Telecom,Philadelphia,PA,USA", "Vanguard,Finance,Malvern,PA,USA", "AmerisourceBergen,Healthcare,Conshohocken,PA,USA"],
    "Florida": ["NextEra Energy,Energy,Juno Beach,FL,USA", "Publix,Retail,Lakeland,FL,USA", "Chewy,E-commerce,Plantation,FL,USA"],
    "Washington": ["Microsoft,Technology,Redmond,WA,USA", "Amazon,E-commerce,Seattle,WA,USA", "Starbucks,Food & Beverage,Seattle,WA,USA"],
    "Massachusetts": ["Moderna,Biotech,Cambridge,MA,USA", "General Electric,Conglomerate,Boston,MA,USA", "DraftKings,Entertainment,Boston,MA,USA"],
    "Illinois": ["Boeing,Aerospace,Chicago,IL,USA", "Abbott Laboratories,Healthcare,North Chicago,IL,USA", "McDonald's,Food & Beverage,Chicago,IL,USA"],
    "Alabama": ["Regions Financial,Finance,Birmingham,AL,USA", "Vulcan Materials,Construction,Birmingham,AL,USA"],
    "Alaska": ["Alaska Air Group,Aviation,SeaTac,AK,USA", "GCI,Telecom,Anchorage,AK,USA"],
    "Arizona": ["First Solar,Energy,Tempe,AZ,USA", "Avnet,Tech,Phoenix,AZ,USA"],
    "Arkansas": ["Walmart,Retail,Bentonville,AR,USA", "Tyson Foods,Food,Springdale,AR,USA"],
    "California": ["Apple,Technology,Cupertino,CA,USA", "Google,Technology,Mountain View,CA,USA", "Nvidia,Technology,Santa Clara,CA,USA"],
    "Colorado": ["Vf Corp,Apparel,Denver,CO,USA", "Palantir,Tech,Denver,CO,USA"],
    "Connecticut": ["Cigna,Healthcare,Bloomfield,CT,USA", "Charter Communications,Telecom,Stamford,CT,USA"],
    "Delaware": ["DuPont,Chemicals,Wilmington,DE,USA", "Sallie Mae,Finance,Newark,DE,USA"],
    "Georgia": ["Home Depot,Retail,Atlanta,GA,USA", "Coca-Cola,Beverage,Atlanta,GA,USA"],
    "Hawaii": ["Hawaiian Electric,Utility,Honolulu,HI,USA", "Bank of Hawaii,Finance,Honolulu,HI,USA"],
    "Idaho": ["Micron Technology,Tech,Boise,ID,USA", "Albertsons,Retail,Boise,ID,USA"],
    "Indiana": ["Eli Lilly,Healthcare,Indianapolis,IN,USA", "Cummins,Manufacturing,Columbus,IN,USA"],
    "Iowa": ["Principal Financial,Finance,Des Moines,IA,USA", "Casey's General Stores,Retail,Ankeny,IA,USA"],
    "Kansas": ["Garmin,Tech,Olathe,KS,USA", "YRC Worldwide,Logistics,Overland Park,KS,USA"],
    "Kentucky": ["Humana,Healthcare,Louisville,KY,USA", "Yum Brands,Food,Louisville,KY,USA"],
    "Louisiana": ["Entergy,Utility,New Orleans,LA,USA", "CenturyLink,Telecom,Monroe,LA,USA"],
    "Maine": ["IDEXX Laboratories,Biotech,Westbrook,ME,USA", "L.L. Bean,Retail,Freeport,ME,USA"],
    "Maryland": ["Lockheed Martin,Aerospace,Bethesda,MD,USA", "Under Armour,Apparel,Baltimore,MD,USA"],
    "Michigan": ["Ford,Automotive,Dearborn,MI,USA", "General Motors,Automotive,Detroit,MI,USA"],
    "Minnesota": ["UnitedHealth Group,Healthcare,Minnetonka,MN,USA", "Target,Retail,Minneapolis,MN,USA"],
    "Mississippi": ["Sanderson Farms,Food,Laurel,MS,USA", "Cal-Maine Foods,Food,Jackson,MS,USA"],
    "Missouri": ["Emerson Electric,Manufacturing,St. Louis,MO,USA", "Centene,Healthcare,St. Louis,MO,USA"],
    "Montana": ["Glacier Bancorp,Finance,Kalispell,MT,USA", "NorthWestern Energy,Utility,Butte,MT,USA"],
    "Nebraska": ["Berkshire Hathaway,Finance,Omaha,NE,USA", "Union Pacific,Logistics,Omaha,NE,USA"],
    "Nevada": ["MGM Resorts,Hospitality,Las Vegas,NV,USA", "Caesars Entertainment,Hospitality,Las Vegas,NV,USA"],
    "New Hampshire": ["Planet Fitness,Fitness,Hampton,NH,USA", "PC Connection,Tech,Merrimack,NH,USA"],
    "New Jersey": ["Johnson & Johnson,Healthcare,New Brunswick,NJ,USA", "Prudential,Finance,Newark,NJ,USA"],
    "New Mexico": ["PNM Resources,Utility,Albuquerque,NM,USA", "Virgin Galactic,Aerospace,Las Cruces,NM,USA"],
    "New York": ["JPMorgan Chase,Finance,New York City,NY,USA", "Verizon,Telecom,New York City,NY,USA", "IBM,Technology,Armonk,NY,USA"],
    "North Carolina": ["Bank of America,Finance,Charlotte,NC,USA", "Lowe's,Retail,Mooresville,NC,USA"],
    "North Dakota": ["MDU Resources,Utility,Bismarck,ND,USA", "Titan Machinery,Agriculture,West Fargo,ND,USA"],
    "Ohio": ["Procter & Gamble,Consumer Goods,Cincinnati,OH,USA", "Progressive,Insurance,Mayfield Village,OH,USA"],
    "Oklahoma": ["ONEOK,Energy,Tulsa,OK,USA", "Devon Energy,Energy,Oklahoma City,OK,USA"],
    "Oregon": ["Nike,Apparel,Beaverton,OR,USA", "Intel,Tech,Hillsboro,OR,USA"],
    "Rhode Island": ["CVS Health,Healthcare,Woonsocket,RI,USA", "Textron,Aerospace,Providence,RI,USA"],
    "South Carolina": ["Sonoco,Packaging,Hartsville,SC,USA", "Scana,Utility,Cayce,SC,USA"],
    "South Dakota": ["Black Hills Corp,Utility,Rapid City,SD,USA", "Daktronics,Manufacturing,Brookings,SD,USA"],
    "Tennessee": ["FedEx,Logistics,Memphis,TN,USA", "HCA Healthcare,Healthcare,Nashville,TN,USA"],
    "Texas": ["Tesla,Automotive,Austin,TX,USA", "ExxonMobil,Energy,Irving,TX,USA", "Oracle,Technology,Austin,TX,USA"],
    "Utah": ["Adobe,Tech,Lehi,UT,USA", "Zions Bancorp,Finance,Lake City,UT,USA"],
    "Vermont": ["National Life,Finance,Montpelier,VT,USA", "Casella Waste,Utility,Rutland,VT,USA"],
    "Virginia": ["General Dynamics,Aerospace,Reston,VA,USA", "Capital One,Finance,McLean,VA,USA"],
    "West Virginia": ["Viatris,Healthcare,Canonsburg,WV,USA", "WesBanco,Finance,Wheeling,WV,USA"],
    "Wisconsin": ["Northwestern Mutual,Finance,Milwaukee,WI,USA", "Kohler,Manufacturing,Kohler,WI,USA"],
    "Wyoming": ["Cloud Peak Energy,Energy,Gillette,WY,USA", "First Interstate Bancorp,Finance,Billings,WY,USA"],

    # --- SOUTH AMERICA (Location Type: Nation) ---
    "Brazil": ["Petrobras,Energy,Rio de Janeiro,RJ,Brazil", "Vale,Mining,Rio de Janeiro,RJ,Brazil", "Nubank,Finance,Sao Paulo,SP,Brazil"],
    "Argentina": ["Mercado Libre,E-commerce,Buenos Aires,BA,Argentina", "Globant,Tech,Buenos Aires,BA,Argentina", "YPF,Energy,Buenos Aires,BA,Argentina"],
    "Chile": ["Codelco,Mining,Santiago,RM,Chile", "Latam Airlines,Aviation,Santiago,RM,Chile", "Falabella,Retail,Santiago,RM,Chile"],
    "Colombia": ["Ecopetrol,Energy,Bogota,DC,Colombia", "Bancolombia,Finance,Medellin,ANT,Colombia"],

    # --- AFRICA (Location Type: Nation) ---
    "Nigeria": ["Dangote Cement,Manufacturing,Lagos,LA,Nigeria", "MTN Nigeria,Telecom,Lagos,LA,Nigeria"],
    "South Africa": ["Naspers,Media,Cape Town,WC,South Africa", "FirstRand,Finance,Johannesburg,GP,South Africa", "Sasol,Energy,Sandton,GP,South Africa"],
    "Egypt": ["Commercial International Bank,Finance,Cairo,C,Egypt", "Elsewedy Electric,Energy,Cairo,C,Egypt"],
    "Kenya": ["Safaricom,Telecom,Nairobi,NBO,Kenya", "Equity Group,Finance,Nairobi,NBO,Kenya"],

    # --- MIDDLE EAST (Location Type: Nation) ---
    "Saudi Arabia": ["Saudi Aramco,Energy,Dhahran,EP,Saudi Arabia", "Saudi National Bank,Finance,Riyadh,RD,Saudi Arabia"],
    "UAE": ["Etisalat,Telecom,Abu Dhabi,AZ,UAE", "First Abu Dhabi Bank,Finance,Abu Dhabi,AZ,UAE", "Emaar Properties,Real Estate,Dubai,DU,UAE"],
    "Qatar": ["Qatar Airways,Aviation,Doha,DA,Qatar", "QNB Group,Finance,Doha,DA,Qatar"],
    "Kuwait": ["Kuwait Finance House,Finance,Kuwait City,KU,Kuwait"]
}

# --- 2. ISO MAPPING ENGINE ---
iso_map = {
    "Brazil": "BRA", "Argentina": "ARG", "Chile": "CHL", "Colombia": "COL",
    "Nigeria": "NGA", "South Africa": "ZAF", "Egypt": "EGY", "Kenya": "KEN",
    "Saudi Arabia": "SAU", "UAE": "ARE", "Qatar": "QAT", "Kuwait": "KWT"
}

# --- 3. THE EXECUTION ENGINE ---
def execute_mass_rollout(batch_dict):
    print(f"📡 Found {len(batch_dict)} entities for processing...")
    
    for entity_name, entries in batch_dict.items():
        # Step A: Determine if it's a State (USA) or a Nation
        if entity_name in iso_map:
            loc_type = "Nation"
            iso_code = iso_map[entity_name]
        else:
            loc_type = "State"
            iso_code = "USA"

        # Step B: Sanitize filename
        safe_name = entity_name.lower().replace(' ', '_')
        file_name = f"{safe_name}_seed.csv"
        
        # Step C: Create temporary CSV
        with open(file_name, "w", encoding='utf-8') as f:
            f.write("name,category,city,state,country\n")
            f.write("\n".join(entries))
        
        # Step D: Deploy to Supabase via bulk_ingest engine
        upload_sovereign_allocation(file_name, loc_type, iso_code)

if __name__ == "__main__":
    print("🚀 Initiating KinYellow Global Rollout: USA + South America + Africa + Middle East")
    execute_mass_rollout(expansion_data)
    print("\n✅ Global Ingest Complete. KinYellow.com is officially live with Global South Anchors.")