import React from "react";
import "./Meals.css";
import { MealCard, SubHeading } from "../../components";
import images from "../../constants/images";

const Meals = () => {
  return (
    <div className="app__meals">
      <div className="app__meals-sub">
        <SubHeading title="Усі страви" />
        <button>
          Фільтр <img src={images.Filter} alt="Filter" />
        </button>
      </div>
      <div className="app__meals-cards">
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
      </div>
    </div>
  );
};

export default Meals;
