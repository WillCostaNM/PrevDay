import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong, faUpLong, faDroplet, faSun } from "@fortawesome/free-solid-svg-icons";

import { Column, WeatherDetails } from "components";
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


  return (
    <Column p={'20px'} color={'text'} borderRadius={'12px'} bg={'secondary'} width={'100%'}>
      <h3>Mais detalhes</h3>

      <WeatherDetails forecastdayDetails={forecastdayDetails}/>

    </Column>
  )
}