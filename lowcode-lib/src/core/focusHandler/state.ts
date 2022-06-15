/*

 * @Date: 2021-03-14 12:06:20
 * @LastEditors: 
 * @LastEditTime: 2021-03-14 12:06:50
 * @FilePath: \dooring-v2\src\core\focusHandler\state.ts
 */
import { IBlockType } from "../store/storetype";
export interface FocusStateType {
  blocks: IBlockType[];
}
export const focusState: FocusStateType = {
  blocks: [],
};
