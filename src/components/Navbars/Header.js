import React, { useEffect } from "react";
import { Link, withRouter, useLocation } from "react-router-dom";
import classnames from "classnames";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Button,
  Nav,
  Container,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { isMobile } from "react-device-detect";
import { compose } from "redux";
import { connect } from "react-redux";
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import innoTraceBrand from "../../assets/img/innoTraceBrand.png";
import ham_logo from "../../assets/img/ino-ham.png";
import { getProductList } from "../../redux/actions/fruitDetailAction";
import { setSelectedMenu } from "../../redux/actions/commonAction";

import { serverUrl } from "../../config/config";

function Header({ history, productList, getProducts, selectedMenu, setMenu }) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  // const [selectedMenu, setSelectedMenu] = React.useState("");
  const [isArrow, setIsArrow] = React.useState(false);

  let { pathname } = useLocation();
  
  if(pathname.split('/') != undefined) {
    setMenu(pathname.split('/')[1]);
  } else {
    setMenu(pathname);
  }


  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  useEffect(() => {
    getProducts();

    setIsArrow(false);

    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 129 ||
        document.body.scrollTop > 129
      ) {
        setNavbarColor("navbar-white");
      } else if (
        document.documentElement.scrollTop < 130 ||
        document.body.scrollTop < 130
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    
    if(isMobile == false)
    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      if(isMobile == false)
      window.removeEventListener("scroll", updateNavbarColor);
    };

  }, []);

  const gotoFruitDetailPage = (id) => {
    history.push(`/?code=${id}`);
  };

  const getDropdownList = () => {
    return (
      productList.data &&
      productList.data.map((data, index) => {
        return (
          <DropdownItem
            onClick={(e) => {
              gotoFruitDetailPage(data.attributes.default_code);
              toggleNavbarCollapse();
            }}
            key={index}
          >
            {/* attributes.code */}
            <img
              src={`${serverUrl}${data.attributes.product_logo.data.attributes.url}`}
              width="60"
            />
            {data.attributes.product_short_name}
          </DropdownItem>
        );
      })
    );
  };

  return (
    <>
    {
      navbarCollapse && isMobile && <RemoveScrollBar />
    }
      <Navbar
        className={`${classnames("fixed-top", navbarColor)}`}
        color-on-scroll="130"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate mobile-nav">
            <NavbarBrand
              data-placement="bottom"
              // to="/"
              title="Innotrace"
              // tag={Link}
              style={{ cursor: "auto" }}
            >
              <img className="brand-logo" src={innoTraceBrand} alt="Innotrace" />
            </NavbarBrand>
            <button
              aria-expanded={navbarCollapse}
              className={classnames("navbar-toggler navbar-toggler float-left hamb-btn", {
                toggled: navbarCollapse,
              })}
              onClick={toggleNavbarCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            navbar
            isOpen={navbarCollapse}
          >
            <Nav navbar className="land-menu">
              <NavItem>
                <NavLink
                  to="/about-farmtrace"
                  className={classnames(
                    selectedMenu == "about-farmtrace" ? "landing-active" : ""
                  )}
                  tag={Link}
                  onClick={() => {
                    toggleNavbarCollapse();
                  }}
                >
                  About FarmTrace
                </NavLink>
              </NavItem>
              <NavItem className="product-btn">
                <Dropdown
                isOpen={isArrow}
                toggle={() => setIsArrow(!isArrow)}
                >
                  <DropdownToggle
                    aria-expanded={false}
                    aria-haspopup={true}
                    color="muted"
                    data-toggle="dropdown"
                    id="dropdownMenuButton"
                    type="button"
                    className={classnames(isArrow ? "caret-down" : "caret-up")}
                  >
                    Products
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuButton">
                    <div class="arrow-up"></div>
                    {getDropdownList()}
                  </DropdownMenu>
                </Dropdown>
              </NavItem>

              <NavItem className={classnames(
                    isArrow == true ? `product_list_${productList.data && productList.data.length}` : ``
                  )}>
                <NavLink
                  to="/recipies"
                  tag={Link}
                  className={classnames(
                    selectedMenu == "recipies" ? "landing-active" : "" || selectedMenu == "recipie" ? "landing-active" : ""
                  )}
                  onClick={() => {
                    toggleNavbarCollapse();
                  }}
                >
                  Recipies
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/blogs"
                  tag={Link}
                  className={classnames(
                    selectedMenu == "blogs" ? "landing-active" : "" || selectedMenu == "blog" ? "landing-active" : ""
                  )}
                  onClick={() => {
                    toggleNavbarCollapse();
                  }}
                >
                  Blogs
                </NavLink>
              </NavItem>
              <div className="menu-ft-logo">
                 <p> &nbsp; Powered by</p>
                 <br />
                 <hr className="hamline" />
                 <img className="hamlogo" src={ham_logo} alt="Innotrace" />
          </div>
            </Nav>
          </Collapse>
        </Container>
        
      </Navbar>
      <div style={{ height: "50px" }}></div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    productList: state.fruitDetailReducer.productList,
    selectedMenu: state.commonReducer.selectedMenu
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch(getProductList());
    },
    setMenu: (menu) => {
      dispatch(setSelectedMenu(menu));
    },
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Header);
