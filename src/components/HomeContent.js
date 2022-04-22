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
flex:2;

`;
const Text =styled.div`
positon:relative;
margin-top: -50px;
color:green;
font-family: 'Beau Rivage', cursive;
font-size:100px;

`;
const Content =styled.div`
positon:absolute;
margin-top:20px;
font-size:20px;
text-align: justify;
padding:15px; 
`;

const HomeContent = () => {
  return (
    <div>
    <Container>
      <Left>
    <Image src="images/mainlogo.png"></Image>
    </Left>
    <Right>
      <Text>
      Welcome to Universal Hospital,
     </Text><br/>
<Content>“Universal Multispeciality and Cancer Hospital” has been catering its value added super specialty services to the society since 2015. We have Doctors of multiple specializations to handle all major fields of medicine.The care and support given by our experienced medical staffs makes our relationship with our patients much more special. It has state of the art infrastructure, equipped with the latest technology, staffed with dedicated professionals, patient friendly comfortable ambience and safety proven processes. With more than four decades of experience in delivering affordable health care to south Tamil Nadu people with quality standards and value based health care in Salem, it is set to become the most progressive hospital in this part of the south Tamilnadu.
</Content>
    </Right>
    </Container>
    </div>
  );
}

export default HomeContent;
