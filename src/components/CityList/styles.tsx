import styled from "styled-components";


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
  overflow: hidden;
`;

export const City = styled.li<CityListProps>`
  padding: 16px;
  background-color: ${({index, cursor}) => cursor === index ? 'rgb(110, 110, 110)' : ''};
  cursor: pointer;
  &:hover{
    background-color: rgb(110, 110, 110);
  }
`;
