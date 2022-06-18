import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { weatherCreators } from "store/creators";
import {State} from "store/reducers";
import {Weather} from "interfaces";


import { Container, Day } from "./styles";

export const WeekWeather = () => {

  const result = useSelector((state: State) => state.weather);

  
  const week = ['mon', 'tue', 'wed', 'the', 'fri', 'sat', 'sun'];
  const dispatch = useDispatch();
  const {setDay} = bindActionCreators(weatherCreators, dispatch);

  return (
    <Container>
      {week.map((day, index) => <Day
        key={`week-${index}`}
        onClick={() => setDay(day)}
      >
        
        <img src={require("../../assets/WeatherIcons/Camada1.png")} alt="weather-icon" />

        <h4>{day}</h4>

        <h4>3ºC</h4>

      </Day>)}
    </Container>
  )
}
