import UserConfig from "../../config";
import Store from "../store";
export interface CommanderItem {
  init: () => void;
  display: string;
  name: string;
  keyboard: string;
  excute: (
    store: Store,
    config: UserConfig,
    options?: Record<string, any>
  ) => void;
  destroy: () => void;
}
