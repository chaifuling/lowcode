import UserConfig from "../config";
import { ComponentRenderConfigProps } from "../core/components/componentItem";
export declare function useStoreState(
  config: UserConfig,
  extraFn?: Function,
  everyFn?: Function
): import("../core/store/storetype").IStoreData[];
/**
 *
 * 组件动态注册eventMap与eventCenter
 * @export
 * @param {ComponentRenderConfigProps} props render参数传来的
 * @param {string} eventName 同一个组件名称不能重复
 * @returns
 */
export declare function useDynamicAddEventCenter(
  props: ComponentRenderConfigProps,
  eventName: string,
  displayName: string
): void;
/**
 *
 *
 * @export
 * @param {string} origin iframe地址
 * @param {UserConfig} config
 * @param {boolean} sign iframe onload
 * @param {string} [target]  iframeid 默认是yh-container-iframe
 * @return {*}
 */
export declare function useIframePostMessage(
  origin: string,
  config: UserConfig,
  sign: boolean,
  target?: string
): (() => void)[];
export declare function useIframeHook(origin: string, config: UserConfig): void;
