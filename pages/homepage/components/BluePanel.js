import React from 'react';
import styles from "../css/BluePanel.module.css";
import { Container} from "react-bootstrap";

const BluePanel = () => {
  return <section className={styles.Partner_us_wrapper}>
      <div className={styles.partnet_top_view} >
        <Container>
            <div className={styles.Partner_us_section}>
                <div className={styles.panelContainer} >
                  <div className={styles.partner_text}>
                    <p> Partner with us and become a part of</p>
                    <span>largest sports community in India</span>
                  </div>
                  <div className={styles.btnWrapper} >
                    <a href="#." className={styles.btn_partner_us}>
                    Partner with us
                    </a>
                  </div>
                </div>
            </div>
        </Container>
      </div>
  </section>;
};

export default BluePanel;
