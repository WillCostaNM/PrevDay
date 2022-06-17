import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

type RowProps = SpaceProps;

export const Container = styled.div`
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(150deg, #7FA9FF, #4e89fd);
  padding: 20px;
`;

export const Row = styled.div<RowProps>`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  ${space}
`;
