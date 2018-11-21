import styled from 'styled-components';
import { COLORS } from './colors';

export const HeaderContainer = styled.div`
  background-color: ${COLORS.BURNT_SIENNA};
  color: ${COLORS.WHITE};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

export const HeaderTextContainer = styled.div`
  align-items: center;
  background-color: ${COLORS.BLACK};
  color: ${COLORS.BLACK};
  * {
    color: ${COLORS.WHITE};
    font-size: 32px;
  };
  height: 40%;
`;
