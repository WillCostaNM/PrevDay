import { combineReducers } from "redux";
import { weatherReducer } from "./Weather";
import {weekdayReducer} from './Weekday';

export const reducers = combineReducers({
  weekday: weekdayReducer,
  weather: weatherReducer
})

export type State = ReturnType<typeof reducers>
