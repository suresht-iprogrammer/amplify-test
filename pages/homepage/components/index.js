import React from 'react';
import Collection from './Collection';
import LandingPage from './LandingPage';
import Badminton from './Badminton';
import DiscoverYourSport from './DiscoverYourSport';
import LearningCentre from './LearningCentre';
import Partner from './Partner';
import Coach from './Coach'


const Homepage = () => {
  return <>
      <LandingPage/>
      <Collection />
      <Partner/>
      <DiscoverYourSport />
      <Coach/>
      <LearningCentre />
      <Badminton />
     
  </>;
};

export default Homepage;
