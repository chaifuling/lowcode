import { AllHTMLAttributes, CSSProperties, PropsWithChildren } from "react";
import UserConfig from "../../config";
export interface ContainerWrapperProps
  extends AllHTMLAttributes<HTMLDivElement> {
  config: UserConfig;
  classNames?: string;
  style?: CSSProperties;
}
declare function ContainerWrapper(
  props: PropsWithChildren<ContainerWrapperProps>
): JSX.Element;
export default ContainerWrapper;
