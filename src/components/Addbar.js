import React from 'react';
import './Addbar.css';
import styled from 'styled-components';
import CallIcon from '@mui/icons-material/Call';
const Container=styled.div`
background-color: #FFFFE0;

`;

const Addbar = () => {
  return (
    <div>
        <Container>
      <div class="scrolling">
		<h3>{`Universal Hospital (A unit of Universal Cancer Hospital
             Limited)
             `} <CallIcon /> {`0427 2273477, 2273577.`}</h3>
	</div>
    </Container>
    </div>
  );
}

export default Addbar;
