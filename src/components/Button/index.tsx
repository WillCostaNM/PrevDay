import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps, color, ColorProps } from "styled-system";

type ButtonProps = LayoutProps & SpaceProps & ColorProps;

export const Button = styled.button<ButtonProps>`
  background-color: rgb(${({theme}) => theme.colors.tertiary}); 
  ${layout}
  ${space}
  ${color}
`;
