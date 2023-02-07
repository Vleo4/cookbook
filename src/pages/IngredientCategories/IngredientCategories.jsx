import axios from "axios";
import React from "react";
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
                <CategoriesIngCard key={categoryIng.id} data={categoryIng} />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default IngredientCategories;
