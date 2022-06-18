import { Type } from "./type";

type SetWeather = {
  type: Type.SET_WEATHER,
  payload: string
}

export type Action = SetWeather;
