import { ComponentItem } from "./componentItem";
/**
 *
 * 注册组件需要异步的，由注册时效果决定。
 * 主要是存放所有已注册组件。可以在其render时提供对应context
 * @class ComponentRegister
 */
declare class ComponentRegister {
  componentMap: Record<string, ComponentItem>;
  componentList: ComponentItem[];
  listener: Function[];
  eventMap: Record<string, Function[]>;
  constructor(
    componentMap?: Record<string, ComponentItem>,
    componentList?: ComponentItem[],
    listener?: Function[],
    eventMap?: Record<string, Function[]>
  );
  getMap(): Record<string, ComponentItem>;
  getList(): ComponentItem[];
  getComp(name: string): ComponentItem;
  subscribe(fn: Function): () => Function[];
  emit(): void;
  on(event: string, fn: Function): () => Function[];
  emitEvent(event: string): void;
  register(item: ComponentItem): void;
  unRegister(name: string): void;
}
export default ComponentRegister;
