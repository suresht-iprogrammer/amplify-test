import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Popover,
  PopoverBody,
  UncontrolledPopover,
} from "reactstrap";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  InstapaperShareButton,
  InstapaperIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { isMobile } from "react-device-detect";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getRecipieDetailData } from "../../redux/actions/recipieAction";
import { serverUrl, hostName } from "config/config";
import shareIcon from "../../assets/img/shareIcon.png";
import playicon from "../../assets/img/playicn.png";
import VideoPopup from "../fruit-detail/VideoPopup";
import backArrow from "../../assets/img/backArrow.png";

const RecipieDetail = ({
  getRecipieDetails,
  recipieDetailData,
  recipieSimilarData,
  history,
}) => {
  let { id } = useParams();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [shareIndividual, setShareIndividual] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const showShareOption = (id) => {
    setSelectedId(id);
  };

  const showShareOptionIndividual = () => {
    setShareIndividual(!shareIndividual);
  };

  useEffect(() => {
    getRecipieDetails(id);
  }, [id]);

  const handlePlayVideo = (title, videoUrl) => {
    setSelectedTitle(title);
    setSelectedVideoUrl(videoUrl);
    setIsPopupOpen(true);
  };

  const handlePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const getSimilarRecipieListData = () => {
    return (
      recipieSimilarData.data &&
      recipieSimilarData.data
        .filter((sData, i) => {
          if (recipieDetailData.data.id != sData.id) return sData;
        })
        .map((data, index) => {
          // if (index < 3) {
          return (
            <Col key={index}>
              <Card>
                <div className="time-due">
                  {data.attributes.duration.split(":")[0]}:
                  {data.attributes.duration.split(":")[1]} min
                </div>
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
                {/* <Row>
                  <Col className="text-center">
                    <iframe
                      // width="320"
                      height="240"
                      src={data.attributes.video_url}
                    ></iframe>
                  </Col>
                </Row> */}
                <CardImg
                  alt="Card cap"
                  src={`${serverUrl}${
                    data.attributes &&
                    data.attributes.thumbnail_image.data &&
                    data.attributes.thumbnail_image.data[0].attributes.formats
                      .thumbnail.url
                  }
                  `}
                  top
                  width="100%"
                  className="cardVideo"
                  onClick={() =>
                    handlePlayVideo(
                      data.attributes.title,
                      data.attributes.video_url
                    )
                  }
                />
                <CardBody>
                  <Row>
                    <Col md="10" xs="10">
                      <CardTitle
                        tag="h5"
                        onClick={() => history.push(`/recipie/${data.id}`)}
                      >
                        {data.attributes.title}
                      </CardTitle>
                    </Col>
                    <Col md="2" xs="2">
                      <img
                        src={shareIcon}
                        alt="share"
                        className="shareIcon 
                         cp"
                        id={`recipie${data.id}`}
                        onClick={showShareOption}
                      />
                      <UncontrolledPopover
                        placement="bottom"
                        // isOpen={data.id == selectedId ? true : false}
                        target={`recipie${data.id}`}
                        // toggle={() => {
                        //   showShareOption(data.id);
                        // }}
                        trigger="legacy"
                      >
                        <PopoverBody>
                          <FacebookShareButton
                            url={`${hostName}/recipie/${data.id}`}
                          >
                            <FacebookIcon size={26} round />
                          </FacebookShareButton>
                          <InstapaperShareButton
                            url={`${hostName}/recipie/${data.id}`}
                          >
                            <InstapaperIcon size={26} round />
                          </InstapaperShareButton>
                          <WhatsappShareButton
                            url={`${hostName}/recipie/${data.id}`}
                          >
                            <WhatsappIcon size={26} round />
                          </WhatsappShareButton>
                        </PopoverBody>
                      </UncontrolledPopover>
                    </Col>
                  </Row>
                  <span className="prep-time stick-to-bottom">
                    Prep. time:{" "}
                    <strong>
                      {data.attributes.preparation_time.split(":")[1]} mins
                    </strong>
                  </span>
                </CardBody>
              </Card>
            </Col>
          );
          // }
        })
    );
  };

  const getIngridentsList = () => {
    return (
      recipieDetailData.data &&
      recipieDetailData.data.attributes.ingredients &&
      recipieDetailData.data.attributes.ingredients.map((data, index) => {
        return (
          <Col md="3" xs="6" key={index}>
            <h3>{data.title}</h3>
            <h6>{data.value}</h6>
          </Col>
        );
      })
    );
  };

  let productName =
    recipieDetailData.data &&
    recipieDetailData.data.attributes.product.data.attributes.product_long_name.split(
      " "
    );
  return (
    <Container className="mt-5 rc">
      <div className="rDetail_back"></div>
      <Row>
        {" "}
        <div className="recipie-back recipie-Dback"></div>
        <h2 className="title productName back_from-recipe back-rd">
          <span className="" onClick={() => history.goBack()}>
            <img src={backArrow} alt="go back" />
          </span>
          &nbsp; &nbsp; &nbsp;{productName && productName[0]}{" "}
          <span>
            {recipieDetailData.data &&
              recipieDetailData.data.attributes.product.data.attributes.product_long_name.replace(
                productName[0],
                ""
              )}
          </span>
        </h2>
        <h2 className="r-detailTitle text-center">
          {recipieDetailData.data &&
            recipieDetailData.data.attributes.recipies_category.data.attributes
              .title}
        </h2>
        
        <h2 className="r-detailTitle">{recipieDetailData.data && recipieDetailData.data.attributes.recipies_category.data.attributes.title}</h2>

        <Col md="6" className="r-detai-mob ">
          <h2 className="productName R-name detailTitle-text" style={{marginBottom: "50px"}}>
            {recipieDetailData.data && recipieDetailData.data.attributes.title}
            <img
                src={shareIcon}
                alt="share"
                id={`recipieIndividualMob${
                  recipieDetailData.data && recipieDetailData.data.id
                }`}
                className="shareIcon share-detail share-detail-r cp"
                onClick={showShareOptionIndividual}
              />
              <UncontrolledPopover
                placement="bottom"
                // isOpen={shareIndividual}
                target={`recipieIndividualMob${
                  recipieDetailData.data && recipieDetailData.data.id
                }`}
                // toggle={() => {
                //   showShareOptionIndividual();
                // }}
                trigger="legacy"
              >
                <PopoverBody>
                  <FacebookShareButton
                    url={`${hostName}/recipie/${
                      recipieDetailData.data && recipieDetailData.data.id
                    }`}
                  >
                    <FacebookIcon size={26} round />
                  </FacebookShareButton>
                  <InstapaperShareButton
                    url={`${hostName}/recipie/${
                      recipieDetailData.data && recipieDetailData.data.id
                    }`}
                  >
                    <InstapaperIcon size={26} round />
                  </InstapaperShareButton>
                  <WhatsappShareButton
                    url={`${hostName}/recipie/${
                      recipieDetailData.data && recipieDetailData.data.id
                    }`}
                  >
                    <WhatsappIcon size={26} round />
                  </WhatsappShareButton>
                </PopoverBody>
              </UncontrolledPopover>
          </h2>
          
          <Row>
            <Col>
              <span className="prep-time stick-to-bottom">
                Prep. time:{" "}
                <strong>
                  {recipieDetailData.data &&
                    recipieDetailData.data.attributes.preparation_time.split(
                      ":"
                    )[1]}{" "}
                  mins
                </strong>
              </span>
            </Col>
            <Col>
              <img
                src={shareIcon}
                alt="share"
                id={`recipieIndividual${
                  recipieDetailData.data && recipieDetailData.data.id
                }`}
                className="shareIcon shareIcon-xs cp mt-5"
                onClick={showShareOptionIndividual}
              />
              <UncontrolledPopover
                placement="bottom"
                // isOpen={shareIndividual}
                target={`recipieIndividual${
                  recipieDetailData.data && recipieDetailData.data.id
                }`}
                // toggle={() => {
                //   showShareOptionIndividual();
                // }}
                trigger="legacy"
              >
                <PopoverBody>
                  <FacebookShareButton
                    url={`${hostName}/recipie/${
                      recipieDetailData.data && recipieDetailData.data.id
                    }`}
                  >
                    <FacebookIcon size={26} round />
                  </FacebookShareButton>
                  <InstapaperShareButton
                    url={`${hostName}/recipie/${
                      recipieDetailData.data && recipieDetailData.data.id
                    }`}
                  >
                    <InstapaperIcon size={26} round />
                  </InstapaperShareButton>
                  <WhatsappShareButton
                    url={`${hostName}/recipie/${
                      recipieDetailData.data && recipieDetailData.data.id
                    }`}
                  >
                    <WhatsappIcon size={26} round />
                  </WhatsappShareButton>
                </PopoverBody>
              </UncontrolledPopover>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="process r-detail-p">
              <p>
                {recipieDetailData.data &&
                  recipieDetailData.data.attributes.sub_content}
              </p>
            </Col>
          </Row>
        </Col>
        <Col md="6" className="vdo-column">
          <Card className="vdo recipe-d-card">
            <div className="time-due">
              {recipieDetailData.data &&
                recipieDetailData.data.attributes.duration.split(":")[0]}
              :
              {recipieDetailData.data &&
                recipieDetailData.data.attributes.duration.split(":")[1]}{" "}
              min
            </div>
            <img
              src={playicon}
              alt="share"
              className="RDetail_playIcon cp"
              onClick={() =>
                handlePlayVideo(
                  recipieDetailData.data.attributes.title,
                  recipieDetailData.data.attributes.video_url
                )
              }
            />

            {/* <CardImg
              alt="Card cap"
              // src={`${serverUrl}${recipieDetailData.data && recipieDetailData.data.attributes.image.data[0].attributes.url}`}
              top
              width="100%"
              className="cardVideo"
              style={{ height: "200px" }}
            /> */}
            {/* <iframe
            
              width="600"
              height="350"
              src={
                recipieDetailData.data &&
                recipieDetailData.data.attributes.video_url
              }
            ></iframe> */}
            <CardImg
              alt="Card cap"
              src={`${serverUrl}${
                recipieDetailData.data &&
                recipieDetailData.data.attributes.thumbnail_image.data &&
                recipieDetailData.data.attributes.thumbnail_image.data[0]
                  .attributes.formats.thumbnail.url
              }
                  `}
              top
              width="100%"
              className="cardVideo recipe-d-img"
              onClick={() =>
                handlePlayVideo(
                  recipieDetailData.data.attributes.title,
                  recipieDetailData.data.attributes.video_url
                )
              }
            />
          </Card>
        </Col>
      </Row>
      <Row className="recipie-detail">
        <Col md="12">
          <Card>
            <h3 className="Preapre-text">
              Prepare yourself with all of these ingridents
            </h3>
            <h3 className="d-md-none iam-ready">
              I'm ready with these ingredients
            </h3>
            <Row className="recipie-list">{getIngridentsList()}</Row>
          </Card>
        </Col>
      </Row>
      <Row className="step-b">
        <Col md="6" className="Preapre-text">
          <img
            src={`${serverUrl}${
              recipieDetailData &&
              recipieDetailData.data &&
              recipieDetailData.data.attributes.recipie_image.data[0].attributes
                .url
            }`}
            alt="recipie"
            height="300"
          />
        </Col>
        <Col md="6" className="process">
          <h3 className="productName">Step by step process</h3>
          <p>
            {recipieDetailData.data &&
              recipieDetailData.data.attributes.content}
          </p>
        </Col>
      </Row>
      <br />
      <hr />
      <Row className="similar-r">
        <Col className="text-center">
          <h2 className="title productName">
            Similar <span>Recipies</span>
          </h2>
          <br />
        </Col>
      </Row>
      {recipieSimilarData && recipieSimilarData.data && (
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={
            (isMobile == false &&
              recipieSimilarData?.data?.filter((sData, i) => {
                if (recipieDetailData.data.id != sData.id) return sData;
              })?.length > 3) ||
            (isMobile == true &&
              recipieSimilarData?.data?.filter((sData, i) => {
                if (recipieDetailData.data.id != sData.id) return sData;
              })?.length > 1)
              ? true
              : false
          }
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="recipie s-rec"
        >
          {getSimilarRecipieListData()}
        </Carousel>
      )}
      {isPopupOpen && (
        <VideoPopup
          videoUrl={selectedVideoUrl}
          title={selectedTitle}
          isPopupOpen={isPopupOpen}
          handlePopup={handlePopup}
        />
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    recipieDetailData: state.recipieReducer.recipieDetailData,
    recipieSimilarData: state.recipieReducer.recipieSimilarData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRecipieDetails: (id) => {
      dispatch(getRecipieDetailData(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipieDetail);
