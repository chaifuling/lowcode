import { MessageInstance } from "antd/lib/message";
import React from "react";
import { UserConfig } from "../../config/index";
export interface SettingsModalPropsType {
  visible: boolean;
  config: UserConfig;
  onOk: Function;
  onCancel: Function;
  message: MessageInstance;
}
declare function SettingsModal(props: SettingsModalPropsType): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof SettingsModal>;
export default _default;
