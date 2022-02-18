import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
// import Index from "views/Index.js";
// import NucleoIcons from "views/NucleoIcons.js";
// import LandingPage from "views/examples/LandingPage.js";
// import ProfilePage from "views/examples/ProfilePage.js";
// import RegisterPage from "views/examples/RegisterPage.js";
import AboutFarmTrace from 'views/about-farmtrace';
import FruitDetail from 'views/fruit-detail';
import Header from './components/Navbars/Header';
import Footer from "./components/Footers/Footer";
import Recipies from "views/recipies";
import Blogs from 'views/blogs'
import BlogDetail from 'views/blog-detail'
import RecipieDetail from 'views/recipie-detail';
import ScrollToTop from "config/ScrollToTop";

import store from "./redux/store";
import MyStoryDetails from "views/my-story-details";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
    <Switch>
      <Provider store={store}>
        <Header />
        <Route
          path="/about-farmtrace"
          exact
          render={(props) => <AboutFarmTrace {...props} />}
        />
     
        <Route
          path="/recipies"
          exact
          render={(props) => <Recipies {...props} />}
        />
        <Route
          path="/blogs"
          exact
          render={(props) => <Blogs {...props} />}
        />
        <Route
          path="/blog/:id"
          exact
          render={(props) => <BlogDetail {...props} />}
        />
        <Route
          path="/recipie/:id"
          exact
          render={(props) => <RecipieDetail {...props} />}
        />
         <Route
          path="/my-story-detail"
          exact
          render={(props) => <MyStoryDetails {...props} />}
        />
        <Route
          path="/"
          exact
          render={(props) => <FruitDetail {...props} />}
        />
        {/* <Redirect to="/index" /> */}
        <Footer />
      </Provider>
    </Switch>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);
