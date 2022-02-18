import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import img_learning_centre_01 from "../../../assets/images/learning_centre_01.jpg";
import img_learning_centre_02 from "../../../assets/images/learning_centre_02.jpg";
import img_learning_centre_03 from "../../../assets/images/learning_centre_03.jpg";
import styles from "../css/LearningCentre.module.css";
import Image from "next/image";

import BluePanel from "./BluePanel";

const LearningCentre = () => {
  return (
    <section className={styles.bothContainer}>
      <BluePanel />
    
      <section className={styles.learningCentre_section}>
        <Container>
          <div className={styles.LearningCentre}>
          <h3 className="section_title">Learning Centre</h3>
          <div className={styles.learing_grid}>
            <div className={styles.column_1}>
                <div className={styles.img}>
                  <Image src={img_learning_centre_01} alt="" height={'100%'}/>
                </div>
                <div className={styles.cnt}>
                  <h3>Streets' solutions to grassroots gremlins - Part Three</h3>
                  <div className={styles.tags_box}>
                    <a href="#." className={styles.anch}>
                      Cricket
                    </a>
                    <a href="#." className={styles.anch}>
                      Coaching
                    </a>
                  </div>
                </div>
            </div>
            <div className={styles.column_2}>
              <div className={styles.column_2_img}>
                <div className={styles.column_img}>
                  {/* <div className={styles.column_cnt}> */}
                    <div className={styles.img}>
                      <Image src={img_learning_centre_02} alt="" height={'100%'}/>
                    </div>
                    <div className={styles.cnt}>
                      <h3>
                        Streets' solutions to grassroots gremlins - Part Three
                      </h3>
                      <div className={styles.tags_box}>
                        <a href="#." className={styles.anch}>
                          Coaching
                        </a>
                      </div>
                    </div>
                  {/* </div> */}
                </div>
                <div className={styles.column_img}>
                  
                    <div className={styles.img}>
                      <Image src={img_learning_centre_03} alt="" height={'100%'} />
                    </div>
                    <div className={styles.cnt}>
                      <h3>Latest cricket news</h3>
                      <div className={styles.tags_box}>
                        <a href="#." className={styles.anch}>
                          Cricket
                        </a>
                      </div>
                    </div>
                  
                </div>
              </div>

              <div
                className={`${styles.column_2_img} ${styles.column_2_img_right}`}
              >
                <div className={styles.column_img}>
                  
                    <div className={styles.img}>
                      <Image src={img_learning_centre_03} alt="" height={'100%'} />
                    </div>
                    <div className={styles.cnt}>
                      <h3>Latest cricket news</h3>
                      <div className={styles.tags_box}>
                        <a href="#." className={styles.anch}>
                          Cricket
                        </a>
                      </div>
                    </div>
                  
                </div>

                <div className={styles.column_img}>
                  
                    <div className={styles.img}>
                      <Image src={img_learning_centre_02} alt="" height={'100%'} />
                    </div>
                    <div className={styles.cnt}>
                      <h3>
                        Streets' solutions to grassroots gremlins - Part Three
                      </h3>
                      <div className={styles.tags_box}>
                        <a href="#." className={styles.anch}>
                          Coaching
                        </a>
                      </div>
                    </div>
                  
                </div>
              </div>
            </div>
            <div className="clearfix"></div>

            <a href="#." className={styles.btn_explore_blogs}>
              Explore blogs
            </a>
          </div>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default LearningCentre;
