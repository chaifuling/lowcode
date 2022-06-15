import { RefObject } from "react";
import UserConfig from "../../config";
export interface WrapperMoveStateProps {
  isDrag: boolean;
  startX: number;
  startY: number;
  needX: number;
  needY: number;
}
export interface WrapperMoveRef {
  ref: null | RefObject<HTMLDivElement>;
}
export declare const wrapperMoveState: WrapperMoveStateProps;
export declare const wrapperRefState: WrapperMoveRef;
export declare const wrapperEvent: (
  ref: RefObject<HTMLDivElement>,
  config: UserConfig
) => {
  onMouseDown: (e: React.MouseEvent) => void;
  onMouseMove: (e: React.MouseEvent) => void;
};
export declare const wrapperMoveMouseUp: (config: UserConfig) => void;
