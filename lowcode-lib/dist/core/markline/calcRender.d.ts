import UserConfig from "../../config";
export interface LinesTypes {
  x: number[];
  y: number[];
}
export declare function cos(rotate: number): number;
export declare function sin(rotate: number): number;
export declare function getComponentRotatedStyle(
  rotate: number,
  width: number,
  height: number,
  left: number,
  top: number
): {
  left: number;
  width: number;
  height: number;
  right: number;
  top: number;
  bottom: number;
};
export declare function marklineCalRender(
  config: UserConfig,
  iframe: boolean
): LinesTypes;
