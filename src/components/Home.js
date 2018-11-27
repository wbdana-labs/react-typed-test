import React from 'react';
import Typed from 'react-typed';
import {
  HeaderContainer,
  MainHeaderContainer,
  HeaderTextContainer,
  StaticHeaderContainer,
  SubHeaderTextContainer,
} from '../styles/Home';

const Home = () => {
  return (
    <HeaderContainer>
      <MainHeaderContainer>

        <StaticHeaderContainer>
          Will Dana
        </StaticHeaderContainer>

        <HeaderTextContainer>
          <Typed
            strings={[
              'Will Dana',
              'wbdana',
            ]}
            typeSpeed={25}
            backSpeed={40}
            loop
            smartBackspace
          />
        </HeaderTextContainer>
        
      </MainHeaderContainer>

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