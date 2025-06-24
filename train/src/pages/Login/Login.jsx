import React from "react";
import styles from "./Login.module.css";
import LoginContainer from "../../Components/LoginContainer/LoginContainer";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <LoginContainer />
    </div>
  );
};

export default Login;
