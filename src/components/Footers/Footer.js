import React, { useEffect } from "react";
import { Row, Container, Col } from "reactstrap";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { getFooterMenuList } from "../../redux/actions/commonAction";
import { getProductList } from "../../redux/actions/fruitDetailAction";
import Inno_logo from '../../assets/img/InnoTrace.png';
import loc from '../../assets/img/loc.png';
import mail from '../../assets/img/mail.png';
import felpse from '../../assets/img/Ellipse.png';
import ffb from '../../assets/img/ffb.png';
import finsta from '../../assets/img/finsta.png';
import fwhts from '../../assets/img/fwhatsup.png';
import innoTraceBrand from "../../assets/img/innoTraceBrand.png";

function Footer({ getFooterMenu, footerMenuList, history, getProducts, productList }) {
  useEffect(() => {
    getFooterMenu();
    getProducts();
  }, []);


  const getMenuListData = () => {
    return (
      footerMenuList.data &&
      footerMenuList.data.map((data, index) => {
        return (
          <li className="cp" onClick={() => {history.push(data.attributes.menu_link)}} key={index}>{data.attributes.menu_name}</li>
        );
      })
    );
  }

  const getProductListData = () => {
    return (
      productList.data &&
      productList.data.map((data, index) => {
        return (
          <li className="cp" onClick={() => {history.push(`/?code=${data.attributes.default_code}`)}} key={index}>{data.attributes.product_short_name}</li>
        );
      })
    );
  }

  return (
    <>
      <div style={{ height: "50px" }}></div>
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <h4></h4>
           <img className="brand-footer" src={innoTraceBrand} alt="Innotrace" />

           <img className="brand-logo" src={Inno_logo} alt="Innotrace" />
            <nav className="footer-nav ft-location">
              <ul>
                <li>
                  <a
                    href="https://www.creative-tim.com?ref=pkr-footer"
                    target="_blank"
                    rel="noreferrer"
                  >
                     <img src={loc} alt="Social logo" /> &nbsp; Morbi elit eros, tristique eu<br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;convallis non, iaculis id felis.
                  </a>
                </li>
               
                <li>
                  <a
                    href="https://www.creative-tim.com/license?ref=pkr-footer"
                    target="_blank"
                    rel="noreferrer"
                  >
                     <img src={mail} alt="Social logo" /> &nbsp; farmtrace@innoterra.com
                  </a>
                </li>
              </ul>
            </nav>
            </Col>
            <Col md="3" className="menu-l-col">
              <ul className="list-unstyled menu-l">
                { getMenuListData()}
              </ul>
            </Col>
            <Col md="3">
              <ul className="list-unstyled menu-l2">
                <li className="menu-l1">Products</li>
                {getProductListData()}
              </ul>
            </Col>
            <Col md="3">
              <ul className="list-unstyled menu-l2">
                <li className="menu-l1">
                <img src={ffb} alt="Social logo" />
                 &nbsp; &nbsp; <img src={finsta} alt="Social logo" />
                 &nbsp; &nbsp; <img src={fwhts} alt="Social logo" />
                </li>
             
              </ul>
            </Col>
          </Row>
         <hr></hr>
          <Row>
            
            <nav className="footer-nav">
              <ul>
                <li>
                  <a
                    href="https://www.creative-tim.com?ref=pkr-footer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    © 2020 Innotrace
                  </a>
                </li>
                <li>
                  <a
                    href="http://blog.creative-tim.com/?ref=pkr-footer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.creative-tim.com/license?ref=pkr-footer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Legal Disclaimer
                  </a>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
            <img src={felpse} alt="Social logo" className="fback" />
              <span className="copyright">
                Designed by <strong>ScreenRoot</strong>
              </span>
              
            </div>
            
          </Row>
          
        </Container>
        
      </footer>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    footerMenuList: state.commonReducer.footerMenuList,
    productList: state.fruitDetailReducer.productList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFooterMenu: () => {
      dispatch(getFooterMenuList());
    },
    getProducts: () => {
      dispatch(getProductList());
    },
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Footer);
