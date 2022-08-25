import React from "react";
import {Location} from "interfaces";
import {City, Container} from './styles';

type ListProps = {
  cities: Location[],
  cursor: number,
  handleClick: (city: string) => void
}

export const CityList: React.FC<ListProps> = ({cities, cursor, handleClick}) => {

  
  return <Container>
    
    {
      cities.map(({name}, index) => {
        return <City key={index} onClick={() => handleClick(name)} cursor={cursor} index={index}>{name}</City>
      })
    }

  </Container>
}