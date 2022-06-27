import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

// type RowProps = SpaceProps;

export const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 680px) {
    grid-row: 1/3;
    border: 1px solid green;
  }
`;


export const WeekWrapper = styled.div`
  display: grid;
  gap: 16px;
  
  width: 100%;
  grid-column: 1/2;

  @media (min-width: 680px) {
    border: 1px solid green;
    grid-column: 3 / span 6;
  }
`;
