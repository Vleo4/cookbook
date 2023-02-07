import React from "react";
import images from "../../constants/images";
import "./CategoriesCard.css";

const CategoriesCard = ({data}) => {
  const {name} = data;
  return (
    <div className="app__categoriesCard">
      <img src={images.Example} alt="Example"/>
      <p>{name}</p>
    </div>
  );
};

export default CategoriesCard;
