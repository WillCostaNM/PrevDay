import React, { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {ErrorWeather, Weather} from "interfaces";
import { weatherCreators } from "store/creators";
import { WeekWrapper, NavWrapper } from "./styles";
import { TodaysWeather, Grid, Column, Input, WeekWeather } from "components";
import axios, { AxiosError } from "axios";


export const Home = () => {

  const dispatch = useDispatch();
  const {setWeather, setError, fetching} = bindActionCreators(weatherCreators, dispatch);
  const [inputValue, setInputValue] = useState('');
  const [city, setCity] = useState('Sao Paulo');


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleClick = () => {
    setCity(inputValue);
  }


  useEffect(()=>{

    async function getWeather(){

      try {

        const { data } = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=a6526d8cb04e4ea1a4d211021221306&q=${city}&days=7&lang=pt`);

        setWeather(data);

      } catch (error) {
        
        const { response } = error as AxiosError;

        
      }

      // try {

      //   const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a6526d8cb04e4ea1a4d211021221306&q=${city}&days=7&lang=pt`);
    
      //   const result = await response.json();

      //   if(!response.ok){
      //     const error: ErrorWeather = result.error;

      //     const erro = new Error(`Error Code: ${error.code} - ${error.message}`) 

      //     setError(erro)
          
      //   }else{

      //     setWeather(result);

      //   }
        
      // } catch (error) {

        
      //   // console.log(error.status);
        
      //   // const catchError = error as Error;
        
      //   // setError(catchError)

      // }
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
