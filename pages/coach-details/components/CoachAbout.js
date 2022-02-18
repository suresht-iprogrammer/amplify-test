import React from "react";
import { connect } from "react-redux";
import { Card, CardTitle, CardText, CardImg, Button } from "react-bootstrap";
import moment from "moment";

import coach_about_1 from "../../../assets/images/coach_about_1.png";
import coach_about_2 from "../../../assets/images/coach_about_2.png";
import coach_about_3 from "../../../assets/images/coach_about_3.png";
import coach_about_4 from "../../../assets/images/coach_about_4.png";
import coach_about_5 from "../../../assets/images/coach_about_5.png";
import OurStaff from "./OurStaff";
import { days } from "../../../config/constant";

import styles from "../css/CoachDetails.module.css";
import Image from "next/image";

const CoachAbout = ({ coachDetailsData }) => {
  const getBatchList = (batchData) => {
    return (
      batchData &&
      batchData.map((batch, index) => {
        return (
          <p key={index}>
            {moment(batch.from, "h:mm:ss").format("h:mm A")} to{" "}
            {moment(batch.to, "h:mm:ss").format("h:mm A")}
          </p>
        );
      })
    );
  };
  const getPartnerTiming = () => {
    return (
      coachDetailsData &&
      coachDetailsData.partner_timings &&
      coachDetailsData.partner_timings.map((time, index) => {
        return (
          <div className={styles.box} key={index}>
            <span>{days[time.week_day]}</span>
            {getBatchList(time.batches)}
          </div>
        );
      })
    );
  };

  return (
    <>
      <div className={styles.coach_about_section}>
        <div className={styles.coach_about_images}>
          <div className={styles.big}>
            <Image src={coach_about_1} alt="" />
          </div>
          <div className={styles.small}>
            <div className={styles.img_wrapper}>
              <div className={styles.img_indivisual}>
                <Image
                  className={styles.small_width}
                  src={coach_about_2}
                  width={180}
                  height={180}
                  alt=""
                />
              </div>
              <div className={styles.img_indivisual}>
                <Image
                  className={styles.small_width}
                  src={coach_about_3}
                  width={180}
                  height={180}
                  alt=""
                />
                <div className={styles.overlayImg}>
                  <span>+3</span>
                </div>
              </div>
            </div>
            <div className={styles.img_wrapper}>
              <div className={styles.img_indivisual}>
                <Image
                  className={styles.small_width}
                  src={coach_about_4}
                  width={180}
                  height={180}
                  alt=""
                />
              </div>
              <div className={styles.img_indivisual}>
                <Image
                  className={styles.small_width}
                  src={coach_about_5}
                  width={180}
                  height={180}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <Card className={styles.card_row}>
          <h5>About me</h5>
          <p>{coachDetailsData.about_me}</p>
          <div className={styles.readmore}>Read more</div>
        </Card>
        <Card className={styles.card_row}>
          <h5>About my coaching</h5>
          <p>{coachDetailsData.about_coaching}</p>
          <div className={styles.readmore}>Read more</div>
        </Card>
        <Card className={styles.card_row}>
          <h5>About my achievements</h5>
          <p>{coachDetailsData.achievements}</p>
          <div className={styles.readmore}>Read more</div>
        </Card>

        <Card className={styles.card_row}>
          <OurStaff />
        </Card>

        <Card className={`${styles.card_row} ${styles.card_row_timing}`}>
          <h5>My Timings</h5>
          <div className={styles.timing_boxes}>
            {getPartnerTiming()}
            {/* <div className={styles.box}>
              <span>Monday</span>
              <p>10:00 AM to 10:00 PM</p>
            </div>
            <div className={styles.box}>
              <span>Tuesday</span>
              <p>10:00 AM to 10:00 PM</p>
            </div>
            <div className={`${styles.box} ${styles.active_time}`}>
              <span>Wednesday</span>
              <p>10:00 AM to 10:00 PM</p>
            </div>
            <div className={styles.box}>
              <span>Thursday</span>
              <p>10:00 AM to 10:00 PM</p>
            </div>
            <div className={styles.box}>
              <span>Friday</span>
              <p>10:00 AM to 10:00 PM</p>
            </div>
            <div className={`${styles.box} ${styles.optional}`}>
              <span>Saturday</span>
              <p>10:00 AM to 10:00 PM</p>
              <h6>Closed</h6>
            </div>
            <div className={`${styles.box} ${styles.optional}`}>
              <span>Sunday</span>
              <p>10:00 AM to 10:00 PM</p>
              <h6>Closed</h6>
            </div> */}
          </div>
        </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(CoachAbout);
