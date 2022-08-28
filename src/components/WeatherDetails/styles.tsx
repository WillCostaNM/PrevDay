import styled from "styled-components";
// import {space, SpaceProps} from "styled-system";

// type GridProps = SpaceProps;

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;

export const Detail = styled.div`
  padding: 8px 0 8px 0;
  padding-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 6px solid red;
  white-space: nowrap;
  
  & div{
    font-size: 1.5rem;
    margin-top: 8px;
    align-items: center;

    span:first-child{
      margin-right: 4px;
    }
  }
`;

export const Temperature = styled(Detail)`
  border-left: 6px solid red;
 
`;

export const Rain = styled(Detail)`
  border-left: 6px solid #B7B6B6;
  span{
    font-size: 1.2rem;
    width: 3.2rem;
    display: flex;
    justify-content: space-between;
  }
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
  div{
    font-size: 1.1rem;
  }
  span{
    font-size: 1.5rem;
  }
`; 

