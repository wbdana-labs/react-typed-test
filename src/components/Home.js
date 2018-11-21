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
            'William Dana',
            'Will Dana',
            '_wbdana',
            'wbdana',
          ]}
          typeSpeed={20}
          backSpeed={40}
          loop
        />
      </HeaderTextContainer>

    </HeaderContainer>
  );
};

export default Home;