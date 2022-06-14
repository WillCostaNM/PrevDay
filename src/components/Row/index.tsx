import styled from 'styled-components';
import { space, SpaceProps, layout, LayoutProps} from "styled-system";

type RowProps = SpaceProps & LayoutProps

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  ${space}
  ${layout}
`;
