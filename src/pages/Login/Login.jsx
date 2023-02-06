import React from "react";
import { Link } from "react-router-dom";
import { SubHeading } from "../../components";
import "./Login.css";

const Login = () => {
  return (
    <div className="app__login">
      <SubHeading title="Вхід" />
      <p style={{ marginTop: "40px" }}>Ім’я користувача/Email:</p>
      <form>
        <input type="text" />
      </form>
      <p style={{ marginTop: "15px" }}>Пароль:</p>
      <form>
        <input type="password" />
      </form>
      <div className="app__login-buttons">
        <Link to="/profile" className="app__login-buttons_button">
          Вхід
        </Link>
        <Link to="/signup" className="app__login-buttons_item">
          Не маєте аккаунту?
        </Link>
      </div>
    </div>
  );
};

export default Login;
