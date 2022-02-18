import React, { useEffect, useState } from "react";
import {
  faUserCircle,
  faCommentAlt,
  faHome,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../assets/css/Nav.module.css";
// import humburgerImg from '../assets/images/humburger.svg';
// import Image from 'next/image';
import { Navbar, Container, Nav, Form, Card } from "react-bootstrap";
import { useRouter } from "next/router";
import Searchbox from "../pages/homepage/components/Searchbox";
import searchImg from "../assets/images/search.svg";
import blueLogo from "../assets/images/Spolto_Logo_Header.svg";
import whiteLogo from "../assets/images/Spolto_Logo_White.svg";
import icon_home from "../assets/images/icon_home.svg";
import icon_discover from "../assets/images/icon_discover.svg";

import Image from "next/image";

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";

const TopNav = () => {
  const router = useRouter();
  const [isScroll, setIsScroll] = useState(false);

  // const [isShown, setIsShown] = useState(false);
  const [dropdownOpen, setOpen] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      let c = window.scrollY;
      if (c > window.innerHeight) {
        // document.getElementById("sticky_nav").className = "fixed_nav";
        setIsScroll(true);
      } else {
        // document.getElementById("sticky_nav").className = "";
        setIsScroll(false);
      }
    };
  }, []);

  // const dropDownHandler = () =>{
  //   setIsShown(!isShown);
  // }

  return (
    <>
      <div
        id="sticky_nav"
        className={`${styles.sticky_topnav} ${
          isScroll === true
            ? styles.fixed_nav
            : router.pathname == "/"
            ? null
            : styles.fixed_nav
        }`}
      >
        <Navbar bg="trasparent" expand="lg" className={styles.navbar}>
          <Container>
            {router.pathname == "/" && isScroll === false ? (
              <Navbar.Brand
                className={styles.stickylogoImg}
                onClick={() => router.push("/")}
              >
                <Image src={whiteLogo} />
              </Navbar.Brand>
            ) : (
              <Navbar.Brand
                className={styles.stickylogoImg}
                onClick={() => router.push("/")}
              >
                <Image src={blueLogo} />
              </Navbar.Brand>
            )}

            <div className={styles.togglesearch}>
              <Form className={styles.navSearch}>
                <Searchbox placeHolder="Search for Coaches & Academies" />
                <div className={styles.right_arrow}>
                  <Image src={searchImg} alt="arrow" />
                </div>
              </Form>
            </div>

            <Navbar.Toggle
              aria-controls="navbarScroll"
              className={styles.togglebar}
            />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <div
                  className={styles.navchat}
                  style={{ visibility: "hidden" }}
                >
                  <span></span>
                  <FontAwesomeIcon
                    icon={faCommentAlt}
                    size="xs"
                    className={styles.chatIcon}
                    color="#2bbf08"
                  />
                </div>

                <ButtonDropdown
                  toggle={() => {
                    setOpen(!dropdownOpen);
                  }}
                  isOpen={dropdownOpen}
                >
                  <DropdownToggle className={styles.profile_container} caret>
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      size="xs"
                      className={styles.pIcon}
                      color="black"
                    />
                    <div className={styles.humberger}>
                      <span></span>
                      <span className={styles.menutoggle}></span>
                      <span className={styles.menutoggle}></span>
                    </div>
                  </DropdownToggle>
                  <DropdownMenu end className={styles.dropdownCard}>
                    <DropdownItem>Login</DropdownItem>
                    <DropdownItem>Partner with us</DropdownItem>
                    <DropdownItem>Support</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className={styles.mobNavWrapper}>
        <div className={styles.mobNavicon_container}>
          <div className={styles.iconName & styles.active}>
            {/* <FontAwesomeIcon
              icon={faHome}
              size="xs"
              className={styles.mobHomeIcon}
            /> */}
             <Image src={icon_home} className={styles.mobSearchIcon} />
            <div className={styles.mobIconText}>Home</div>
          </div>
          <div className={styles.iconName}>
            {/* <FontAwesomeIcon
              icon={faSearch}
              size="xs"
              className={styles.mobSearchIcon}
            /> */}
            <Image src={icon_discover} className={styles.mobSearchIcon} />
            
            <div className={styles.mobIconText}>Discover</div>
          </div>
          {/* <div className={styles.iconName}>
            <FontAwesomeIcon
              icon={faCommentAlt}
              size="xs"
              className={styles.mobInboxIcon}
            />
            <div className={styles.mobIconText}>Inbox</div>
          </div> */}
          <div className={styles.iconName}>
            <FontAwesomeIcon
              icon={faUser}
              size="xs"
              className={styles.mobProfileIcon}
            />
            <div className={styles.mobIconText}>Login</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
