import React from "react";
import { RefObject } from "react";
import UserConfig from "../../config";
import { IBlockType } from "../store/storetype";
interface rotateStateType {
  startX: number;
  startY: number;
  item: null | IBlockType;
  isRotate: boolean;
  ref: RefObject<HTMLDivElement> | null;
  current: number;
}
export declare const rotateState: rotateStateType;
export declare const rotateMouseMove: (
  e: React.MouseEvent,
  config: UserConfig
) => void;
export declare const rotateMouseUp: (config: UserConfig) => void;
interface RotateResizerProps {
  data: IBlockType;
  rect: RefObject<HTMLDivElement>;
  config: UserConfig;
}
export declare function RotateResizer(props: RotateResizerProps): JSX.Element;
export declare function RotateReset(props: RotateResizerProps): JSX.Element;
export {};
