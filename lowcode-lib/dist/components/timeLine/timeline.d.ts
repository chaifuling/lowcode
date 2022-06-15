import React, { CSSProperties } from "react";
import UserConfig from "../../config";
export interface TimeLineProps {
  style?: CSSProperties;
  classes?: string;
  config: UserConfig;
}
export interface TimeLineConfigType {
  autoFocus: boolean;
  scrollDom: null | HTMLDivElement;
}
export interface TimeLineNeedleConfigType {
  status: "stop" | "start" | "pause";
  runFunc: Function;
  resetFunc: Function;
  pauseFunc: Function;
  current: number;
  isRefresh: boolean;
  setNeedle: Function;
}
export declare const needleMoveEvent: (config: UserConfig) => {
  onMouseMove: (e: React.MouseEvent) => Promise<void>;
  onMouseUp: () => void;
};
export declare function TimeLine(props: TimeLineProps): JSX.Element;
export default TimeLine;
