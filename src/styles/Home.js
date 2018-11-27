import styled from 'styled-components';
import { COLORS } from './colors';

export const HeaderContainer = styled.div`
  background-color: ${COLORS.BOLD_FEATURE.MOUNTAIN};
  color: ${COLORS.WHITE};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  * {
    width: 100%;
  }
`;

export const MainHeaderContainer = styled.div`
  background-color: ${COLORS.BOLD_FEATURE.NAVY};
  flex-direction: column;
  height: 33%;
  * {
    width: 100%;
  };
`;

export const HeaderTextContainer = styled.div`
  align-items: center;
  background-color: ${COLORS.BOLD_FEATURE.NAVY};
  color: ${COLORS.BLACK};
  display: flex;
  flex-direction: row;
  justify-content: center;
  * {
    align-items: center;
    color: ${COLORS.BOLD_FEATURE.SCRUB};
    flex-direction: row;
    font-size: 32px;
    justify-content: center;
  };
`;

export const StaticHeaderContainer = styled.div`
  color: ${COLORS.BOLD_FEATURE.SCRUB};
  display: flex;
  flex-direction: row;
  font-size: 32px;
  justify-content: center;
`;

export const SubHeaderTextContainer = styled.div`
  background-color: ${COLORS.BOLD_FEATURE.GOLD};
  color: ${COLORS.BOLD_FEATURE.CORAL};
  display: flex;
  flex-direction: row;
  height: 15%;
  * {
    align-self: center;
    color: ${COLORS.STORMY_HUES.EVENING};
    font-size: 32px;
    justify-content: center;
    width: 100%;
  };
`;