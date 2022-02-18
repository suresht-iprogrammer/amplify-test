import React from "react";
import { Container } from "reactstrap";
import Blogs from "./Blogs";
import WayToConsume from "./WayToConsume";
import FruitsList from "./FruitsList";
import FollowsUs from "./FollowsUs";
import FeatureContent from "./FeatureContent";
import FruitDetailPage from "./FruitDetailPage";
import FruitState from "./FruitState";
import ReferFriend from './ReferFriend';
import MyStory from './MyStory';

const FruitDetail = ({history}) => {
  return (
    <Container>
      <FruitDetailPage />
      <MyStory />
      <FruitState />
      <WayToConsume />
      <FruitsList />
      <FollowsUs />
      <FeatureContent />
      <br />
      <hr />
      <Blogs />
      <ReferFriend />
    </Container>
  );
};

export default FruitDetail;
