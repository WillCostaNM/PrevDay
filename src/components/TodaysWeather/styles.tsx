import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

type RowProps = SpaceProps;

type ContainerProps = {
  is_day?: boolean | number;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient( ${({is_day}) => is_day ?  '150deg, #4f8aff, #4e89fd' : '150deg, #395999, #00205f'} );
  padding: 20px;
`;

export const Row = styled.div<RowProps>`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  
  img{
    max-width: 64px;
    min-width: 20px;
    position: absolute;
    right: 0;
    top: -15px;
    width: 30%;
  }

  &:nth-child(4){
    flex-direction: row;
    align-items: center;
    justify-content: start;
    h3{
      margin-left: 8px;
    }
  }
  
  @media (min-width: 682px) {
    
    flex-direction: column;
    
    img{
      width: 100%;
      max-width: 110px;
      min-width: 60px;
      position: relative;
      top: auto;
      margin-bottom: 20px;
    }

    &:first-child{
      font-size: 0.9em;

      margin-top: 16px;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      h4{
        font-size: 1em;
        margin-right: 8px;
      }
    }

    &:nth-child(2){
      margin-top: 0;
      order: -1;
      img{
        margin: 0;
      }
    }

    &:nth-child(3){
      margin-top: 20px;
      h1{
        font-size: 5em;
      }
    }

    &:nth-child(4){

      order: -3;
      margin-top: 0;
      margin-bottom: 16px;

      h3{
        font-weight: 600;
        font-size: 1.2em;
      }
    }

    
  }

  ${space}
`;
