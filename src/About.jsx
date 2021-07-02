import React from 'react';
import web from '../src/images/anima.gif';
import Common from './Common';

const About = () => {
  return (
    <>
   <Common 
   name= "Welcome to our About page"
   imgsrc = {web}
   visit = "/contact"
   btname = "Contact Now"
   h2= "3SR stands for science, self, spirituality and results respectively.Science refers to all the knowledge you have gained since childhood, Self refers to your inter personal relationships and spirituality refers to a sense of connection to something bigger than yourself."
   />
    </>
  );
};

export default About