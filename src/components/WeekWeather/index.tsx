import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { weekdayCreators } from "store/creators";
import {State} from "store/reducers";
import {Weather} from "interfaces";


import { Container, Day } from "./styles";

export const WeekWeather = () => {

  const {payload: weather, isLoading, error} = useSelector((state: State) => state.weather);

  const {forecast: { forecastday = [] } = {}} = weather || {};
  
  console.log(forecastday);
  
  const week = ['mon', 'tue', 'wed', 'the', 'fri', 'sat', 'sun'];
  const dispatch = useDispatch();
  const {setDay} = bindActionCreators(weekdayCreators, dispatch);

  return (
    <Container>
      {forecastday.map((day, index) => <Day
        key={`week-${index}`}
        // onClick={() => setDay(day)}
      >
        
        <img src={require("../../assets/WeatherIcons/Camada1.png")} alt="weather-icon" />

        <h4>nome do dia da semana</h4>

        <h4>3ºC</h4>

      </Day>)}
    </Container>
  )
}
