import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SubHeading } from "../../components";
import "./Login.css";
import Cookies from 'js-cookie';

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const logPost = async () => {
    await axios.post(
      "https://cookbook.brainstormingapplication.com/api/auth/login/",
      JSON.stringify({ login, password }),
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          'X-CSRFToken': Cookies.get('csrftoken'),
          'Accept': '*/*',
        },
      }
    );
    
  };

  return (
    <div className="app__login">
      <SubHeading title={"Вхід"} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          logPost();
          setLogin("");
          setPassword("");
        }}
      >
        <p style={{ marginTop: "40px" }}>Ім’я користувача/Email:</p>
        <input
          type="text"
          value={login}
          onChange={(e) => {
            setLogin(e.target.value);
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
          <Link to="/profile" className="app__login-buttons_button">
            Вхід
          </Link>

          <Link to="/signup" className="app__login-buttons_item">
            Не маєте аккаунту?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
