import React from "react";

import { Container, Card, Accordion } from "react-bootstrap";

import related_cocahes_img_1 from "../../../assets/images/related_cocahes_img_1.png";

import styles from "../css/CoachDetails.module.css";
import Image from "next/image";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const RelatedCoaches = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3.3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
    },
  };

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

  return (
    <>
      <div className={styles.faq_section}>
        <Container className="position-relative">
          <h1 className="section_title d-none d-lg-block d-md-block">Recommended coaches around you</h1>
          <h1 className={styles.mob_title}>Coaches around you</h1>
        </Container>

        <Container className="position-relative">
          <Carousel
            responsive={responsive}
            showDots={true}
            customTransition="all .6s"
            transitionDuration={500}
            removeArrowOnDeviceType={["superLargeDesktop","desktop","tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            customButtonGroup={<ButtonGroup />}
            renderButtonGroupOutside={true}
            customDot={<CustomDot />}
            renderDotsOutside={true}
          >
            <div className="mx-2">
              <Card className={styles.card}>
                <div className={styles.card_image}>
                  <Image src={related_cocahes_img_1} />
                </div>
                <Card.Body>
                  <div className={styles.partner_title}>
                    <Card.Title className={styles.card_title}>
                      Ronnie Rozario
                    </Card.Title>
                    <span></span>
                  </div>
                  <div>
                    <Card.Title className={styles.partner_description}>
                      Football Coach
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="mx-2">
              <Card className={styles.card}>
                <div className={styles.card_image}>
                  <Image src={related_cocahes_img_1} />
                </div>

                <Card.Body>
                  <div className={styles.partner_title}>
                    <Card.Title className={styles.card_title}>
                      Ronnie Rozario
                    </Card.Title>
                    <span></span>
                  </div>
                  <div>
                    <Card.Title className={styles.partner_description}>
                      Football Coach
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="mx-2">
              <Card className={styles.card}>
                <div className={styles.card_image}>
                  <Image src={related_cocahes_img_1} />
                </div>

                <Card.Body>
                  <div className={styles.partner_title}>
                    <Card.Title className={styles.card_title}>
                      Ronnie Rozario
                    </Card.Title>
                    <span></span>
                  </div>
                  <div>
                    <Card.Title className={styles.partner_description}>
                      Football Coach
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="mx-2">
              <Card className={styles.card}>
                <div className={styles.card_image}>
                  <Image src={related_cocahes_img_1} />
                </div>

                <Card.Body>
                  <div className={styles.partner_title}>
                    <Card.Title className={styles.card_title}>
                      Ronnie Rozario
                    </Card.Title>
                    <span></span>
                  </div>
                  <div>
                    <Card.Title className={styles.partner_description}>
                      Football Coach
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </div>
            
          </Carousel>
        </Container>
      </div>
    </>
  );
};

export default RelatedCoaches;
