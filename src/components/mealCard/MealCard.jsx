import React from "react";
import "./MealCard.css";
import images from "../../constants/images";

const MealCard = ({ data }) => {
  const { name, ico } = data;

  return (
    <div className="app__mealCard">
      <img src={ico} alt="Example" />
      <p>{name}</p>
    </div>
  );
};

export default MealCard;
