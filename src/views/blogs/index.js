import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
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
  DropdownToggle,
  DropdownItem,
  Dropdown,
  DropdownMenu,
  UncontrolledDropdown,
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
import moment from "moment";
import shareIcon from "../../assets/img/shareIcon.png";
import filterIcon from "../../assets/img/filter.png";
import sortIcon from "../../assets/img/sort.png";
import { getBlogList, getFilterBlogList } from "../../redux/actions/blogAction";
import { serverUrl, hostName } from "config/config";
import classnames from "classnames";

const Blogs = ({
  history,
  blogList,
  getBlogs,
  getFilterBlogs,
  blogFilterData,
  productList,
}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedFilterBy, setSelectedFilterBy] = useState("All");
  const [selectedSortBy, setSelectedSortBy] = useState("Sort by");
  const [isArrowFilterBy, setIsArrowFilterBy] = useState(false);
  const [isArrowSortBy, setIsArrowSortBy] = useState(false);

  const showShareOption = (id) => {
    setSelectedId(id);
  };

  useEffect(() => {
    getBlogs();
    setIsArrowFilterBy(false);
    setIsArrowSortBy(false);

    getFilterBlogList(selectedFilterBy, selectedSortBy)
  }, []);

  const getBlogListData = () => {
    // let blogArray = [];
    // if (selectedFilterBy != "All") {
    //   blogArray = blogFilterData;
    // } else {
    //   blogArray = blogList;
    // }


    return (
      blogFilterData.data &&
      blogFilterData.data
        .filter((wpData, i) => {
          if (
            !wpData.attributes.popularBlogs ||
            wpData.attributes.popularBlogs == null
          )
            return wpData;
        })
        .map((data, index) => {
          return (
            <Col md="4" key={index}>
              <Card>
                <Row>
                  <CardImg
                    alt="Card image cap"
                    src={`${serverUrl}${
                      data.attributes.image.data[0].attributes &&
                      data.attributes.image.data[0].attributes.formats.thumbnail
                        .url
                    }`}
                    top
                    width="100%"
                    className="cardVideo"
                  />
                </Row>
                <CardBody>
                  <Row>
                    <Col md="10" xs="10">
                      <CardTitle
                        tag="h5"
                        className="cp"
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
                        className="shareIcon shareicon-blog cp"
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
                <span className="publish-date">
                    {moment(data.attributes.publishedAt).format("Do MMM YYYY")}
                  </span>
              </Card>
            </Col>
          );
        })
    );
  };

  const getPopularBlogListData = () => {
    return (
      blogList.data &&
      blogList.data
        .filter((pData, i) => {
          if (pData.attributes.popularBlogs) return pData;
        })
        .map((data, index) => {
          if (index == 0) {
            return (
              <Col md="6" key={index}>
                <Card>
                  <Row>
                    <CardImg
                      alt="Card cap"
                      src={`${serverUrl}${
                        data.attributes.image.data[0].attributes &&
                        data.attributes.image.data[0].attributes.formats
                          .thumbnail.url
                      }`}
                      top
                      width="100%"
                      className="cardVideo popular-l-img"
                      style={{ height: "180px" }}
                    />
                  </Row>
                  <CardBody>
                    <Row>
                      <Col md="10" xs="10">
                        <CardTitle
                          tag="h5"
                          className="cp"
                          onClick={() => history.push(`/blog/${data.id}`)}
                        >
                          {data.attributes.title}
                        </CardTitle>
                      </Col>
                      <Col md="2" xs="2">
                        <img
                          src={shareIcon}
                          alt="share"
                          id={`popular${data.id}`}
                          className="shareIcon cp"
                          onClick={showShareOption}
                        />
                        <UncontrolledPopover
                          placement="bottom"
                          // isOpen={data.id == selectedId ? true : false}
                          target={`popular${data.id}`}
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
                    <span className="publish-date">
                      {moment(data.attributes.publishedAt).format(
                        "Do MMM YYYY"
                      )}
                    </span>
                  </CardBody>
                </Card>
              </Col>
            );
          }
        })
    );
  };

  const getPopularBlogListDataRight = () => {
    return (
      blogList.data &&
      blogList.data
        .filter((pData, i) => {
          if (pData.attributes.popularBlogs) return pData;
        })
        .map((data, index) => {
          if (index > 0) {
            return (
              <Col md="12" key={index} >
                <Card>
                  <CardBody>
                    <Row>
                      <Col md="4" className="popular-r">
                        <CardImg
                          alt="Card image cap"
                          src={`${serverUrl}${
                            data.attributes.image.data[0].attributes &&
                            data.attributes.image.data[0].attributes.formats
                              .thumbnail.url
                          }`}
                          top
                          width="200px"
                          className="cardVideo popular-r-img"
                          style={{ height: "auto" }}
                        />
                      </Col>
                      <Col md="6" xs="10">
                        <CardTitle
                          tag="h5"
                          className="cp popular-Rdata"
                          onClick={() => history.push(`/blog/${data.id}`)}
                        >
                          {data.attributes.title}
                        </CardTitle>
                        <span className="publish-date popular_date">
                          {moment(data.attributes.publishedAt).format(
                            "Do MMM YYYY"
                          )}
                        </span> 
                      </Col>
                      <Col md="2" xs="2">
                        <img
                          src={shareIcon}
                          alt="share"
                          id={`popularRight${data.id}`}
                          className="shareIcon cp popular-Rdata"
                          onClick={showShareOption}
                        />
                        <UncontrolledPopover
                          placement="bottom"
                          // isOpen={data.id == selectedId ? true : false}
                          target={`popularRight${data.id}`}
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
                </Card>
              </Col>
            );
          }
        })
    );
  };

  useEffect(() => {
    getFilterBlogs(selectedFilterBy, selectedSortBy);
    setSelectedId(null);
  }, [selectedFilterBy, selectedSortBy]);

  const getFilterByDropdownList = () => {
    return (
      productList.data &&
      productList.data.map((data, index) => {
        return (
          <DropdownItem
            onClick={(e) =>
              setSelectedFilterBy(data.attributes.product_short_name)
            }
            key={index}
          >
            <div>{data.attributes.product_short_name}</div>
          </DropdownItem>
        );
      })
    );
  };

  return (
    <Container className="blog-page">
       <div className="rDetail_back bDetail_back"></div>
      <div className="recipie-back recipie-Dback"></div>
      <Row>
        <Col className="">
        <h2 className="productName p-name-b mb-3">
            Blogs
          </h2>
          <h2 className="productName mb-3">
            Popular <span>Blogs</span>
          </h2>
        </Col>
      </Row>
      <Row className="recipie b-recipie">
        {getPopularBlogListData()}
        <Col md="6" className="popular-r-block">
          <Row>{getPopularBlogListDataRight()}</Row>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col md="6" xs="12">
          <h2 className="productName mb-3">
            All <span>Blogs</span>
          </h2>
        </Col>
        <Col md="3" xs="6" className="mb-3 filter_dropdwn">
        <p className="productName filter-txt"><img
                          src={filterIcon}
                          alt="Filter"
                          className=""
                        />&nbsp;Filter By &nbsp;</p>
          <Dropdown
          isOpen={isArrowFilterBy}
          toggle={() => setIsArrowFilterBy(!isArrowFilterBy)}>
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              color="muted"
              data-toggle="dropdown"
              id="dropdownMenuButton"
              type="button"
              // className=""
              className={`${classnames(isArrowFilterBy ? "caret-down" : "caret-up")} filer-drop-btn text-capitalize caretfilter`}
            >
              {selectedFilterBy}
            </DropdownToggle>

            <DropdownMenu aria-labelledby="dropdownMenuButton">
              <DropdownItem
                onClick={(e) => setSelectedFilterBy("All")}
              >
                <div>All</div>
              </DropdownItem>
              {getFilterByDropdownList()}
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col md="3"  xs="6" className="mb-3 filter_dropdwn filter-row-m">
        <p className="productName"><img
                          src={sortIcon}
                          alt="Filter"
                          className="sort-drop-btn"
                        /></p>
          <Dropdown  isOpen={isArrowSortBy}
          toggle={() => setIsArrowSortBy(!isArrowSortBy)}>
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              color="muted"
              data-toggle="dropdown"
              id="dropdownMenuButton"
              type="button"
              // className="sort-drop-btn text-capitalize"
              className={`${classnames(isArrowSortBy ? "caret-down" : "caret-up")} sort-drop-btn`}
            >
              {selectedSortBy}
            </DropdownToggle>
           
            <DropdownMenu aria-labelledby="dropdownMenuButton">
              <DropdownItem>
                <div
                  onClick={() => {
                    setSelectedSortBy("Sort by");
                  }}
                >
                  Sort by
                </div>
              </DropdownItem>
              <DropdownItem>
                <div
                  onClick={() => {
                    setSelectedSortBy("Newest");
                  }}
                >
                  Newest
                </div>
              </DropdownItem>
              <DropdownItem>
                <div
                  onClick={() => {
                    setSelectedSortBy("Oldest");
                  }}
                >
                  Oldest
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="blog-d blog-p">{getBlogListData()}</Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    blogList: state.blogReducer.blogList,
    blogFilterData: state.blogReducer.blogFilterData,
    productList: state.fruitDetailReducer.productList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBlogs: () => {
      dispatch(getBlogList());
    },
    getFilterBlogs: (filterBy, sortBy) => {
      dispatch(getFilterBlogList(filterBy, sortBy));
    },
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Blogs);
