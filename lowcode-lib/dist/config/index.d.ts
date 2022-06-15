import {
  IBlockType,
  IMainStoreData,
  IStoreData,
} from "../core/store/storetype";
import { ComponentClass, FunctionComponent, ReactNode } from "react";
import { ComponentItemFactory } from "../core/components/abstract";
import { CommanderItem } from "../core/command/commanderType";
import { FormComponentRegister } from "../core/components/formComponentRegister";
import { LeftRegistComponentMapItem } from "../core/crossDrag";
import { FunctionCenterType } from "../core/functionCenter";
import { EventCenter } from "../core/eventCenter";
import { DataCenter } from "../core/dataCenter";
import { CommanderItemFactory } from "../core/command/abstract";
import CommanderWrapper from "../core/command";
import ComponentRegister from "../core/components";
import Store from "../core/store";
import {
  TimeLineConfigType,
  TimeLineNeedleConfigType,
} from "../components/timeLine/timeline";
import { AnimateFactory } from "../core/AnimateFactory";
/**
 *
 * @urlFn 组件异步加载函数
 * @component  组件默认导出
 * @export
 * @interface CacheComponentValueType
 */
export interface CacheComponentValueType {
  component?: ComponentItemFactory;
}
export declare type CacheComponentType =
  | Record<string, CacheComponentValueType>
  | {};
export declare type AsyncCacheComponentType = Record<
  string,
  () => Promise<any>
>;
/**
 *
 *
 * @export 左侧的图标 custom 自定义渲染
 * @interface LeftMapRenderListPropsItemCategory
 */
export interface LeftMapRenderListPropsItemCategory {
  type: string;
  icon: ReactNode;
  custom?: boolean;
  customRender?: (config: UserConfig) => ReactNode;
  displayName?: string;
}
/**
 *
 *
 * @export 右侧的图标配置
 * @interface RightMapRenderListPropsItemCategory
 */
export interface RightMapRenderListPropsItemCategory {
  type: string;
  icon: ReactNode;
  custom?: boolean;
  customRender?: (
    type: string,
    current: IBlockType,
    config: UserConfig
  ) => ReactNode;
}
export interface InitConfig {
  /**
   * 初始化store
   * @type {IStoreData[]}
   * @memberof InitConfig
   */
  initStoreData: IStoreData[];
  /**
   *  左边tab页组件渲染包括异步路径  { type: 'basic', component: 'button', img: 'http://xxxx/1.jpg' ,url:'' },
   * @memberof InitConfig
   */
  leftAllRegistMap: LeftRegistComponentMapItem[];
  /**
   * 左边tab页图标配置
   * type icon custom customRender
   * @memberof InitConfig
   */
  leftRenderListCategory: LeftMapRenderListPropsItemCategory[];
  /**
   * 右边tab页图标配置
   * type icon custom customRender
   * @memberof InitConfig
   */
  rightRenderListCategory: RightMapRenderListPropsItemCategory[];
  /**
   *
   * 右侧全局自定义
   * @memberof InitConfig
   */
  rightGlobalCustom: ((config: UserConfig) => ReactNode) | null | undefined;
  /**
   * 组件加载缓存判定，用来设置不异步加载的组件
   * @memberof InitConfig
   */
  initComponentCache: CacheComponentType;
  /**
   *
   * 内置函数配置
   * @memberof InitConfig
   */
  initFunctionMap: FunctionCenterType;
  /**
   *
   * 内置数据中心配置数据
   * @memberof InitConfig
   */
  initDataCenterMap: Record<string, any>;
  /**
   *
   * commander 指令集合
   * @type {Array<CommanderItemFactory>}
   * @memberof InitConfig
   */
  initCommandModule: Array<CommanderItemFactory>;
  /**
   *
   *  右侧配置项
   * @type {(Record<
   *   string,
   *   FunctionComponent<any> | ComponentClass<any, any>
   * >)}
   * @memberof InitConfig
   */
  initFormComponents: Record<
    string,
    FunctionComponent<any> | ComponentClass<any, any>
  >;
  /**
   *
   * 容器拉伸图标
   * @type {ReactNode}
   * @memberof InitConfig
   */
  containerIcon: ReactNode;
}
export declare const defaultStore: IMainStoreData;
export declare const defaultConfig: InitConfig;
/**
 *
 * 部分无法合并属性如果b传了会以b为准
 * initstore不合并
 * leftallregistmap合并
 * leftRenderListCategory合并
 * rightRenderListCategory合并
 * rightGlobalCustom 不合并
 * initComponentCache合并
 * initFunctionMap合并
 * initDataCenterMap合并
 * initCommandModule合并
 * initFormComponents合并
 * containerIcon不合并
 *
 * @export InitConfig
 */
export declare function userConfigMerge(
  a: Partial<InitConfig>,
  b?: Partial<InitConfig>
): InitConfig;
/**
 *
 *
 * @export 用户配置项
 * @class UserConfig
 */
