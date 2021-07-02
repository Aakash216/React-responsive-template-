import React from 'react';
import web from '../src/images/animated.jpg';
import Common from './Common';

const Home = () => {
  return (
    <>
   <Common 
   name= "Grow your business with"
   imgsrc = {web}
   visit = "/service"
   btname = "Get Started"
   h1 = "3SRC have the team of the talented developers making website"
   />
    </>
  );
};

export default Home;