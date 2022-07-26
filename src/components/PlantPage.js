import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, addPlant, updatePlant, deletePlant }) {
  const [searchText, setSearchText] = useState("");

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search searchText={searchText} setSearchText={setSearchText} />
      <PlantList
        plants={filteredPlants}
        updatePlant={updatePlant}
        deletePlant={deletePlant}
      />
    </main>
  );
}

export default PlantPage;
