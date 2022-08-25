import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { weekdayCreators } from "store/creators";
import {State} from "store/reducers";
import {Weather} from "interfaces";

import { Weekday, WeatherDetails } from "components";
import { Container } from "./styles";

export const WeekWeather = () => {


  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  const getDayNameShort = (date: string) => {
    const dateObj = new Date(`${date} 00:00:00`);
    const dayNameShort = capitalize(dateObj.toLocaleString('pt-BR', {weekday: "short"})).replace(/\./gi, "");
    return dayNameShort;
  }

  const {payload: weather, isLoading, error} = useSelector((state: State) => state.weather);
  const {forecast: { forecastday = [] } = {}} = weather || {};



  const [weekday, setWeekday] = useState('');
  const dispatch = useDispatch();
  const {setDay} = bindActionCreators(weekdayCreators, dispatch);

  useEffect(()=>{

    if(!weekday){
      forecastday.map(({date}, index) => {
        if (index === 0){
          setWeekday(date);
        }
      });
    }
    
    setDay(weekday)

  }, [forecastday, weekday]);
  

  return (
    <Container>
      {forecastday.map((details, index) => {
        const {date, day: {avgtemp_c, condition: {icon}} } = details
        const dayName = getDayNameShort(date);

        return(
          <Weekday
            key={`weekday-${dayName}`}
            apiData={{date, dayName, icon, avgtemp_c}}
            onClick={() => {
              setWeekday(date)
            }}
            weekday={weekday}
          >
            <WeatherDetails forecastdayDetails={details}/>
          </Weekday>
        )
      })}
    </Container>

  )
}

// {clicked && <DropDown key={`dropdown-${dayName}`} style={{height: '150px', backgroundColor: 'blue', width: '100%'}}/>}
