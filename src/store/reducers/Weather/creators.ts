import { Type } from "./type";
import { Dispatch } from "redux";
import {Action} from './actions';
import {Weather} from "interfaces";


export const setWeather = (weather: Weather) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: Type.SET_WEATHER,
      payload: weather
    })
  }
}

export const setDay = (weekday: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: Type.SET_DAY,
      payload: weekday
    })
  }
}
