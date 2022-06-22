import { Weather } from "interfaces";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "store/reducers";
import { Container, Row } from "./styles";


export const TodaysWeather: React.FC = () => {
  
  const {isLoading, error, payload: weather} = useSelector((state: State) => state.weather);
  
  console.log(weather?.current)
  
  // const { location: {localtime}, current, forecast } = weather;

  // const localTime = localtime;

  // const dateObj = new Date(localTime);

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
        {/* <div>{weather?.location.localtime} </div> */}
      </Row>

      <Row mt='20px'>
        <h1>30ºC</h1>
      </Row>
      
    </Container>
  )
}
