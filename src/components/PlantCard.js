import React, {useState} from "react";

function PlantCard({
  id,
  name,
  price,
  image = "https://via.placeholder.com/400",
  updatePlant,
  deletePlant
}) {
  const [inStock, setInStock] = useState(true);
  const [newPrice, setNewPrice] = useState(0);

  const handleChange = (e) => {
    setNewPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ price: newPrice }),
    }).then(r => r.json())
      .then((updatedPlantObj) => {
        updatePlant(updatedPlantObj)});
        setNewPrice("")
  };
  const handleDeleteClick = () => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",  
    }).then(r => r.json())
      .then(() => deletePlant(id));
  }
  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button
        className={inStock ? "primary" : ""}
        onClick={() => setInStock((prev) => !prev)}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <input
          type="number"
          placeholder="New Price"
          value={newPrice}
          onChange={handleChange}
        />
        <input type="submit" placeholder="New Price" />
      </form>
      <button style={{ backgroundColor: "red" }} onClick={handleDeleteClick}>
        DELETE
      </button>
    </li>
  );
}

export default PlantCard;
