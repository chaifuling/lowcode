import { CommanderItem } from "./commanderType";
export declare class CommanderItemFactory implements CommanderItem {
  name: CommanderItem["name"];
  keyboard: CommanderItem["keyboard"];
  excute: CommanderItem["excute"];
  display: CommanderItem["display"];
  init: CommanderItem["init"];
  destroy: CommanderItem["destroy"];
  constructor(
    name: CommanderItem["name"],
    keyboard: CommanderItem["keyboard"],
    excute: CommanderItem["excute"],
    display: CommanderItem["display"],
    init?: CommanderItem["init"],
    destroy?: CommanderItem["destroy"]
  );
}
