import { combineReducers } from "redux";
import { weatherReducer } from "./Weather";
import { weekdayReducer } from "./Weekday";

export const reducers = combineReducers({
  weather: weatherReducer,
  weekday: weekdayReducer
})

export type State = ReturnType<typeof reducers>
