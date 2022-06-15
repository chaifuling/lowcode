/*

 * @Date: 2021-03-14 04:29:09
 * @LastEditors: 
 * @LastEditTime: 2021-09-28 20:47:36
 * @FilePath: \lowcode\packages\lowcode-lib\src\core\components\componentItem.ts
 */
import UserConfig from "../../config";
import Store from "../store";
import { IBlockType } from "../store/storetype";
import { CreateOptionsResAll } from "./formTypes";

/**
 *
 * 包装部分配置，渲染配置，条件渲染，属性
 * @export
 * @interface ComponentItem
 */
export interface ComponentItem {
  init: () => void;
  name: string; // map上key名
  display: string; //显示名称
  resize: boolean;
  needPosition: boolean; //是否要使用拖拽的点
  initData: Partial<IBlockType>; //初始值
  props: Record<string, CreateOptionsResAll[]>; // 配置属性
  render: (
    data: IBlockType,
    context: any,
    store: Store,
    config: UserConfig
  ) => JSX.Element;
  destroy: () => void;
  remoteConfig: Record<string, any>;
}
export type ComponentRenderConfigProps = {
  data: IBlockType;
  context: any;
  store: Store;
  config: UserConfig;
};
