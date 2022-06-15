import { IBlockType, IStoreData } from "./storetype";
export declare const initialData: IStoreData;
declare class Store {
  storeDataList: IStoreData[];
  listeners: Array<Function>;
  current: number;
  forceupdate: Function;
  static instance: Store;
  constructor(
    storeDataList?: IStoreData[],
    listeners?: Array<Function>,
    current?: number,
    forceupdate?: Function
  );
  getData(): IStoreData;
  getStoreList(): IStoreData[];
  getListeners(): Function[];
  getIndex(): number;
  getOriginBlock(): IBlockType[];
  /**
   *
   * 编辑状态转普通
   * @param {IStoreData} data
   * @returns
   * @memberof Store
   */
  changeModaltoNormal(data: IStoreData): {} | undefined;
  /**
   *
   * 非编辑转编辑且已有弹窗
   * @param {IStoreData} data
   * @returns
   * @memberof Store
   */
  changeNormalToModal(
    data: IStoreData,
    name: string
  ):
    | {
        success: boolean;
        sign: number;
        param?: undefined;
      }
    | {
        success: boolean;
        sign: number;
        param: string;
      };
  /**
   *
   * 非编辑状态新增
   * @param {IStoreData} data
   * @returns
   * @memberof Store
   */
  newModaltoNormal(data: IStoreData, name: string): void;
  /**
   *
   * 判断是否编辑
   * @returns
   * @memberof Store
   */
  isEdit(): boolean;
  /**
   *
   *  判断有没有这个弹窗
   * @param {Store} store
   * @param {string} name
   * @returns
   * @memberof Store
   */
  isInModalMap(name: string): boolean;
  /**
   *
   * 保存现阶段store，将store替换为新modal数据
   */
  newModalMap(name: string):
    | {
        succeess: boolean;
        sign: number;
        param?: undefined;
      }
    | {
        succeess: boolean;
        sign: number;
        param: string;
      };
  /**
   *
   * 存储modal到主store的map中，切换主store
   * @memberof StoreChanger
   */
  closeModal(): {
    success: boolean;
    sign: number;
  };
  /**
   *
   * 删除弹窗，不能处于编辑弹窗状态
   * @param {string} name
   * @returns
   */
  removeModal(name: string):
    | {
        success: boolean;
        sign: number;
        param?: undefined;
      }
    | {
        success: boolean;
        sign: number;
        param: string;
      };
  /**
   *
   * 重置需要注册事件
   * @param {IStoreData[]} initData
   * @param {boolean} [check=false] 清空编辑弹窗状态
   * @memberof Store
   */
  resetToInitData(initData: IStoreData[], check?: boolean): void;
  /**
   *
   * 注意重置需要注册事件
   * @param {IStoreData[]} initData
   * @param {number} current
   * @param {boolean} [check=false]
   * @memberof Store
   */
  resetToCustomData(
    initData: IStoreData[],
    current: number,
    check?: boolean
  ): void;
  resetListeners(): void;
  replaceList(list: IStoreData[]): void;
  setForceUpdate(fn: Function): void;
  forceUpdate(): void;
  setIndex(num: number): void;
  redo(): void;
  undo(): void;
  cleanRedundant(index: number): void;
  setData(data: IStoreData): void;
  cleanLast(): void;
  emit(): void;
  subscribe(listener: Function): () => Function[];
}
export default Store;
