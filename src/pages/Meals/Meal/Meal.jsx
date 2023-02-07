import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { SubHeading } from "../../../components";
import "./Meal.css";

const baseURL = "https://cookbook.brainstormingapplication.com/api/meal";

const ingURL =
  "https://cookbook.brainstormingapplication.com/api/ingridientlist/";

const Meal = () => {
  const [post, setPost] = React.useState(null);
  const [ingredientItems, setIngredientItems] = React.useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    axios.get(baseURL + "/" + id + "/").then((response) => {
      setPost(response.data);
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
    <div className="app__meal">
      {post && (
        <>
          <SubHeading title={post.name} />;
          <img src={post.ico} alt="Example" style={{ marginTop: "20px" }} />
          <h3>Опис: </h3>
          <p>{post.description}</p>
          <h3>Рецепт: </h3>
          <p>{post.recipe}</p>
          <h3>Категорія: </h3>
          <p>{post.category}</p>
          <h3>Важкість приготування: </h3>
          <p>{post.difficulty}</p>
          <h3>Інгредієнти: </h3>
          <ul>
            {post.ingridients.map((ingridient) => {
              let valIngredient = ingredientItems.find((elIngredient) => {
                return elIngredient.id === ingridient;
              });

              if (valIngredient) {
                return <li>{valIngredient.name}</li>;
              }
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Meal;
