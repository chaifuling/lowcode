import UserConfig from "../../config";
import { FunctionCenter, FunctionCenterType } from "../functionCenter";
import { FunctionDataType } from "../functionCenter/config";
import Store from "../store";
import { IStoreData } from "../store/storetype";
export interface EventCenterMapItem {
  name: string;
  args: Record<string, any>;
  data: Record<string, FunctionDataType>;
}
export interface EventCenterUserSelect {
  uid: string;
  value: string;
  detail: Record<string, any>;
}
export declare type EventCenterMapType = Record<
  string,
  {
    arr: Array<EventCenterMapItem>;
    displayName: string;
    userSelect: Array<EventCenterUserSelect>;
  }
>;
export declare class EventCenter {
  eventMap: EventCenterMapType;
  /**
   * 该map需要存入store,值为函数的key的数组
   * @param {Record<string, Array<string>>} [eventMap={}]
   * @memberof EventCenter
   */
  functionCenter: FunctionCenter;
  constructor(
    eventMap?: EventCenterMapType,
    configFunction?: FunctionCenterType
  );
  getFunctionCenter(): FunctionCenter;
  getEventMap(): Record<
    string,
    {
      arr: EventCenterMapItem[];
      displayName: string;
      userSelect: EventCenterUserSelect[];
    }
  >;
  resetEventMap(): void;
  /**
   *
   * 重置map进行收集事件 主要就是收集eventMap字段
   * 这个应该优化在换store情况下。
   * @param {IStoreData} data
   * @memberof EventCenter
   */
  syncEventMap(data: IStoreData, store: Store): void;
  /**
   *
   * 手动更新状态eventMap
   * @param {string} name
   * @memberof EventCenter
   */
  manualUpdateMap(
    name: string,
    displayName: string,
    arr?: Array<EventCenterMapItem>
  ): void;
  /**
   *
   * 执行事件链
   * @param {string} name
   * @memberof EventCenter
   */
  runEventQueue(name: string, config: UserConfig): Promise<void>;
}
