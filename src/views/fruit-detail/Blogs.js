import React, { useEffect, useState } from "react";
import {
  Button,
  Row,
  Col,
  Card,
  CardTitle,
  CardImg,
  CardBody,
  Popover,
  PopoverBody,
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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import moment from "moment";
import { isMobile } from "react-device-detect";
import shareIcon from "../../assets/img/shareIcon.png";
import { getBlogList } from "../../redux/actions/blogAction";
import { serverUrl, hostName } from "config/config";

const Blogs = ({ blogList, getBlogList, history, fruitDetailData }) => {
  const [selectedId, setSelectedId] = useState(null);

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

  const getBlogListData = () => {
    return (
      fruitDetailData &&
      fruitDetailData.attributes &&
      fruitDetailData.attributes.blogs.data.map((data, index) => {
          return (
            <Col key={index} className="cardZindex">
              <Card>
                <CardImg
                  alt="Card cap"
                  src={`${serverUrl}${data.attributes.image.data[0].attributes.formats.thumbnail.url}
                  `}
                  top
                  width="100%"
                  className="cardVideo"
                />
                <CardBody style={{marginTop: "-25px"}}>
                  <Row>
                    <Col md="10" xs="12">
                      <CardTitle
                        tag="h5"
                        onClick={() => {
                          history.push(`/blog/${data.id}`);
                        }}
                      >
                        {data.attributes.title}
                      </CardTitle>
                    </Col>
                    <Col md="2">
                  <img
                        src={shareIcon}
                        alt="share"
                        id={`blog${data.id}`}
                        className="shareIcon cp shareicon-blog"
                        onClick={showShareOption}
                      />
                      <UncontrolledPopover
                        placement="bottom"
                        // isOpen={data.id == selectedId ? true : false}
                        target={`blog${data.id}`}
                        // toggle={() => {
                        //   showShareOption(data.id);
                        // }}
                        trigger="legacy"
                      >
                        <PopoverBody>
                          <FacebookShareButton
                            url={`${hostName}/blog/${data.id}`}
                          >
                            <FacebookIcon size={26} round />
                          </FacebookShareButton>
                          <InstapaperShareButton
                            url={`${hostName}/blog/${data.id}`}
                          >
                            <InstapaperIcon size={26} round />
                          </InstapaperShareButton>
                          <WhatsappShareButton
                            url={`${hostName}/blog/${data.id}`}
                          >
                            <WhatsappIcon size={26} round />
                          </WhatsappShareButton>
                        </PopoverBody>
                      </UncontrolledPopover>
                    </Col>
                  </Row>
                  <span className="publish-date b-pblish-d stick-to-bottom">
                    {moment(data.attributes.publishedAt).format("Do MMM YYYY")}
                  </span>
                </CardBody>
              </Card>
            </Col>
          );
      })
    );
  };

  useEffect(() => {
    // getBlogList();
  }, []);

  return (
    <div className="blog-d">
      <Row>
        <Col className="text-center">
          <h2 className="title productName b-name title_name">Blogs</h2>
        </Col>
      </Row>

      {fruitDetailData &&
        fruitDetailData.attributes &&
        fruitDetailData.attributes.blogs && (
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={
              (isMobile == false &&
                fruitDetailData?.attributes?.blogs?.data?.length >
                  3) ||
              (isMobile == true &&
                fruitDetailData?.attributes?.blogs?.data?.length > 1) ? true : false
            }
            responsive={responsive}
            ssr={true}
            // infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="blog-slider row_top"
          >
            {getBlogListData()}
          </Carousel>
        )}

      {/* <Row>
        <Col className="section text-center">
          <Button
            className="btn-round v-more"
            color="info"
            onClick={() => {history.push('/blogs')}}
          >
            View More
          </Button>
        </Col>
      </Row> */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    blogList: state.blogReducer.blogList,
    fruitDetailData: state.fruitDetailReducer.fruitDetailData,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { getBlogList })
)(Blogs);
