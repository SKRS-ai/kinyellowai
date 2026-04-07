import pandas as pd
import subprocess
import os

# Data for a subset of the remaining states to start the batch
states_data = {
    "Pennsylvania": ["Comcast,Telecom,Philadelphia,PA,USA", "Vanguard,Finance,Malvern,PA,USA"],
    "Florida": ["Disney World,Leisure,Orlando,FL,USA", "NextEra Energy,Energy,Juno Beach,FL,USA"],
    "Washington": ["Microsoft,Tech,Redmond,WA,USA", "Amazon,E-commerce,Seattle,WA,USA"],
    "Massachusetts": ["Moderna,Biotech,Cambridge,MA,USA", "Fidelity,Finance,Boston,MA,USA"],
    "Illinois": ["Boeing,Aerospace,Chicago,IL,USA", "Abbott Labs,Healthcare,Abbott Park,IL,USA"]
}

def auto_ingest_states(data_map):
    for state, companies in data_map.items():
        file_name = f"{state.lower().replace(' ', '_')}_seed.csv"
        header = "name,category,city,state,country\n"
        
        # Create the file
        with open(file_name, "w") as f:
            f.write(header + "\n".join(companies))
        
        print(f"📂 Created {file_name}")

if __name__ == "__main__":
    auto_ingest_states(states_data)
    print("\n🚀 Batch generation complete. Ready for bulk_ingest.py integration.")