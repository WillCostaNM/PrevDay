import styled from 'styled-components';
import { space, SpaceProps, layout, LayoutProps, flexbox, FlexboxProps, border, BorderProps} from "styled-system";

type RowProps = SpaceProps & LayoutProps & FlexboxProps & BorderProps;

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  ${space}
  ${layout}
  ${flexbox}
  ${border}
`;
