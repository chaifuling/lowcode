/**
 *
 *
 * @export
 * @param {number} top
 * @param {number} left
 * @param {(string | number | undefined)} height
 * @param {(string | number | undefined)} width
 * @param {boolean} isFixed
 * @returns
 */
export declare function transfer(
  top: number,
  left: number,
  height: string | number | undefined,
  width: string | number | undefined,
  isFixed: boolean
): {
  top: number;
  left: number;
  height: string | number | undefined;
  width: string | number | undefined;
};
export declare function getCurrentMobileInfo(): number[];
export declare function getRealWidth(w?: number | string): number;
export declare function getRealHeight(H?: number | string): number;
