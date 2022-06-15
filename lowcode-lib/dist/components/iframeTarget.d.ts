import React from "react";
import UserConfig from "../config";
interface IframeTargetProps {
  config: UserConfig;
  iframeProps?: React.DetailedHTMLProps<
    React.IframeHTMLAttributes<HTMLIFrameElement>,
    HTMLIFrameElement
  >;
}
export declare function IframeTarget(props: IframeTargetProps): JSX.Element;
export {};
