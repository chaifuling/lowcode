import { IBlockType } from "../core/store/storetype";
import { PropsWithChildren } from "react";
import { UserConfig } from "../config";
interface BlockProps {
  data: IBlockType;
  context: "edit" | "preview";
  config: UserConfig;
  iframe?: boolean;
}
/**
 * block在modal中也要使用，所以该组件不应该接收容器ref
 * 用来从component里拿到渲染进行渲染,由于异步拉代码，所以需要等待代码拉取完毕
 * @param {*} props
 * @returns
 */
declare function Blocks(props: PropsWithChildren<BlockProps>): JSX.Element;
export default Blocks;
