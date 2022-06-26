import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

type DayProps = {
  weekday: string,
}

type ContainerProps = SpaceProps;

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;

  @media (min-width: 680px) {
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  }
`;

export const Day = styled.div<DayProps>`

  display: flex;
  padding: 16px;
  background-color: ${({theme, id, weekday}) => theme.colors.secondary};
  border-radius: 12px;

  background-image: ${({id, weekday}) => id === weekday ? 'linear-gradient(150deg, #7FA9FF, #4e89fd)' : ''};

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
