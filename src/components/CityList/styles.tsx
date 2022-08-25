import styled from "styled-components";
// import { space, SpaceProps } from "styled-system";


type CityListProps = {
  cursor: number,
  index: number
}

export const Container = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  position: absolute;
  margin-top: 4px;
  border-radius: 10px;
  position: absolute;
  background: #585656;
  width: 100%;
  z-index: 2;
`;

export const City = styled.li<CityListProps>`
  padding: 8px;
  background-color: ${({index, cursor}) => cursor === index ? 'rgb(110, 110, 110)' : ''};
`;
