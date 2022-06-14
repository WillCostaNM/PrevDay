import styled from "styled-components";
import { space, SpaceProps, color, ColorProps, layout, LayoutProps, border, BorderProps} from "styled-system";


type ColumnProps = SpaceProps & ColorProps & LayoutProps & BorderProps;

export const Column = styled.div<ColumnProps>`
  padding: 24px;
  display: flex;
  flex-direction: column;
  ${space}
  ${color}
  ${layout}
  ${border}
`;
