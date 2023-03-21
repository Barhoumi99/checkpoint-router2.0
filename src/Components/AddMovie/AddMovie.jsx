import React, { useState } from "react";
import { v4 as uuid } from "uuid";
const AddMovie = ({addNewMovie}) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    poster: "",
    story: "",
    rating: 0
  });
  const handleChange = (event) => {
    setNewMovie({ ...newMovie, [event.target.name]: event.target.value });
  };
  const handleAdd = () => {
    addNewMovie({...newMovie, id: uuid()})
  }

  return (
    <div className="add-movie">
      <form>
        <label htmlFor="title">
          Title: <input 
            type="text" 
            id="title" 
            required 
            name="title" 
            onChange={handleChange}
          />
        </label>
        <label htmlFor="poster">
          Poster URL: <input 
            type="text" 
            id="poster" 
            required 
            name="poster" 
            onChange={handleChange}
          />
        </label>
        <label htmlFor="story">
          Summary: <input 
            type="text" 
            id="story" 
            name="story" 
            onChange={handleChange}
          />
        </label>
        <label htmlFor="rating">
          Rating: <input 
            id="rating"
            type="number" 
            name="rating" 
            onChange={handleChange}
            step={0.1}
            min={0.1}
            max={10}
          />
        </label>
        <button onClick={handleAdd}>Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;