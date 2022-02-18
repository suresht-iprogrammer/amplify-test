import React from "react";
import {
  Row,
  Col,
  Card,
  CardText,
  CardTitle,
  CardBody,
  CardSubtitle,
} from "reactstrap";
import { connect } from "react-redux";
import StarRatings from "react-star-ratings";
import { isMobile } from "react-device-detect";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { serverUrl } from "config/config";

const FeatureContent = ({ fruitDetailData }) => {
  var isShowDotFC = null;
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

  // if (
  //   (isMobile == false &&
  //   fruitDetailData?.attributes?.customer_reviews?.data?.length > 3) || (isMobile == true &&
  //     fruitDetailData?.attributes?.customer_reviews?.data?.length > 1)
  // ) {
  //   isShowDotFC = true;
  // } else {
  //   isShowDotFC = false;
  // }

  const getCustomerReviewsList = () => {
    return (
      fruitDetailData &&
      fruitDetailData.attributes &&
      fruitDetailData.attributes.customer_reviews &&
      fruitDetailData.attributes.customer_reviews.data.map((data, index) => {
        return (
          <Col key={index}>
            <Card>
              <CardBody>
                <Row>
                  <Col md="3">
                    <img
                      alt=""
                      src={`${serverUrl}${data.attributes.customer_image.data.attributes.url}`}
                      top
                      width="100%"
                      style={{ borderRadius: "50%" }}
                    />
                  </Col>
                  <Col md="9">
                    <CardTitle tag="h5">
                      {data.attributes.customer_name}
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted ratingStarSize"
                      tag="h6"
                    >
                      <StarRatings
                        rating={data.attributes.rating}
                        starRatedColor="rgba(255, 189, 0, 1)"
                        numberOfStars={5}
                        name="rating"
                      />
                    </CardSubtitle>
                  </Col>
                </Row>
                <CardText>{data.attributes.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        );
      })
    );
  };

  return (
    <div className="meet-f feature">
      <Row className="f-content">
        <Col className="section text-center">
          <h2 className="title productName f-productname">Feature <span>Content</span></h2>
          <br />
        </Col>
      </Row>
      {fruitDetailData &&
        fruitDetailData.attributes &&
        fruitDetailData.attributes.customer_reviews && (
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={
              (isMobile == false &&
                fruitDetailData?.attributes?.customer_reviews?.data?.length >
                  3) ||
              (isMobile == true &&
                fruitDetailData?.attributes?.customer_reviews?.data?.length > 1) ? true : false
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
            className="feature_slider row_top"
          >
            {getCustomerReviewsList()}
          </Carousel>
        )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fruitDetailData: state.fruitDetailReducer.fruitDetailData,
  };
};

export default connect(mapStateToProps, null)(FeatureContent);
