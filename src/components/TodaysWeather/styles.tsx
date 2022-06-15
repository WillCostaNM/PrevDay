import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

type RowProps = SpaceProps;

export const Container = styled.div`
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  background-color: ${({theme})=>theme.colors.secondary};
  padding: 20px;

  /* @media (min-width: 900px){
    grid-column: 1/3;
  } */
`;

export const Row = styled.div<RowProps>`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  ${space}
`;
