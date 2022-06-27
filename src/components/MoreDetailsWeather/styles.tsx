import styled from "styled-components";
// import {space, SpaceProps} from "styled-system";

// type GridProps = SpaceProps;

export const Container = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;

export const Detail = styled.div`
  padding-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid red;
  border-left: 6px solid red;
  white-space: nowrap;
  & div{
    border: 1px solid green;
    margin-top: 8px;
  }
`;

export const Temperature = styled(Detail)`
  border-left: 6px solid red;
  & div{
    
  }
`;

export const Rain = styled(Detail)`
  border-left: 6px solid #B7B6B6;
`; 

export const Wind = styled(Detail)`
  border-left: 6px solid #C5D262;
`; 

export const AirHumidity = styled(Detail)`
  border-left: 6px solid #90CBF8;
`; 

export const Sun = styled(Detail)`
  border-left: 6px solid #FEDD78;
`; 

export const Mooon = styled(Detail)`
  border-left: 6px solid #C1CBCF;
`; 

