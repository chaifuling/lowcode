import UserConfig from "../../config";
export declare const containerState: {
  isDrag: boolean;
  startY: number;
  startIndex: number;
  minHeight: number;
};
export declare const containerResizer: {
  onMousedown: (e: React.MouseEvent, config: UserConfig) => void;
  onMouseMove: (e: React.MouseEvent, config: UserConfig) => void;
  onMouseUp: (config: UserConfig) => void;
};
