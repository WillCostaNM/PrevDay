import { Type } from "./type";
import { Action } from "./actions";

const initialState = '';

export const weekdayReducer = (state: string = initialState, action: Action) => {
  switch (action.type) {

    case Type.SET_DAY:
      return action.payload
    break;

    default:
      return state
    break;
  }
}
