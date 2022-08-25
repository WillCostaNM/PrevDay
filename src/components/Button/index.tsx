import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps, color, ColorProps } from "styled-system";


type ButtonProps = LayoutProps & SpaceProps & ColorProps;

export const Button = styled.button<ButtonProps>`
  background-color: ${({theme}) => theme.colors.text};
  color: ${({theme}) => theme.colors.secondary};
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover{
    box-shadow: inset 0 0 0 10em rgba(0, 0, 0, 0.4);
  }

  ${layout}
  ${space}
  ${color}
`;
