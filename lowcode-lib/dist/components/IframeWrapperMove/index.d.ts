import {
  AllHTMLAttributes,
  CSSProperties,
  PropsWithChildren,
  ReactNode,
} from "react";
import UserConfig from "../../config";
export interface ContainerWrapperProps
  extends AllHTMLAttributes<HTMLDivElement> {
  config: UserConfig;
  classNames?: string;
  style?: CSSProperties;
  extra?: ReactNode;
}
declare function ContainerWrapper(
  props: PropsWithChildren<ContainerWrapperProps>
): JSX.Element;
export default ContainerWrapper;
