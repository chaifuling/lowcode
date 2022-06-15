import { ReactNode } from "react";
import UserConfig from "../config";
declare type modeType = "horizontal" | "vertical";
interface LeftConfigProps {
  config: UserConfig;
  showName?: Boolean;
  footerConfig?: ReactNode;
  mode?: modeType;
}
/**
 *
 * 注册加载左侧组件方法，由于异步拉取，所以要异步加载
 * 不同tab页可以使用不同type区分
 * @param {*} props -LeftConfigProps options可选项：showName:是否显示displayName; mode:'horizontal' | 'vertical' icon与文案展示方向 ;footerConfig:底部功能配置ReactNode类型；
 * @returns
 */
declare function LeftConfig(props: LeftConfigProps): JSX.Element;
export default LeftConfig;
