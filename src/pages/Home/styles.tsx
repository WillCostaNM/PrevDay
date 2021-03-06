import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

type RowProps = SpaceProps;

export const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 680px) {
    border: 1px solid green;
    grid-row: 1/3;
}
`;


export const WeekWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-column: 1/2;

  @media (min-width: 680px) {
    border: 1px solid green;
    grid-column: auto / span 2;
  }
`;
