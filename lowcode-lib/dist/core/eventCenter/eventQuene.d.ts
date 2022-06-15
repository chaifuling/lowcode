import { EventCenterMapItem, EventCenterUserSelect } from ".";
import UserConfig from "../../config";
import { FunctionCenterFunction } from "../functionCenter";
export declare class EventQuene {
  available: number;
  waiters: Array<{
    fn: FunctionCenterFunction;
    args: any;
    eventList: {
      arr: Array<EventCenterMapItem>;
      displayName: string;
      userSelect: Array<EventCenterUserSelect>;
    };
    iname: EventCenterMapItem;
  }>;
  context: Record<string, any>;
  config: UserConfig;
  constructor(available: number | undefined, config: UserConfig, context?: {});
  take(
    task: FunctionCenterFunction,
    args: Record<string, any>,
    eventList: {
      arr: Array<EventCenterMapItem>;
      displayName: string;
      userSelect: Array<EventCenterUserSelect>;
    },
    iname: EventCenterMapItem
  ): void;
  leave(): void;
  _continue(): void;
}
