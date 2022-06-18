import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

type ContainerProps = SpaceProps;

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;

  @media (min-width: 680px) {
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  }
`;

export const Day = styled.div`
  display: flex;
  padding: 16px;
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 12px;
  align-items: center;

  & img{
    max-width: 10%;
  }
  
  @media (min-width: 680px) {
    flex-direction: column;
    height: auto;
    & img{
      max-width: 100%;
    }
  }

`;
