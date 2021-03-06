import styled from "styled-components";
import {space, SpaceProps} from "styled-system";

type GridProps = SpaceProps;

export const Grid = styled.div<GridProps>`
  font-size: 1.6rem;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  max-width: 980px;
  border: 1px solid red;
  margin: auto;
  grid-gap: 16px;
/*   
  @media (min-width: 900px){
    max-width: 1000px;
  }
*/
  ${space}
`;
