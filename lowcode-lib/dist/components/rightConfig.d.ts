import { IStoreData } from "../core/store/storetype";
import { PropsWithChildren, ReactNode } from "react";
import UserConfig from "../config";
interface RightConfigProps {
  state: IStoreData;
  config: UserConfig;
  globalExtra?: ReactNode;
  modalExtra?: ReactNode;
}
/**
 *
 * 这里一个需要异步拿取当前注册组件的配置项，另外需要异步加载所需的配置项。
 * @param {*} props
 * @returns
 */
declare function RightConfig(
  props: PropsWithChildren<RightConfigProps>
): JSX.Element;
export default RightConfig;
