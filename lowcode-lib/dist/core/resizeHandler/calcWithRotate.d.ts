import { DirectionType, Point } from "./state";
import { IBlockType } from "../store/storetype";
export declare function getRect(
  direction: DirectionType,
  item: IBlockType,
  rotate: number,
  curPositon: Point,
  symmetricPoint: Point,
  itemWH: {
    width: number;
    height: number;
  }
): void;
