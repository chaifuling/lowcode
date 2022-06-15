import { IBlockType } from "../store/storetype";
export interface MarklineConfigType {
  indent: number;
  isAbsorb: boolean;
  mode: "normal" | "grid";
  gridIndent: number;
  resizeIndent: number;
  marklineUnfocus: null | IBlockType[];
  borderColor: string;
  borderStyle: "dotted" | "solid" | "dashed";
}
export declare const marklineConfig: MarklineConfigType;
