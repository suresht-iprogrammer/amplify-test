import React from "react";
import { Row, Col, Button } from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { serverUrl } from "../../config/config.js";
import line from "../../assets/img/Line.png";
import stepImg from '../../assets/img/step_image.png';

const MyStory = ({ fruitDetailData, history, ownerDetailData }) => {
  const getMyStoryData = () => {
    return (
      fruitDetailData &&
      fruitDetailData.attributes &&
      fruitDetailData.attributes.my_stories &&
      fruitDetailData.attributes.my_stories.data.map((data, index) => {
        return (
          <Row key={index}>
            <Col xs="2" className="let-col">
              <img
                src={`${serverUrl}${data.attributes.story_image.data.attributes.url}`}
                alt="story image"
              />
              <img src={line} alt="story image" className="let-img" />
            </Col>
            <Col xs="10" className="let-detail">
              <p>{data.attributes.type}</p>
              <h2>{data.attributes.heading_description}</h2>
              <p>{data.attributes.description}</p>
            </Col>
          </Row>
        );
      })
    );
  };


  const getOwnerDetalsData = () => {
    return (
      ownerDetailData &&
      ownerDetailData.map((detail, index) => {
        return (
          <Row key={index}>
            <Col xs="2" className="let-col">
              <img
              src={stepImg}
              alt="story image"
            />
              <img src={line} alt="story image" className="let-img" />
            </Col>
            <Col xs="10" className="let-detail">
              <p>{detail.data.locationname}</p>
              <h2>{detail.data.locationtype}</h2>
              <p>{detail.data.address}</p>
            </Col>
          </Row>
        );
      })
    );
  };

  return (
    <div className="d-md-none">
      <Row className="let-m-section">
        <Col className="section text-center">
          <h2 className="title productName">
            Let me tell you <span>my story</span>
          </h2>
          <br />
        </Col>
      </Row>
      <Row className="let-me-tell">
        {getOwnerDetalsData()}
        {/* {getMyStoryData()} */}
        <Button
          className="btn-round knowMoreBtn text-capitalize"
          onClick={() => {
            history.push("/my-story-detail");
          }}
        >
          View in detail
        </Button>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fruitDetailData: state.fruitDetailReducer.fruitDetailData,
    ownerDetailData: state.fruitDetailReducer.ownerDetailData,
  };
};

export default compose(withRouter, connect(mapStateToProps, null))(MyStory);
