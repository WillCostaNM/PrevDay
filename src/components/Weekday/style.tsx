import React from 'react';
import styled from "styled-components";

type ContainerProps = {
  weekday: string,
  date: string,
}

type MobileWrapperProps = {
  clicked: boolean
}


export const Container = styled.div<ContainerProps>`

  margin-bottom: 16px;
  display: flex;
  padding: 20px;
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 12px;

  flex-direction: column;

  & > div:first-child{
  
    & > div:first-child{
      align-items: center;
      display: flex;
      width: 100%;
      justify-content: space-between;
      div{
        width: 40%;

        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
          max-width: 30%;
          min-width: 36px;
        }
        h4{
          margin-right: 20px;
        }
       
      }
    }
   

    @media (min-width: 682px) {
      & > div:first-child{
      flex-direction: column;
      align-items: center;
      
      div{
        width: auto;
        flex-direction: column;
        img{
          max-width: 100%;
        }
        h4{
          margin-right: 0;
        }
      }

      span{
        display: none;
      }
    }
    }
  }

  @media (min-width: 682px) {
    cursor: pointer;
    margin-bottom: 0;
    background-image: ${({date, weekday}) => date === weekday ? 'linear-gradient(150deg, #7FA9FF, #4e89fd)' : ''};

  }
`;

export const MobileWrapper = styled.div<MobileWrapperProps>`
  width: 100%;

  @media (max-width: 681px){
    overflow: hidden;

    ${({clicked}) => {
      if(clicked){
        return (
          'max-height: 1000px; transition: ease-in-out 0.5s;'
        )
      }else{
        return(
          'max-height: 0; transition: max-height 0.4s cubic-bezier(0, 1, 0, 1);'
        )
      }
      
    }}
    
  }

  @media (min-width: 682px) {
    display: none;
  }
`;
