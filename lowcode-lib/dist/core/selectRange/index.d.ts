/// <reference types="react" />
import UserConfig from "../../config";
export interface SelectDataProps {
  selectDiv: HTMLDivElement | null;
  posx: number;
  posy: number;
  startX: number;
  startY: number;
}
export declare const selectData: SelectDataProps;
export declare function selectRangeMouseDown(
  e: React.MouseEvent,
  config: UserConfig
): void;
export declare function selectRangeMouseMove(
  ev: React.MouseEvent | MouseEvent
): void;
export declare function selectRangeMouseUp(
  e: React.MouseEvent | MouseEvent,
  config: UserConfig
): void;
