import styled from "styled-components";
import { space, SpaceProps, color, ColorProps, layout, LayoutProps, border, BorderProps, flexbox, FlexboxProps, grid, GridProps} from "styled-system";


type ColumnProps = SpaceProps & ColorProps & LayoutProps & BorderProps & FlexboxProps & GridProps;

export const Column = styled.div<ColumnProps>`
  padding: 20px;
  display: flex;
  flex-direction: column;
  grid-column: 1/9;
  ${space}
  ${color}
  ${layout}
  ${border}
  ${flexbox}
  ${grid}
`;
