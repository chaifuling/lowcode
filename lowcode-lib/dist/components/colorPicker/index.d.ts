import React from "react";
import { RGBColor } from "react-color";
export interface ColorPickerProps {
  initColor: RGBColor;
  onChange: (v: RGBColor) => void;
}
declare function ColorPicker(props: ColorPickerProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof ColorPicker>;
export default _default;
