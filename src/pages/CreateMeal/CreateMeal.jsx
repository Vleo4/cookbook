import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubHeading } from "../../components";
import images from "../../constants/images";
import "./CreateMeal.css";

const getIngredURL =
  "https://cookbook.brainstormingapplication.com/api/ingridientlist/";

const getCategoryURL =
  "https://cookbook.brainstormingapplication.com/api/categorys/";

const getUserURL = "https://cookbook.brainstormingapplication.com/api/user/";

const CreateMeal = ({ isAuth }) => {
  const [category, setCategory] = useState(5);
  const [difficulty, setDifficulty] = useState(1);
  const [name, setName] = useState("");
  const [description, setDecsription] = useState("");
  const [recipe, setRecipe] = useState("");
  const [user, setUser] = useState(null);

  const [headerText, setHeaderText] = useState("");

  React.useEffect(() => {
    axios
      .get(getUserURL, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUser(response.data);
        console.log(response);
      });
  }, []);

  const logPost = async () => {
    const selectedIngredientsIds = selectedIngredients.map(
      (ingred) => ingred.id
    );
    const token = jwtDecode(localStorage.getItem("token"));
    console.log(token);
    console.log(category);
    console.log(difficulty);
    console.log(user[0].id);
    console.log(name);
    console.log(description);
    console.log(recipe);
    console.log(selectedIngredientsIds);
    await axios
      .post(
        "https://cookbook.brainstormingapplication.com/api/mealcreate/",
        {
          category: category,
          difficulty: difficulty,
          user: user[0].id,
          name: name,
          description: description,
          recipe: recipe,
          is_published: true,
          ico: "https://cdn.pixabay.com/photo/2016/08/04/09/05/coming-soon-1568623_960_720.jpg",
          ingridients: selectedIngredientsIds,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setHeaderText("Рецепт успішно створено!");
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const [ingreds, setIngreds] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  const navigate = useNavigate();
  React.useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  React.useEffect(() => {
    axios.get(getIngredURL).then((response) => {
      setIngreds(response.data);
      console.log(response);
    });
  }, []);

  React.useEffect(() => {
    axios.get(getCategoryURL).then((response) => {
      setCategories(response.data);
      console.log(response);
    });
  }, []);

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
    <div className="app__createMeal">
      <SubHeading title="Створити страву" />
      <div className="app__createMeal_loadPhoto">
        <p>Скоро буде</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          logPost();
          setCategory("");
          setDifficulty("");
          setName("");
          setDecsription("");
          setRecipe("");
          setSelectedIngredients([]);
        }}
      >
        <p style={{ marginTop: "20px" }}>Назва страви</p>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <p style={{ marginTop: "20px" }}>Опис</p>
        <textarea
          cols="30"
          rows="10"
          type="text"
          value={description}
          onChange={(e) => {
            setDecsription(e.target.value);
          }}
        ></textarea>
        <p style={{ marginTop: "20px" }}>Рецепт</p>
        <textarea
          cols="30"
          rows="10"
          type="text"
          value={recipe}
          onChange={(e) => {
            setRecipe(e.target.value);
          }}
        ></textarea>
        {/* -------------- */}
        <p style={{ marginTop: "20px" }}>Важкість приготування</p>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value={1}>Легко</option>
          <option value={2}>Середньо</option>
          <option value={3}>Важко</option>
        </select>
        {/* -------------- */}
        <p style={{ marginTop: "40px" }}>Категорія</p>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((category) => (
            <option value={category.id}>{category.name}</option>
          ))}
        </select>
        {/* -------------- */}
        <p style={{ marginTop: "20px" }}>Інгредієнти</p>
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
        <div className="app__createMeal-dropdown">
          <button type="button" className="app__createMeal-dropdown_dropbtn">
            <p>Додати інгредієнт</p>
            <img src={images.DropDownIcon} alt="DropDownIcon" />
          </button>
          <div className="app__createMeal-dropdown-content">
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
        <button type="submit" className="app__createMeal-submit">
          Створити рецепт
        </button>
        <SubHeading title={headerText} />
      </form>
      
    </div>
  );
};

export default CreateMeal;
