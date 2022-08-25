import styled from "styled-components";
import { space, SpaceProps } from "styled-system";


type ContainerProps = SpaceProps;

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 682px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  }

`;

