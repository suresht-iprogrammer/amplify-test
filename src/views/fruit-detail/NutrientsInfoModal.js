import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Container,
  Card,
  CardImg,
  CardTitle,
  CardBody,
} from "reactstrap";
import { serverUrl } from "../../config/config";

const NutrientsInfoModal = ({
  nutrientsPopupInfo,
  isModalOpen,
  handleModal,
}) => {
  const getFruitsList = () => {
    return (
      nutrientsPopupInfo &&
      nutrientsPopupInfo.attributes &&
      nutrientsPopupInfo.attributes.contain_fruits.data.map((data, index) => {
        return (
          <Col md="3" xs="6" className="cp" key={index}>
            <Card className="nutrientInfoFruitList">
              <CardImg
                alt="Card cap"
                src={`${serverUrl}${data.attributes.url}`}
                width="10%"
              />
            </Card>
            <div className="text-center nutrientInfo-txt">
              <h5 className="fw-600 fs-14">{data.attributes.name}</h5>
            </div>
          </Col>
        );
      })
    );
  };

  return (
    <div >
      <Modal isOpen={isModalOpen} toggle={handleModal} size="lg" className="nutrient-model">
        <ModalHeader toggle={handleModal}></ModalHeader>
        <Container className="mt-5">
          <Row className="R-name">
            <Col md="8">
              <h2 className="productName">
                {nutrientsPopupInfo &&
                  nutrientsPopupInfo.attributes &&
                  nutrientsPopupInfo.attributes.title}
              </h2>
              <p>
                {nutrientsPopupInfo &&
                  nutrientsPopupInfo.attributes &&
                  nutrientsPopupInfo.attributes.description}
              </p>
            </Col>
            <Col md="4">
              <Card className="vdo">
                <iframe className="n-popup"
                  height="240"
                  src={
                    nutrientsPopupInfo &&
                    nutrientsPopupInfo.attributes &&
                    nutrientsPopupInfo.attributes.video_url
                  }
                ></iframe>
              </Card>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md="12">
              <h5 className="productName">Other fruits with reach </h5>
            </Col>
          </Row>
          <Row>{getFruitsList()}</Row>
        </Container>
      </Modal>
    </div>
  );
};

export default NutrientsInfoModal;
