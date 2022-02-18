import React from "react";
import { connect } from "react-redux";
import { Card, Accordion } from "react-bootstrap";

import report_listing from "../../../assets/images/icon_report_listing.svg";

import styles from "../css/CoachDetails.module.css";
import Image from "next/image";

const FaqCoach = ({ coachDetailsData }) => {

  const getFaqList = () => {
    return (
      coachDetailsData &&
      coachDetailsData.partner_faqs &&
      coachDetailsData.partner_faqs.map((faq, index) => {
        return (
          <Accordion.Item eventKey={index} className={styles.accordion_items} key={index}>
          <Accordion.Header className={styles.accordion_heading}>
            {faq.question}
          </Accordion.Header>
          <Accordion.Body className={styles.accordion_body_wrap}>
           {faq.answer}
          </Accordion.Body>
        </Accordion.Item>
        );
      })
    );
  }

  return (
    <>
      <div className={styles.faq_section}>
        <Card className={styles.card_row}>
          <h5>FAQs</h5>
          <Accordion defaultActiveKey="0">
            {getFaqList()}
          </Accordion>
        </Card>

        <a href="#." className={styles.report_listing}>
          {" "}
          <Image
            className={styles.report_listing_img}
            width={24}
            src={report_listing}
            alt=""
          />
          <p>Report this listing</p>
        </a>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    coachDetailsData: state.coachDetailReducer.coachDetailsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // setCoachDetails: (coachDetails) => {
    //   dispatch(setCoachDetailsData(coachDetails));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FaqCoach);
