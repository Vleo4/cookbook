import React from "react";
import images from "../../../constants/images";
import "./ICPCard.css";

const ICPCard = ({ data }) => {
  const { name } = data;

  return (
    <div className="app__ICPCard">
      <img src={images.Example} alt="Example" />
      <p>{name}</p>
    </div>
  );
};

export default ICPCard;
