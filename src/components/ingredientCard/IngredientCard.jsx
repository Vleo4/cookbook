import React from "react";
import images from "../../constants/images";
import "./IngredientCard.css";

const IngredientCard = ({ data }) => {
  const { name, ico } = data;

  return (
    <div className="app__ingredientCard">
      <img src={images.Example} alt="Example" />
      <p>{name}</p>
    </div>
  );
};

export default IngredientCard;
