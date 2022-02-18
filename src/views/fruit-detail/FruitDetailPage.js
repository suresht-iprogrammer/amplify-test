import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Button,
  Label,
  Input,
  FormGroup,
  Row,
  Col,
  Card,
  CardText,
  CardTitle,
} from "reactstrap";
import { useParams } from "react-router-dom";
import classnames from "classnames";
import Carousel from "./Carousel";
import { getFruitDetailData } from "../../redux/actions/fruitDetailAction";
import { getNutrientsPopupInfo } from "../../redux/actions/commonAction";
import { serverUrl } from "config/config";
import { flattenJSON } from "config/constant";
import NutrientsInfoModal from "./NutrientsInfoModal";



const FruitDetailPage = ({
  getFruitDetail,
  fruitDetailData,
  nutrientsData,
  getNutrientsPopup,
  nutrientsPopupInfo,
  ownerDetailData
}) => {
  const [showContent, setShowContent] = useState(true);
  const [isModalOpen, setisModalOpen] = useState(false);
  let { id } = useParams();
  // let { code } = useParams();
  const authResult = new URLSearchParams(window.location.search);
  const code = authResult.get("code");

  let slideItemsArray = [];
  fruitDetailData &&
    fruitDetailData.attributes &&
    fruitDetailData.attributes.slider_images.data &&
    fruitDetailData.attributes.slider_images.data.map((data, index) => {
      slideItemsArray.push({
        src: `${serverUrl}${data.attributes.url}`,
        altText: "",
        caption: "",
      });
    });

  const handleShowContent = (showType) => {
    setShowContent(showType);
  };

  const handleModal = () => {
    setisModalOpen(!isModalOpen);
  };

  useEffect(() => {
    // getFruitDetail(id);
    getFruitDetail(code);
  }, [code]);

  const getNutrients = (type) => {
    setisModalOpen(!isModalOpen);
    getNutrientsPopup(type);
  };

  const getHealthBenefitList = () => {
    return (
      fruitDetailData &&
      fruitDetailData.attributes &&
      fruitDetailData.attributes.health_benefits &&
      fruitDetailData.attributes.health_benefits.data &&
      fruitDetailData.attributes.health_benefits.data.map((data, index) => {
        return (
          <FormGroup check key={index}>
            <Label check>
              <Input defaultChecked defaultValue="" type="checkbox" disabled />
              {data.attributes.title}
              <span className="form-check-sign" />
            </Label>
          </FormGroup>
        );
      })
    );
  };

  let response = flattenJSON(nutrientsData);

  let nutrientArray = [];
  for (let i = 0; i < Object.keys(response).length; i++) {
    if (Object.keys(response)[i].includes("boldlabel")) {
      for (let j = i; j < Object.keys(response).length; j++) {
        if (Object.keys(response)[j].includes("normallable")) {
          for (let k = j; k < Object.keys(response).length; k++) {
            if (Object.keys(response)[k].includes("data")) {
              // if (!response[Object.keys(response)[j]].includes("%")) {
              nutrientArray.push({
                name: `${response[Object.keys(response)[i]]}||${
                  response[Object.keys(response)[j]]
                }||${response[Object.keys(response)[k]]}`,
              });
              // }
              break;
            }
          }
          break;
        }
      }
      // break;
    }
  }

  for (let i = 0; i < Object.keys(response).length; i++) {
    if (
      Object.keys(response)[i].includes("label") &&
      !Object.keys(response)[i].includes("boldlabel")
    ) {
      for (let j = i; j < Object.keys(response).length; j++) {
        if (Object.keys(response)[j].includes("data")) {
          nutrientArray.push({
            name: `${response[Object.keys(response)[i]]}||${
              response[Object.keys(response)[j]]
            }`,
          });
          break;
        }
      }
    }
  }

  const getNutrientsData = () => {
    return nutrientArray.map((item, index) => {
      if (item.name.includes("Calories")) {
        let value = item.name.replaceAll("||||", "||").split("||");
        return (
          <Col md="3" xs="4">
            <Card
              body
              onClick={() => {
                getNutrients("Calories");
              }}
              className="cp"
            >
              <CardTitle tag="h5">Calories</CardTitle>
              <CardText>{value[1]}</CardText>
            </Card>
          </Col>
        );
      } else if (item.name.includes("Total fat")) {
        let value = item.name.replaceAll("||||", "||").split("||");
        return (
          <Col md="3" xs="4">
            <Card
              body
              onClick={() => {
                getNutrients("Fat");
              }}
              className="cp"
            >
              <CardTitle tag="h5">Fat</CardTitle>
              <CardText>{value[1]}</CardText>
            </Card>
          </Col>
        );
      } else if (item.name.includes("Sodium")) {
        let value = item.name.replaceAll("||||", "||").split("||");
        return (
          <Col md="3" xs="4">
            <Card
              body
              onClick={() => {
                getNutrients("Sodium");
              }}
              className="cp"
            >
              <CardTitle tag="h5">Sodium</CardTitle>
              <CardText>{value[1]}</CardText>
            </Card>
          </Col>
        );
      } else if (item.name.includes("Total carbohydrate")) {
        let value = item.name.replaceAll("||||", "||").split("||");
        return (
          <Col md="3" xs="4">
            <Card
              body
              onClick={() => {
                getNutrients("Carbohydrate");
              }}
              className="cp"
            >
              <CardTitle tag="h5">Carbs</CardTitle>
              <CardText>{value[1]}</CardText>
            </Card>
          </Col>
        );
      } else if (item.name.includes("Dietary fiber")) {
        let value = item.name.replaceAll("Dietary fiber", "").split("||");
        return (
          <Col md="3" xs="4">
            <Card
              body
              onClick={() => {
                getNutrients("Fiber");
              }}
              className="cp"
            >
              <CardTitle tag="h5">Dietary fiber</CardTitle>
              <CardText>{value[0]}</CardText>
            </Card>
          </Col>
        );
      } else if (item.name.includes("Sugar")) {
        let value = item.name.replaceAll("Sugar", "").split("||");
        return (
          <Col md="3" xs="4">
            <Card
              body
              onClick={() => {
                getNutrients("Sugar");
              }}
              className="cp"
            >
              <CardTitle tag="h5">Natural Sugar</CardTitle>
              <CardText>{value[0]}</CardText>
            </Card>
          </Col>
         
        );
      } else if (item.name.includes("Potassium")) {
        let value = item.name.replaceAll("Potassium", "").split("||");
        return (
          <Col md="3" xs="4">
            <Card
              body
              onClick={() => {
                getNutrients("Potassium");
              }}
              className="cp"
            >
              <CardTitle tag="h5">Potassium</CardTitle>
              <CardText>{value[1]}</CardText>
            </Card>
          </Col>
        );
      } else if (item.name.includes("Calcium")) {
        let value = item.name.replaceAll("Calcium", "").split("||");
        return (
          <Col md="3" xs="4">
            <Card
              body
              onClick={() => {
                getNutrients("Calcium");
              }}
              className="cp"
            >
              <CardTitle tag="h5">Calcium</CardTitle>
              <CardText>{value[1]}</CardText>
            </Card>
          </Col>

        );
      }
    });
  };

  return (
    <div>
       <div className="sliderBackground" style={{
            backgroundImage: `url(${serverUrl}${
              fruitDetailData &&
              fruitDetailData.attributes &&
              fruitDetailData.attributes.slider_background.data[0].attributes &&
              fruitDetailData.attributes.slider_background.data[0].attributes
                .url
            })`,
          }}></div>
      <Row>
        <Col md="6 mt-5" className="head-slider">
          <h1 className="productName">
            {fruitDetailData &&
              fruitDetailData.attributes &&
              fruitDetailData.attributes.product_long_name}
          </h1>
          <h3 className="locationName">
            {ownerDetailData[0] && ownerDetailData[0].data.address}
            {/* {fruitDetailData &&
              fruitDetailData.attributes &&
              fruitDetailData.attributes.location}
            ,{" "}
            {fruitDetailData &&
              fruitDetailData.attributes &&
              fruitDetailData.attributes.country} */}
          </h3>
          <div className="mt-3 mb-3">
            <Button
              className={classnames(
                "btn-round ml-1 cp",
                showContent == true ? `selectedContentBtn` : `nutrient`
              )}
              type="button"
              onClick={() => handleShowContent(true)}
            >
              <span
                className={classnames(
                  "text-capitalize",
                  showContent == true ? `health-dot` : ``
                )}
              >
                Health Benefits
              </span>
            </Button>

            &nbsp; <Button
              className={classnames(
                "btn-round ml-1 cp",
                showContent == false ? `selectedContentBtn` : `nutrient`
              )}
              type="button"
              onClick={() => handleShowContent(false)}
            >
               <span
                className={classnames(
                  "text-capitalize",
                  showContent == false ? `health-dot` : ``
                )}
              >
                Nutrients
              </span>
            </Button>
          </div>
          {showContent ? (
            <>
              <div className="h-benifit">{getHealthBenefitList()}</div>
            </>
          ) : (
            <>
              <p className="nutritionLine">
                100 grams of{" "}
                {fruitDetailData &&
                  fruitDetailData.attributes &&
                  fruitDetailData.attributes.product_long_name}{" "}
                contains
              </p>
              <Row className="nutrient_data nutrientCard-Col mt-3">{getNutrientsData()}</Row>
              <p className="sourceLine">Source: nutritionvalue.org</p>
            </>
          )}
        </Col>
        <Col
          md="6"
          className=" head-slider-text"
          // style={{
          //   backgroundImage: `url(${serverUrl}${
          //     fruitDetailData &&
          //     fruitDetailData.attributes &&
          //     fruitDetailData.attributes.slider_background.data[0].attributes &&
          //     fruitDetailData.attributes.slider_background.data[0].attributes
          //       .url
          //   })`,
          // }}
        >
          <Carousel sliderData={slideItemsArray} />
        </Col>
      </Row>
      {nutrientsPopupInfo != undefined && (
        <NutrientsInfoModal
          nutrientsPopupInfo={nutrientsPopupInfo}
          isModalOpen={isModalOpen}
          handleModal={handleModal}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fruitDetailData: state.fruitDetailReducer.fruitDetailData,
    nutrientsData: state.fruitDetailReducer.nutrientsData,
    nutrientsPopupInfo: state.commonReducer.nutrientsPopupInfo,
    ownerDetailData: state.fruitDetailReducer.ownerDetailData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFruitDetail: (id) => {
      dispatch(getFruitDetailData(id));
    },
    getNutrientsPopup: (type) => {
      dispatch(getNutrientsPopupInfo(type));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FruitDetailPage);
