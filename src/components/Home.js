import React from 'react';
import Typed from 'react-typed';
import {
  HeaderContainer,
  HeaderTextContainer,
  SubHeaderTextContainer,
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

      <SubHeaderTextContainer>
        <Typed
          strings={[
            'Linda Zhang',
            'Indy Dog',
          ]}
          typeSpeed={70}
          backSpeed={40}
          loop
          smartBackspace
        />
      </SubHeaderTextContainer>
    </HeaderContainer>
  );
};

export default Home;