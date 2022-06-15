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
  name: string;
  display: string;
  resize: boolean;
  needPosition: boolean;
  initData: Partial<IBlockType>;
  props: Record<string, CreateOptionsResAll[]>;
  render: (
    data: IBlockType,
    context: any,
    store: Store,
    config: UserConfig
  ) => JSX.Element;
  destroy: () => void;
  remoteConfig: Record<string, any>;
}
export declare type ComponentRenderConfigProps = {
  data: IBlockType;
  context: any;
  store: Store;
  config: UserConfig;
};
