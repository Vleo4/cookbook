import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { SubHeading } from "../../components";
import CategoriesIngCard from "../../components/categoriesIngCard/CategoriesIngCard";
import "./IngredientCategories.css";

const ingCatURL =
  "https://cookbook.brainstormingapplication.com/api/ingridientcategorys/";

const IngredientCategories = () => {
  const [postIngCat, setPostIngCat] = React.useState(null);

  React.useEffect(() => {
    axios.get(ingCatURL).then((response) => {
      setPostIngCat(response.data);
      console.log(response);
    });
  }, []);

  return (
    <div className="app__ingredientCategories">
      <SubHeading title="Категорії інгредієнтів" />
      <div className="app__ingredientCategories-cards">
        {postIngCat && (
          <>
            {postIngCat.map((categoryIng) => {
              return (
                <Link
                  to={`/ingredients-categories/ingredient-category/${categoryIng.id}/${categoryIng.name}`}
                  key={categoryIng.id}
                >
                  <CategoriesIngCard data={categoryIng} />
                </Link>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default IngredientCategories;
