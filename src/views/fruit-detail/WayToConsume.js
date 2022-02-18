import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
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
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import classnames from "classnames";
import shareIcon from "../../assets/img/shareIcon.png";
import playicon from "../../assets/img/playicn.png";
import { getRecipieList } from "../../redux/actions/recipieAction";
import { getCategoryList, setSelectedMenu } from "../../redux/actions/commonAction";
import { serverUrl, hostName } from "config/config";
import VideoPopup from "./VideoPopup";

const WayToConsume = ({
  recipieList,
  getRecipies,
  history,
  getCategories,
  categoryList,
  fruitDetailData,
  setMenu
}) => {
  const [recipiesFiltersDataList, setRecipiesFiltersData] = useState([]);
  const [checkCategory, setCheckCategory] = useState("Breakfast");
  const [selectedIdRecipie, setSelectedIdRecipie] = useState(null);
  const [showData, setShowData] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  const showShareOptionOnRecipie = (id) => {
    setSelectedIdRecipie(id);
  };

  useEffect(() => {
    getCategories();
    setSelectedIdRecipie(null);
  }, [fruitDetailData && fruitDetailData.id]);

  useEffect(() => {
    getRecipieListData(checkCategory);
    setSelectedIdRecipie(null);
  }, [checkCategory]);

  const handlePlayVideo = (title, videoUrl) => {
    setSelectedTitle(title);
    setSelectedVideoUrl(videoUrl);
    setIsPopupOpen(true);
  };

  const handlePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const getRecipieListData = () => {
    let count = 0;
    return (
      fruitDetailData &&
      fruitDetailData.attributes &&
      fruitDetailData.attributes.recipies.data
        .filter((data1, index1) => {
          if (count < 3) {
            if (
              checkCategory == data1.attributes.recipies_category.data.attributes.title
            ) {
              count++;
              return data1;
            }
          }
        })
        .map((data, index) => {
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
                {/* <Row> */}
                {/* <Col className="text-center"> */}
                {/* <iframe
                      width="320"
                      height="240"
                      src={data.attributes.video_url}
                    ></iframe> */}
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
                {/* </Col> */}
                {/* </Row> */}

                <CardBody>
                  <Row>
                    <Col md="10" xs="10">
                      <CardTitle
                        tag="h5"
                        className="cp"
                        onClick={(e) => {
                          history.push(`/recipie/${data.id}`);
                        }}
                      >
                        {data.attributes.title}
                      </CardTitle>
                    </Col>
                    <Col md="2" xs="2">
                      <img
                        src={shareIcon}
                        alt="share"
                        className="shareIcon cp"
                        id={`rec${data.id}`}
                        onClick={showShareOptionOnRecipie}
                      />
                      <UncontrolledPopover
                        placement="bottom"
                        // isOpen={data.id == selectedIdRecipie ? true : false}
                        target={`rec${data.id}`}
                        // toggle={() => {
                        //   showShareOptionOnRecipie(data.id);
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
    )
  };

  const getCategoryListData = () => {
    return (
      categoryList.data &&
      categoryList.data.map((data, index) => {
        return (
          <NavItem className="cp recipie-type" key={index}>
            <NavLink
              onClick={() => {
                // getRecipieListData(data.attributes.title);
                setCheckCategory(data.attributes.title)
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
  };

  const getOtherUses = () => {

    return (
      fruitDetailData &&
      fruitDetailData.attributes &&
      fruitDetailData.attributes.other_uses.data.map((data, index) => {
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
    <div className="w-consume">
      <Row>
        <Col className="section text-center">
          <h2 className="title productName productName-way title_name">
            Ways<span className="wayTo"> to</span> <span>consume</span>
          </h2>
          <br />
          <div className="mt-3 mb-3 r-btn-sec ">
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
                  "text-capitalize recipie-type",
                  showData == true ? `health-dot` : ``
                )}
              >
                Recipies
              </span>
            </Button>

            &nbsp;  <Button
              type="button"
              onClick={() => {handleToggle(false);setSelectedIdRecipie(null);}}
              className={classnames(
                "btn-round ml-1 cp",
                showData == false ? `selectedContentBtn` : `nutrient`
              )}
            >
              <span
                className={classnames(
                  "text-capitalize recipie-type",
                  showData == false ? `health-dot` : ``
                )}
              >
                Other Uses
              </span>
            </Button>
          </div>

          {showData ? (
            <>
              <hr className="way-hr" / >
              <Navbar
                expand="lg"
                style={{ justifyContent: "center", boxShadow: "none" }}
              >
                <Nav navbar className="category">
                  {getCategoryListData()}
                </Nav>
              </Navbar>
            </>
          ) : null}
        </Col>
      </Row>
      {showData ? (
        <Row className="recipie"> {getRecipieListData()}</Row>
      ) : (
        <Row className="recipie"> {getOtherUses()} </Row>
      )}
      <Row className="rec-vmore">
        <Col className="section text-center">
          <Button
            className="btn-round text-capitalize v-more"
            color="info"
            onClick={(e) => {
              history.push(`/recipies`);
              setMenu('recipie')
            }}
          >
            View More
          </Button>
        </Col>
      </Row>
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
    recipieList: state.recipieReducer.recipieList,
    categoryList: state.commonReducer.categoryList,
    fruitDetailData: state.fruitDetailReducer.fruitDetailData,
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
    setMenu: (menu) => {
      dispatch(setSelectedMenu(menu));
    },
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(WayToConsume);
