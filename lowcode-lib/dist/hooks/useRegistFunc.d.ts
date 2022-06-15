/**
 *
 *
 * @export 用于简化注册函数代码
 * @param {boolean} dep 配置的开关
 * @param {('preview' | 'edit')} context 传递的环境变量
 * @param {Function} registFn 注册的函数
 */
export declare function useRegistFunc(
  dep: boolean,
  context: "preview" | "edit",
  registFn: Function
): void;
