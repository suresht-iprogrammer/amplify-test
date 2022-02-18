import React from "react";

import { Form, Card, Accordion, Container } from "react-bootstrap";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Dialog,
} from "reactstrap";

import logo from "../../../assets/images/spolto_logo_footer.svg";
import back_icon from "../../../assets/images/back_icon.svg";
import close_icon from "../../../assets/images/close_icon.svg";

import styles from "../css/login.module.css";
import Image from "next/image";
  
const LoginPopup = () => {
  return (
    <>
      <Modal className="login_wrapper" isOpen={true} centered={true}>
        <ModalBody className={styles.login_modal_body}>
          <div className={styles.login_wrapper_overly}>
            <div className={styles.login_popup}>
              <div className={styles.login_popup_cnt}>
                <div className={styles.back_close_icon}>
                  <a href="#." className={styles.back_icon}>
                    <Image src={back_icon} alt="" />
                  </a>
                  <a href="#." className={styles.close_icon}>
                    <Image src={close_icon} alt="" />
                  </a>
                </div>

                <div className={styles.login_logo}>
                  <Image src={logo} alt="" />
                </div>

                <div className={styles.login_form}>
                  <Form>
                    <div className={styles.login_form_row}>
                      <input
                        type="text"
                        placeholder="Type your name"
                        className={styles.input_all}
                      />
                    </div>
                    <div className={styles.login_form_row}>
                      <input
                        type="text"
                        placeholder="Type phone number"
                        className={`${styles.input_all} ${styles.left_space_phone}`}
                      />
                      <div className={styles.phone_extension}>+91</div>
                    </div>
                    <Button disabled className={styles.btn_get_otp}>
                      Get OTP
                    </Button>
                  </Form>
                </div>

                <div className={styles.account_already}>
                  <p>Already have an account?</p>
                  <a href="#." className={styles.anch_login}>
                    Login
                  </a>
                </div>
                <p className={styles.accepting_p}>
                  If you continue, you are accepting
                </p>
                <a href="#." className={styles.accepting_p_terms}>
                  Spolto Terms and Conditions and Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>

      {/* <div className={styles.login_wrapper}>
        <div className={styles.login_wrapper_overly}>
          <div className={styles.login_popup}>
            <div className={styles.login_popup_cnt}>
              <div className={styles.back_close_icon}>
                <a href="#." className={styles.back_icon}>
                  <Image src={back_icon} alt="" />
                </a>
                <a href="#." className={styles.close_icon}>
                  <Image src={close_icon} alt="" />
                </a>
              </div>

              <div className={styles.login_logo}>
                <Image src={logo} alt="" />
              </div>

              <div className={styles.login_form}>
                <Form>
                  <div className={styles.login_form_row}>
                    <input
                      type="text"
                      placeholder="Type your name"
                      className={styles.input_all}
                    />
                  </div>
                  <div className={styles.login_form_row}>
                    <input
                      type="text"
                      placeholder="Type phone number"
                        className={`${styles.input_all} ${styles.left_space_phone}`}
                      
                    />
                    <div className={styles.phone_extension}>+91</div>
                  </div>
                  <Button disabled className={styles.btn_get_otp}>Get OTP</Button>
                </Form>
              </div>

              <div className={styles.account_already}>
                <p>Already have an account?</p>
                <a href="#." className={styles.anch_login}>
                  Login
                </a>
              </div>
              <p className={styles.accepting_p}>
                If you continue, you are accepting
              </p>
              <a href="#." className={styles.accepting_p_terms}>
                Spolto Terms and Conditions and Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default LoginPopup;
