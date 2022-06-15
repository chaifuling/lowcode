/*

 * @Date: 2021-08-27 10:20:38
 * @LastEditors: 
 * @LastEditTime: 2021-09-27 18:08:49
 * @FilePath: \lowcode\packages\lowcode-lib\src\locale\index.tsx
 */

import React from "react";

import { FormattedMessage } from "react-intl";
import { UserConfig } from "..";
import { en } from "./en";
import { zhCN } from "./zh-CN";

export const localeMap = {
  "zh-CN": zhCN,
  en,
};
export type localeKey = keyof typeof localeMap;

export { en } from "./en";
export { zhCN } from "./zh-CN";

export const replaceLocale = (
  id: string,
  msg: string,
  config: UserConfig,
  param?: any,
  paramString?: string
) => {
  if (config.i18n) {
    // console.log('====================================');
    // console.log(id, msg, config, param, paramString);
    // console.log('====================================');
    if (paramString) {
      return (
        <FormattedMessage
          id={id}
          defaultMessage={paramString}
          values={param}
        ></FormattedMessage>
      );
    }
    return <FormattedMessage id={id} defaultMessage={msg}></FormattedMessage>;
  }
  return msg;
};
