/*

 * @Date: 2021-04-13 11:20:55
 * @LastEditors: 
 * @LastEditTime: 2022-04-23 17:54:22
 * @FilePath: \lowcode\packages\lowcode-lib\src\core\dataCenter\index.ts
 */

import UserConfig from "../../config";
import { IStoreData } from "../store/storetype";

/**
 *
 * 用来管理页面数据，包括全局数据，做全局设置变量时可以加上
 * 使用Record<string,any>结构，每个组件的数据需要抛出并设定键进行通信。
 * @export
 * @class DataCenter
 */
export class DataCenter {
  public asyncMap: Record<string, Function> = {};
  constructor(public dataMap: Record<string, any> = {}) {}

  /**
   *
   * 拿到map
   * @return {*}
   * @memberof DataCenter
   */
  getDataMap() {
    return this.dataMap;
  }

  /**
   *
   * 用于设置map数据
   * 在异步注册时会触发get的回调，动态不需要持久化
   * @memberof DataCenter
   */
  setToMap(data: Record<string, any>) {
    this.dataMap = Object.assign(this.dataMap, data);
    Object.keys(data).forEach((v) => {
      if (this.asyncMap[v]) {
        this.asyncMap[v]();
        delete this.asyncMap[v];
      }
    });
  }

  /**
   *
   * 静态设置map 和异步无关 静态需要持久化，datacenter存入store
   * 该更新不放在redo undo处
   * @param {Record<string, any>} data
   * @memberof DataCenter
   */
  staticSetToMap(data: Record<string, any>, config: UserConfig) {
    this.dataMap = data;
    const store = config.getStore();
    const storeCurrentData = store.getData();
    storeCurrentData.dataSource = data;
  }

  /**
   *
   * 初始收集使用  -> to datacenter
   * @param {IStoreData} data
   * @memberof DataCenter
   */
  initAddToDataMap(data: IStoreData) {
    this.dataMap = data.dataSource;
  }

  /**
   *
   * 获取值可异步
   * @param {string} name
   * @memberof DataCenter
   */
  getValue(name: string) {
    const value = this.dataMap[name];
    if (value) {
      return Promise.resolve(value);
    }
    return new Promise((resolve) => {
      this.asyncMap[name] = () => {
        resolve(this.getValue(name));
      };
    });
  }

  /**
   *
   * 获取值不可异步
   * @param {string} name
   * @memberof DataCenter
   */
  get(name: string) {
    const value = this.dataMap[name];
    return value;
  }
}
