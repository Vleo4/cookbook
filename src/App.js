import React from "react";
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

const App = () => {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/meals" exact element={<Meals />} />
          <Route path="/meal-categories" exact element={<Categories />} />
          <Route path="/add-recipe" exact element={<CreateMeal />} />
          <Route path="/search-ingredients" exact element={<SearchMeal />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
