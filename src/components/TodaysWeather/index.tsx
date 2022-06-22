import { Weather } from "interfaces";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "store/reducers";
import { Container, Row } from "./styles";


export const TodaysWeather: React.FC = () => {

  const {payload: weather, isLoading, error} = useSelector((state: State) => state.weather);
  const {location: {localtime = ''} = {}, current: {} = {}} = weather || {};


  const dateObj = new Date(localtime);
  const dayNameShort = dateObj.toLocaleString('pt-BR', {weekday: "short"})

  return(
    <Container>

      {/* {error?.isRequestError && <div>Internal Error</div>}

      {!error?.isRequestError && <div>{error?.message}</div>} */}
      
      <Row>
        {/* <h3>{isLoading ? '. . .' : weather?.location?.name}</h3> */}
      </Row>

      <Row mt='20px'>
        <h4>Today</h4>
        <div>{dayNameShort}</div>
      </Row>

      <Row mt='20px'>
        <h1>30ºC</h1>
      </Row>
      
    </Container>
  )
}
