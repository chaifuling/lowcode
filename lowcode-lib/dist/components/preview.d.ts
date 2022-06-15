import { ReactElement, ReactNode, CSSProperties } from "react";
import UserConfig from "../config";
export interface PreviewProps {
  config: UserConfig;
  /**
   *
   * loading node
   * @type {ReactNode}
   * @memberof PreviewProps
   */
  loadText?: ReactNode;
  /**
   *
   * 手动维护状态
   * @type {boolean}
   * @memberof PreviewProps
   */
  loadingState?: boolean;
  /**
   *
   * 页面链接完后调用
   * @type {Function}
   * @memberof PreviewProps
   */
  completeFn?: Function;
  /**
   *
   * 预览样式
   * @type {CSSProperties}
   * @memberof PreviewProps
   */
  previewContainerStyle?: CSSProperties;
}
declare function Preview(props: PreviewProps): ReactElement;
export default Preview;
