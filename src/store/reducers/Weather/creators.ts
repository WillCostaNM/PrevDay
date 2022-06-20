import { Type } from "./type";
import { Dispatch } from "redux";
import {Action} from './actions';
import {Weather, ErrorWeather} from "interfaces";



export const setWeather = (weather: Weather) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: Type.SET_WEATHER,
      payload: weather
    })
  }
}

export const setError = (error: Error) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: Type.ERROR,
      error: error,
    })
  }
}

export const fetching = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: Type.FETCHING
    })
  }
}
