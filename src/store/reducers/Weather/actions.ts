import { Type } from "./type";

type SetWeather = {
  type: Type.SET_WEATHER,
  payload: string
}

type SetDay = {
  type: Type.SET_DAY,
  payload: string
}

export type Action = SetWeather | SetDay;
