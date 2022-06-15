import { IStoreData } from "../core/store/storetype";
import UserConfig from "../config";
interface ModalRenderProps {
  data: IStoreData;
  name: string;
  config: UserConfig;
  parentDom: HTMLDivElement;
  rootDom: HTMLDivElement;
}
export declare const unmountMap: Map<string, Function>;
export declare function ModalRender(props: ModalRenderProps): JSX.Element;
export declare const createModal: (
  name: string,
  data: IStoreData,
  config: UserConfig
) => void;
export {};
