import React, { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import {State} from "store/reducers";

import { TodaysWeather, Grid, Column, Input, WeekWeather } from "components";

import { WeekWrapper, NavWrapper } from "./styles";
import { useEffect, useState } from "react";
import { Weather } from "interfaces";


export const Home = () => {

  // const weekday = useSelector((state: State) => state.weekday);
  const [inputValue, setInputValue] = useState('');
  const [city, setCity] = useState('pontal');
  const [weather, setWeather] = useState<Weather>();

  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleClick = () => {
    setCity(inputValue)
  }

  useEffect(()=>{
    async function getWeather(){
      const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a6526d8cb04e4ea1a4d211021221306&q=${city}&days=7&lang=pt`);
      
      const result = await response.json();

      setWeather(result);
    }
    getWeather();
  }, [city]);


  return (
    <Grid>
      <NavWrapper>
        <Input onChange={handleChange} mb="20px"/>
        <button onClick={handleClick}>Submit</button>
        <TodaysWeather/>
      </NavWrapper>

      <WeekWrapper>
        <WeekWeather/>
      </WeekWrapper>
    </Grid>
  )
}
