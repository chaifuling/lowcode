import UserConfig from "../../config";
import Store from "../store";
import { CommanderItem } from "./commanderType";
declare class CommanderWrapper {
  store: Store;
  commandMap: Record<string, CommanderItem>;
  config: UserConfig;
  constructor(
    store: Store,
    commandMap: Record<string, CommanderItem>,
    config: UserConfig
  );
  getList(): Record<string, CommanderItem>;
  register(item: CommanderItem): void;
  registerKeyBoard(current: CommanderItem): () => void;
  unRegister(name: string): void;
  exec(name: string, options?: any): void;
}
export default CommanderWrapper;
