import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Card,
  CardTitle,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  CardBody,
  Popover,
  PopoverBody,
  CardImg,
  UncontrolledPopover
} from "reactstrap";
import {
  FacebookShareButton,
  FacebookIcon,
  InstapaperShareButton,
  InstapaperIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import shareIcon from "../../assets/img/shareIcon.png";
import playicon from "../../assets/img/playicn.png";
import {
  getRecipieList,
  getOtherUsesData,
} from "../../redux/actions/recipieAction";
import { getCategoryList } from "../../redux/actions/commonAction";
import { serverUrl, hostName } from "config/config";
import VideoPopup from "../fruit-detail/VideoPopup";
import backArrow from "../../assets/img/backArrow.png";

const Recipies = ({
  getRecipies,
  recipieList,
  categoryList,
  getCategories,
  history,
  otherUsesData,
  getOtherUses,
}) => {
  const [checkCategory, setCheckCategory] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [showData, setShowData] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  const showShareOption = (id) => {
    setSelectedId(id);
  };

  useEffect(() => {
    setCheckCategory("Breakfast");
    getCategories();
    getRecipies("Breakfast");
  }, []);

  const handlePlayVideo = (title, videoUrl) => {
    setSelectedTitle(title);
    setSelectedVideoUrl(videoUrl);
    setIsPopupOpen(true);
  };

  const handlePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const getRecipieListData = () => {
    return (
      recipieList.data &&
      recipieList.data.map((data, index) => {
        return (
          <Col md="4" key={index}>
            <Card>
            <div className="time-due">{data.attributes.duration.split(':')[0]}:{data.attributes.duration.split(':')[1]} min</div>
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
                    width="320"
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
                      className="cp"
                      onClick={() => history.push(`/recipie/${data.id}`)}
                    >
                      {data.attributes.title}
                    </CardTitle>
                  </Col>
                  <Col md="2" xs="2">
                    <img
                      src={shareIcon}
                      alt="share"
                      className="shareIcon  cp"
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
                <span className="prep-time stick-to-bottom">Prep. time: <strong>{data.attributes.preparation_time.split(':')[1]} mins</strong></span>
              </CardBody>
            </Card>
          </Col>
        );
      })
    );
  };

  const getCategoryListData = () => {
    return (
      categoryList.data &&
      categoryList.data.map((data, index) => {
        return (
          <NavItem className="cp">
            <NavLink
              onClick={() => {
                setCheckCategory(data.attributes.title);
                getRecipies(data.attributes.title);
              }}
              className={classnames(
                checkCategory == data.attributes.title ? "category-active" : ""
              )}
            >
              {data.attributes.title}
            </NavLink>
          </NavItem>
        );
      })
    );
  };

  const handleToggle = (showType) => {
    setShowData(showType);
    if (showType == false) getOtherUses();
  };

  const getOtherUsesListData = () => {
    return (
      otherUsesData &&
      otherUsesData.data &&
      otherUsesData.data.map((data, index) => {
        return (
          <Col md="4" key={index}>
            <Card>
            <div className="time-due">{data.attributes.duration.split(':')[0]}:{data.attributes.duration.split(':')[1]} min</div>
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
                    width="320"
                    height="240"
                    src={data.attributes.video_url}
                  ></iframe>
                </Col>
              </Row> */}
              <CardImg
                alt="Card cap"
                src={`${serverUrl}${
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

              <CardBody className="cd">
                <Row>
                  <Col md="12" xs="12">
                    <CardTitle tag="h5">{data.attributes.title}</CardTitle>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        );
      })
    );
  };

  return (
    <Container>
      <div className="recipie-back "></div>
      <Row>
      <h2 className="title productName back_from-recipe">
          <span className="" onClick={() => history.goBack()}>
            <img src={backArrow} alt="go back" />
           </span> &nbsp; &nbsp; Ways <span>to consume</span>
        </h2>
       

        <Col className="section recipe-det-xs">
          
          <div className=" mb-3">
            <Button
              type="button"
              className={classnames(
                "btn-round ml-1 cp rec-btn rec-btn1",
                showData == true ? `selectedContentBtn` : `nutrient`
              )}
              onClick={() => handleToggle(true)}
            >
              <span
                className={classnames(
                  "text-capitalize r-nav",
                  showData == true ? `health-dot` : ``
                )}
              >
                Recipies
              </span>
            </Button>

            &nbsp; <Button
              type="button"
              onClick={() => handleToggle(false)}
              className={classnames(
                "btn-round ml-1 cp",
                showData == false ? `selectedContentBtn` : `nutrient`
              )}
            >
              <span
                className={classnames(
                  "text-capitalize r-nav",
                  showData == false ? `health-dot` : ``
                )}
              >
                Other Uses
              </span>
            </Button>
          </div>
          {showData ? (
            <>
              <hr className="way-hr" />
              <Navbar
                expand="lg"
                style={{ boxShadow: "none", marginBottom: "-50px" }}
              >
                <Nav navbar className="category r_category r-nav">
                  {getCategoryListData()}
                </Nav>
              </Navbar>
            </>
          ) : null}
          
        </Col>
        
      </Row>
      {showData ? (
        <Row className="recipie recipie-in">{getRecipieListData()}</Row>
      ) : (
        <Row className="recipie">{getOtherUsesListData()}</Row>
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
    recipieList: state.recipieReducer.recipieList,
    categoryList: state.commonReducer.categoryList,
    otherUsesData: state.recipieReducer.otherUsesData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRecipies: (category) => {
      dispatch(getRecipieList(category));
    },
    getCategories: () => {
      dispatch(getCategoryList());
    },
    getOtherUses: () => {
      dispatch(getOtherUsesData());
    },
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Recipies);
