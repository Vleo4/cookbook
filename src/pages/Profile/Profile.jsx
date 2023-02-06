import React from "react";
import { ProfileCard, SubHeading } from "../../components";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="app__profile">
      <SubHeading title="Профіль" />
      <div className="app__profile-name">
        <h3>Ім'я користувача: </h3>
        <h2>Vitaliy</h2>
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
    </div>
  );
};

export default Profile;
