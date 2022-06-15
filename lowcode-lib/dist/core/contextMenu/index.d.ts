import React, { RefObject } from "react";
import { ReactElement } from "react";
import UserConfig from "../../config";
declare const ContextMenu: () => JSX.Element;
export interface ContextMenuStateProps {
  left: number;
  top: number;
  menu: HTMLElement | null;
  parent: HTMLDivElement | null;
  contextMenu: ReactElement;
  unmountContextMenu: () => void;
  observer: null | MutationObserver;
  initLeft: number;
  initTop: number;
  forceUpdate: Function;
  state: boolean;
}
export declare const contextMenuState: ContextMenuStateProps;
export declare function contextMenuEvent(
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ref: RefObject<HTMLDivElement>,
  userConfig: UserConfig
): void;
export declare function unmountContextMenu(): void;
export default ContextMenu;
