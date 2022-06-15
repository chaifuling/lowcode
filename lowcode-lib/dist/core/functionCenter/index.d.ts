import UserConfig from "../../config";
import { EventCenterMapItem, EventCenterUserSelect } from "../eventCenter";
import Store from "../store";
import { FunctionConfigType } from "./config";
/**
 *
 * ctx可在事件链中传递，函数完成后调用next执行下一个函数
 * @export
 */
export declare type FunctionCenterFunction = (
  ctx: Record<string, any>,
  next: Function,
  config: UserConfig,
  args: Record<string, any>,
  eventList: {
    arr: Array<EventCenterMapItem>;
    displayName: string;
    userSelect: Array<EventCenterUserSelect>;
  },
  iname: EventCenterMapItem
) => void;
export declare type FunctionCenterValue = {
  fn: FunctionCenterFunction;
  config: FunctionConfigType;
  name: string;
  componentId: string;
};
export declare type FunctionCenterType = Record<string, FunctionCenterValue>;
/**
 *
 * 初始化时可以加载初始已配好的函数
 * {}
 * @export
 * @class FunctionCenter
 */
export declare class FunctionCenter {
  initConfig: FunctionCenterType;
  /**
   *
   * 该map 用于获取函数未获取到时，异步拉取
   * @memberof FunctionCenter
   */
  asyncMap: Record<string, Function>;
  configMap: Record<string, FunctionConfigType>;
  funcitonMap: Record<string, FunctionCenterFunction>;
  nameMap: Record<string, string>;
  componentIdMap: Record<string, Set<string>>;
  constructor(initConfig?: FunctionCenterType);
  init(initConfig: FunctionCenterType): void;
  reset(): void;
  getFunctionMap(): Record<string, FunctionCenterFunction>;
  getConfigMap(): Record<string, FunctionConfigType>;
  getNameMap(): Record<string, string>;
  /**
   *
   * 通过name查id
   * @param {string} name
   * @return {*}  {(string | undefined)}
   * @memberof FunctionCenter
   */
  nameToKey(name: string): string | undefined;
  /**
   *
   *
   * @param {{
   * 		id: string;唯一值 注意！每个组件都要不一样，所以需要带着每个组件的id，这样也方便区分是哪个组件抛出的函数!!
   * 		fn: FunctionCenterFunction;函数体
   * 		config: FunctionConfigType;配置项
   * 		name: string;显示名
   * 		componentId: string;所属组件id名用于卸载函数
   * 	}} obj
   * @returns
   * @memberof FunctionCenter
   */
  register(obj: {
    id: string;
    fn: FunctionCenterFunction;
    config: FunctionConfigType;
    name: string;
    componentId: string;
  }): () => void;
  /**
   *
   * 画布更新时检查所有组件，不存在的组件和其挂载函数则删除，剔除_inner下的
   * @memberof FunctionCenter
   */
  syncFunction(store: Store): void;
  /**
   *
   * 获取函数，包含异步获取函数 注意某些情况执行顺序
   * @param {string} name
   * @return {*}  {Promise<FunctionCenterFunction>}
   * @memberof FunctionCenter
   */
  getFunction(name: string): Promise<FunctionCenterFunction>;
}
