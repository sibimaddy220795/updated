import React from 'react';
import styled from 'styled-components';
import './HospitalInfo.css';
import ContentCutIcon from '@mui/icons-material/ContentCut';

const Container=styled.div`
position:relative;
display:flex;
width:100%;
aling-items:center;
justify-content: center;
`;

const HospitalInfo = () => {
  return (
      <Container>
    <div>
      <section class="icons-container">

<div class="icons">
    <i class="fas fa-user-md"></i>
    <h3>140+</h3>
    <p>doctors at work</p>
</div>

<div class="icons">
    <i class="fas fa-users"></i>
    <h3>1040+</h3>
    <p>satisfied patients</p>
</div>

<div class="icons">
    <i class="fas fa-procedures"></i>
    <h3>500+</h3>
    <p>bed facility</p>
</div>

<div class="icons">
<i class='fas fa-heartbeat'></i>
    <h3>1000+</h3>
    <p>Surgeries</p>
</div>

</section>
    </div>
    </Container>
  );
}

export default HospitalInfo;
