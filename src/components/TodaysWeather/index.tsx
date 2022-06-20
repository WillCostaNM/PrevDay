import { Weather } from "interfaces";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "store/reducers";
import { Container, Row } from "./styles";


export const TodaysWeather: React.FC = () => {
  
  const {isLoading, error, payload: weather} = useSelector((state: State) => state.weather);

  // console.log(error);

  return(
    <Container>

      {error && <div>{error.message}</div>}
      
      <Row>
        <h3>{isLoading ? '. . .' : weather?.location?.name}</h3>
      </Row>

      <Row mt='20px'>
        <h4>Today</h4>
        <div>Ter, 14 Jun</div>
      </Row>

      <Row mt='20px'>
        <h1>30ºC</h1>
      </Row>
    </Container>
  )
}
