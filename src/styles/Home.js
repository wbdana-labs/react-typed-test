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

export const HeaderTextContainer = styled.div`
  align-items: center;
  background-color: ${COLORS.BOLD_FEATURE.NAVY};
  color: ${COLORS.BLACK};
  display: flex;
  height: 33%;
  * {
    align-self: center;
    color: ${COLORS.BOLD_FEATURE.SCRUB};
    font-size: 32px;
  };
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