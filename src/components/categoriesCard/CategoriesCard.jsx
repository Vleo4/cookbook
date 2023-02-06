import React from "react";
import images from "../../constants/images";
import "./CategoriesCard.css";

const CategoriesCard = () => {
  return (
    <div className="app__categoriesCard">
      <img src={images.Example} alt="Example"/>
      <p>Яловичина</p>
    </div>
  );
};

export default CategoriesCard;
