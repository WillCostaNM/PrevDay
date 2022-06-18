import { Type } from "./type";
import { Dispatch } from "redux";
import {Action} from './actions';

export const setWeather = (weather: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: Type.SET_WEATHER,
      payload: weather
    })
  }
}
