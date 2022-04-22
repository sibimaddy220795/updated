import React from 'react';
import styled from 'styled-components';
import Maps from './Maps';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';


const Container=styled.div`
position:relative;

display:flex;

width:100%;
height:auto;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const LeftCenter=styled.div`
flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  
`;

const Right = styled.div`
  flex:1;
  padding: 20px;
  
`;

const Center=styled.div`
flex: 2;
padding: 20px 10px;
margin-left:150px;

`;
const LogoContainer=styled.div`

`;
const Image=styled.img`
height:200px;
`;

const InfoContainer=styled.div`

`;
const Title=styled.div`
color:red;
font-size:30px;
margin-left:20px;
font-family: sans-serif;
`;
const ContactItem = styled.div`
 margin-bottom:25px;
  display: flex;
  align-items: center;
`;

const Title1=styled.div`
padding:20px;
font-size:30px;

`;



const Footer = () => {
  return (
    <Container>
        <Left>
      <Title1>ADDRESS:</Title1>
        <ContactItem>
          <BusinessRoundedIcon style={{marginRight:"10px"}}/>370, Jari Kondalampatty,<br/> Near Kondalampatty Roundana,<br/> Salem - 636 010.
        </ContactItem>
        </Left>
        <LeftCenter>
        <Title1>CONTACT:</Title1>
        <ContactItem>
          <CallIcon style={{marginRight:"10px"}}/> 0427 2273477, 2273577.
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{marginRight:"10px"}} />universalcancerhospital@gmail.com
        </ContactItem>
        </LeftCenter>
       <Center>
        <Maps />
       </Center>
        <Right>
        <LogoContainer>
        <Image src="images/logo1.png"></Image>
        <InfoContainer>
        <Title>Accreditation</Title>
        <br/>
        <p>Universal Hospital has received full Accreditation Certification from National Accreditation Board for Hospitals & Healthcare Providers (NABH)</p>
        </InfoContainer>
        </LogoContainer>
      </Right>
    </Container>
  
  );
}

export default Footer;
