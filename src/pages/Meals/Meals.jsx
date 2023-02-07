import React from "react";
import "./Meals.css";
import { MealCard, SubHeading } from "../../components";
import images from "../../constants/images";
import axios from "axios";
import { Link } from "react-router-dom";

const baseURL = "https://cookbook.brainstormingapplication.com/api/meallist/";

const highURL =
  "https://cookbook.brainstormingapplication.com/api/sortmealsbyhigh/";

const lowURL =
  "https://cookbook.brainstormingapplication.com/api/sortmealsbylow/";

const Meals = () => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response);
    });
  }, []);

  async function sortByHigh() {
    await axios.get(highURL).then((response) => {
      setPost(response.data);
      console.log(response);
    });
  }

  async function sortByLow() {
    await axios.get(lowURL).then((response) => {
      setPost(response.data);
      console.log(response);
    });
  }

  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="app__meals">
      <div className="app__meals-sub">
        <SubHeading title="Усі страви" />
        <div className="dropdown-container">
          <button onClick={handleDropdown}>
            Фільтр <img src={images.Filter} alt="Filter" />
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={sortByHigh}>
                Від високої до низької складності
              </div>
              <div className="dropdown-item" onClick={sortByLow}>
                Від низької до високої складності
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="app__meals-cards">
        {post && (
          <>
            {post.map((meal) => {
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

export default Meals;
