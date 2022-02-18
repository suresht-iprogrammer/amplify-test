import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import debounce from "lodash.debounce";
import { isMobile } from "react-device-detect";
// import Nav from "../Nav";
import Searchbox from "./Searchbox";
import styles from "../css/LandingPage.module.css";
import styles1 from "../css/MobileSearch.module.css";
import { Container, Badge, Button, Form } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useRouter } from "next/router";
import arrowImg from "../../../assets/images/Icon.svg";
import next_arrow from "../../../assets/images/Icon.svg";
import map_maker from "../../../assets/images/map_maker.png";
import Image from "next/image";
import {
  setSelectedSportsList,
  setCurrentStep,
  getSportsListData,
  getPartnerTypeListData,
  setSelectedPartnerTypesList,
  getLocationList,
  setSelectedLocation,
  resetState,
} from "../../../redux/actions/homepageAction";
import { selectionStepData } from "../../../config/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import ForwardArrow from "../../../shared-components/ForwardArrow";

const LandingPage = ({
  selectedSportList,
  setSelectedSports,
  currentStep,
  setCurrentStep,
  getSports,
  sportListData,
  getPartnerTypes,
  partnerTypeListData,
  setSelectedPartnerType,
  selectedPartnerTypeList,
  selectedLocation,
  getLocations,
  locationList,
  setSelectedLocations,
  resetStates,
  showLocationMessage,
}) => {
  const [placeHolder, setPlaceHolder] = useState(
    !isMobile
      ? "Find coaches and academies around you"
      : "Find coaches and academies"
  );
  let [hideSelectArea, setHideSelectArea] = useState(true);
  const [searchLocation, setSearchLocation] = useState("");
  let [hideMobileView, setHideMobileView] = useState(false);

  const router = useRouter();

  useEffect(() => {
    selectionStepData.filter((step) => {
      if (currentStep == step.currentStep) setPlaceHolder(step.placeHolder);
    });
  }, [currentStep]);

  useEffect(() => {
    getSports();
    getPartnerTypes();
    return () => {
      resetStates();
    };
  }, []);

  const getSportList = () => {
    return (
      sportListData &&
      sportListData.map((sport, index) => {
        if (index < 6) {
          return (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedSports(sport);
              }}
              key={index}
              className={`${classnames(
                JSON.stringify(selectedSportList).includes(sport.name) == true
                  ? `${styles.selectionBtn}`
                  : `selected_btn`
              )}`}
            >
              {sport.name}
            </Button>
          );
        }
      })
    );
  };

  const getTypeList = () => {
    return partnerTypeListData.map((type, index) => {
      if (index < 6) {
        return (
          <Button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPartnerType(type);
            }}
            className={`${classnames(
              JSON.stringify(selectedPartnerTypeList).includes(type.name) ==
                true
                ? `${styles.selectionBtn}`
                : `selected_btn`
            )}`}
          >
            {type.name}
          </Button>
        );
      }
    });
  };

  const handleStartSection = (e) => {
    e.stopPropagation();
    setHideSelectArea(true);
    setHideMobileView(true);
    setCurrentStep(currentStep + 1);
  };

  const handleEndSection = (e) => {
    e.stopPropagation();
    // setHideSelectArea(!);
    setCurrentStep(currentStep - 1);
  };

  const handleShowSection = (e) => {
    e.stopPropagation();
    setHideSelectArea(!hideSelectArea);
    // setHideMobileView(!hideMobileView);
  };

  const handleChange = (e) => {
    e.stopPropagation();
    setSearchLocation(e.target.value);
    if (e.target.value.length > 2 || e.target.value == "")
      debouncedSave(e.target.value);
    setHideSelectArea(true);
  };

  const debouncedSave = useCallback(
    debounce((locationName) => getLocations(locationName), 100),
    []
  );

  const getLocationList = () => {
    return locationList.map((location, index) => {
      if (index < 5) {
        return (
          <ListGroupItem
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedLocations(location.name);
            }}
          >
            <p className={styles.search_map_maker}>
              <Image src={map_maker} alt="Map" />
            </p>

            {location.name}
          </ListGroupItem>
        );
      }
    });
  };

  const getSelectedLocationList = () => {
    return selectedLocation.map((item, index) => {
      return (
        <Button
          key={index}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedLocations(item);
          }}
          className={`${classnames(
            `${styles.selectionBtn}`,
            `${styles.selected_btn}`
          )}`}
        >
          {item}
          <FontAwesomeIcon
            icon={faTimesCircle}
            size="xs"
            className={styles.crossIcon}
            color="#000"
          />
        </Button>
      );
    });
  };

  const getPlaceHolderData = (data) => {
    var selected = "";
    let result = data.map((step) => {
      return (selected = selected + step.name + ", ");
    });
    if (selected != "") return selected.slice(0, -2);
  };

  const gotoListingPage = (e) => {
    e.stopPropagation();
    router.push("/listing");
  };

  const handleCollapse = (e) => {
    e.stopPropagation();
    setHideSelectArea(false);
    setHideMobileView(!hideMobileView);
  };

  return (
    <div className={styles.landingpage} onClick={handleCollapse}>
      <Container>
        <div className={styles.header_title}>
          <h1>
            <span>Discover.</span> <span>Learn.</span> <span>Play.</span>
          </h1>
        </div>
      </Container>
      <Container>
        <Form className={styles.serch_box}>
          {currentStep != 0 && currentStep != 1 ? (
            <div className={styles.leftArrowWrapper} onClick={handleEndSection}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                size="xs"
                className={styles.leftIcon}
                color="#000"
              />
            </div>
          ) : (
            ""
          )}

          {currentStep == 0 && isMobile != true && (
            <>
              <div style={{ position: "relative" }}>
                <Searchbox
                  placeHolder={placeHolder}
                  handleStartSection={
                    currentStep == 0 ? handleStartSection : handleShowSection
                  }
                  isDisabled={
                    currentStep == 0 || currentStep == 3 ? false : true
                  }
                  // handleHover={handleHover}
                  currentStep={currentStep}
                  handleChange={handleChange}
                />
                <ForwardArrow
                  handleStartSection={handleStartSection}
                  data={[]}
                  currentStep={currentStep}
                />
              </div>
            </>
          )}

          {currentStep == 1 && isMobile != true && (
            <>
              <div style={{ position: "relative" }}>
                <Searchbox
                  placeHolder={
                    getPlaceHolderData(selectedSportList) || placeHolder
                  }
                  handleStartSection={
                    currentStep == 0 ? handleStartSection : handleShowSection
                  }
                  currentStep={currentStep}
                  handleChange={handleChange}
                />
                <ForwardArrow
                  handleStartSection={handleStartSection}
                  data={selectedSportList}
                  currentStep={currentStep}
                />
              </div>
              {hideSelectArea == true && (
                <div className={styles.searchDropdown}>
                  <h6>Choose one or more sport</h6>
                  {getSportList()}
                </div>
              )}
            </>
          )}
          {currentStep == 2 && isMobile != true && (
            <>
              <div style={{ position: "relative" }}>
                <Searchbox
                  placeHolder={
                    getPlaceHolderData(selectedPartnerTypeList) || placeHolder
                  }
                  handleStartSection={
                    currentStep == 0 ? handleStartSection : handleShowSection
                  }
                  // isDisabled={
                  //   currentStep == 0 || currentStep == 3 ? false : true
                  // }
                  // handleHover={handleHover}
                  currentStep={currentStep}
                  handleChange={handleChange}
                />
                <ForwardArrow
                  handleStartSection={handleStartSection}
                  data={selectedPartnerTypeList}
                  currentStep={currentStep}
                />
              </div>
              {hideSelectArea == true && (
                <div className={styles.searchDropdown}>
                  <h6>Who do you want to train with?</h6>
                  {getTypeList()}
                </div>
              )}
            </>
          )}
          {currentStep == 3 && isMobile != true && (
            <>
              <div
                className={classnames(
                  selectedLocation && selectedLocation.length > 0 ? "mb-2" : ""
                )}
              >
                {getSelectedLocationList()}
              </div>
              <div style={{ position: "relative" }}>
                <Searchbox
                  placeHolder={placeHolder}
                  handleStartSection={
                    currentStep == 0 ? handleStartSection : handleShowSection
                  }
                  // isDisabled={
                  //   currentStep == 0 || currentStep == 3 ? false : true
                  // }
                  // handleHover={handleHover}
                  currentStep={currentStep}
                  handleChange={handleChange}
                />
                <ForwardArrow
                  handleStartSection={gotoListingPage}
                  data={selectedLocation}
                  currentStep={currentStep}
                />
              </div>
              {hideSelectArea == true && (
                <div>
                  <ListGroup className={styles.getLocationWrap}>
                    {locationList.length > 0
                      ? searchLocation != "" &&
                        searchLocation.length > 2 &&
                        getLocationList()
                      : searchLocation != "" &&
                        searchLocation.length > 2 && (
                          <ListGroupItem>{showLocationMessage}</ListGroupItem>
                        )}
                  </ListGroup>
                </div>
              )}
            </>
          )}

          {isMobile && (
            <div style={{ position: "relative" }}>
              <Searchbox
                placeHolder={'Find coaches and academies'}
                handleStartSection={
                  currentStep == 0 ? handleStartSection : handleShowSection
                }
                isDisabled={currentStep == 0 || currentStep == 3 ? false : true}
                // handleHover={handleHover}
                currentStep={currentStep}
                handleChange={handleChange}
              />
              <ForwardArrow
                handleStartSection={handleStartSection}
                data={[]}
                currentStep={currentStep}
              />
            </div>
          )}
        </Form>

        {isMobile == true && currentStep != 0 && hideMobileView == true && (
          <div className={styles1.mobile_search_wrapper}>
            <div className={styles1.mobile_white_box}>
              <div className={styles1.gry_line}></div>
              {currentStep == 1 && (
                <>
                  <div className={styles1.mobile_box_filter}>
                    <h5 className={styles1.mobile_box_filter_h5}>
                      Pick sport(s)
                    </h5>
                    {getSportList()}
                  </div>

                  <div className={styles1.mobile_box_filter}>
                    <h5 className={styles1.mobile_box_filter_h5}>
                      Select type
                    </h5>
                    {getTypeList()}
                  </div>

                  <Button className={styles1.btn_mobile_next}>
                    <ForwardArrow
                      handleStartSection={handleStartSection}
                      data={selectedPartnerTypeList}
                      currentStep={currentStep}
                    />
                  </Button>
                </>
              )}

              {currentStep == 2 && (
                <div className={styles.mobile_box_filter}>
                  <h5 className={styles1.mobile_box_filter_h5}>
                    Search location
                  </h5>
                  <div className={styles.mobile_search_location}>
                    <>
                      <div
                        className={classnames(
                          selectedLocation && selectedLocation.length > 0
                            ? "mb-2"
                            : ""
                        )}
                      >
                        {getSelectedLocationList()}
                      </div>
                      <div
                        className={styles1.mobile_search_location}
                        style={{ position: "relative" }}
                      >
                        <Searchbox
                          placeHolder={"Type location"}
                          userClass={styles1.mobile_loc_inp}
                          handleStartSection={
                            currentStep == 0
                              ? handleStartSection
                              : handleShowSection
                          }
                          currentStep={3}
                          handleChange={handleChange}
                        />
                      </div>
                      {hideSelectArea == true && (
                        <div>
                          <ListGroup className={styles.getLocationWrap}>
                            {locationList.length > 0
                              ? searchLocation != "" &&
                                searchLocation.length > 2 &&
                                getLocationList()
                              : searchLocation != "" &&
                                searchLocation.length > 2 && (
                                  <ListGroupItem>
                                    {showLocationMessage}
                                  </ListGroupItem>
                                )}
                          </ListGroup>
                        </div>
                      )}
                    </>
                  </div>
                  {currentStep != 0 && currentStep != 1 ? (
                    <Button
                      className={`${styles1.btn_mobile_prve} `}
                      onClick={handleEndSection}
                    >
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        size="xs"
                        className={styles.leftIcon}
                        color="#000"
                      />
                    </Button>
                  ) : (
                    ""
                  )}
                  <Button className={styles1.btn_mobile_next}>
                    <ForwardArrow
                      handleStartSection={gotoListingPage}
                      data={selectedLocation}
                      currentStep={3}
                    />
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
      <Container>
        <div className={styles.subtitleAndButton}>
          <h3 className="mb-4">
            Want to get involved, but not sure <br /> what you are looking for?
          </h3>
          <Badge pill className={styles.b_button}>
            Sport Me Now
          </Badge>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedSportList: state.homepageReducer.selectedSportList,
    currentStep: state.homepageReducer.currentStep,
    sportListData: state.homepageReducer.sportListData,
    partnerTypeListData: state.homepageReducer.partnerTypeListData,
    selectedPartnerTypeList: state.homepageReducer.selectedPartnerTypeList,
    selectedLocation: state.homepageReducer.selectedLocation,
    locationList: state.homepageReducer.locationList,
    showLocationMessage: state.homepageReducer.showLocationMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedSports: (sportName) => {
      dispatch(setSelectedSportsList(sportName));
    },
    setCurrentStep: (step) => {
      dispatch(setCurrentStep(step));
    },
    getSports: () => {
      dispatch(getSportsListData());
    },
    getPartnerTypes: () => {
      dispatch(getPartnerTypeListData());
    },
    setSelectedPartnerType: (partnerType) => {
      dispatch(setSelectedPartnerTypesList(partnerType));
    },
    getLocations: (searchLocationName) => {
      dispatch(getLocationList(searchLocationName));
    },
    setSelectedLocations: (locationName) => {
      dispatch(setSelectedLocation(locationName));
    },
    resetStates: () => {
      dispatch(resetState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
