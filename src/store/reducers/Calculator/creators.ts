import { Type } from "./type";
import { Dispatch } from "redux";
import {Action} from './actions';

export const sumNumbers = (numbers: Array<number>) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: Type.SUM,
      payload: numbers
    })
  }
}

export const subNumbers = (numbers: Array<number>) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: Type.SUB,
      payload: numbers
    })
  }
}
