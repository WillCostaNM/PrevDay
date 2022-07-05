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
  padding: 8px 0 8px 0;
  padding-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid red;
  border-left: 6px solid red;
  white-space: nowrap;
  & div{
    font-size: 1.5rem;
    border: 1px solid green;
    margin-top: 8px;
  }
`;

export const Temperature = styled(Detail)`
  border-left: 6px solid red;
  & div span:first-child{
    margin-right: 8px
  }
`;

export const Rain = styled(Detail)`
  border-left: 6px solid #B7B6B6;
  div{
    align-items: center;
    span{
      font-size: 1.2rem;
      width: 3.2rem;
      display: flex;
      justify-content: space-between;
      margin-right: 8px
    }
  }
`; 

export const Wind = styled(Detail)`
  border-left: 6px solid #C5D262;
`; 

export const AirHumidity = styled(Detail)`
  border-left: 6px solid #90CBF8;
  span{
    margin-right: 8px
  }
`; 

export const Sun = styled(Detail)`
  border-left: 6px solid #FEDD78;
`; 

export const Mooon = styled(Detail)`
  border-left: 6px solid #C1CBCF;
`; 

