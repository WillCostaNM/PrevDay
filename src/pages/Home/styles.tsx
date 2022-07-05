import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

type GridProps = SpaceProps;

export const Grid = styled.div<GridProps>`
  font-size: 1.6rem;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  border: 1px solid red;
  margin: auto;
  gap: 20px;
  
  @media (min-width: 680px) {
    max-width: 780px;
  }

  ${space}
`;


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
