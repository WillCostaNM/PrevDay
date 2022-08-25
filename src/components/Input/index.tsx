import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

type InputProps = SpaceProps;

export const Input = styled.input<InputProps>`
  margin-right: 20px;
  width: 100%;
  display: inline-block;
  outline: none;
  border-radius: 12px;
  background: none;
  border: 1px solid #585858;
  font-size: 16px;
  padding: 8.5px 20px 8.5px 20px;
  color: ${({theme}) => theme.colors.text};
  ${space}
`;
