import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card, Container } from "react-bootstrap";
import { getPartnerListData } from "../../../redux/actions/partnerAction";
import styles from "../css/Partner.module.css";
import partner1 from "../../../assets/images/Partner1.png";
import partner2 from "../../../assets/images/Partner2.png";
import cricketlogo from "../../../assets/images/Justcricketlogo.png";
import Images from "next/image";
import { partnerTypeCoachId } from "../../../config/constant";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Partner = ({ getPartners, partnerListData }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1400 },
      items: 2.5,
    },
    desktop: {
      breakpoint: { max: 1399, min: 1024 },
      items: 2.3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.2,
    },
  };

  useEffect(() => {
    getPartners();
  }, []);

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // const carouselItems = [CarouselItem1, CaourselItem2, CarouselItem3];
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        className={active ? "active" : "inactive"}
        onClick={() => onClick()}
      >
        {/* {React.Children.toArray(carouselItems)[index]} */}
      </button>
    );
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group">
        <button
          className={currentSlide === 0 ? "disable me-2" : "me-2"}
          onClick={() => previous()}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="xs"
            className={styles.arrowIcon}
            color="#000"
          />
        </button>
        <button onClick={() => next()}>
          <FontAwesomeIcon
            icon={faChevronRight}
            size="xs"
            className={styles.arrowIcon}
            color="#000"
          />
        </button>
        {/* <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree> */}
      </div>
    );
  };

  const getPartnerListSliderData = () => {
    return partnerListData.map((partner, index) => {
      // if (index < 6) {
      return (
        <div>
          <div className="mx-2" key={index}>
            <Card className={styles.card}>
              <div className={styles.card_image}>
                {/* <Images variant="top" src={partner1} height={"100%"} /> */}
                <img
                  variant="top"
                  src={`https://spolto-assets.s3.ap-south-1.amazonaws.com/assets/masters/partners/profile/${partner.profile_image}`}
                  height={"100%"}
                  layout="fill"
                />
              </div>

              <Card.Body>
                <div className={styles.partner_title}>
                  <Card.Title className={styles.card_title}>
                    {partner.title}
                    <div>
                      <Card.Title className={styles.partner_description}>
                        {partner.sub_title}
                      </Card.Title>
                    </div>
                  </Card.Title>

                  <span className={styles.patner_sublogo}>
                    {/* <Images variant="top" src={cricketlogo} /> */}

                    {partner.partner_types_id != partnerTypeCoachId && (
                      <img
                        variant="top"
                        src={`https://spolto-assets.s3.ap-south-1.amazonaws.com/assets/masters/partners/logo/${partner.logo}`}
                        height={"100%"}
                        layout="fill"
                      />
                    )}
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      );
      // }
    });
  };

  return (
    <section className={styles.partner_wrapper}>
      <Container>
        <h3 className="section_title">Partners</h3>
      </Container>
      <div className="w_90 partner_w_90">
        <Container className="position-relative mob_padding_right">
          <Carousel
            responsive={responsive}
            showDots={true}
            customTransition="all .6s"
            transitionDuration={500}
            removeArrowOnDeviceType={[
              "superLargeDesktop",
              "desktop",
              "tablet",
              "mobile",
            ]}
            dotListClass="custom-dot-list-style"
            customButtonGroup={<ButtonGroup />}
            renderButtonGroupOutside={true}
            customDot={<CustomDot />}
            renderDotsOutside={true}
            swipeable={true}
          >
            {getPartnerListSliderData()}

            {/* <div className="mx-2">
            <Card className={styles.card}>
              <div className={styles.card_image}>
                <Images variant="top" src={partner2} height={"100%"} />
              </div>

              <Card.Body>
                <div className={styles.partner_title}>
                  <Card.Title className={styles.card_title}>
                    LSBI Badminton
                  </Card.Title>
                  <span>
                    <Images variant="top" src={cricketlogo} />
                  </span>
                </div>
                <div>
                  <Card.Title className={styles.partner_description}>
                    Badminton Academy
                  </Card.Title>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="mx-2">
            <Card className={styles.card}>
              <div className={styles.card_image}>
                <Images variant="top" src={partner1} height={"100%"} />
              </div>

              <Card.Body>
                <div className={styles.partner_title}>
                  <Card.Title className={styles.card_title}>
                    LSBI Badminton
                  </Card.Title>
                  <span>
                    <Images variant="top" src={cricketlogo} />
                  </span>
                </div>
                <div>
                  <Card.Title className={styles.partner_description}>
                    Badminton Academy
                  </Card.Title>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="mx-2">
            <Card className={styles.card}>
              <div className={styles.card_image}>
                <Images variant="top" src={partner2} height={"100%"} />
              </div>

              <Card.Body>
                <div className={styles.partner_title}>
                  <Card.Title className={styles.card_title}>
                    LSBI Badminton
                  </Card.Title>
                  <span>
                    <Images variant="top" src={cricketlogo} />
                  </span>
                </div>
                <div>
                  <Card.Title className={styles.partner_description}>
                    Badminton Academy
                  </Card.Title>
                </div>
              </Card.Body>
            </Card>
          </div> */}
          </Carousel>
          {/* <Row xs={1} md={1} lg={3}>
          <Col>
            <Card className={styles.card}>
              <div className={styles.card_image}>
                <Images variant="top" src={partner1} height={'100%'} />
              </div>
              
              <Card.Body>
                <div className={styles.partner_title}>
                <Card.Title className={styles.card_title}>Justcricket Academy</Card.Title> 
                <Images variant="top" src={cricketlogo}/>
                </div>
                <div>
                <Card.Title  className={styles.partner_description}>Cricket Academy</Card.Title>
                </div>
            </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card}>
              <div className={styles.card_image}>
                <Images variant="top" src={partner2} height={'100%'} />
              </div>

              <Card.Body>
                <div className={styles.partner_title}>
                  <Card.Title className={styles.card_title}>LSBI Badminton</Card.Title> 
                  <Images variant="top" src={cricketlogo}/>
                </div>
                <div>
                  <Card.Title  className={styles.partner_description}>Badminton Academy</Card.Title>
                </div>
            </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card}>
              <div className={styles.card_image}>
                <Images variant="top" src={partner1} height={'100%'} />
              </div>
              <Card.Body>
                <div className={styles.partner_title}>
                  <Card.Title className={styles.card_title}>NJ Basketball Academy</Card.Title> 
                  <Images variant="top" src={cricketlogo}/>
                </div>
                <div>
                <Card.Title >Basketball Academy</Card.Title>
                </div>
            </Card.Body>
            </Card>
          </Col>
        </Row> */}
        </Container>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    partnerListData: state.partnerReducer.partnerListData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPartners: () => {
      dispatch(getPartnerListData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Partner);

// export async function getServerSideProps() {
// getSports();
// getPartnerTypes();
// getSportsListData();
// }
