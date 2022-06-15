import React from "react";
import { AnimateItem } from "../../core/store/storetype";
export declare const iter = 500;
export declare const itemHeight = 25;
export declare const interval = 19;
export interface TimeLineItemProps {
  animate: AnimateItem[];
}
export declare const TimeLineItemMouseMove: (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  animate: AnimateItem[],
  forceUpdate: React.Dispatch<React.SetStateAction<number>>
) => void;
export declare const TimeLineItemMouseOver: () => void;
export declare const resetCurrentMoveItemId: () => void;
export declare function TimeLineItem(props: TimeLineItemProps): JSX.Element;
