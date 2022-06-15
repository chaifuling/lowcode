export interface CreateOptionsResAll {
  type: string;
  option: any;
}
export interface CreateOptionsRes<T, K extends keyof T> {
  type: keyof T;
  option: T[K];
}
export declare function createPannelOptions<T, K extends keyof T>(
  type: K,
  option: T[K]
): CreateOptionsRes<T, K>;
