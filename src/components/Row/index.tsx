import styled from 'styled-components';
import { space, SpaceProps, layout, LayoutProps, flexbox, FlexboxProps, border, BorderProps, fontSize, FontSizeProps} from "styled-system";

type RowProps = SpaceProps & LayoutProps & FlexboxProps & BorderProps & FontSizeProps;

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  ${space}
  ${layout}
  ${flexbox}
  ${border}
  ${fontSize}
`;
