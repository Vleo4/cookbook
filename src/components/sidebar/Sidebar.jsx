import React from "react";
import "./Sidebar.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className="app__sidebar">
      <div className="app__sidebar-content">
        <img src={images.Logo} alt="Logo" />
        <p className="app__sidebar-content_logo">Книга рецептів</p>
        <div className="app__sidebar-content_links">
          <Link to="/" className="app__sidebar-content_links-item">
            Головна
          </Link>
          <Link to="/profile" className="app__sidebar-content_links-item">
            Профіль
          </Link>
          <span></span>
          <Link to="/meals" className="app__sidebar-content_links-item">
            Усі страви
          </Link>
          <Link
            to="/meal-categories"
            className="app__sidebar-content_links-item"
          >
            Категорії страв
          </Link>
          <Link to="/random-meal" className="app__sidebar-content_links-item">
            Випадкова страва
          </Link>
          <Link to="/add-recipe" className="app__sidebar-content_links-item">
            Додати рецепт
          </Link>
          <span></span>
          <Link
            to="/all-ingredients"
            className="app__sidebar-content_links-item"
          >
            Усі інгредієнти
          </Link>
          <Link
            to="/ingredients-categories"
            className="app__sidebar-content_links-item"
          >
            Категорії інгредієнтів
          </Link>
          <span></span>
          <Link
            to="/search-ingredients"
            className="app__sidebar-content_links-item"
          >
            Пошук за наявними інгредієнтами
          </Link>
        </div>
        <img src={images.Pan} alt="Pan" />
        <p>
          © COOK BOOK, 2023
          <br />
          Усі права дотримано.
        </p>
      </div>
      <div className="app__sidebar-smallscreen">
        <GiHamburgerMenu
          className="overlay__open"
          style={{
            cursor: "pointer",
          }}
          color="#ffc700"
          fontSize={32}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__sidebar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <div className="app__sidebar-content_links">
              <Link to="/" className="app__sidebar-content_links-item">
                Головна
              </Link>
              <Link to="/profile" className="app__sidebar-content_links-item">
                Профіль
              </Link>
              <span></span>
              <Link to="/meals" className="app__sidebar-content_links-item">
                Усі страви
              </Link>
              <Link
                to="/meal-categories"
                className="app__sidebar-content_links-item"
              >
                Категорії страв
              </Link>
              <Link
                to="/random-meal"
                className="app__sidebar-content_links-item"
              >
                Випадкова страва
              </Link>
              <Link
                to="/add-recipe"
                className="app__sidebar-content_links-item"
              >
                Додати рецепт
              </Link>
              <span></span>
              <Link
                to="/all-ingredients"
                className="app__sidebar-content_links-item"
              >
                Усі інгредієнти
              </Link>
              <Link
                to="/ingredients-categories"
                className="app__sidebar-content_links-item"
              >
                Категорії інгредієнтів
              </Link>
              <span></span>
              <Link
                to="/search-ingredients"
                className="app__sidebar-content_links-item"
              >
                Пошук за наявними інгредієнтами
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
