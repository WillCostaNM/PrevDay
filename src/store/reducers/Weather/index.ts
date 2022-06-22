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

export const weatherReducer: Reducer<ResponseType> = (state = initialState, action: Action) => {

  switch (action.type){

    case Type.SET_WEATHER:
      return {isLoading: false, error: undefined, payload: action.payload}
    break;

    case Type.ERROR:
      return {isLoading: false, error: action.error, payload: undefined}
    break;

    case Type.FETCHING:
      return {isLoading: true, error: undefined, payload: undefined}
    break;

    default:
      return state
    break;

  }
}
