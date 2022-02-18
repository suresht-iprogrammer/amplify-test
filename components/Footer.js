import React from "react";
import { Container} from 'react-bootstrap';
import { useRouter } from "next/router";
import icon_instagram from '../assets/images/icon_instagram.svg'; 
import icon_twitter from '../assets/images/icon_twitter.svg'; 
import icon_facebook from '../assets/images/icon_facebook.svg'; 
import logo_footer_logo from '../assets/images/spolto_logo_footer.svg'; 

import Image from 'next/image';
import styles from '../assets/css/Footer.module.css';
import { useState } from "react";

const Footer = () => {
    
    const[categoryShow,setCategoryShow] =useState(false);
    const router = useRouter();

    const categoryHandler = (e) => {
        let id = e.currentTarget.id;
        
        setCategoryShow(!categoryShow);
  
    }

  return (
    <div className={styles.footer_section}>
        <div className={styles.footer_wrap}>
            <Container>
                <div className={styles.foot_cnt_social}>
                    <div className={styles.left_footer}>
                        <div className={styles.footer_logo}>
                        <Image
                                    src={logo_footer_logo}
                                    alt="Instagram"
                                    onClick={() => router.push('/')}
                                 />
                        </div>
                        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore<br /> et dolore magna aliqua. Ut enim ad<br /> minim veniam, quis</p>
                        <div className={styles.footer_social}>
                            <a href="#." className={styles.anch_social}>
                                <Image
                                    src={icon_instagram}
                                    alt="Instagram"
                                 />
                            </a>
                            <a href="#." className={styles.anch_social}>
                                <Image
                                    src={icon_twitter}
                                    alt="Twiiter"
                                 />
                            </a>
                            <a href="#." className={styles.anch_social}>
                                <Image
                                    src={icon_facebook}
                                    alt="Facebook"
                                 />
                            </a>
                            <div className="clearfix"></div>
                        </div>
                    </div>

                    <div className={styles.right_footer}>
                        <div className={`${styles.footer_box} ${categoryShow ? styles.footer_box_open: null}`} onClick={categoryHandler} id="test1">
                            <span>Categories</span>
                            <div className={styles.linkBox}>
                                <a href="#.">
                                    Sports Academies 
                                </a>
                                <a href="#.">
                                    Sports Coaches
                                </a>
                            </div>
                        </div>
                        <div className={`${styles.footer_box} ${categoryShow ? styles.footer_box_open: null}`} onClick={categoryHandler}>
                            <span>Popular sports</span>
                            <div className={styles.linkBox}>
                                <a href="#.">
                                Cricket 
                                </a>
                                <a href="#.">
                                Football 
                                </a>
                                <a href="#.">
                                Basketball 
                                </a>
                                <a href="#.">
                                Badminton 
                                </a>
                                <a href="#.">
                                Chess Tennis
                                </a>
                                <a href="#.">
                                 Tennis
                                </a>
                            </div>
                        </div>
                        <div className={`${styles.footer_box} ${categoryShow ? styles.footer_box_open: null}`} onClick={categoryHandler}>
                            <span>About us</span>
                            <div className={styles.linkBox}>
                                <a href="#.">
                                About Spolto  
                                </a>
                                <a href="#.">
                                Partner With Us
                                </a>
                                <a href="#.">
                                Learning Center
                                </a>
                            </div>
                        </div>
                        <div className={`${styles.footer_box} ${categoryShow ? styles.footer_box_open: null}`} onClick={categoryHandler}>
                            <span>Legal & support</span>
                            <div className={styles.linkBox}>
                                <a href="#.">
                                Contact Us
                                </a>
                                <a href="#.">
                                Privacy Policy 
                                </a>
                                <a href="#.">
                                Terms & Conditions 
                                </a>
                                <a href="#.">
                                Terms Of Service
                                </a>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </Container>
        </div>
        <div className={styles.footer_copy}>
            <Container>
                &copy; Spolto 2021
            </Container>
        </div>

     
    </div>
  );
};

export default Footer;
