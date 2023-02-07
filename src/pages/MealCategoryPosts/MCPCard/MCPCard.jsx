import React from "react";
import images from "../../../constants/images";
import "./MCPCard.css";

const MCPCard = ({ data }) => {
  const { name, ico } = data;

  return (
    <div className="app__MCPCard">
      <img src={ico} alt="Example" />
      <p>{name}</p>
    </div>
  );
};

export default MCPCard;
