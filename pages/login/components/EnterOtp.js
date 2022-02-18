import React from "react";

import { Form, Card, Accordion, Container } from "react-bootstrap";


import logo from "../../../assets/images/spolto_logo_footer.svg";
import back_icon from "../../../assets/images/back_icon.svg";
import close_icon from "../../../assets/images/close_icon.svg";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Dialog,
} from "reactstrap";

import styles from "../css/login.module.css";
import Image from "next/image";

const EnterOtp = () => {
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

              <div className={styles.otp_form}>
                <Form>
                  <div className={styles.otp_sent_text}>
                    OTP sent to 90XXXXXXXX
                  </div>
                  <h2 className={styles.enter_otp_hd}>Enter OTP</h2>
                  <div className={styles.otp_circle}>
                    <input
                      type="text"
                      placeholder="1"
                      className={styles.input_opt}
                    />
                    <input
                      type="text"
                      placeholder="2"
                      className={styles.input_opt}
                    />
                    <input
                      type="text"
                      placeholder="3"
                      className={styles.input_opt}
                    />
                    <input
                      type="text"
                      placeholder="-"
                      className={styles.input_opt}
                    />
                  </div>
                  <div className={styles.otp_sent_second}>2:56</div>
                  <div className={styles.otp_receive_code}>
                    Didn't receive code? <a href="#.">Request again</a>
                  </div>
                  <a href="#." className={styles.get_call}>
                    Get via Call
                  </a>
                </Form>
              </div>
            </div>
          </div>
        </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default EnterOtp;
