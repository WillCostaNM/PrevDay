import { Type } from "./type";
import { Dispatch } from "redux";
import {Action} from './actions';

export const setDay = (weekday: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: Type.SET_DAY,
      payload: weekday
    })
  }
}
