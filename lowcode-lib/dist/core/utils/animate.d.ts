import { AnimateItem } from "../store/storetype";
export declare function mergeAnimate(
  animate: AnimateItem[],
  config?: {
    delay: number;
    isPause: boolean;
  }
): string[];
