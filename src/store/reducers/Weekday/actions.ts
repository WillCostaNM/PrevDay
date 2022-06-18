import { Type } from "./type";

type SetDay = {
  type: Type.SET_DAY,
  payload: string
}

export type Action = SetDay;
