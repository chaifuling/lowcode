/// <reference types="react" />
import { IBlockType } from "../store/storetype";
import UserConfig from "../../config";
export declare function innerRemoveFocus(config: UserConfig): void;
export declare function containerFocusRemove(config: UserConfig): {
  onMouseDown: (e: React.MouseEvent) => void;
};
export declare function blockFocus(
  e: React.MouseEvent,
  item: IBlockType,
  config: UserConfig
): void;
