import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

type InputProps = SpaceProps;

export const Input = styled.input<InputProps>`
  outline: none;
  background: none;
  color: ${({theme}) => theme.colors.text};
  ${space}
`;
