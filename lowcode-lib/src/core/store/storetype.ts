/*

 * @Date: 2021-03-14 04:29:09
 * @LastEditors: 
 * @LastEditTime: 2022-04-29 23:15:50
 * @FilePath: \lowcode\packages\lowcode-lib\src\core\store\storetype.ts
 */

import { EventCenterMapType } from "../eventCenter";

export interface GlobalState {
  [key: string]: any;
  customAnimate: CustomAnimateObj[];
  containerColor: string;
  title: string;
  description: string;
  bodyColor: string;
  script: string[];
  lineHeight: number;
  fontSize: number;
}

export interface IStoreData {
  container: {
    width: number;
    height: number;
    isMinwx: boolean;
  };
  block: Array<IBlockType>;
  modalMap: Record<string, Array<IBlockType>>;
  dataSource: Record<string, any>;
  globalState: Record<string, any>;
  modalConfig: Record<string, any>;
  modalEditName: string;
  origin: Array<IBlockType> | null;
}
export interface IMainStoreData extends IStoreData {
  globalState: GlobalState;
}

export interface AnimateItem {
  uid: string;
  animationName: string;
  animationDuration: number;
  animationDelay: number;
  animationIterationCount: string;
  animationTimingFunction: string;
}

export interface CustomAnimateObj {
  displayName: string;
  animateName: string;
  keyframe: string;
}

export interface IBlockType {
  id: string;
  name: string;
  top: number;
  left: number;
  zIndex: number;
  position: "absolute" | "relative" | "fixed" | "static" | "sticky";
  width?: number | string;
  height?: number | string;
  display?: "inline-block" | "block" | "inline";
  focus: boolean;
  resize: boolean;
  canDrag: boolean;
  canSee: boolean;
  props: Record<string, any>;
  syncList: Array<string>;
  eventMap: EventCenterMapType; //调用的event 与对应的函数名 如果要增加参数，则类型不能是Array<string>,需要[{name:string,...args}]
  functionList: Array<string>; //抛出的函数名
  rotate: {
    value: number;
    canRotate: boolean;
  };
  animate: AnimateItem[];
  fixed: boolean; // 用于制作fixed组件
}
