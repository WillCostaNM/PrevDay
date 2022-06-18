import { combineReducers } from "redux";
import { weatherReducer } from "./Weather";

export const reducers = combineReducers({
  weather: weatherReducer
})

export type State = ReturnType<typeof reducers>
