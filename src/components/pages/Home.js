import React from 'react';
import HospitalInfo from '../HospitalInfo';
import HomeContent from '../HomeContent';
import Slider from '../Slider';
import HospitalServices from '../HospitalServices';

const Home = () => {
  return (
    <div>
    <Slider />
    <HomeContent />
    <HospitalInfo /><br/>
    <HospitalServices/>
    
    
</div>
  );
}

export default Home;

