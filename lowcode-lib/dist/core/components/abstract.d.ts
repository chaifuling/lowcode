import { ComponentItem } from "./componentItem";
export declare class ComponentItemFactory implements ComponentItem {
  name: ComponentItem["name"];
  display: ComponentItem["display"];
  props: ComponentItem["props"];
  initData: ComponentItem["initData"];
  render: ComponentItem["render"];
  resize: ComponentItem["resize"];
  needPosition: ComponentItem["needPosition"];
  init: ComponentItem["init"];
  destroy: ComponentItem["destroy"];
  remoteConfig: ComponentItem["remoteConfig"];
  constructor(
    name: ComponentItem["name"],
    display: ComponentItem["display"],
    props: ComponentItem["props"],
    initData: ComponentItem["initData"],
    render: ComponentItem["render"],
    resize?: ComponentItem["resize"],
    needPosition?: ComponentItem["needPosition"],
    init?: ComponentItem["init"],
    destroy?: ComponentItem["destroy"],
    remoteConfig?: ComponentItem["remoteConfig"]
  );
}
