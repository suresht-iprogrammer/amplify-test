import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  FacebookShareButton,
  FacebookIcon,
  InstapaperShareButton,
  InstapaperIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import refer from "../../assets/img/refer.png";
import facebook from "../../assets/img/f-refer.png";
import instagram from "../../assets/img/i-refer.png";
import { hostName } from "config/config";

const ReferFriend = () => {
  const [copied, setCopied] = useState(false);

  return (
    <>
     <Row className="refer-mobile">
     <Col md="2">
     </Col>
     <Col md="8">
     <div className="refer-f">
     </div>
     <Col className="section text-center" md="12">
          {/* <img src={refer} className="refer-i"alt="refer friend" /> */}
          <h2 className="productName mb-3 referSectionTitle title_name">
            Refer your friend{" "}
            <span>
              to get <br />
              amazing cashback
            </span>
          </h2>
          <div className="social-m-logo">
          <FacebookShareButton url={`${hostName}`}>
              <img
                src={facebook}
                alt="facebook logo"
                className="mt-3 referSectionTitle s-refer-logo"
              />
            </FacebookShareButton>
            <InstapaperShareButton url={`${hostName}`} >
              <img
                src={instagram}
                alt="facebook logo"
                className="mt-3 referSectionTitle s-refer-logo "
              />
            </InstapaperShareButton>

            <Col>
          <div className="text-center">
            <input
              type="text"
              className="refer-input"
              placeholder="https://www.farmtrace.com"
              disabled
            />
            <CopyToClipboard
              text="https://www.farmtrace.com"
              onCopy={() => setCopied(true)}
              className="copylnk"
            >
              {copied ? (
                <span style={{ color: "green", fontWeight: "600" }}>
                  Copied
                </span>
              ) : (
                <span className="productName" style={{ cursor: "pointer" }}>
                  Copy link
                </span>
              )}
            </CopyToClipboard>
          </div>
        </Col>
          </div>
            
          
        </Col>
        
        {/* <Row className="social-m-logo"> */}
        {/* <Col>
          <div className="text-center circleBackground fbtn" >
            <FacebookShareButton url={`${hostName}`}>
              <img
                src={facebook}
                alt="facebook logo"
                className="mt-3 referSectionTitle f-refer-logo"
              />
            </FacebookShareButton>
          </div>
        </Col> */}
        {/* <Col className="cp">
          <div className="text-center circleBackground">
            <InstapaperShareButton url={`${hostName}`} >
              <img
                src={instagram}
                alt="facebook logo"
                className="mt-3 referSectionTitle i-logo"
              />
            </InstapaperShareButton>
          </div>
        </Col> */}
      {/* </Row> */}
     </Col>
     <Col md="2">
     </Col>
     </Row>
     
      <Row>
        {/* <Col>
          <div className="text-center referSectionTitle">
            <input
              type="text"
              className="refer-input"
              placeholder="https://www.farmtrace.com"
              disabled
            />
            <CopyToClipboard
              text="https://www.farmtrace.com"
              onCopy={() => setCopied(true)}
              className="copylnk"
            >
              {copied ? (
                <span style={{ color: "green", fontWeight: "600" }}>
                  Copied
                </span>
              ) : (
                <span className="productName" style={{ cursor: "pointer" }}>
                  Copy link
                </span>
              )}
            </CopyToClipboard>
          </div>
        </Col> */}
      </Row>
    </>
  );
};

export default ReferFriend;
