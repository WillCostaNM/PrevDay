import { Type } from "./type";
import { Action } from "./actions";

const initialState = '';

export const weatherReducer = (state: string = initialState, action: Action) => {
  switch (action.type) {

    case Type.SET_WEATHER:
      return action.payload
    break;

    default:
      return state
    break;

  }
}
