import { Type } from "./type";
import { Action } from "./actions";

const initialState = 0;

export const calculatorReducer = (state: number = initialState, action: Action) => {
  switch (action.type) {

    case Type.SUM:
      return action.payload[0] + action.payload[1]
    break;
  
    case Type.SUB:
      return action.payload[0] - action.payload[1]
    break;
  
    default:
      return state
    break;

  }
}
