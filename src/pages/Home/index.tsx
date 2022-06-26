import React, { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {ErrorWeather, ResponseError, Weather} from "interfaces";
import { weatherCreators } from "store/creators";
import { WeekWrapper, NavWrapper } from "./styles";
import { TodaysWeather, Grid, Column, Input, WeekWeather } from "components";
import axios, { AxiosError } from "axios";


// CRIAR ESQUEMA DE PASTA UTILS !!!!!!
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
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=a6526d8cb04e4ea1a4d211021221306&q=${city}&days=7&lang=pt`);

        const weather = response.data as Weather;
        
        setWeather(weather);
      } catch (e) {

        const Err = (isRequestError: boolean, message: string, code: string | undefined) => {
          return {
            isRequestError: isRequestError, 
            message: message, 
            code: code
          }
        }

        const error = e as AxiosError;

        const { response } = error;


        if (!response){

          const requestError = Err(true, error.message, error.code);
         
          setError(requestError);

        }else{
          let {error} = response.data as ResponseError;

          const {message, code} = error

          const responseError = Err(false, message, code); 

          setError(responseError);
        }

      }
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
