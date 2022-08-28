import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

type GridProps = SpaceProps;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 40px;
`;

export const Grid = styled.div<GridProps>`
  margin-top: 20px;

  font-size: 1.6rem;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  gap: 20px;
  
  @media (min-width: 682px) {
    max-width: 780px;
  }

  ${space}
`;


export const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 682px) {
    grid-row: 1/3;
  }
`;


export const WeekWrapper = styled.div`
  display: grid;
  gap: 16px;
  
  width: 100%;
  grid-column: 1/2;

  @media (min-width: 682px) {
    grid-column: 3 / span 10;
  }
`;

export const MoreDetailsWrapper = styled.div`
  @media (max-width: 681px) {
    display: none;
  }
`;
