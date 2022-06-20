import { Type } from "./type";
import { Action } from "./actions";
import {Weather, ErrorWeather} from "interfaces";

type InitialState = {
  isLoading: boolean,
  error: Error | null,
  payload: Weather | null
}


const initialState: InitialState = {
  isLoading: true,
  error: null,
  payload: null
};

export const weatherReducer = (state = initialState, action: Action) => {
  

  switch (action.type) {

    case Type.SET_WEATHER:
      return {isLoading: false, error: null, payload: action.payload}
    break;

    case Type.ERROR:
      return {isLoading: false, error: action.error, payload: null}
    break;

    case Type.FETCHING:
      return {isLoading: true, error: null, payload: null}
    break;

    default:
      return state
    break;
  
  }
}
