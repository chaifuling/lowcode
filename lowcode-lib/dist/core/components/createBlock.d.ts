import { UserConfig } from "../..";
import { IBlockType } from "../store/storetype";
import { ComponentItem } from "./componentItem";
export declare function createBlock(
  top: number,
  left: number,
  ComponentItem: ComponentItem,
  config: UserConfig
): IBlockType;
