import { Type } from "./type";

type Sum = {
  type: Type.SUM,
  payload: Array<number>
}

type Sub = {
  type: Type.SUB,
  payload: Array<number>
}

export type Action = Sum | Sub;
