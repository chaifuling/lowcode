import { RefObject } from "react";
import { IBlockType } from "../store/storetype";
import React from "react";
import UserConfig from "../../config";
interface BlockResizerProps {
  data: IBlockType;
  rect: RefObject<HTMLDivElement>;
  config: UserConfig;
}
export declare const resizerMouseUp: (config: UserConfig) => void;
/**
 *
 * 无旋转时计算函数
 * @param {IBlockType} v
 * @param {number} durX
 * @param {number} durY
 * @param {{
 * 		value: number;
 * 		maxValue: number;
 * 		minValue: number;
 * 	}} scaleState
 */
export declare const changePosition: (
  v: IBlockType,
  durX: number,
  durY: number,
  scaleState: {
    value: number;
    maxValue: number;
    minValue: number;
  }
) => void;
export declare const resizerMouseMove: (
  e: React.MouseEvent,
  config: UserConfig
) => void;
export declare function BlockResizer(props: BlockResizerProps): JSX.Element;
export {};
