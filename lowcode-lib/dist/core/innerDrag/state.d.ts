import { RefObject } from "react";
import { IBlockType } from "../store/storetype";
export interface innerDragStateType {
  startX: number;
  startY: number;
  item: null | IBlockType;
  isDrag: boolean;
  ref: RefObject<HTMLDivElement> | null;
  current: number;
  lastClick: null | IBlockType;
  itemX: number;
  itemY: number;
}
export declare const innerDragState: innerDragStateType;
