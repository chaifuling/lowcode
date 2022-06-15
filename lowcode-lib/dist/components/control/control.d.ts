import { CSSProperties, PropsWithChildren } from "react";
import { UserConfig } from "../..";
export interface ControlProps {
  config: UserConfig;
  style?: CSSProperties;
}
export declare function Control(
  props: PropsWithChildren<ControlProps>
): JSX.Element;
export default Control;
