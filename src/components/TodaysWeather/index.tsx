import React from "react";
import { useSelector } from "react-redux";
import { State } from "store/reducers";
import { Container, Row } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";


export const TodaysWeather: React.FC = () => {
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

  const {payload: weather, isLoading, error} = useSelector((state: State) => state.weather);

  const {location: {localtime = ''} = {}, current: {is_day = 0, temp_c = 0, condition: {icon = ''} = {}} = {}} = weather || {};


  const dateObj = new Date(localtime);
  const dayNumber = dateObj.getUTCDate();
  const dayNameShort = capitalize(dateObj.toLocaleString('pt-BR', {weekday: "short"}));
  const monthNameShort = capitalize(dateObj.toLocaleString('pt-BR', {month: "short"}));


  const handleString = (str: string, element: string) => {
    const result = str.includes(element);
    return result
  }

  return(
    <Container is_day={is_day}>

      {/* {error?.isRequestError && <div>Internal Error</div>}

      {!error?.isRequestError && <div>{error?.message}</div>} */}

      <Row>
        <h4>Hoje</h4>
        <div>{`${dayNameShort}, ${dayNumber} ${monthNameShort}`}</div>
      </Row>

      <Row mt='32px'>
        <img src={handleString(icon, '113') ? require('../../assets/WeatherIcons/113.png') : icon} alt="temp"/>
      </Row>

      <Row>
        <h1>{`${Math.floor(temp_c)}º`}</h1>
      </Row>

      <Row mt='20px'>
        <FontAwesomeIcon icon={faLocationPin}/>
        <h3>{isLoading ? '. . .' : weather?.location?.name}</h3>
      </Row>

    </Container>
  )
}
