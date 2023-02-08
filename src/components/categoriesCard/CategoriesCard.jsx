import React from "react";
import images from "../../constants/images";
import "./CategoriesCard.css";

const CategoriesCard = ({data}) => {
  const {name} = data;
  return (
    <div className="app__categoriesCard">
      <div className="app__categoriesCard-image">
      <p>{name}</p>
      </div>
    </div>
  );
};

export default CategoriesCard;
