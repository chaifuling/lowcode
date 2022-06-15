import React, { DragEvent, ReactNode } from "react";
import UserConfig from "../../config";
/**
 *
 * @export
 * @interface LeftRegistComponentMapItem
 * @img 图片地址
 * @urlFn 组件异步加载函数
 */
export interface LeftRegistComponentMapItem {
  type: string;
  component: string;
  img: string;
  imgCustom?: ReactNode;
  displayName: string;
  urlFn?: () => Promise<any>;
}
export declare const dragEventResolve: (
  item: LeftRegistComponentMapItem,
  config: UserConfig
) => {
  draggable: boolean;
  onDragStart: () => void;
  onDragOver: (e: DragEvent<HTMLDivElement>) => void;
  onDrop: () => void;
  onDragEnd: () => void;
  onDoubleClick: (e: React.MouseEvent) => void;
};
export declare const containerDragResolve: (config: UserConfig) => {
  onDragStart: () => void;
  onDragOver: (e: DragEvent<HTMLDivElement>) => void;
  onDrop: (e: DragEvent<HTMLDivElement>) => void;
  onDragEnd: () => void;
};
