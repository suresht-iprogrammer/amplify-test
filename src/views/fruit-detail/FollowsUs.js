import React, { useEffect } from 'react';
import {
  Row,
  Col,
  Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { serverUrl } from 'config/config';
import { getFollowsusData } from '../../redux/actions/commonAction';
import ficon from '../../assets/img/Facebook.png';
import iicon from '../../assets/img/Insta.png';
import wicon from '../../assets/img/Whatsapp.png';
import know_Arrow from "../../assets/img/Know_More.png";

const FollowsUs = ({fruitDetailData, history, getFollows, followsUsData}) => {

  useEffect(() => {
    getFollows()
  }, []);

  return (
    <div className="followsUsSection followsTextColor mt-5" style={{
      backgroundImage: `url(${serverUrl}${
        fruitDetailData &&
        fruitDetailData.attributes &&
        fruitDetailData.attributes.banner_background.data &&
        fruitDetailData.attributes.banner_background.data[0]
          .attributes &&
        fruitDetailData.attributes.banner_background.data[0]
          .attributes.url
      })`,
    }}>
      <Row>
        <Col md="6">
        </Col>
        <Col md="6" className="learn">
          <h2><strong>Learn about the</strong></h2>
         <h2 className="h2">{fruitDetailData &&
        fruitDetailData.attributes &&
        fruitDetailData.attributes.brand_name}</h2>
          <p>{fruitDetailData &&
        fruitDetailData.attributes &&
        fruitDetailData.attributes.brand_description}</p>
        </Col>
        </Row>
        <br />
        <Row>
        <Col md="6">
        </Col>
        <Col md="6">
          <Button className='btn-round knowMoreBtn knowMoreBtn-xs text-capitalize' onClick={()=>{history.push('/about-farmtrace')}}>Know more &nbsp; <img src={know_Arrow} alt="arw" className='know-arw'/></Button>
        </Col>
        </Row>
        <br />
        <Row>
        <div className="learn-social">
            <h2>Follows us on</h2>
            <a target="_blank" href={followsUsData && followsUsData.data && followsUsData.data[0].attributes.facebook_url}><img src={ficon} alt="Social logo"  /></a>
            <a target="_blank" href={followsUsData && followsUsData.data && followsUsData.data[0].attributes.instagram_url}><img src={iicon} alt="Social logo" /></a>
            <a target="_blank" href={followsUsData && followsUsData.data && followsUsData.data[0].attributes.instagram_url}><img src={wicon} className="w_logo" alt="Social logo" /></a>
            {/* <img className="d-md-none" src={wicon} alt="Social logo" /> */}
        </div>
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    fruitDetailData: state.fruitDetailReducer.fruitDetailData,
    followsUsData: state.commonReducer.followsUsData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFollows: () => {
      dispatch(getFollowsusData());
    },
  };
};


export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps))(FollowsUs);