import React, { useEffect } from "react";
import { connect } from "react-redux";
import CoachDetails from "./components";
import { getCoachDetailsData } from "../../api/CoachDetailApi";
import { setCoachDetailsData } from "../../redux/actions/coachDetailAction";

const CoachDetailsComponent = ({ coachDetails, setCoachDetails, coachDetailsData }) => {
  useEffect(() => {
    setCoachDetails(coachDetails);
  }, []);

  return (
    <div className="top-space">
      <CoachDetails />
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await getCoachDetailsData();
  const coachDetails = res.payload;
  return {
    props: {
      coachDetails,
    },
  };
};

const mapStateToProps = (state) => {
  return {
    coachDetailsData: state.coachDetailReducer.coachDetailsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCoachDetails: (coachDetails) => {
      dispatch(setCoachDetailsData(coachDetails));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoachDetailsComponent);
