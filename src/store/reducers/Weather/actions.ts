import { Type } from "./type";
import {Weather, ErrorWeather} from "interfaces";


type SetWeather = {
  type: Type.SET_WEATHER,
  payload: Weather,
}

type SetError = {
  type: Type.ERROR,
  error: Error,
}

type Fetching = {
  type: Type.FETCHING,
}

export type Action = SetWeather | SetError | Fetching;
