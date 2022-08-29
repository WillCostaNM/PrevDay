import styled from "styled-components";


type CityListProps = {
};

export const Form = styled.form`
  position: relative;
`;

export const CityList = styled.div<CityListProps>`
  margin-top: 4px;
  border-radius: 10px;
  position: absolute;
  background: #585656;
  width: 100%;
  z-index: 2;
  padding: 8px;
  div{
    padding: 8px;
    border-bottom: 1px solid;
  }
`;
