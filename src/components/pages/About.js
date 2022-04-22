import React from 'react';
import styled from 'styled-components';


const Container=styled.div`

display: flex;
height: 40vh;
transition: all 0.3s ease-out;
align-items: center;
background: linear-gradient(90deg, rgba(211,244,10,1) 0%, rgba(197,255,170,0.804359243697479) 35%, rgba(0,212,255,1) 100%);
`;
const Left=styled.div`
flex:0.5;

`;
const Image=styled.img`
height:300px;

`;


const Right =styled.div`
flex:1;

`;

const Text =styled.div`


`;
const Content =styled.div`
positon:absolute;
margin-top:20px;
font-size:20px;

`;

const AboutUs = () => {
  return (
    <div>
    <Container>
        
      <Left>
    <Image src="images/mainlogo.png"></Image>
    </Left>
    <Right>
      <Text>
      <h2>ABOUT</h2>
     </Text><br/>
<Content>Ours is a Cancer Hospital Coupled with other SuperSpecialties. We have bed strength of 100 under one roof. Under the guidance of Board Directors, it is managed by the Eminent Sonologist Dr. A. Rajarathinam, Chairman & Managing Director.<br/>
<br/>
Day- to- day Administration is carried out by an excellent professional Team in their respective areas.<br/>
<br/>
The medical team is headed by Dr.R.Pravin Rajarathnam. Medical Director, Who is an Eminent Diabtetologist, Critical Care Physician and a well-known Emergency care Intensivist.<br/>
<br/>
The Paramedical and the Administrative departments are headed by the team of professionals.<br/>
<br/>
All the members of our family are highly qualified, Committed, competent and dedicated.<br/>
</Content>
    </Right>
    </Container>
    </div>
  );
}

export default AboutUs;
