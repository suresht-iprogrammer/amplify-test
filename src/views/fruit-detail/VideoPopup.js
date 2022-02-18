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

const VideoPopup = ({ videoUrl, title, isPopupOpen, handlePopup }) => {
  return (
    <div>
      <Modal isOpen={isPopupOpen} toggle={handlePopup} size="lg" className="recipePopup">
        <ModalHeader toggle={handlePopup}></ModalHeader>
        <Container className="mt-2 ">
          <Row>
            <Col md="12" xs="12">
              <h5 className="productName">{title}</h5>
            </Col>
            <Col md="12" xs="12" className="text-center mt-2">
              <iframe
                src={videoUrl}
                className="videoPopup n-popup"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </Modal>
    </div>
  );
};

export default VideoPopup;
