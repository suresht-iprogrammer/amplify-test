import React, {useEffect} from "react";
import { connect } from "react-redux";
import { Container, Button, Badge } from "react-bootstrap";
// import discover_football from "../../assets/images/discover_football.png";
// import discover_cricket from "../../assets/images/discover_cricket.png";
// import discover_basketball from "../../assets/images/discover_basketball.png";
// import discover_chess from "../../assets/images/discover_chess.png";
// import discover_tennis from "../../assets/images/discover_tennis.png";
// import discover_badminton from "../../assets/images/discover_badminton.png";
import styles from "../css/DiscoverYourSport.module.css";
// import Image from "next/image";
import {getSportsListData} from '../../../redux/actions/sportAction';

const DiscoverYourSport = ({getSports, sportListData}) => {

  useEffect(() => {
    getSports();
  }, [])

  const getSportList = () => {
    return sportListData.map((sport, index) => {
        return (
          <div className={styles.discover_box}>
            <div className={styles.img}>
              <img variant="top" src={`https://spolto-assets.s3.ap-south-1.amazonaws.com/assets/masters/sports/${sport.logo}`} height={"100%"} layout='fill' />                
            </div>
            <h4>{sport.name}</h4>
          </div>
        );
    });
  }

  return (
    <section className={styles.discover_sport_section}>
      <Container>
        <h3 className="section_title">Discover your sport</h3>
        <div className={styles.discover_boxes}>
          {getSportList()}
        </div>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    sportListData: state.sportReducer.sportListData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSports: () => {
      dispatch(getSportsListData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverYourSport);