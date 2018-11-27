import styled from 'styled-components';
import { COLORS } from './colors';

export const HeaderContainer = styled.div`
  background-color: ${COLORS.BOLD_FEATURE.MOUNTAIN};
  color: ${COLORS.WHITE};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

export const MainHeaderContainer = styled.div`
  align-items: center;
  background-color: ${COLORS.BOLD_FEATURE.NAVY};
  flex-direction: column;
  height: 33%;
`;

export const HeaderTextContainer = styled.div`
  align-items: center;
  background-color: ${COLORS.BOLD_FEATURE.NAVY};
  color: ${COLORS.BLACK};
  display: flex;
  * {
    align-self: center;
    color: ${COLORS.BOLD_FEATURE.SCRUB};
    font-size: 32px;
  };
`;

export const StaticHeaderContainer = styled.div`
  align-self: center;
  color: ${COLORS.BOLD_FEATURE.SCRUB};
  display: flex;
`;

export const SubHeaderTextContainer = styled.div`
  align-items: center;
  background-color: ${COLORS.BOLD_FEATURE.GOLD};
  color: ${COLORS.BOLD_FEATURE.CORAL};
  display: flex;
  height: 15%;
  * {
    align-self: center;
    color: ${COLORS.STORMY_HUES.EVENING};
    font-size: 32px;
  };
`;