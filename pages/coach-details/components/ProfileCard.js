import React from "react";
import { connect } from "react-redux";
import { Card, CardImg, Button } from "react-bootstrap";
import icon_mobile_back from "../../../assets/images/icon_mobile_back.svg";
import profile_img_01 from "../../../assets/images/profile_img_01.png";
import map_maker from "../../../assets/images/map_maker.png";
import calendar from "../../../assets/images/calendar.png";
import chat_iocn from "../../../assets/images/chat_icon.png";
import share_icon from "../../../assets/images/share_icon.svg";

import Image from "next/image";
import styles from "../css/CoachDetails.module.css";

const ProfileCard = ({ coachDetailsData }) => {
  return (
    <>
      <div className={styles.profile_box}>
        <Card className={styles.card_box}>
          <div className={styles.card_box_img}>
            <div className={styles.mobile_back_icon}>
              <Image src={icon_mobile_back} alt="Back" />
            </div>

            <div className={styles.pfImgWrapper}>
              <Image src={profile_img_01} alt="Profile Image" height={"100%"} />
            </div>

            <a href="#." className={styles.anch_share}>
              <Image src={share_icon} alt="Share Image" />
            </a>
            <a href="#." className={styles.anch_free_trial}>
              Free trial
            </a>
          </div>
          <div className={styles.card_box_cnt}>
            <h2>{coachDetailsData.title}</h2>
            <h3>{coachDetailsData.sub_title}</h3>
            <div className={styles.card_box_cnt_address}>
              <div className={styles.address_row}>
                <div className={styles.address}>
                  <div className={styles.map_icon_div}>
                    <Image src={map_maker} alt="Map" />
                  </div>
                  {coachDetailsData.location && coachDetailsData.location.name}
                </div>
                <a
                  href={`https://maps.google.com/?q=${coachDetailsData.geo_lat},${coachDetailsData.geo_long}`}
                  className={styles.anch_navigate}
                  target="_blank"
                >
                  Navigate
                </a>
              </div>
              <div className={styles.address_row}>
                <div className={styles.address}>
                  <div className={styles.map_icon_div}>
                    <Image src={calendar} alt="Calendar" />
                  </div>
                  Today, 10 AM to 5:00 PM
                </div>
                <a href="#." className={styles.anch_navigate}>
                  View all
                </a>
              </div>
            </div>
          </div>
        </Card>
        <div className={styles.btn_wrapper}>
          <Button className={styles.btn_chat}>
            <Image className={styles.chat_iocn_img} src={chat_iocn} alt="" />{" "}
            Chat with the coach
          </Button>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);
