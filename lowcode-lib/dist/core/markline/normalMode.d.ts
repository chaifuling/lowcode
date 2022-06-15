import { IBlockType } from "../store/storetype";
import { LinesTypes } from "./calcRender";
export interface RealStyle {
  width: number;
  height: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
}
/**
 *
 *
 * @export 吸附间距之前已经算出，该函数直接做处理
 * @param {RealStyle} focusStyle
 * @param {RealStyle} unFocusStyle
 * @param {LinesTypes} lines
 * @param {IBlockType} focus
 * @param {number} diff 绝对值
 * @param {('left' | 'top' | 'bottom' | 'right' | 't-b' | 'b-t' |  'l-r' |  'r-l')} direction
 */
export declare function marklineDisplay(
  focusStyle: RealStyle,
  unFocusStyle: RealStyle,
  lines: LinesTypes,
  focus: IBlockType,
  diff: number,
  dirty: {
    dirtyX: boolean;
    dirtyY: boolean;
  },
  direction: "left" | "top" | "bottom" | "right" | "t-b" | "b-t" | "l-r" | "r-l"
): void;
/**
 *
 * 第一次运算时需要
 * @export
 * @param {RealStyle} focusStyle
 * @param {RealStyle} unFocusStyle
 * @param {LinesTypes} lines
 * @param {IBlockType} focus
 */
export declare function newMarklineDisplay(
  focusStyle: RealStyle,
  unFocusStyle: RealStyle,
  lines: LinesTypes
): void;
/**
 *
 * @deprecated
 */
export declare function switchMarklineDisplay(
  l: number,
  t: number,
  w: number | string | undefined,
  h: number | string | undefined,
  left: number,
  top: number,
  width: number,
  height: number,
  lines: LinesTypes,
  focus: IBlockType
): void;
/**
 * @todo 暂时无效
 */
export declare function switchMarklineResizeDisplay(
  l: number,
  t: number,
  w: number | string | undefined,
  h: number | string | undefined,
  left: number,
  top: number,
  width: number,
  height: number,
  lines: LinesTypes
): void;
