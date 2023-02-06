import React from "react";
import { Link } from "react-router-dom";
import { SubHeading } from "../../components";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="app__signup">
      <SubHeading title="Реєстрація" />
      <p style={{ marginTop: "40px" }}>Ім’я користувача</p>
      <form>
        <input type="text" />
      </form>
      <p style={{ marginTop: "15px" }}>Email</p>
      <form>
        <input type="email" />
      </form>
      <p style={{ marginTop: "15px" }}>Пароль:</p>
      <form>
        <input type="password" />
      </form>
      <p style={{ marginTop: "15px" }}>Повторіть пароль:</p>
      <form>
        <input type="password" />
      </form>
      <div className="app__signup-buttons">
        <Link to="/profile" className="app__signup-buttons_button">
          Реєстрація
        </Link>
        <Link to="/login" className="app__signup-buttons_item">
          Вже маєте аккаунт?
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
