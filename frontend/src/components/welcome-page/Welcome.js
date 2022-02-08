import React from 'react';
import styled from 'styled-components';

import Login from './Login';
import NavbarWelcome from './NavbarWelcome.js';
import AdCopyWelcome from './AdCopyWelcome.js';
import WelcomeImage from './WelcomeImage.js';
import Footer from '../reusable-components/Footer.js';
import InfoText from './InfoText.js';
const Container = styled.main`
  min-height: 90vh;
  background-color: white;
  margin: 0 15px 0 15px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 50px 0 50px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Welcome = () => {
  return (
    <Container>
      <NavbarWelcome />
      <Grid>
        <AdCopyWelcome />
        <WelcomeImage />
        <Login />
        <InfoText />
      </Grid>
      <Footer />
    </Container>
  );
};

export default Welcome;
