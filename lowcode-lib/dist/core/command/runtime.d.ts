import CommanderWrapper from ".";
import { CommanderItemFactory } from "./abstract";
export declare const registCommandFn: (
  module: CommanderItemFactory[],
  commander: CommanderWrapper
) => void;
export declare const unRegistCommandFn: (
  module: CommanderItemFactory[],
  commander: CommanderWrapper
) => void;
