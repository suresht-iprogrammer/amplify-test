import React from 'react';
import styles from '../css/Coach.module.css';
import coachImg from '../../../assets/images/Coach.png';
import coach1Img from '../../../assets/images/coach1.jpg';
import coach2Img from '../../../assets/images/coach2.jpg';
import Images from 'next/image';
import { Container,Card, Badge } from 'react-bootstrap';

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Coach() {


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1.2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1.2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1.2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1.2
        }
      };

      const CustomDot = ({ onClick, ...rest }) => {
        const {
          onMove,
          index,
          active,
          carouselState: { currentSlide, deviceType }
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
        const { carouselState: { currentSlide } } = rest;
        return (
          <div className="carousel-button-group">
            <button className={currentSlide === 0 ? 'disable me-2' : 'me-2'} onClick={() => previous()} >
              <FontAwesomeIcon icon={faChevronLeft} size="xs" className={styles.arrowIcon} color='#000' />
            </button>
            <button  onClick={() => next()}>
              <FontAwesomeIcon icon={faChevronRight} size="xs" className={styles.arrowIcon} color='#000' />
            </button>
            {/* <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree> */}
          </div>
        );
      };


  return (
        <section className={styles.coachsection_wrapper}>
            <Container>
        <h3 className="section_title">Meet our coaches</h3>
            </Container>

            <div className='w_90'>
            <Container className='position-relative mob_padding_right'>
            <Carousel responsive={responsive} showDots={true} customTransition="all .6s"
  transitionDuration={500} removeArrowOnDeviceType={["superLargeDesktop","desktop","tablet", "mobile"]} dotListClass="custom-dot-list-style" customButtonGroup={<ButtonGroup />} renderButtonGroupOutside={true} customDot={<CustomDot />} renderDotsOutside={true} swipeable={true}
  >
          <div className='mx-2'>
            <Card className={styles.card}>
              <div className={styles.card_image}>
                <Images variant="top" src={coach1Img} height={'100%'} alt='Coach'/>
                <div className={styles.coachTitle_wrapper} >
                  <h3 className={styles.coach_title} >Prakhar Ankur</h3>
                  <h5 className={styles.coach_subtitle}>Cricket Coach</h5>
                  <Badge pill className={styles.coach_btn}>Meet Prakhar</Badge>
                </div>
              </div>
              
            </Card>
          </div>
          <div className='mx-2'>
            <Card className={styles.card}>
              <div className={styles.card_image}>
                <Images variant="top" src={coach2Img} height={'100%'} alt='Coach'/>
                <div className={styles.coachTitle_wrapper} >
                  <h3 className={styles.coach_title} >Prakhar Ankur</h3>
                  <h5 className={styles.coach_subtitle}>Cricket Coach</h5>
                  <Badge pill className={styles.coach_btn}>Meet Prakhar</Badge>
                </div>
              </div>
              
            </Card>
          </div>
          
          </Carousel>
            </Container>
            </div>
        </section> 
        
  );
};

export default Coach;
