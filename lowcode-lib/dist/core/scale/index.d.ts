import UserConfig from "../../config";
export declare const onWheelEvent: (config: UserConfig) => {
  onWheel: (e: React.WheelEvent<HTMLDivElement>) => void;
};
export declare const scaleFn: {
  increase(number: number | undefined, config: UserConfig): number;
  decrease(number: number | undefined, config: UserConfig): number;
};
export declare const onWheelEventIframe: (
  config: UserConfig,
  scale: {
    value: number;
    maxValue: number;
    minValue: number;
  }
) => {
  onWheel: (e: React.WheelEvent<HTMLDivElement>) => void;
};
