import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

type RowProps = SpaceProps;

export const Container = styled.div`
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  background-color: ${({theme})=>theme.colors.secondary};
  padding: 20px;

  
`;

export const Row = styled.div<RowProps>`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  ${space}
`;
