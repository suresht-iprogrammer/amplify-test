import React from "react";
//import { Container, Row, Col } from "react-bootstrap";

import LoginPopup from './LoginPopup';
import EnterOtp from './EnterOtp';
import styles from "../css/login.module.css";


const Login = () => {
  return (
    <>
      <div className={styles.login_page}>
        <LoginPopup />
        {/* <EnterOtp /> */}
      </div>
    </>
  );
};

export default Login;
