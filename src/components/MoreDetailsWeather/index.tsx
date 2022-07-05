import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong, faUpLong, faDroplet, faSun } from "@fortawesome/free-solid-svg-icons";

import { Column, Row } from "components";
import { Container, Temperature, Rain, Wind, AirHumidity, Sun, Mooon } from "./styles";
import { useSelector } from "react-redux";
import { State } from "store/reducers";
import { useEffect, useState } from "react";
import {Forecastday} from "interfaces";

export const MoreDetailsWeather = () => {
  const [forecastdayDetails, setForecastdayDetails] = useState<Forecastday>();

  // REDUX response
  const {payload: weather, isLoading, error} = useSelector((state: State) => state.weather);
  const {forecast: { forecastday = [] } = {}} = weather || {};
  const selectedWeekday = useSelector((state: State) => state.weekday);

  useEffect(()=> {
    setForecastdayDetails(forecastday.find(({date}) => date === selectedWeekday));
  }, [selectedWeekday, forecastday]);


  const {
    day: {
      maxtemp_c = 0, 
      mintemp_c = 0, 
      daily_chance_of_rain = 0, 
      maxwind_kph = 0, 
      avghumidity = 0
    } = {},
    astro: { 
      sunrise = '', 
      sunset = '',
      moon_phase = ''
    } = {}
  } = forecastdayDetails || {};

  // colocar em utils
  const aMpMtoTwentyFour = (aMpMhour: string) => {
    const date = new Date('1980-05-02 ' + aMpMhour);
    const hoursInTwentyFourHoursFormat = date.toLocaleTimeString('pt-BR', {hour12: false, hour: '2-digit', minute: '2-digit'});
    return hoursInTwentyFourHoursFormat;
  }

  const moonPhaseUStoPTBR = (moonPhase: string) => {
    switch (moonPhase) {
      case 'New Moon':
        return(
          <>
            <span>&#x1F311;</span> Lua Nova
          </>  
        )
      break;

      case 'Waxing Crescent':
        return(
          <>
            <span>&#x1F312;</span> Lua Cresc.te
          </>
        )
      break;

      case 'First Quarter':
        return(
          <>
            <span>&#x1F313;</span> Quarto Cresc.te
          </>
        )
      break;

      case 'Waxing Gibbous':
        return(
          <>
            <span>&#x1F314;</span> Cresc.te Gibosa
          </>
        )
      break;

      case 'Full Moon':
        return(
          <>
            <span>&#x1F315;</span> Lua Cheia
          </>
        )
      break;

      case 'Waning Gibbous':
        return(
          <>
            <span>&#x1F316;</span> Ming. Gibosa
          </>
        )
      break;

      case 'Last Quarter':
        return(
          <>
            <span>&#x1F317;</span> Quarto Ming.
          </>
        )
      break;

      case 'Waning Crescent':
        return(
          <>
            <span>&#x1F318;</span> Lua Ming.
          </>
        )
      break;
    
      default:
      break;
    }
  }
  // 

  const sunriseHour = aMpMtoTwentyFour(sunrise);
  const sunsetHour = aMpMtoTwentyFour(sunset);
  const moonPhase = moonPhaseUStoPTBR(moon_phase);
  
  

  console.log(forecastday)


  return (
    <Column p={'20px'} color={'text'} borderRadius={'12px'} bg={'secondary'}>
      <h3>Mais detalhes</h3>

      <Container>
        <Temperature>
          <h5>TEMPERATURA</h5>
          <Row>
            <span>
              <FontAwesomeIcon color="#0380CC" icon={faDownLong}/> {Math.floor(mintemp_c)}ºC
            </span>
            <span>
              <FontAwesomeIcon color="#E2251A" icon={faUpLong}/> {Math.floor(maxtemp_c)}ºC
            </span>
            
          </Row>
        </Temperature>

        <Rain>
          <h5>CHUVA</h5>
          <Row>
            <span>
              <FontAwesomeIcon icon={faDroplet}/>
              <FontAwesomeIcon icon={faDroplet}/>
              <FontAwesomeIcon icon={faDroplet}/>
            </span>
            {daily_chance_of_rain}%
          </Row>
        </Rain>

        <Wind>
          <h5>VENTO</h5>
          <Row>
            {maxwind_kph} km/h
          </Row>
        </Wind>

        <AirHumidity>
          <h5>UMIDADE DO AR</h5>
          <Row>
            <span>
              <FontAwesomeIcon icon={faDroplet}/>
            </span>
            {avghumidity}%
          </Row>
        </AirHumidity>

        <Sun>
          <h5>SOL</h5>
          <Row>
            <span>
              <FontAwesomeIcon icon={faSun}/>
            </span>
            {sunriseHour} - {sunsetHour}
          </Row>
        </Sun>

        <Mooon>
          <h5>LUA</h5>
          <Row>
            {moonPhase}
          </Row>
        </Mooon>
        
        {/* {details.map((detail, index) => <Detail key={`detail-${detail}`}>
          <h5>{detail}</h5>
          <Row p={'8px'}></Row>
        </Detail> )} */}
      </Container>

    </Column>
  )
}