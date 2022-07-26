import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => setPlants(plants));
  }, []);
  const addPlant = (newPlant) => {
    setPlants([...plants, newPlant])
  }
  const updatePlant = (updatedPlantObj) => {
    setPlants(plants.map(plant => {
      if (plant.id === updatedPlantObj.id) {
        return updatedPlantObj;
      }
      return plant;
    }))
  };
  const deletePlant = (id) => {
    setPlants(plants.filter(plant => plant.id !== id))
  }
  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={plants}
        addPlant={addPlant}
        updatePlant={updatePlant}
        deletePlant={deletePlant}
      />
    </div>
  );
}

export default App;
