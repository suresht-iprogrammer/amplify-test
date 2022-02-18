import React, { useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardImg,
  CardBody,
  Badge,
} from "reactstrap";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter, useParams } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import happyFruitsImg from "../../assets/img/happyfruits.png";
import { getProductList } from "redux/actions/fruitDetailAction";
import { serverUrl } from "config/config";

const FruitsList = ({ getProducts, productList, history }) => {
  let { id } = useParams();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3,
    },
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getFruitListData = () => {
    return (
      productList.data &&
      productList.data
        .filter((list, i) => {
          if (list.id != id) {
            return list;
          }
        })
        .map((data, index) => {
          return (
            <Col
              onClick={() => {
                history.push(`/?code=${data.attributes.default_code}`);
              }}
              className="cp"
              key={index}
            >
              <Card>
                <br />
                <Row className="text-center">
                  <Col>
                    {data.attributes.seasonal_special_flag && (
                      <Badge pill>Seasonal special</Badge>
                    )}
                  </Col>
                </Row>
                <br />

                <CardImg
                  alt="Card cap"
                  src={`${serverUrl}${data.attributes.product_image.data.attributes.url}`}
                  top
                  width="100%"
                />
                <CardBody className="text-center">
                  <CardTitle tag="h5">
                    {data.attributes.product_short_name}
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
          );
        })
    );
  };

  return (
    <div className="meet-f meet-back meet-f-back">
      <Row className="">
        <Col className="text-center">
          <img src={happyFruitsImg} alt="Happy Fruits logo" />
          <h2 className="title productName title_name">
            Meet my <span>friends</span>
          </h2>
        </Col>
      </Row>
      {productList && productList.data && (
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={
            (isMobile == false &&
              productList?.data?.filter((list, i) => {
                if (list.id != id) {
                  return list;
                }
              })?.length > 3) ||
            (isMobile == true &&
              productList?.data?.filter((list, i) => {
                if (list.id != id) {
                  return list;
                }
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
          className="row_top meet-slider-m"
        >
          {getFruitListData()}
        </Carousel>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productList: state.fruitDetailReducer.productList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch(getProductList());
    },
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(FruitsList);
