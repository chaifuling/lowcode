import UserConfig from "../../config";
import { IStoreData } from "../store/storetype";
/**
 *
 * 用来管理页面数据，包括全局数据，做全局设置变量时可以加上
 * 使用Record<string,any>结构，每个组件的数据需要抛出并设定键进行通信。
 * @export
 * @class DataCenter
 */
export declare class DataCenter {
  dataMap: Record<string, any>;
  asyncMap: Record<string, Function>;
  constructor(dataMap?: Record<string, any>);
  /**
   *
   * 拿到map
   * @return {*}
   * @memberof DataCenter
   */
  getDataMap(): Record<string, any>;
  /**
   *
   * 用于设置map数据
   * 在异步注册时会触发get的回调，动态不需要持久化
   * @memberof DataCenter
   */
  setToMap(data: Record<string, any>): void;
  /**
   *
   * 静态设置map 和异步无关 静态需要持久化，datacenter存入store
   * 该更新不放在redo undo处
   * @param {Record<string, any>} data
   * @memberof DataCenter
   */
  staticSetToMap(data: Record<string, any>, config: UserConfig): void;
  /**
   *
   * 初始收集使用  -> to datacenter
   * @param {IStoreData} data
   * @memberof DataCenter
   */
  initAddToDataMap(data: IStoreData): void;
  /**
   *
   * 获取值可异步
   * @param {string} name
   * @memberof DataCenter
   */
  getValue(name: string): Promise<any>;
  /**
   *
   * 获取值不可异步
   * @param {string} name
   * @memberof DataCenter
   */
  get(name: string): any;
}
