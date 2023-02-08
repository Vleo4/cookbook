import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SubHeading } from "../../components";
import "./SignUp.css";

const SignUp = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const logPost = async () => {
    await axios.post(
      "https://cookbook.brainstormingapplication.com/api/auth/register/",
      JSON.stringify({ login, password, username }),
      {
       
      }
    ).then(res => res.data).then(res => {
      console.log(res);
    })
  
  };

  return (
    <div className="app__signup">
      <SubHeading title="Реєстрація" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          logPost();
          setLogin("");
          setPassword("");
          setUsername("");
        }}
      >
        <p style={{ marginTop: "40px" }}>Ім’я користувача</p>

        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <p style={{ marginTop: "15px" }}>Email</p>

        <input
          type="email"
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

        <div className="app__signup-buttons">
          <button type="submit" className="app__signup-buttons_button" style={{cursor:'pointer'}}>
            Реєстрація
          </button>
          <Link to="/login" className="app__signup-buttons_item">
            Вже маєте аккаунт?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
