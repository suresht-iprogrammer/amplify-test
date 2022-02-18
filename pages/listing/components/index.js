import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from "../css/Listing.module.css";
import listing_img_01 from "../../../assets/images/learning_centre_03.jpg";
import listing_img_02 from "../../../assets/images/learning_centre_01.jpg";
import icon_chatting from "../../../assets/images/icon_chatting.svg";
import map_marker from "../../../assets/images/map_marker.svg";
import location_arrow from "../../../assets/images/location_arrow.svg";
import back_Icon from "../../../assets/images/Filter_backicon.svg";
import dummy_img from "../../../assets/images/basket_ball.jpg";
import Bluepanel from '../../homepage/components/BluePanel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo, faSortAmountDown  } from "@fortawesome/free-solid-svg-icons";

import Badminton from '../../homepage/components/Badminton';

import Image from "next/image";
import FilteredComponent from "./FilteredComponent";
import FilteredrangeComponent from "./FilteredrangeComponent";

const ListingComponent = () => {

  const router = useRouter();

  const gotoProfilePage = () => {
    router.push("/coach-details");
  }

  const filterSport = {
      title:'Sport',
      list:[
        {id:1, name:'Football'},
        {id:2,name:'Cricket'},
        {id:3,name:'Basketball'},
        {id:4,name:'Chess'},
        {id:5,name:'Tennis'},
        {id:6,name:'Badminton'}
      ]
    };
    const filterType ={
      title:'Type',
      list:[
        {id:7,name:'Coach'},
        {id:8,name:'Academy'}
      ]
    } ;
    const filterLevel ={
      title:'Level',
      list:[
        {id:9,name:'Beginner'},
        {id:10,name:'Intermediate'},
        {id:11,name:'Advanced'}
      ]
    } ;
    const filterGender ={
      title:'Gender',
      list:[
        {id:12,name:'Female'},
        {id:13,name:'Male'}
      ]
    } ;
    const filterDays ={
      title:'Open days',
      list:[
        {id:14,name:'Monday'},
        {id:15,name:'Tuesday'},
        {id:16,name:'Wednesday'},
        {id:17,name:'Thursday'},
        {id:18,name:'Friday'},
        {id:19,name:'Saturday'},
        {id:20,name:'Sunday'}
      ]
    } ;
    
  

  return (
    <>
      <div className={styles.topblueSection}></div>
      <div className={styles.listing_page}>
          <div className={styles.listing_header_bg}>
            <Container className={styles.relative_top}>
            <Row>
              <Col xs={12} md={4}>
                <div className={styles.left_layout_filter}>
                  <div className={styles.left_filter_bar}>
                  <div className={styles.leftfilter_text}>
                    <h6>Filters</h6>
                    <FontAwesomeIcon
                          icon={faRedo}
                          size="xs"
                          className={styles.redobtn}
                        />
                  </div>
                    <FilteredComponent myData={filterSport} />
                    <FilteredComponent myData={filterType} />
                    <FilteredComponent myData={filterLevel} />
                    <FilteredComponent myData={filterGender} />
                    <div className={styles.filter_box}>
                      <h5 className={styles.heading_filter}>Age (Years)</h5>
                      <FilteredrangeComponent 
                        min={0}
                        max={100}
                        onChange={({ min, max }) => (`min = ${min}, max = ${max}`)}
                      />
                    </div>
                    <FilteredComponent myData={filterDays} />
                    
                  </div>
                </div>
              </Col>
              <Col xs={12} md={8}>
                <div className={styles.search_result_wrapper}>
                  <h2>Results</h2>
                  <div className={styles.free_trial}>
                    <div className="d-flex">
                      <h5>Free trial</h5>
                      <label className={styles.switch_listing}>
                        <input type="checkbox" />
                        <span className={`${styles.slider} ${styles.round}`}></span>
                      </label>
                    </div>
                    <span className={styles.lineBar}></span>
                    <div className="d-flex">
                      <button className={styles.sortButton}>
                        <FontAwesomeIcon
                          icon={faSortAmountDown}
                          size="xs"
                          className={styles.filterIconbtn}
                          color="#000"
                        />
                        <span className={styles.sort_text}>Sort</span>
                      </button>
                      <div className={styles.mob_backicon}>
                        <Image src={back_Icon} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.row_listing_cnt} cp`} onClick={gotoProfilePage}>
                  <div className={styles.listing_img}>
                    <Image src={listing_img_01} alt="" height={"100%"} />
                  </div>
                  <div className={styles.listing_cnt}>
                    <h3>JusCricket Academy</h3>
                    <div>
                      <p>
                        <span><Image src={map_marker} alt="" /></span>
                          <span className="ms-2">Viman Nagar, Pune</span>
                      </p>
                      <p className={styles.listing_p_last}>
                        <span><Image src={location_arrow} alt="" /></span>
                        <span className="ms-2">2 kms away</span>  
                      </p>
                    </div>
                    <div className = {styles.listing_tags_wrap}>
                      <div className = {styles.listing_tag}>
                        <a href="#." className={styles.anch_sport_name}>
                          Cricket
                        </a>
                        <a href="#." className={styles.anch_sport_name}>
                          Academy
                        </a>
                      </div>
                      <div className={styles.listing_message}>
                        <a href="#." className={styles.anch_message}>
                          <Image src={icon_chatting} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <a href="#." className={styles.free_trial_tag}>
                    Free trial
                  </a>
                </div>

                <div className={`${styles.row_listing_cnt} cp`} onClick={gotoProfilePage}>
                  <div className={styles.listing_img}>
                    <Image src={listing_img_02} alt="" height={"100%"} />
                  </div>
                  <div className={styles.listing_cnt}>
                    <h3>LSBI Badminton</h3>
                    <div>
                      <p>
                        <span><Image src={map_marker} alt="" /></span>
                          <span className="ms-2">Wadgaon Sheri, Pune</span>
                      </p>
                      <p className={styles.listing_p_last}>
                        <span><Image src={location_arrow} alt="" /></span>
                        <span className="ms-2">2 kms away</span>
                      </p>
                    </div>
                    <div className={styles.listing_tags_wrap}>
                      <div className={styles.listing_tag}>
                        <a href="#." className={styles.anch_sport_name}>
                          Badminton
                        </a>
                        <a href="#." className={styles.anch_sport_name}>
                          Academy
                        </a>
                      </div>
                      <div className={styles.listing_message}>
                        <a href="#." className={styles.anch_message}>
                          <Image src={icon_chatting} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <a href="#." className={styles.free_trial_tag}>
                    Free trial
                  </a>
                </div>
                <div className={`${styles.row_listing_cnt} cp`} onClick={gotoProfilePage}>
                  <div className={styles.listing_img}>
                    <Image src={listing_img_01} alt="" height={"100%"} />
                  </div>
                  <div className={styles.listing_cnt}>
                    <h3>JusCricket Academy</h3>
                    <div>
                      <p>
                        <span><Image src={map_marker} alt="" /></span>
                        <span className="ms-2">Viman Nagar, Pune</span>
                      </p>
                      <p className={styles.listing_p_last}>
                        <span><Image src={location_arrow} alt="" /></span>
                        <span className="ms-2">2 kms away</span>
                      </p>
                    </div>
                    <div className={styles.listing_tags_wrap}>
                      <div className={styles.listing_tag}>
                        <a href="#." className={styles.anch_sport_name}>
                          Cricket
                        </a>
                        <a href="#." className={styles.anch_sport_name}>
                          Academy
                        </a>
                      </div>
                      <div className={styles.listing_message}>
                        <a href="#." className={styles.anch_message}>
                          <Image src={icon_chatting} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <a href="#." className={styles.free_trial_tag}>
                    Free trial
                  </a>
                </div>

                <div className={`${styles.row_listing_cnt} cp`} onClick={gotoProfilePage}>
                  <div className={styles.listing_img}>
                    <Image src={listing_img_02} alt="" height={"100%"} />
                  </div>
                  <div className={styles.listing_cnt}>
                    <h3>LSBI Badminton</h3>
                    <div>
                      <p>
                        <span><Image src={map_marker} alt="" /></span>
                          <span className="ms-2">Wadgaon Sheri, Pune</span>
                      </p>
                      <p className={styles.listing_p_last}>
                        <span><Image src={location_arrow} alt="" /></span>
                        <span className="ms-2">2 kms away</span>
                      </p>
                    </div>
                    <div className={styles.listing_tags_wrap}>
                      <div className={styles.listing_tag}>
                        <a href="#." className={styles.anch_sport_name}>
                          Badminton
                        </a>
                        <a href="#." className={styles.anch_sport_name}>
                          Academy
                        </a>
                      </div>
                      <div className={styles.listing_message}>
                        <a href="#." className={styles.anch_message}>
                          <Image src={icon_chatting} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <a href="#." className={styles.free_trial_tag}>
                    Free trial
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
          </div>
          <Bluepanel />
        {/* Listing sport now */}
        <div className={styles.mobile_flex_reverse}>
            <div className={styles.listing_sport_now}>
            {/* <div className={styles.listing_sport_now_blue}>
              <Container className={styles.Partner_us_section}>
                <div className={styles.partner_text}>
                  <p> Not sure what are you looking for?</p>
                  <span>We are here to help!</span>
                </div>
                <a href="#." className={styles.btn_partner_us}>
                  Sport Me Now
                </a>
              </Container>
            </div> */}

              <div>
                <Container className={styles.listing_sport_details}>
                  <div className={styles.left}>
                    <span>Coaches and Academies in Viman Nagar, Pune</span>
                    <p>
                    Lorem ipsum <b>dolor</b> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <b>nostrud</b> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    </p>
                    <p>
                    cillum dolore eu <b>fugiat</b> nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                  <div className={styles.right}>
                    <Image src={dummy_img} alt="" />
                  </div>
                </Container>
                <button className={styles.paragraph_viewmore}>View more</button>
              </div>
            </div>
            <Badminton /> 
          </div>

        {/* Listing sport now */}
        
      </div>
    </>
  );
};

export default ListingComponent;
