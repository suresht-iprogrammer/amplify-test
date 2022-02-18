import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { serverUrl } from "config/config";
import actv from "../../assets/img/getActive.png";
const FruitState = ({ fruitDetailData }) => {
  const [activeStage, setActiveStage] = useState(1);

  let fruitStates = [];
  fruitDetailData &&
    fruitDetailData.attributes &&
    fruitDetailData.attributes.fruit_states &&
    fruitDetailData.attributes.fruit_states.data &&
    fruitDetailData.attributes.fruit_states.data.map((data, index) => {
      fruitStates.push({
        title: `${data.attributes.state_name}`,
        stage: `${index + 1}`,
        // onClick: (e) => setActiveStage(index + 1),
      });
    });

  let selectedStateContent =
    fruitDetailData &&
    fruitDetailData.attributes &&
    fruitDetailData.attributes.fruit_states &&
    fruitDetailData.attributes.fruit_states.data &&
    fruitDetailData.attributes.fruit_states.data.map((data, index) => {
      if (index + 1 == activeStage) {
        let content = data.attributes.content.split("-");

        let description = content.map(
          (desc, i) =>
            i > 0 && (
              <li key={i}>
                <h5>{desc}</h5>
              </li>
            )
        );
        return (
          <>
            <Col md="6" className="fruitStateData">
              <h4 className="productName">{data.attributes.state_name}</h4>
              <h5 className="getknow-subtitle">{data.attributes.subtitle}</h5>
              <ul className="get-l_sec">{description}</ul>
            </Col>
            <Col md="6">
              <img
                src={`${serverUrl}${data.attributes.fruit_state_image.data.attributes.url}`}
                alt="fruit stage image"
                height="300"
                className="fruit-img"
              />
            </Col>
          </>
        );
      } else {
        return <div></div>;
      }
    });

  let selectedStateContentImageMobileView =
    fruitDetailData &&
    fruitDetailData.attributes &&
    fruitDetailData.attributes.fruit_states &&
    fruitDetailData.attributes.fruit_states.data &&
    fruitDetailData.attributes.fruit_states.data.map((data, index) => {
      if (index + 1 == activeStage) {
        return (
          <Col xs="12" className="d-md-none">
            <img
              src={`${serverUrl}${data.attributes.fruit_state_image.data.attributes.url}`}
              alt="fruit stage image"
              height="300"
              className="fruit-img-mobile"
            />
          </Col>
        );
      } else {
        return;
      }
    });

  const getStagesList = () => {
    return (
      fruitStates &&
      fruitStates.map((data, index) => {
        if (activeStage == data.stage) {
          return (
            <>
              <div className="stepper-item step-complete">
                <i
                  className="stepper-circle getact cp"
                  onClick={() => setActiveStage(data.stage)}
                ></i>
                <span className="stepper-label stepact">{data.title}</span>
              </div>

              <div className="stepper-connector">
                {index < fruitStates.length - 1 && <hr />}
              </div>
            </>
          );
        } else {
          return (
            <>
              <div className="stepper-item step-complete">
                <i
                  className="stepper-circle cp"
                  onClick={() => setActiveStage(data.stage)}
                ></i>
                <span className="stepper-label">{data.title}</span>
              </div>

              <div className="stepper-connector">
                {index < fruitStates.length - 1 && <hr />}
              </div>
            </>
          );
        }
      })
    );
  };

  return (
    <div className="get-know">
      <Row>
        <Col className="section text-center">
          <h2 className="title productName gettoknow-title">
            Get to know me <span>a little better</span>
          </h2>
        </Col>
      </Row>
      <Row className="get-fruit-mobile">
        {/* <Col xs="12">
          <img
            src={`${serverUrl}${fruitDetailData &&
              fruitDetailData.attributes &&
              fruitDetailData.attributes.fruit_states &&
              fruitDetailData.attributes.fruit_states.data &&
              fruitDetailData.attributes.fruit_states.data.attributes &&
              fruitDetailData.attributes.fruit_states.data.attributes.fruit_state_image &&
              fruitDetailData.attributes.fruit_states.data.attributes.fruit_state_image.data.attributes.url}`}
            alt="fruit stage image"
            height="300"
            className="fruit-img"
          />
        </Col> */}

        {selectedStateContentImageMobileView}
      </Row>
      <Row>
        <div className="raw-back"></div>
        <Col md="3"></Col>
        <Col
          className="clickPosition  raw-strip"
          md="6"
          style={{ marginTop: "0px" }}
        >
          <div class="wrapper">
            <div class="stepper">{getStagesList()}</div>
          </div>
        </Col>
        <Col md="3"></Col>
      </Row>
      {/* <div className="raw-back1"></div> */}
      <Row className="r-con-data">
        {/* <Col md="6">{selectedStateContent}</Col> */}
        {selectedStateContent}
        {/* <Col md="6">
          <img src="" alt="fruit stage image" />
        </Col> */}
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fruitDetailData: state.fruitDetailReducer.fruitDetailData,
  };
};

export default connect(mapStateToProps, null)(FruitState);
