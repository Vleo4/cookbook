import React from "react";
import { MealCard, SubHeading } from "../../components";
import "./SearchMeal.css";
import images from "../../constants/images";
import axios from "axios";
import { Link } from "react-router-dom";

const getIngredURL =
  "https://cookbook.brainstormingapplication.com/api/ingridientlist/";

const SearchMeal = () => {
  const [ingreds, setIngreds] = React.useState([]);
  const [meals, setMeals] = React.useState([]);

  React.useEffect(() => {
    axios.get(getIngredURL).then((response) => {
      setIngreds(response.data);
      console.log(response);
    });
  }, []);

  const logPost = async () => {
    const selectedIngredientsIds = selectedIngredients.map(
      (ingred) => ingred.id
    );
    console.log(selectedIngredientsIds);
    axios
      .post("https://cookbook.brainstormingapplication.com/api/craft/", {
        ingredients: selectedIngredientsIds,
      })
      .then((response) => {
        setMeals(response.data);
      });
  };

  const [selectedIngredients, setSelectedIngredients] = React.useState([]);

  const handleSelectIngredient = (ingreds) => {
    setSelectedIngredients([
      ...selectedIngredients,
      { id: ingreds.id, name: ingreds.name },
    ]);
  };

  const handleRemoveIngredient = (index) => {
    setSelectedIngredients(
      selectedIngredients.filter((ingreds, i) => i !== index)
    );
  };

  return (
    <div className="app__searchMeal">
      <SubHeading title="Пошук страви за наявними інгрідієнтами" />
      <p style={{ marginTop: "20px", marginBottom: "10px" }}>Інгредієнти</p>
      <div className="app__searchMeal-selectedIngredients">
        {selectedIngredients.map((ingreds, index) => (
          <div className="app__searchMeal-selectedIngredient">
            {ingreds.name}
            <img
              src={images.XIcon}
              alt="XIcon"
              onClick={() => handleRemoveIngredient(index)}
            />
          </div>
        ))}
      </div>
      <div className="app__searchMeal-dropdown">
        <button className="app__searchMeal-dropdown_dropbtn">
          <p>Додати інгредієнт</p>
          <img src={images.DropDownIcon} alt="DropDownIcon" />
        </button>
        <div className="app__searchMeal-dropdown-content">
          {ingreds && (
            <>
              {ingreds.map((ingredient) => {
                return (
                  <p onClick={() => handleSelectIngredient(ingredient)}>
                    {ingredient.name}
                  </p>
                );
              })}
            </>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="app__searchMeal-button"
        onClick={logPost}
      >
        Пошук
      </button>
      <div className="app__meals-cards" style={{ marginTop: "-300px" }}>
        {meals && (
          <>
            {meals.map((meal) => {
              return (
                <Link to={`/meals/meal/${meal.id}`} key={meal.id}>
                  <MealCard data={meal}></MealCard>
                </Link>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchMeal;
