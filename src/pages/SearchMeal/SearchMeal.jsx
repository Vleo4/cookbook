import React from "react";
import { SubHeading } from "../../components";
import "./SearchMeal.css";
import images from "../../constants/images";

const SearchMeal = () => {
    const [selectedIngredients, setSelectedIngredients] = React.useState([]);

    const handleSelectIngredient = ingredient => {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    };

    const handleRemoveIngredient = index => {
        setSelectedIngredients(selectedIngredients.filter((ingredient, i) => i !== index));
      };
  return (
    <div className="app__searchMeal">
      <SubHeading title="Пошук страви за наявними інгрідієнтами" />
      <p style={{ marginTop: "20px", marginBottom: "10px" }}>Інгредієнти</p>
      <div className="app__searchMeal-selectedIngredients">
        {selectedIngredients.map((ingredient,index) => (
          <div className="app__searchMeal-selectedIngredient">
            {ingredient}
            <img src={images.XIcon} alt="XIcon" onClick={() => handleRemoveIngredient(index)}/>
          </div>
        ))}
      </div>
      <div class="app__searchMeal-dropdown">
        <button class="app__searchMeal-dropdown_dropbtn">
          <p>Додати інгредієнт</p><img src={images.DropDownIcon} alt="DropDownIcon" />
        </button>
        <div class="app__searchMeal-dropdown-content">
          <p onClick={() => handleSelectIngredient("Томати")}>Томати</p>
          <p onClick={() => handleSelectIngredient("Томати")}>Томати</p>
          <p onClick={() => handleSelectIngredient("Томати")}>Томати</p>
          <p onClick={() => handleSelectIngredient("Томати")}>Томати</p>
          <p onClick={() => handleSelectIngredient("Томати")}>Томати</p>
          <p onClick={() => handleSelectIngredient("Томати")}>Томати</p>
          <p onClick={() => handleSelectIngredient("Томати")}>Томати</p>
          <p onClick={() => handleSelectIngredient("Томати")}>Томати</p>
          <p onClick={() => handleSelectIngredient("Томати")}>Томати</p>
          <p onClick={() => handleSelectIngredient("Томати")}>Томати</p>
        </div>
      </div>
      <button className="app__searchMeal-button">Пошук</button>
    </div>
  );
};

export default SearchMeal;
