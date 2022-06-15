import styled from "styled-components";
import {space, SpaceProps} from "styled-system";

type GridProps = SpaceProps;

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  max-width: 450px;
  
  ${space}
`;
