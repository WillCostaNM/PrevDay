import React, { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {ErrorWeather, ResponseError, Weather, Location} from "interfaces";
import { weatherCreators } from "store/creators";
import axios, { AxiosError } from "axios";

import { WeekWrapper, NavWrapper, Grid, MoreDetailsWrapper } from "./styles";
import { TodaysWeather, Column, Input, WeekWeather, Search, Row, MoreDetailsWeather } from "components";

// CRIAR ESQUEMA DE PASTA UTILS !!!!!!
export const Home = () => {
  
  const dispatch = useDispatch();
  const {setWeather, setError, fetching} = bindActionCreators(weatherCreators, dispatch);

  const [city, setCity] = useState('Sao Paulo');
  // const [searchValue, setSearchValue] = useState('');
  
  // const [cities, setCities] = useState<Location[]>([]);
  

  // useEffect(()=>{
  //   async function getCities(){
  //     if(searchValue){
  //       const response = await axios.get(`http://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_API_KEY}&q=${searchValue}&days=7&lang=pt`);
  //       setCities(response.data as Location[]);
  //     }
  //   }

  //   getCities();
  // }, [searchValue]);

  const apiSecret = process.env.REACT_APP_API_KEY;

  useEffect(()=>{

    async function getWeather(){
      
      fetching()

      try {
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiSecret}&q=${city}&days=7&lang=pt`);

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
        <Column mb={'20px'}>
          <Search setState={setCity}/>
        </Column>
        <TodaysWeather/>
      </NavWrapper>

      <WeekWrapper>
        <WeekWeather/>

        <MoreDetailsWrapper>
          <MoreDetailsWeather/>
        </MoreDetailsWrapper>
        
      </WeekWrapper>
    </Grid>
  )
}
