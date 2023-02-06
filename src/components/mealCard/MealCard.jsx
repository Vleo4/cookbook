import React from "react";
import "./MealCard.css";
import images from "../../constants/images";

const MealCard = () => {
  return (
    <div className="app__mealCard">
      <img src={images.Example} alt="Example" />
      <p>Рагу</p>
    </div>
  );
};

export default MealCard;
