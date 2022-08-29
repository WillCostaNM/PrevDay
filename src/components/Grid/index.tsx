import styled from "styled-components";
import {space, SpaceProps} from "styled-system";

type GridProps = SpaceProps;

export const Grid = styled.div<GridProps>`
  font-size: 1.6rem;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  margin: auto;
  gap: 20px;
  @media (min-width: 680px) {
    max-width: 780px;
  }
  
  ${space}
`;
