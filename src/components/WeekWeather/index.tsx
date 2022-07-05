import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { weekdayCreators } from "store/creators";
import {State} from "store/reducers";
import {Weather} from "interfaces";


import { Container, Day } from "./styles";

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
      {forecastday.map(({date, day: {avgtemp_c, condition: {icon}}}, index) => {
        const dayName = getDayNameShort(date);
        
        // AUMENTAR O GAP 

        return(
          <Day
            id={date}
            key={`weekday-${dayName}`}
            onClick={() => setWeekday(date)}
            weekday={weekday}
          >

            <img src={icon} alt="weather-icon" />

            <h4>{dayName}</h4>

            <h4>{`${Math.floor(avgtemp_c)}ºC`}</h4>
          </Day>)}
        )
      }
    </Container>
  )
}
