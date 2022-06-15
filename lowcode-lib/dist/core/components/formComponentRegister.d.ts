import { ComponentClass, FunctionComponent } from "react";
import { CreateOptionsRes } from "./formTypes";
export interface ContainerConfigItem {
  type: string;
  option: CreateOptionsRes<any, any>;
}
export declare const formComponentRegisterFn: (
  formComponent: FormComponentRegister,
  modules: Record<string, FunctionComponent<any> | ComponentClass<any, any>>
) => void;
/**
 *
 * 拿到form组件地址和状态
 * 获取配置container配置项和普通组件配置项
 * @export
 * @class FormComponentRegister
 */
export declare class FormComponentRegister {
  formMap: Record<string, FunctionComponent<any> | ComponentClass<any, any>>;
  listener: Function[];
  eventMap: Record<string, Function[]>;
  containerConfig: Array<ContainerConfigItem>;
  constructor(
    formMap?: Record<string, FunctionComponent<any> | ComponentClass<any, any>>,
    listener?: Function[],
    eventMap?: Record<string, Function[]>,
    containerConfig?: Array<ContainerConfigItem>
  );
  getMap(): Record<string, FunctionComponent<any> | ComponentClass<any, any>>;
  getComp(name: string): FunctionComponent<any> | ComponentClass<any, any>;
  getConfig(): ContainerConfigItem[];
  setConfig(config: Array<ContainerConfigItem>): void;
  /**
   *
   *  同步注册方法
   * @memberof FormComponentRegister
   */
  register(
    name: string,
    ele: FunctionComponent<any> | ComponentClass<any, any>
  ): void;
  emit(): void;
  on(event: string, fn: Function): () => Function[];
}
