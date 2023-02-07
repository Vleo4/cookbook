import axios from "axios";
import React from "react";
import { ProfileCard, SubHeading } from "../../components";
import "./Profile.css";

const userURL = "https://cookbook.brainstormingapplication.com/api/user/";

const Profile = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    axios.get(userURL).then((response) => {
      setUser(response.data);
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
            <h2>Vitaliy@gmail.com</h2>
          </div>
          <div className="app__profile-meals">
            <h3>Ваші страви: </h3>
            <div className="app__profile-meals_cards">
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
