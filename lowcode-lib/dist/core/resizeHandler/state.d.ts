import { RefObject } from "react";
import { IBlockType } from "../store/storetype";
export interface Point {
  x: number;
  y: number;
}
interface resizeStateType {
  startX: number;
  startY: number;
  item: null | IBlockType;
  isResize: boolean;
  direction: DirectionType;
  ref: RefObject<HTMLDivElement> | null;
  current: number;
  currentTarget: HTMLDivElement | null;
  symmetricPoint: Point;
  curPosition: Point;
}
export declare type DirectionType =
  | "lt"
  | "t"
  | "rt"
  | "r"
  | "rb"
  | "b"
  | "lb"
  | "l";
export declare const directionArr: DirectionType[];
export declare const resizeState: resizeStateType;
export {};
