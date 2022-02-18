import React from 'react';
import { Container,Row,Card,Col } from 'react-bootstrap';
import styles from '../css/Collection.module.css'
import img1 from '../../../assets/images/img1.png'
import img2 from '../../../assets/images/img2.png'
import img3 from '../../../assets/images/img3.png'
import img4 from '../../../assets/images/img4.png'
import Images from 'next/image';

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Collection = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1400 },
      items: 4
    },
    desktop2: {
      breakpoint: { max: 1399, min: 1200 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1199, min: 992 },
      items: 3.2
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 2.3
    },
    mobile: {
      breakpoint: { max: 767, min: 371 },
      items: 1.2
    },
    smallMobile: {
      breakpoint: { max: 370, min: 0 },
      items: 1.05
    }
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
    <section className={styles.collection_wrapper} >
    <Container>
        <h3 className="section_title">Collections</h3>
    </Container>
    <Container className='position-relative mob_padding_right'>

    <Carousel responsive={responsive} customTransition="all .6s"
  transitionDuration={500} removeArrowOnDeviceType={["superLargeDesktop","desktop2","desktop","tablet", "mobile","smallMobile"]} customButtonGroup={<ButtonGroup />} renderButtonGroupOutside={true} swipeable={true}>
      <div>
          <Card className={styles.card}>
            <div className={styles.card_image}>
              <Images variant="top" src={img1} height={'100%'} />
            </div>
            
            <Card.Body>
              <Card.Title className={styles.card_title}>Adults</Card.Title> 
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className={styles.card}>
            <div className={styles.card_image}>
              <Images variant="top" src={img2} height={'100%'}/>
            </div>
            
            <Card.Body>
              <Card.Title className={styles.card_title}>Kids</Card.Title> 
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className={styles.card}>
            <div className={styles.card_image}>
              <Images variant="top" src={img3} height={'100%'}/>
            </div>
            
            <Card.Body>
              <Card.Title className={styles.card_title}>Women</Card.Title> 
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className={styles.card}>
            <div className={styles.card_image}>
              <Images variant="top" src={img4} height={'100%'}/>
            </div>
            
            <Card.Body>
              <Card.Title className={styles.card_title}>Weekends</Card.Title> 
            </Card.Body>
          </Card>
        </div>
    </Carousel>
      {/* <Row xs={1} md={2} lg={4}>
        <Col>
          <Card className={styles.card}>
            <div className={styles.card_image}>
              <Images variant="top" src={img1} height={'100%'} />
            </div>
            
            <Card.Body>
              <Card.Title className={styles.card_title}>Adults</Card.Title> 
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className={styles.card}>
            <div className={styles.card_image}>
              <Images variant="top" src={img2} height={'100%'}/>
            </div>
            
            <Card.Body>
              <Card.Title className={styles.card_title}>Kids</Card.Title> 
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className={styles.card}>
            <div className={styles.card_image}>
              <Images variant="top" src={img3} height={'100%'}/>
            </div>
            
            <Card.Body>
              <Card.Title className={styles.card_title}>Women</Card.Title> 
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className={styles.card}>
            <div className={styles.card_image}>
              <Images variant="top" src={img4} height={'100%'}/>
            </div>
            
            <Card.Body>
              <Card.Title className={styles.card_title}>Weekends</Card.Title> 
            </Card.Body>
          </Card>
        </Col>
      </Row> */}

    </Container>
    </section>
  );
};

export default Collection;
