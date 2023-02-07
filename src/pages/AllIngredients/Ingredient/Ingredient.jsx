import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { SubHeading } from "../../../components";
import images from "../../../constants/images";
import "./Ingredient.css";

const ingBaseURL =
  "https://cookbook.brainstormingapplication.com/api/ingridient";

const Ingredient = () => {
  const [ingredient, setIngredient] = React.useState(null);

  const { id } = useParams();

  React.useEffect(() => {
    axios.get(ingBaseURL + "/" + id + "/").then((response) => {
      setIngredient(response.data);
      console.log(response);
    });
  }, []);

  return (
    <div className="app__ingredient">
      {ingredient && (
        <>
          <SubHeading title={ingredient.name} />
          <img
            src={images.Example}
            alt="Example"
            style={{ marginTop: "20px" }}
          />
          <h3>Категорія:</h3>
          <p>{ingredient.category}</p>
        </>
      )}
    </div>
  );
};

export default Ingredient;
