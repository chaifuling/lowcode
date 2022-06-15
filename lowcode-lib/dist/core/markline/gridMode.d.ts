import UserConfig from "../../config";
import { IBlockType } from "../store/storetype";
import { LinesTypes } from "./calcRender";
export declare function gridModeDisplay(
  left: number,
  top: number,
  focus: IBlockType,
  config: UserConfig
): void;
export interface lastGridStatusProps {
  lastWidth: number;
  lastHeight: number;
  lastIndent: number;
  lastLine: LinesTypes;
}
export declare const lastGridStatus: lastGridStatusProps;
export declare function grideModeRender(
  lines: LinesTypes,
  config: UserConfig
): void;
