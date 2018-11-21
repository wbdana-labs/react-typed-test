import React from 'react';
import Typed from 'react-typed';
import {
  HeaderContainer,
  HeaderTextContainer,
} from '../styles/Home';

const Home = () => {
  return (
    <HeaderContainer>
      <HeaderTextContainer>
        <Typed
          strings={[
            'Will Dana',
            'wbdana',
          ]}
          typeSpeed={20}
          backSpeed={40}
          loop
          smartBackspace
        />
      </HeaderTextContainer>
    </HeaderContainer>
  );
};

export default Home;