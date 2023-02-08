import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Sidebar } from "./components";
import { Main } from "./pages";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/SignUp";
import Meals from "./pages/Meals/Meals";
import Categories from "./pages/Categories/Categories";
import CreateMeal from "./pages/CreateMeal/CreateMeal";
import SearchMeal from "./pages/SearchMeal/SearchMeal";
import Meal from "./pages/Meals/Meal/Meal";
import RandomMeal from "./pages/RandomMeal/RandomMeal";
import AllIngredients from "./pages/AllIngredients/AllIngredients";
import Ingredient from "./pages/AllIngredients/Ingredient/Ingredient";
import IngredientCategories from "./pages/IngredientCategories/IngredientCategories";
import MCP from "./pages/MealCategoryPosts/MCP";
import ICP from "./pages/IngCategoryPosts/ICP";

const App = () => {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("token") ? true : false
  );
  return (
    <div className="App">
      <Router>
        <Sidebar setIsAuth={setIsAuth} />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/profile" exact element={<Profile isAuth={isAuth} />} />
          <Route
            path="/login"
            exact
            element={<Login setIsAuth={setIsAuth} />}
          />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/meals" exact element={<Meals />} />
          <Route path="/meal-categories" exact element={<Categories />} />
          <Route path="/add-recipe" exact element={<CreateMeal isAuth={isAuth}/>} />
          <Route path="/search-ingredients" exact element={<SearchMeal />} />
          <Route path="/meals/meal/:id" exact element={<Meal />} />
          <Route path="/random-meal" exact element={<RandomMeal />} />
          <Route path="/all-ingredients" exact element={<AllIngredients />} />
          <Route
            path="/all-ingredients/ingredient/:id"
            exact
            element={<Ingredient />}
          />
          <Route
            path="/ingredients-categories"
            exact
            element={<IngredientCategories />}
          />
          <Route
            path="/meal-categories/meal-category/:id/:category"
            exact
            element={<MCP />}
          />
          <Route
            path="/ingredients-categories/ingredient-category/:id/:category"
            exact
            element={<ICP />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
