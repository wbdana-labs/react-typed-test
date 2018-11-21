import styled from 'styled-components';
import { COLORS } from './colors';

export const HeaderContainer = styled.div`
  background-color: ${COLORS.RED};
  color: ${COLORS.WHITE};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

export const HeaderTextContainer = styled.div`
  background-color: ${COLORS.BLACK};
  color: ${COLORS.BLACK};
  * {
    color: ${COLORS.WHITE};
    font-size: 32px;
  };
`;
