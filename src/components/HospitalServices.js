import React from 'react';
import './HospitalServices.css';
import styled from 'styled-components';


const Title=styled.h1`
display:flex;
aling-items:center;
justify-content:center;

`;


const HospitalServices = () => {
  return (
    <div>
      <section class="services1" id="services1">

<Title>Our Services:</Title>
<br/>
<div class="box-container">

    <div class="box">
        <i class="fas fa-notes-medical"></i>
        <h3>free checkups</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
       
    </div>

    <div class="box">
        <i class="fas fa-ambulance"></i>
        <h3>24/7 ambulance</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
      
    </div>

    <div class="box">
        <i class="fas fa-user-md"></i>
        <h3>expert doctors</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
        
    </div>

    <div class="box">
        <i class="fas fa-pills"></i>
        <h3>medicines</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
        
    </div>

    <div class="box">
        <i class="fas fa-procedures"></i>
        <h3>bed facility</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
        
    </div>

    <div class="box">
        <i class="fas fa-heartbeat"></i>
        <h3>total care</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
        
    </div>

</div>

</section>
    </div>
  );
}

export default HospitalServices;
