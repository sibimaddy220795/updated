import './Specalities.css';
import styled  from 'styled-components';
import React from 'react';

const Container=styled.div`
display:flex;
justify-content: center;
`;
const Image=styled.img`
height:50vh;
width:120vh;
`;
const Container1=styled.div`
padding-left: 200px;
display:flex;
background-color:wheat;
`;

const Content1=styled.div`

flex:1;
`;
const Content2=styled.div`

flex:1;
padding-left:20px;
`;

const Specialities = () => {
  return (
    <div>
      <Container>
      <Image src="https://cdn.inavateonthenet.net/images/oslo-university-hospital-4k-theatre.jpg"/>
    </Container>
    <h1>SPECIALITIES</h1>
    <Container1>
   
      <Content1>
  <ol>
  <li><a href="">24x7 Accident and Emergency & Critical care – a dedicated team of specialty with full time Consultants</a></li><br/>
  <li><a href="">General medicine and General surgery includes Laparoscopy Surgery</a></li><br/>
  <li><a href="">Comprehensive Trauma care</a></li><br/>
  <li><a href="">Orthopedics</a></li><br/>
  <li><a href="">Obstetrics and Gynaecology</a></li><br/>
  <li><a href="">Pediatrics and Pediatric Surgery</a></li><br/>
  <li><a href="">Neurology and Neuro Surgery</a></li><br/>
  </ol>
  </Content1>
  <Content2>
  <ol>
  <li><a href="">ENT Surgery</a></li><br/>
  <li><a href="">Dental and Facio Maxillary Surgery</a></li><br/>
  <li><a href="">Urology</a></li><br/>
  <li><a href="">oncology (Radiation, Medical & Surgical)</a></li><br/>
  <li><a href="">Nephrology with Dialysis ICU</a></li><br/>
  <li><a href="">State of Art ICU, SICU, NICU and HDU</a></li><br/>
</ol>
</Content2>
    </Container1>
    </div>
  );
}

export default Specialities;
