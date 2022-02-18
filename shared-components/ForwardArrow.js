import React from "react";
import Image from "next/image";
import { Button } from "reactstrap";
import styles from "../pages/homepage/css/LandingPage.module.css";
import arrowImg from "../assets/images/Icon.svg";

const ForwardArrow = ({ handleStartSection, data, currentStep }) => {
  return (
    <Button
      className={styles.right_arrow}
      disabled={data.length > 0 || currentStep == 0 ? false : true}
      onClick={handleStartSection}
    >
      <Image src={arrowImg} alt="arrow" />
    </Button>
  );
};

export default ForwardArrow;
