interface MoveStateType {
  startX: number;
  startY: number;
  fn: Function;
  isMove: boolean;
}
export declare const moveState: MoveStateType;
export declare const mouseUp: () => void;
export declare const controlMouseMove: (e: React.MouseEvent) => void;
export {};
