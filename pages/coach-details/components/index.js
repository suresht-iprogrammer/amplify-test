import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../css/CoachDetails.module.css";

import ProfileCard from "./ProfileCard";
import CoachAbout from "./CoachAbout";
import FaqCoach from "./FaqCoach";
import RelatedCoaches from "./RelatedCoaches";
import Badminton from "../../homepage/components/Badminton";
import OurStaff from "./OurStaff";

const CoachDetails = () => {
  return (
    <>
      <div className={styles.coach_details_page}>
        <Container>
          <Row>
            <Col xs={12} md={4} lg={4} className={styles.layoutPadding}>
              <ProfileCard />
            </Col>
            <Col xs={12} md={8} lg={8}>
              <CoachAbout />
              <FaqCoach />
            </Col>
          </Row>
        </Container>
        <div className={styles.related_coaches_page}>
          <RelatedCoaches />
          <div className="marginY_6">
            <Badminton />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoachDetails;
