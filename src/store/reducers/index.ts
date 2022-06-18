import { combineReducers } from "redux";
import {weekdayReducer} from './Weekday';

export const reducers = combineReducers({
  weekday: weekdayReducer
})

export type State = ReturnType<typeof reducers>
