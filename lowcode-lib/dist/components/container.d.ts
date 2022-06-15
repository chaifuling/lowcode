import { IStoreData } from "../core/store/storetype";
import { CSSProperties, PropsWithChildren } from "react";
import UserConfig from "../config";
interface ContainerProps {
  state: IStoreData;
  context: "edit" | "preview";
  config: UserConfig;
  editContainerStyle?: CSSProperties;
  previewContainerStyle?: CSSProperties;
}
declare function Container(
  props: PropsWithChildren<ContainerProps>
): JSX.Element;
export default Container;