export declare class UserConfig {
  initConfig: InitConfig;
  store: Store;
  componentRegister: ComponentRegister;
  formRegister: FormComponentRegister;
  animateFactory: AnimateFactory;
  componentCache: {};
  asyncComponentUrlMap: Record<string, () => Promise<any>>;
  marklineConfig: import("../core/markline/marklineConfig").MarklineConfigType;
  commanderRegister: CommanderWrapper;
  contextMenuState: import("../core/contextMenu").ContextMenuStateProps;
  eventCenter: EventCenter;
  dataCenter: DataCenter;
  scaleState: {
    value: number;
    maxValue: number;
    minValue: number;
  };
  focusState: import("../core/focusHandler/state").FocusStateType;
  collapsed: boolean;
  ticker: boolean;
  containerOverFlow: boolean;
  containerForceUpdate: () => void;
  timeline: boolean;
  timelineConfig: TimeLineConfigType;
  timelineNeedleConfig: TimeLineNeedleConfigType;
  createdFn: Function[];
  created: Function;
  beforeOnMountedFn: Function[];
  beforeOnMounted: Function;
  onMountedFn: Function[];
  onMounted: Function;
  destroyedFn: Function[];
  destroyed: Function;
  blockForceUpdate: Array<Function>;
  waitAnimate: boolean;
  wrapperMoveState: import("../components/wrapperMove/event").WrapperMoveStateProps;
  iframeWrapperMoveState: import("../components/IframeWrapperMove/event").WrapperMoveStateProps;
  refreshIframe: () => void;
  sendParent: (message: any) => void;
  iframeOrigin: string;
  iframeId: string;
  i18n: boolean;
  SCRIPTGLOBALNAME: string;
  scriptLoading: boolean;
  leftForceUpdate: () => void;
  customMap: Record<string, any>;
  constructor(initConfig?: Partial<InitConfig>);
  toRegist(): void;
  init(): void;
  getCollapse(): boolean;
  getStoreJSON(): string;
  parseStoreJson(json: string): any;
  /**
   *
   * 重设store并根据store重设
   * @param {IStoreData[]} data
   * @memberof UserConfig
   */
  resetData(data: IStoreData[]): void;
  getWrapperMove(): {
    data: import("../components/wrapperMove/event").WrapperMoveStateProps;
    iframe: import("../components/IframeWrapperMove/event").WrapperMoveStateProps;
  };
  getFocusState(): import("../core/focusHandler/state").FocusStateType;
  getScaleState(): {
    value: number;
    maxValue: number;
    minValue: number;
  };
  getDataCenter(): DataCenter;
  getEventCenter(): EventCenter;
  getAnimateFactory(): AnimateFactory;
  getConfig(): InitConfig;
  getStore(): Store;
  getComponentRegister(): ComponentRegister;
  getContextMenuState(): import("../core/contextMenu").ContextMenuStateProps;
  getFormRegister(): FormComponentRegister;
  getCommanderRegister(): CommanderWrapper;
  /**
   *
   * 用于获取当前store数据，已判断弹窗编辑 不会储存正在编辑的内容
   * @returns
   * @memberof UserConfig
   */
  getCurrentData(): IStoreData;
  /**
   *
   * 以默认设置重置配置项
   * @param {Partial<InitConfig>} v
   * @memberof UserConfig
   */
  resetConfig(v: Partial<InitConfig>): void;
  /**
   *  会重置配置，请修改配置后增加
   * 异步增加左侧tab页
   * @memberof UserConfig
   */
  addLeftCategory(v: LeftMapRenderListPropsItemCategory[]): void;
  /**
   *  会重置配置，请修改配置后增加
   * 异步增加右侧tab页
   * @memberof UserConfig
   */
  addRightCategory(v: RightMapRenderListPropsItemCategory[]): void;
  /**
   * 会重置配置，请修改配置后增加
   * 异步增加组件map
   * @memberof UserConfig
   */
  addCoRegistMap(v: LeftRegistComponentMapItem): void;
  /**
   *会重置配置，请修改配置后增加
   * 异步修改config 重置store
   * @memberof UserConfig
   */
  setConfig(v: Partial<InitConfig>): void;
  /**
   *
   * 同步注册指令
   * @param {CommanderItem} command
   * @memberof UserConfig
   */
  registCommander(command: CommanderItem): void;
  /**
   *
   * 用于修改markline配置
   * @returns
   * @memberof UserConfig
   */
  getMarklineConfig(): import("../core/markline/marklineConfig").MarklineConfigType;
  getComponentCache(): {};
  /**
   *
   * 同步注册组件，不会检测缓存是否存在
   * @param {ComponentItemFactory} item
   * @memberof UserConfig
   */
  registComponent(item: ComponentItemFactory): void;
  /**
   *
   * 异步注册组件，会判定缓存是否存在
   * @param {string} name
   * @memberof UserConfig
   */
  asyncRegistComponent(name: string): Promise<void>;
  scriptRegistComponentSingle(
    item: ComponentItemFactory,
    leftProps: LeftRegistComponentMapItem
  ): void;
  /**
   *
   * 分类信息需要单独存储后加载
   * @param {string} src  url地址
   * @param {Partial<LeftRegistComponentMapItem>} leftProps 分类
   * @param {Function} [callback] 回调
   * @return {*}
   * @memberof UserConfig
   */
  scriptSingleLoad(
    src: string,
    leftProps: Partial<LeftRegistComponentMapItem>,
    callback?: Function
  ): void;
}
export default UserConfig;
