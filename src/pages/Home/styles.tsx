import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

type RowProps = SpaceProps;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid;
  width: 100%;
  max-width: 980px;
  margin: auto;
`;
