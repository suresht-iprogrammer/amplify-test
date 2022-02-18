import React, { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import styles from '../css/Badminton.module.css';


const Badminton = () => {

  const[showBadminton,setShowBadminton]=useState(true);

  const loadHandler=()=>{
    setShowBadminton(false);
  };
  return (
    <div className={styles.badminton_section}>
        <Container>
            <Row>
                <Col xs={12} md={6} lg={3} className={showBadminton === true ? styles.showSection : null} >
                  <h3>Badminton In Pune</h3>
                  <a href="#." className={styles.anch_badminton}>Badminton Clubs Pune</a>
                  <a href="#." className={styles.anch_badminton}>Badminton Academies Pune</a>
                  <a href="#." className={styles.anch_badminton}>Badminton Coaches Pune</a>
                  <a href="#." className={styles.anch_badminton}>Badminton Clubs in Kalyani Nagar</a>
                  <a href="#." className={styles.anch_badminton}>Badminton Clubs in Pune for Kids</a>
                </Col>
                <Col xs={12} md={6} lg={3} className={showBadminton === true ? styles.showSection : null}>
                  <h3>Badminton In Pune</h3>
                  <a href="#." className={styles.anch_badminton}>Badminton Clubs Pune</a>
                  <a href="#." className={styles.anch_badminton}>Badminton Academies Pune</a>
                  <a href="#." className={styles.anch_badminton}>Badminton Coaches Pune</a>
                  <a href="#." className={styles.anch_badminton}>Badminton Clubs in Kalyani Nagar</a>
                  <a href="#." className={styles.anch_badminton}>Badminton Clubs in Pune for Kids</a>
                </Col>
                <Col xs={12} md={6} lg={3} className={showBadminton === true ? styles.showSection : null}>
                  <h3>Badminton In Pune</h3>
                  <a href="#." className={styles.anch_badminton}>Badminton Clubs Pune</a>
                  <a href="#." className={styles.anch_badminton}>Badminton Academies Pune</a>
                  <a href="#." className={styles.anch_badminton}>Badminton Coaches Pune</a>
                  <a href="#." className={styles.anch_badminton}>Badminton Clubs in Kalyani Nagar</a>
                  <a href="#." className={styles.anch_badminton}>Badminton Clubs in Pune for Kids</a>
                </Col>
                <Col xs={12} md={6} lg={3} className={showBadminton === true ? styles.showSection : null}>
                  <h3>Badminton In Pune</h3>
                  <a href="#." className={styles.anch_badminton}>Badminton Clubs Pune</a>
                  <a href="#." className={styles.anch_badminton}>Badminton Academies Pune</a>
                  <a href="#." className={styles.anch_badminton}>Badminton Coaches Pune</a>
                  <a href="#." className={styles.anch_badminton}>Badminton Clubs in Kalyani Nagar</a>
                  <a href="#." className={styles.anch_badminton}>Badminton Clubs in Pune for Kids</a>
                </Col>
                
            </Row>
            <button onClick={loadHandler} className={styles.load_more}>Load more</button>
        </Container>
       
    </div>
  )
  
   
  ;
};

export default Badminton;
