import { Weather } from "interfaces";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "store/reducers";
import { Container, Row } from "./styles";


export const TodaysWeather: React.FC = () => {
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

  const {payload: weather, isLoading, error} = useSelector((state: State) => state.weather);

  const {location: {localtime = ''} = {}, current: {temp_c = 0} = {}} = weather || {};

  const dateObj = new Date(localtime);
  const dayNumber = dateObj.getUTCDate();
  const dayNameShort = capitalize(dateObj.toLocaleString('pt-BR', {weekday: "short"}));
  const monthNameShort = capitalize(dateObj.toLocaleString('pt-BR', {month: "short"}));


  // console.log(dateObj);


  return(
    <Container>

      {/* {error?.isRequestError && <div>Internal Error</div>}

      {!error?.isRequestError && <div>{error?.message}</div>} */}

      <Row>
        {/* <h3>{isLoading ? '. . .' : weather?.location?.name}</h3> */}
      </Row>

      <Row mt='20px'>
        <h4>Today</h4>
        <div>{`${dayNameShort}, ${dayNumber} ${monthNameShort}`}</div>
      </Row>

      <Row mt='20px'>
        <h1>{`${Math.floor(temp_c)}ºC`}</h1>
      </Row>
      
    </Container>
  )
}
