export declare type FunctionDataType = keyof FunctionDataMap;
export declare type FunctionNameType = string;
export declare type FuncitonOptionConfigType = {
  receive: string;
  multi: boolean;
};
export interface FunctionDataMap {
  dataSource: FuncitonOptionConfigType;
  modal: FuncitonOptionConfigType;
  input: FuncitonOptionConfigType;
  ctx: FuncitonOptionConfigType;
}
export declare type FunctionConfigType = {
  name: FunctionNameType;
  data: FunctionDataType[];
  options: FuncitonOptionConfigType;
}[];
