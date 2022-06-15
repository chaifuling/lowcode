import { CSSProperties, PropsWithChildren } from "react";
import UserConfig from "../config";
interface ContainerProps {
  context: "edit" | "preview";
  config: UserConfig;
  editContainerStyle?: CSSProperties;
  previewContainerStyle?: CSSProperties;
}
declare function Container(
  props: PropsWithChildren<ContainerProps>
): JSX.Element;
export default Container;
