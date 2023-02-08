import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubHeading } from "../../components";
import "./Login.css";


const Login = ({setIsAuth}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const logPost = async () => {
    console.log(username,password);
    await axios
      .post(
        "https://cookbook.brainstormingapplication.com/api/token/",
        { username, password },
      ).then(response =>{
        console.log(response);
        const token = response.data.access;
        setIsAuth(true);

        localStorage.setItem("token", token);

        navigate("/profile")
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="app__login">
      <SubHeading title={"Вхід"} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          logPost();
          setUsername("");
          setPassword("");
        }}
      >
        <p style={{ marginTop: "40px" }}>Ім’я користувача/Email:</p>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <p style={{ marginTop: "15px" }}>Пароль:</p>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="app__login-buttons">
          <button
            type="submit"
            className="app__login-buttons_button"
            style={{cursor:'pointer'}}
          >
            Вхід
          </button>

          <Link to="/signup" className="app__login-buttons_item">
            Не маєте аккаунту?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
