import { Type } from './type';
import { Action } from './actions';
import {Weather, ErrorWeather} from 'interfaces';
import {Reducer} from 'redux';

type ResponseType = {
  isLoading: boolean,
  error?: ErrorWeather,
  payload?: Weather
}

const initialState: ResponseType = {
  isLoading: true,
  error: undefined,
  payload: undefined
};

export const weatherReducer = (state = initialState, action: Action): ResponseType => {

  switch (action.type){

    case Type.SET_WEATHER:
      return {...state, isLoading: false, payload: action.payload}
    break;

    case Type.ERROR:
      return {...state, isLoading: false, error: action.error}
    break;

    case Type.FETCHING:
      return {...state}
    break;

    default:
      return state
    break;

  }
}
