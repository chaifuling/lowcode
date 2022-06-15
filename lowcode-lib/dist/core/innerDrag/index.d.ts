import React, { RefObject } from "react";
import { IBlockType } from "../store/storetype";
import UserConfig from "../../config";
export declare const innerDrag: (
  item: IBlockType,
  ref: RefObject<HTMLDivElement>,
  config: UserConfig
) => {
  onMouseDown: (e: React.MouseEvent) => void;
};
export declare const innerContainerDrag: (config: UserConfig) => {
  onMouseMove: (e: React.MouseEvent) => void;
};
export declare const innerContainerDragUp: (config: UserConfig) => {
  onMouseUp: (e: React.MouseEvent) => void;
  onMouseMove: (e: React.MouseEvent) => void;
};
