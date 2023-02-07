import axios from "axios";
import React from "react";
import { SubHeading } from "../../components";
import "./RandomMeal.css";

const randomMealURL =
  "https://cookbook.brainstormingapplication.com/api/randommeal/";

const ingURL =
  "https://cookbook.brainstormingapplication.com/api/ingridientlist/";

const RandomMeal = () => {
  const [randomMeal, setRandomMeal] = React.useState(null);
  const [ingredientItems, setIngredientItems] = React.useState([]);

  React.useEffect(() => {
    axios.get(randomMealURL).then((response) => {
      setRandomMeal(response.data[0]);
      console.log(response);
    });
  }, []);

  React.useEffect(() => {
    axios.get(ingURL).then((response) => {
      setIngredientItems(response.data);
      console.log(response);
    });
  }, []);

  return (
    <div className="app__randomMeal">
      {randomMeal && (
        <>
          <SubHeading title={randomMeal.name} />
          <img
            src={randomMeal.ico}
            alt="Example"
            style={{ marginTop: "20px" }}
          />
          <h3>Опис: </h3>
          <p>{randomMeal.description}</p>
          <h3>Рецепт: </h3>
          <p>{randomMeal.recipe}</p>
          <h3>Категорія: </h3>
          <p>{randomMeal.category}</p>
          <h3>Важкість приготування: </h3>
          <p>{randomMeal.difficulty}</p>
          <h3>Інгредієнти: </h3>
          
        </>
      )}
    </div>
  );
};

export default RandomMeal;
