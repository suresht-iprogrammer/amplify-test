import React, { useState } from "react";
import { Row, Col, Card, CardImg } from "reactstrap";
import { connect } from "react-redux";
import { serverUrl } from "../../config/config.js";
import line from "../../assets/img/Line.png";
import playicon from "../../assets/img/playicn.png";
import VideoPopup from "../fruit-detail/VideoPopup";
import backArrow from "../../assets/img/backArrowW.png";
import stepImg from "../../assets/img/step_image.png";

const MyStory = ({ fruitDetailData, traceData, history, ownerDetailData }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  const handlePlayVideo = (title, videoUrl) => {
    setSelectedTitle(title);
    setSelectedVideoUrl(videoUrl);
    setIsPopupOpen(true);
  };

  const handlePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const getMyStoryData = () => {
    return (
      fruitDetailData &&
      fruitDetailData.attributes &&
      fruitDetailData.attributes.my_stories &&
      fruitDetailData.attributes.my_stories.data.map((data, index) => {
        return (
          <Row key={index} style={{ marginTop: "-40px" }}>
            <Card className="letMe-card">
              <img
                src={playicon}
                alt="share"
                className="playIcon cp"
                onClick={() =>
                  handlePlayVideo(
                    data.attributes.title,
                    data.attributes.video_url
                  )
                }
              />
              <CardImg
                alt="Card cap"
                src={`${serverUrl}${
                  data.attributes.thumbnail_image.data &&
                  data.attributes.thumbnail_image.data.attributes.formats
                    .thumbnail.url
                }
                  `}
                top
                width="100%"
                className="cardVideo"
                onClick={() =>
                  handlePlayVideo(
                    data.attributes.heading_description,
                    data.attributes.video_url
                  )
                }
              />

              <Col xs="12" className="let-detail let-d-page">
                <p>{data.attributes.type}</p>
                <h2>{data.attributes.heading_description}</h2>
                <p>{data.attributes.description}</p>
              </Col>
            </Card>
            <Col xs="2" className="let-col let-d-col">
              <img
                src={`${serverUrl}${data.attributes.story_image.data.attributes.url}`}
                alt="story image"
              />
              <img
                src={line}
                alt="story image"
                className="let-img letLine-img"
              />
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
          <Row key={index} style={{ marginTop: "-40px" }}>
            <Card className="letMe-card">
              {/* <img
                src={playicon}
                alt="share"
                className="playIcon cp"
                onClick={() =>
                  handlePlayVideo(
                    data.attributes.title,
                    data.attributes.video_url
                  )
                }
              /> */}
              {/* <CardImg
                alt="Card cap"
                src={`${serverUrl}${
                  data.attributes.thumbnail_image.data &&
                  data.attributes.thumbnail_image.data.attributes.formats
                    .thumbnail.url
                }
                  `}
                top
                width="100%"
                className="cardVideo"
                onClick={() =>
                  handlePlayVideo(
                    data.attributes.heading_description,
                    data.attributes.video_url
                  )
                }
              /> */}

              <Col xs="12" className="let-detail let-d-page bottomPadding ">
                <p>{detail.data.locationname}</p>
                <h2>{detail.data.locationtype}</h2>
                <p>{detail.data.address}</p>
              </Col>
            </Card>
            <Col xs="2" className="let-col let-d-col">
              <img src={stepImg} alt="story image" />
              <img
                src={line}
                alt="story image"
                className="let-img letLine-img"
              />
            </Col>
          </Row>
        );
      })
    );
  };

  return (
    <div className="d-md-none let-block">
      <Row>
        <Col className="section text-center">
          <h2 className="title productName back_from-recipe letM-back-arw">
            <span className="" onClick={() => history.goBack()}>
              <img src={backArrow} alt="go back" />
            </span>
          </h2>
          <h2 className="title productName">
            Let me tell you <span>my story</span>
          </h2>
          <br />
        </Col>
      </Row>
      <Row className="let-me-tell">
        {getOwnerDetalsData()}
        {getMyStoryData()}
      </Row>
      {/* <Row className="let-me-tell">{getMyStoryDataProcess()}</Row> */}
      {isPopupOpen && (
        <VideoPopup
          videoUrl={selectedVideoUrl}
          title={selectedTitle}
          isPopupOpen={isPopupOpen}
          handlePopup={handlePopup}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fruitDetailData: state.fruitDetailReducer.fruitDetailData,
    traceData: state.fruitDetailReducer.traceData,
    ownerDetailData: state.fruitDetailReducer.ownerDetailData,
  };
};

export default connect(mapStateToProps, null)(MyStory);
