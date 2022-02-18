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
  UncontrolledPopover
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
import moment from 'moment';
import { getBlogDetailData } from "../../redux/actions/blogAction";
import { serverUrl, hostName } from "config/config";
import shareIcon from "../../assets/img/shareIcon.png";
import backArrow from '../../assets/img/backArrow.png';

const BlogDetail = ({
  getBlogDetails,
  blogDetailData,
  blogSimilarData,
  history,
}) => {
  let { id } = useParams();
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
    getBlogDetails(id);
  }, [id]);

  const getSimilarBlogListData = () => {
    return (
      blogSimilarData.data &&
      blogSimilarData.data
        .filter((sData, i) => {
          if (blogDetailData.data.id != sData.id) return sData;
        })
        .map((data, index) => {
          // if (index < 3) {
            return (
              <Col key={index}>
                <Card>
                  <Row>
                    <CardImg
                      alt="Card image cap"
                      src={`${serverUrl}${
                        data.attributes.image.data[0].attributes &&
                        data.attributes.image.data[0].attributes.formats
                          .thumbnail.url
                      }`}
                      top
                      width="100%"
                      className="cardVideo blog-d-img"
                    />
                  </Row>
                  <CardBody>
                    <Row>
                      <Col md="10" xs="10">
                        <CardTitle
                          tag="h5"
                          onClick={() => history.push(`/blog/${data.id}`)}
                        >
                          {data.attributes.title}
                        </CardTitle>
                      </Col>
                      <Col md="2" xs="2">
                        <img
                          src={shareIcon}
                          alt="share"
                          id={`blog${data.id}`}
                          className="shareIcon cp"
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
                  </CardBody>
                 <span className="publish-date">{moment(data.attributes.publishedAt).format("Do MMM YYYY")}</span>
                  
                </Card>
              </Col>
            );
          // }
        })
    );
  };

  return (
    <Container className="mt-5 blog-page">
      <div className="recipie-back "></div>
      <Row>
      <h2 className="title productName back_from-recipe">
           <span className="" onClick={()=> history.goBack()}><img src={backArrow} alt="go back" /></span>
          </h2>
        <Col md="5"  className="blog-d-head">
          <Row>
          <h2 className="title productName R-name detailTitle-text">
            {blogDetailData.data && blogDetailData.data.attributes.title}
            <img
            src={shareIcon}
            alt="share"
            id={`blogIndividualMob${
              blogDetailData.data && blogDetailData.data.id
            }`}
            className="shareIcon share-detail cp"
            onClick={showShareOptionIndividual}
          />
          <UncontrolledPopover
            placement="bottom"
            // isOpen={shareIndividual}
            target={`blogIndividualMob${
              blogDetailData.data && blogDetailData.data.id
            }`}
            // toggle={() => {
            //   showShareOptionIndividual();
            // }}
            trigger="legacy"
          >
            <PopoverBody>
              <FacebookShareButton
                url={`${hostName}/blog/${
                  blogDetailData.data && blogDetailData.data.id
                }`}
              >
                <FacebookIcon size={26} round />
              </FacebookShareButton>
              <InstapaperShareButton
                url={`${hostName}/blog/${
                  blogDetailData.data && blogDetailData.data.id
                }`}
              >
                <InstapaperIcon size={26} round />
              </InstapaperShareButton>
              <WhatsappShareButton
                url={`${hostName}/blog/${
                  blogDetailData.data && blogDetailData.data.id
                }`}
              >
                <WhatsappIcon size={26} round />
              </WhatsappShareButton>
            </PopoverBody>
          </UncontrolledPopover>
          </h2>
          </Row>
         
          <Row>
            <Col>
            <span className="publish-date b-publishDate">{moment(blogDetailData.data && blogDetailData.data.attributes.publishedAt).format("Do MMM YYYY")}</span>
            </Col>
            <Col>
            <img
            src={shareIcon}
            alt="share"
            id={`blogIndividual${
              blogDetailData.data && blogDetailData.data.id
            }`}
            className="shareIcon shareIcon-xs cp"
            onClick={showShareOptionIndividual}
          />
          <UncontrolledPopover
            placement="bottom"
            // isOpen={shareIndividual}
            target={`blogIndividual${
              blogDetailData.data && blogDetailData.data.id
            }`}
            // toggle={() => {
            //   showShareOptionIndividual();
            // }}
            trigger="legacy"
          >
            <PopoverBody>
              <FacebookShareButton
                url={`${hostName}/blog/${
                  blogDetailData.data && blogDetailData.data.id
                }`}
              >
                <FacebookIcon size={26} round />
              </FacebookShareButton>
              <InstapaperShareButton
                url={`${hostName}/blog/${
                  blogDetailData.data && blogDetailData.data.id
                }`}
              >
                <InstapaperIcon size={26} round />
              </InstapaperShareButton>
              <WhatsappShareButton
                url={`${hostName}/blog/${
                  blogDetailData.data && blogDetailData.data.id
                }`}
              >
                <WhatsappIcon size={26} round />
              </WhatsappShareButton>
            </PopoverBody>
          </UncontrolledPopover>
            </Col>
          </Row>
         
        </Col>
        <Col md="7" className="blog-d-img">
          <Card>
            <CardImg
              alt="Card cap"
              src={`${serverUrl}${
                blogDetailData.data &&
                blogDetailData.data.attributes.image.data[0].attributes.url
              }`}
              top
              width="100%"
              className="cardVideo"
              style={{ height: "200px" }}
            />
          </Card>
        </Col>
      </Row>
      <Row className="process blog-d-pdate">
        <Col>
          <p
            dangerouslySetInnerHTML={{
              __html:
                blogDetailData.data && blogDetailData.data.attributes.content,
            }}
          />
          <br />
          <br />
          <hr className="way-hr" />
        </Col>
      </Row>
      <Row>
        <Col className="people-read">
          <h2 className="title productName text-center">
            People{" "}
            <span>
              Who Read This<span > Also Read</span>{" "}
            </span>
          </h2>
          <br />
        </Col>
      </Row>
      {blogSimilarData && blogSimilarData.data && (
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={
            (isMobile == false &&
              blogSimilarData?.data?.filter((sData, i) => {
          if (blogDetailData.data.id != sData.id) return sData;
        })?.length >
                3) ||
            (isMobile == true &&
              blogSimilarData?.data?.filter((sData, i) => {
                if (blogDetailData.data.id != sData.id) return sData;
              })?.length > 1) ? true : false
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
          className="blog-d"
        >
          {getSimilarBlogListData()}
        </Carousel>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    blogDetailData: state.blogReducer.blogDetailData,
    blogSimilarData: state.blogReducer.blogSimilarData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBlogDetails: (id) => {
      dispatch(getBlogDetailData(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);
