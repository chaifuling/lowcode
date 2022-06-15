import UserConfig from "../../config";
import { CustomAnimateObj } from "../store/storetype";
/**
 *
 *  opacity: 100
    percent: 0
    positionX: 0
    positionY: 0
    rotate: 0
    scale: 100
 * @export 转换使用
 * @interface TransformItemObj
 */
export interface TransformItemObj {
  opacity: number;
  percent: number;
  positionX: number;
  positionY: number;
  rotate: number;
  scale: number;
}
/**
 *
 *
 * @export 用户输入对象
 * @interface TransformItem
 */
export interface TransformItem {
  displayName: string;
  animateName: string;
  keyframes: TransformItemObj[];
}
export declare const styleSheetId = "dooringx_dynamic_style";
export declare class AnimateFactory {
  customAnimateName: Array<CustomAnimateObj>;
  constructor(customAnimateName?: Array<CustomAnimateObj>);
  getCustomAnimateName(): CustomAnimateObj[];
  searchSheet(): null | CSSStyleSheet;
  getStyleSheets(): CSSStyleSheet | null;
  /**
   *
   * 插入动画
   * @param {string} ruleText
   * @memberof AnimateFactory
   */
  inserKeyframeAnimate(ruleText: string): void;
  /**
   *
   * 删除keyframe
   * @param {string} animateName
   * @returns
   * @memberof AnimateFactory
   */
  deleteKeyFrameAnimate(animateName: string): void;
  /**
   *
   * 配置时使用
   * @param {Array<CustomAnimateObj>} [customAnimateNameArr=[]]
   * @memberof AnimateFactory
   */
  addCustomAnimate(customAnimateNameArr?: Array<CustomAnimateObj>): void;
  /**
   *
   * 删除使用animateName 防止displayName重名 用完需要同步store
   * @param {string} animateName
   * @memberof AnimateFactory
   */
  deleteCustomAnimate(animateName: string): void;
  /**
   *
   * 从配置项插入动画 导入设置
   * @memberof AnimateFactory
   */
  fromArrInsertKeyFrame(customAnimateName?: Array<CustomAnimateObj>): void;
  /**
   *
   * 将this.customAnimateName写入store
   * @memberof AnimateFactory
   */
  syncToStore(config: UserConfig): void;
  /**
   *
   * 将store中的配置写入config
   * 注意！只在导入新store后使用
   * @memberof AnimateFactory
   */
  syncStoreToConfig(config: UserConfig): void;
  /**
   *
   * 将用户输入转换为新的动画
   * @param {TransformItem} item
   * @memberof AnimateFactory
   */
  addUserInputIntoCustom(item: TransformItem, config: UserConfig): void;
}
