import { Type } from "./type";
import {Weather} from "interfaces";

type SetWeather = {
  type: Type.SET_WEATHER,
  payload: Weather
}

type SetDay = {
  type: Type.SET_DAY,
  payload: string
}

export type Action = SetWeather | SetDay;
