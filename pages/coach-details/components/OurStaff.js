import React from "react";
import { connect } from "react-redux";
import { Card, Accordion } from "react-bootstrap";

import our_staff_img_1 from "../../../assets/images/our_staff_img_1.png";
import our_staff_img_2 from "../../../assets/images/our_staff_img_2.png";
import our_staff_img_3 from "../../../assets/images/our_staff_img_3.png";

import styles from "../css/CoachDetails.module.css";
import Image from "next/image";

const OurStaff = ({ coachDetailsData }) => {
  const getStaffList = () => {
    return (
      coachDetailsData &&
      coachDetailsData.partner_staffs &&
      coachDetailsData.partner_staffs.map((staff, index) => {
        return (
          <div className={styles.our_staff_box}>
            <div className={styles.img}>
              <Image src={our_staff_img_1} alt="Our Staff" />
            </div>
            <h3>
              {staff.first_name} {staff.last_name}
            </h3>
            <p>{staff.position}</p>
          </div>
        );
      })
    );
  };

  return (
    <>
      <div className={styles.our_staff_section}>
        <h5>OUR STAFF</h5>
        <div className={styles.our_staff_boxes}>
          {getStaffList()}
          {/* <div className={styles.our_staff_box}>
            <div className={styles.img}>
              <Image src={our_staff_img_1} alt="Our Staff" />
            </div>
            <h3>Sanjay Sawant</h3>
            <p>Head Coach</p>
          </div>
          <div className={styles.our_staff_box}>
            <div className={styles.img}>
              <Image src={our_staff_img_2} alt="Our Staff" />
            </div>
            <h3>Sanjay Sawant</h3>
            <p>Head Coach</p>
          </div>
          <div className={styles.our_staff_box}>
            <div className={styles.img}>
              <Image src={our_staff_img_3} alt="Our Staff" />
            </div>
            <h3>Sanjay Sawant</h3>
            <p>Head Coach</p>
          </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(OurStaff);
