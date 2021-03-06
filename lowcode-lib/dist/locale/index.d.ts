import { UserConfig } from "..";
export declare const localeMap: {
  "zh-CN": {
    "timeline.name": string;
    "contorl.popup.absolute": string;
    "contorl.popup.static": string;
    "contorl.absolute": string;
    "contorl.static": string;
    "control.popup.delete": string;
    "control.delete": string;
    "control.focus": string;
    "control.no-component": string;
    "modal.new": string;
    "modal.control": string;
    "modal.popup.exit": string;
    "modal.popup.edit": string;
    "modal.popup.save": string;
    "modal.popup.notfond": string;
    "modal.popup.repeat": string;
    "modal.popup.remove": string;
    "modal.popup.nomodal": string;
    "modal.popup.name": string;
    "modal.name": string;
    "modal.control.remove": string;
    edit: string;
    yes: string;
    no: string;
    "right.noprops": string;
    "right.global": string;
    "right.containerheight": string;
    "right.containerwidth": string;
    "right.containerColor": string;
    "right.bodyColor": string;
    "right.fontSize": string;
    "right.lineHeight": string;
    title: string;
    description: string;
    "system.setting": string;
    "settings.openabsorb": string;
    on: string;
    off: string;
    "settings.absorbindent": string;
    "settings.min": string;
    "settings.max": string;
    "settings.autofocus": string;
    "error.minmax": string;
    "settings.marklineColor": string;
    "settings.marklineStyle": string;
    "settings.containerOverflow": string;
    "settings.Layout": string;
  };
  en: {
    "timeline.name": string;
    "contorl.popup.absolute": string;
    "contorl.popup.static": string;
    "contorl.absolute": string;
    "contorl.static": string;
    "control.popup.delete": string;
    "control.delete": string;
    "control.focus": string;
    "control.no-component": string;
    "modal.new": string;
    "modal.control": string;
    "modal.popup.exit": string;
    "modal.popup.edit": string;
    "modal.popup.save": string;
    "modal.popup.notfond": string;
    "modal.popup.repeat": string;
    "modal.popup.remove": string;
    "modal.popup.nomodal": string;
    "modal.popup.name": string;
    "modal.name": string;
    "modal.control.remove": string;
    edit: string;
    yes: string;
    no: string;
    "right.noprops": string;
    "right.global": string;
    "right.containerheight": string;
    "right.containerwidth": string;
    "right.containerColor": string;
    "right.bodyColor": string;
    "right.fontSize": string;
    "right.lineHeight": string;
    title: string;
    description: string;
    "system.setting": string;
    "settings.openabsorb": string;
    on: string;
    off: string;
    "settings.absorbindent": string;
    "settings.min": string;
    "settings.max": string;
    "settings.autofocus": string;
    "error.minmax": string;
    "settings.marklineColor": string;
    "settings.marklineStyle": string;
    "settings.containerOverflow": string;
    "settings.Layout": string;
  };
};
export declare type localeKey = keyof typeof localeMap;
export { en } from "./en";
export { zhCN } from "./zh-CN";
export declare const replaceLocale: (
  id: string,
  msg: string,
  config: UserConfig,
  param?: any,
  paramString?: string | undefined
) => string | JSX.Element;
