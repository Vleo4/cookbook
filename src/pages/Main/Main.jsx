import React from "react";
import "./Main.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="app__main">
      
      <span></span>
      <h1>Смачні ідеї на кожен день:</h1>
      <div className="app__main-content">
        <div className="app__main-content_text">
          <h1>Рецепти для домашньої кухні</h1>
          <p>Новинка!</p>
          <div className="app__main-content_text-links_item-arrow">
            <Link
              to="/add-recipe"
              className="app__main-content_text-links_item-arrow_text"
            >
              Додати рецепт
            </Link>
            <img src={images.ArrowRight} alt="ArrowRight" />
          </div>
          <p>Новинка!</p>
          <div className="app__main-content_text-links_item-arrow">
            <Link
              to="/create-recipe"
              className="app__main-content_text-links_item-arrow_text"
            >
              Переглянути страви
            </Link>
            <img src={images.ArrowRight} alt="ArrowRight" />
          </div>
        </div>
        <div className="app__content-img">
          <img src={images.MainPhoto} alt="MainPhoto" />
        </div>
      </div>
    </div>
  );
};

export default Main;
