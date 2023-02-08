import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProfileCard, SubHeading } from "../../components";
import "./Profile.css";

const userURL = "https://cookbook.brainstormingapplication.com/api/user/";

const useMealURL =
  "https://cookbook.brainstormingapplication.com/api/mealbyuser/";

const Profile = ({ isAuth }) => {
  const [user, setUser] = React.useState(null);
  const [userMeal, setUserMeal] = React.useState([]);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  React.useEffect(() => {
    axios
      .get(userURL, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUser(response.data[0]);
        console.log(response);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(useMealURL, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUserMeal(response.data);
        console.log(response);
      });
  }, []);

  return (
    <div className="app__profile">
      <SubHeading title="Профіль" />
      {user && (
        <>
          <div className="app__profile-name">
            <h3>Ім'я користувача: </h3>
            <h2>{user.username}</h2>
          </div>
          <div className="app__profile-email">
            <h3>Email: </h3>
            <h2>{user.email}</h2>
          </div>
          <div className="app__profile-meals">
            <h3>Ваші страви: </h3>
            <div className="app__profile-meals_cards">
              {userMeal && (
                <>
                  {userMeal.map((meal) => {
                    return (
                      <Link to={`/meals/meal/${meal.id}`} key={meal.id}>
                        <ProfileCard data={meal} />
                      </Link>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
