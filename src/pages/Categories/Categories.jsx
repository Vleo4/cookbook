import React from "react";
import { CategoriesCard, SubHeading } from "../../components";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="app__categories">
      <SubHeading title="Категорії" />
      <div className="app__categories-cards">
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
      </div>
    </div>
  );
};

export default Categories;
