import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

type InputProps = SpaceProps;

export const Input = styled.input<InputProps>`
  display: inline-block;
  outline: none;
  border-radius: 12px;
  background: none;
  font-size: 1.6rem;
  padding: 8.5px 20px 8.5px 20px;
  color: ${({theme}) => theme.colors.text};
  ${space}
`;
