import { RGBColor } from "react-color";
import Store from "../store";
import { IBlockType } from "../store/storetype";
import { FunctionDataMap } from "../functionCenter/config";
import UserConfig from "../../config";
export declare function deepCopy<T = any>(obj: T): T;
export declare function swap(
  indexa: number,
  indexb: number,
  arr: Array<any>
): any[];
export declare function randomColor(): string;
export declare function rgba2Obj(rgba?: string): RGBColor;
export declare function createUid(name?: string): string;
export declare const isMac: () => boolean;
export declare const changeItem: (
  store: Store,
  id: string,
  property: keyof IBlockType,
  value: IBlockType[keyof IBlockType]
) => void;
/**
 *
 * 清除所有聚焦，选中某个元素
 * @param {Store} store
 * @param {string} id
 */
export declare const focusEle: (store: Store, id: string) => void;
export declare const changeLayer: (
  store: Store,
  id: string,
  action: "up" | "down" | "delete",
  msg?: {
    adjust: string;
    remove: string;
  }
) => void;
/**
 *
 * @param {*} array
 * @param {*} from
 * @param {*} to
 */
export declare const arrayMove: (
  array: Array<any>,
  from: number,
  to: number
) => any[];
/**
 *
 * 这个函数将返回值全部统一成数组// modal的不走此方法
 * @param {keyof FunctionDataMap} v
 * @param {Record<string, any>} args
 * @param {string} name
 * @param {UserConfig} config
 * @param {Record<string, any>} ctx
 * @return {Array<string, any>}
 */
export declare const changeUserValue: (
  v: keyof FunctionDataMap,
  args: Record<string, any>,
  name: string,
  config: UserConfig,
  ctx: Record<string, any>
) => any;
/**
 *
 * 这个函数将返回值全部统一成对象 modal的不走此方法
 * @param {keyof FunctionDataMap} v
 * @param {Record<string, any>} args
 * @param {string} name
 * @param {UserConfig} config
 * @param {Record<string, any>} ctx
 * @return {Record<string, any>}
 */
export declare const changeUserValueRecord: (
  v: keyof FunctionDataMap,
  args: Record<string, any>,
  name: string,
  config: UserConfig,
  ctx: Record<string, any>
) => any;
export declare function postMessage(
  value: any,
  src: string,
  target?: string
): void;
export declare function angleToRadian(angle: number): number;
export declare function getContainer(): Element | null;
export declare function binarySearchRemain<T extends Record<string, number>>(
  target: number,
  arr: Array<T>,
  attribute: keyof T,
  indent: number
): null | [T, number];
