// 有问题请加QQ 673632758 by
import React, { useState, useEffect, useMemo, useRef, memo } from "react";
import _message from "antd/lib/message";
import { nanoid } from "nanoid";
import deepcopy from "deepcopy";
import _Button from "antd/lib/button";
import ReactDOM__default, { unmountComponentAtNode, render } from "react-dom";
import classnames from "classnames";
import {
  ReloadOutlined,
  RotateLeftOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  DeleteOutlined,
  MenuOutlined,
  SearchOutlined,
  DoubleRightOutlined,
  DoubleLeftOutlined,
  UnorderedListOutlined,
  LayoutOutlined,
  SyncOutlined,
  SettingOutlined,
  SaveOutlined,
  VerticalAlignMiddleOutlined,
} from "@ant-design/icons";
import _Popconfirm from "antd/lib/popconfirm";
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from "react-sortable-hoc";
import { FormattedMessage } from "react-intl";
import _Menu from "antd/lib/menu";
import _Input from "antd/lib/input";
import _Checkbox from "antd/lib/checkbox";
import _Switch from "antd/lib/switch";
import _InputNumber from "antd/lib/input-number";
import _Col from "antd/lib/col";
import _Row from "antd/lib/row";
import _Tabs from "antd/lib/tabs";
import { SketchPicker } from "react-color";
import _List from "antd/lib/list";
import _Modal from "antd/lib/modal";
import _Form from "antd/lib/form";
import _Select from "antd/lib/select";
import _Radio from "antd/lib/radio";
import _Table from "antd/lib/table";
import _Space from "antd/lib/space";
import _Typography from "antd/lib/typography";

var registCommandFn = function registCommandFn(module, commander) {
  module.forEach(function (v) {
    commander.register(v);
  });
};
var unRegistCommandFn = function unRegistCommandFn(module, commander) {
  module.forEach(function (v) {
    commander.unRegister(v.name);
  });
};

/*

 * @Date: 2021-07-09 00:05:51
 * @LastEditors:
 * @LastEditTime: 2022-04-23 23:01:25
 * @FilePath: \lowcode\packages\lowcode-lib\src\core\utils\special.ts
 */
var specialCoList = ["modalMask"];
var specialFnList = ["_inner"];

function deepCopy(obj) {
  return deepcopy(obj);
}
function swap(indexa, indexb, arr) {
  arr[indexa] = arr.splice(indexb, 1, arr[indexa])[0];
  return arr;
}
function randomColor() {
  return (
    "#" + ("00000" + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
  );
} // 将rgba字符串对象转化为rgba对象

function rgba2Obj(rgba) {
  if (rgba === void 0) {
    rgba = "";
  }

  var reg = /rgba\(\s*?(\d+)\s*?,\s*?(\d+)\s*?,\s*?(\d+)\s*?,\s*?(\d+)\s*?\)/g;
  var rgbaObj = {
    r: 0,
    g: 0,
    b: 0,
    a: 0,
  };
  rgba.replace(reg, function (_m, r, g, b, a) {
    rgbaObj = {
      r: r,
      g: g,
      b: b,
      a: a,
    };
    return rgba;
  });
  return rgbaObj;
}
function createUid(name) {
  if (name) {
    return name + "-" + nanoid();
  } else {
    return nanoid();
  }
}
var isMac = function isMac() {
  var isMac = /macintosh|mac os x/i.test(navigator.userAgent);

  if (isMac) {
    return true;
  }

  return false;
};
/**
 *
 * @param {*} array
 * @param {*} from
 * @param {*} to
 */

var arrayMove = function arrayMove(array, from, to) {
  array = [].concat(array);
  arrayMoveMutate(array, from, to);
  return array;
};
/**
 *
 * @param {*} length
 * @param {*} index
 */

var indexSub = function indexSub(arrLength, toIndex) {
  return toIndex < 0 ? arrLength + toIndex : toIndex; // return resIndex;
};
/**
 * 数组换位
 * @param {Array} array The array with the item to move. / [1,2,3]
 * @param {Number} from Index of item to move. If negative, it will begin that many elements from the end / 0 / -1 / 2
 * @param {Number} to Index of where to move the item. If negative, it will begin that many elements from the end / 0 / -1 / 2
 * returns A new array with the item moved to the new position [1,2,3] -> [1,3,2]
 */

var arrayMoveMutate = function arrayMoveMutate(array, from, to) {
  var arrLength = array.length;
  var startIndex = indexSub(arrLength, from);

  if (startIndex >= 0 && startIndex < arrLength) {
    var endIndex = indexSub(arrLength, to);

    var _array$splice = array.splice(from, 1),
      item = _array$splice[0];

    array.splice(endIndex, 0, item);
  }
};
/**
 *
 * 这个函数将返回值全部统一成数组// modal的不走此方法
 * @param {keyof FunctionDataMap} v
 * @param {Record<string, any>} args
 * @param {string} name
 * @param {UserConfig} config
 * @param {Record<string, any>} ctx
 * @return {Array<string, any>}
 */

var changeUserValue = function changeUserValue(v, args, name, config, ctx) {
  var userChoose = args[name];

  switch (v) {
    case "ctx":
      if (Array.isArray(userChoose)) {
        return userChoose.reduce(function (pr, ne) {
          var val = ctx[ne];
          pr.push(val);
          return pr;
        }, []);
      }

      return [];

    case "dataSource":
      var dataCenter = config.getDataCenter().getDataMap();

      if (Array.isArray(userChoose)) {
        return userChoose.reduce(function (pr, ne) {
          var val = dataCenter[ne];
          pr.push(val);
          return pr;
        }, []);
      }

      return [];

    default:
      if (Array.isArray(userChoose)) {
        return userChoose;
      }

      return [];
  }
};
/**
 *
 * 这个函数将返回值全部统一成对象 modal的不走此方法
 * @param {keyof FunctionDataMap} v
 * @param {Record<string, any>} args
 * @param {string} name
 * @param {UserConfig} config
 * @param {Record<string, any>} ctx
 * @return {Record<string, any>}
 */

var changeUserValueRecord = function changeUserValueRecord(
  v,
  args,
  name,
  config,
  ctx
) {
  var userChoose = args[name];

  switch (v) {
    case "ctx":
      if (Array.isArray(userChoose)) {
        return userChoose.reduce(function (pr, ne) {
          var _Object$assign;

          var val = ctx[ne];
          return Object.assign(
            pr,
            ((_Object$assign = {}), (_Object$assign[ne] = val), _Object$assign)
          );
        }, {});
      }

      return {};

    case "dataSource":
      var dataCenter = config.getDataCenter().getDataMap();

      if (Array.isArray(userChoose)) {
        return userChoose.reduce(function (pr, ne) {
          var _Object$assign2;

          var val = dataCenter[ne];
          return Object.assign(
            pr,
            ((_Object$assign2 = {}),
            (_Object$assign2[ne] = val),
            _Object$assign2)
          );
        }, {});
      }

      return {};

    default:
      if (Array.isArray(userChoose)) {
        return userChoose.reduce(function (pr, ne) {
          var _Object$assign3;

          return Object.assign(
            pr,
            ((_Object$assign3 = {}),
            (_Object$assign3[ne] = ne),
            _Object$assign3)
          );
        }, {});
      }

      return {};
  }
};
function postMessage(value, src, target) {
  if (target === void 0) {
    target = "yh-container-iframe";
  }

  var search = "#" + target;
  var iframe = document.querySelector(search);

  if (iframe) {
    var _iframe$contentWindow;

    (_iframe$contentWindow = iframe.contentWindow) == null
      ? void 0
      : _iframe$contentWindow.postMessage(value, src);
  } else {
    console.warn("can not find iframe " + search);
  }
}
function angleToRadian(angle) {
  return (angle * Math.PI) / 180;
}
function getContainer() {
  var container = document.querySelector("#yh-container");

  if (!container) {
    container = document.querySelector("#yh-container-iframe");
  }

  return container;
}
function binarySearchRemain(target, arr, attribute, indent) {
  var start = 0;
  var end = arr.length - 1;

  while (start <= end) {
    var mid = parseInt(start + (end - start) / 2 + "");

    if (
      target === arr[mid][attribute] ||
      Math.abs(target - arr[mid][attribute]) < indent
    ) {
      return [arr[mid], Math.abs(target - arr[mid][attribute])];
    } else if (target > arr[mid][attribute]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return null;
}

/*

 * @Date: 2021-03-14 05:35:15
 * @LastEditors:
 * @LastEditTime: 2022-04-23 23:34:15
 * @FilePath: \lowcode\packages\lowcode-lib\src\hooks\index.ts
 */
function useStoreState(config, extraFn, everyFn) {
  if (extraFn === void 0) {
    extraFn = function extraFn() {};
  }

  if (everyFn === void 0) {
    everyFn = function everyFn() {};
  }

  var store = config.getStore();

  var _useState = useState(store.getData()),
    state = _useState[0],
    setState = _useState[1];

  var forceUpdate = useState(0)[1];
  useEffect(
    function () {
      var unRegister = store.subscribe(function () {
        var data = store.getData();
        setState(data);
        config
          .getEventCenter()
          .syncEventMap(store.getData(), config.getStore());
        config.getEventCenter().getFunctionCenter().syncFunction(store);
        extraFn();
      });
      store.setForceUpdate(function () {
        return forceUpdate(function (v) {
          return v + 1;
        });
      });
      var commandModules = config.getConfig().initCommandModule;
      var commander = config.getCommanderRegister();
      registCommandFn(commandModules, commander);
      return function () {
        unRegister();
        unRegistCommandFn(commandModules, commander);
      };
    },
    [config, extraFn, forceUpdate, store]
  );
  useEffect(
    function () {
      everyFn();
    },
    [everyFn]
  ); // 去除默认滚动

  useEffect(function () {
    var fn1 = function fn1(event) {
      if (event.ctrlKey === true || event.metaKey) {
        event.preventDefault();
      }
    };

    var fn2 = function fn2(event) {
      if (event.ctrlKey === true || event.metaKey) {
        event.preventDefault();
      }
    };

    window.addEventListener("mousewheel", fn1, {
      passive: false,
    }); //firefox

    window.addEventListener("DOMMouseScroll", fn2, {
      passive: false,
    });
    return function () {
      window.removeEventListener("mousewheel", fn1);
      window.removeEventListener("mousewheel", fn2);
    };
  }, []);
  return [state];
}
/**
 *
 * 组件动态注册eventMap与eventCenter
 * @export
 * @param {ComponentRenderConfigProps} props render参数传来的
 * @param {string} eventName 同一个组件名称不能重复
 * @returns
 */

function useDynamicAddEventCenter(props, eventName, displayName) {
  var eventCenter = useMemo(
    function () {
      return props.config.getEventCenter();
    },
    [props.config]
  );
  useEffect(
    function () {
      var data = props.store.getData();
      var map = props.data.eventMap;
      var storeItem = data.block.find(function (v) {
        return v.id === props.data.id;
      });

      if (storeItem) {
        if (!map[eventName]) {
          //动态store加属性需要通过hook
          storeItem.eventMap[eventName] = {
            arr: [],
            displayName: displayName,
            userSelect: [],
          };
          eventCenter.manualUpdateMap(eventName, displayName);
        }
      }
    },
    [
      displayName,
      eventCenter,
      eventName,
      props.data.eventMap,
      props.data.id,
      props.store,
    ]
  );
  return;
}
/**
 *
 *
 * @export
 * @param {string} origin iframe地址
 * @param {UserConfig} config
 * @param {boolean} sign iframe onload
 * @param {string} [target]  iframeid 默认是yh-container-iframe
 * @return {*}
 */

function useIframePostMessage(origin, config, sign, target) {
  var store = config.getStore();
  var fn = useMemo(
    function () {
      config.iframeId = target || config.iframeId;
      config.iframeOrigin = origin;
      return function () {
        var data = {
          store: store.getData(),
          scaleState: config.getScaleState(),
          wrapperState: config.getWrapperMove().iframe,
        };
        postMessage(data, origin, target);
      };
    },
    [config, origin, store, target]
  );
  useEffect(
    function () {
      var unRegister = function unRegister() {};

      if (sign) {
        config.refreshIframe = fn;
        unRegister = store.subscribe(function () {
          // dom等无法传递
          // config由context带去，传递store和必要state
          fn();
        });
      }

      return function () {
        unRegister();
      };
    },
    [config.refreshIframe, fn, sign, store]
  );
  return [fn];
}
function useIframeHook(origin, config) {
  var _useState2 = useState(false),
    iframeReady = _useState2[0],
    setIframeReady = _useState2[1];

  var _useIframePostMessage = useIframePostMessage(origin, config, iframeReady),
    fnx = _useIframePostMessage[0];

  useEffect(
    function () {
      //@ts-ignore
      var fn = function fn(e) {
        if (e.data === "ready") {
          setIframeReady(true);
          fnx();
        }

        if (typeof e.data === "object") {
          if (e.data.type === "update") {
            if (e.data.column === "scale") {
              config.scaleState = e.data.data;
              config.getStore().forceUpdate();
              config.refreshIframe();
            }
          }
        }
      };

      window.addEventListener("message", fn);
      return function () {
        window.removeEventListener("message", fn);
      };
    },
    [config, fnx]
  );
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it =
    (typeof Symbol !== "undefined" && o[Symbol.iterator]) || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (
    Array.isArray(o) ||
    (it = _unsupportedIterableToArray(o)) ||
    (allowArrayLike && o && typeof o.length === "number")
  ) {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length)
        return {
          done: true,
        };
      return {
        done: false,
        value: o[i++],
      };
    };
  }

  throw new TypeError(
    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}

var innerDragState = {
  startX: 0,
  startY: 0,
  item: null,
  isDrag: false,
  ref: null,
  current: 0,
  lastClick: null,
  itemX: 0,
  itemY: 0,
};

var styles = {
  yhLeftrender: "index_yhLeftrender__r-HSc",
  leftco: "index_leftco__dCCWe",
  coitem: "index_coitem__6-dBJ",
  redbox: "index_redbox__T9xbI",
  "icon-checkbox": "index_icon-checkbox__-pvCD",
  "icon-tabs": "index_icon-tabs__mnhbN",
  "icon-jiantou": "index_icon-jiantou__bfGrv",
  yh_container: "index_yh_container__W34dN",
  yh_container_preview: "index_yh_container_preview__t6q3n",
  yh_block_focus: "index_yh_block_focus__4oPat",
  yhTempDiv: "index_yhTempDiv__MLoKM",
  resizepoint: "index_resizepoint__COZqK",
  l: "index_l__GR7nv",
  r: "index_r__p-75T",
  t: "index_t__jUGS0",
  b: "index_b__gAgsF",
  lt: "index_lt__iuqdj",
  lb: "index_lb__LWgSL",
  rb: "index_rb__hrQzS",
  rt: "index_rt__ltvIz",
  menuWidth: "index_menuWidth__CqEqC",
  menus: "index_menus__xP4bX",
  menuStyle: "index_menuStyle__ClQ2N",
  menu_footer: "index_menu_footer__rkrgT",
  rotate: "index_rotate__I5p1A",
  rotatereset: "index_rotatereset__fIeQC",
  yh_container_wrapper: "index_yh_container_wrapper__6e8jX",
  minwx: "index_minwx__QteEt",
};

/*

 * @Date: 2022-04-30 23:25:05
 * @LastEditors:
 * @LastEditTime: 2022-05-01 19:31:14
 * @FilePath: \lowcode\packages\lowcode-lib\src\core\selectRange\sat.ts
 */

function getCenter(item) {
  return {
    x: item.left + item.width / 2,
    y: item.top + item.height / 2,
  };
}

function revert(_ref) {
  var x = _ref.x,
    y = _ref.y;
  return {
    x: y,
    y: -x,
  };
}

function substract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y,
  };
}

function getSides(list) {
  var len = list.length;
  var res = [];

  for (var j = 1, pre = list[0]; j < len; j++) {
    var p = list[j];
    res.push(substract(p, pre));
    pre = p;
  }

  res.push(substract(list[0], list[len - 1]));
  return res;
}

function len(axis) {
  return Math.sqrt(axis.x * axis.x + axis.y * axis.y);
}

function dot(a, b) {
  return a.x * b.x + a.y * b.y;
}

function getProjection(axis, list) {
  var min = null;
  var max = null;

  for (var i = 0, l = list.length; i < l; i++) {
    var p = list[i];
    var pro = dot(p, axis) / len(axis);

    if (min === null || pro < min) {
      min = pro;
    }

    if (max === null || pro > max) {
      max = pro;
    }
  }

  return {
    min: min,
    max: max,
  };
}

function getOriginPoint(item) {
  var center = getCenter(item);
  var a = center.x;
  var b = center.y;
  var transfer = [
    {
      x: item.left,
      y: item.top,
    },
    {
      x: item.left + item.width,
      y: item.top,
    },
    {
      x: item.left + item.width,
      y: item.top + item.height,
    },
    {
      x: item.left,
      y: item.top + item.height,
    },
  ];
  var relativePoint = [];
  var rootPoint = transfer.map(function (v) {
    var x0 = v.x;
    var y0 = v.y;
    var rx =
      a +
      (x0 - a) * Math.cos(angleToRadian(item.rotate)) -
      (y0 - b) * Math.sin(angleToRadian(item.rotate));
    var ry =
      b +
      (x0 - a) * Math.sin(angleToRadian(item.rotate)) +
      (y0 - b) * Math.cos(angleToRadian(item.rotate));
    relativePoint.push({
      x: a - rx,
      y: b - ry,
    });
    return {
      x: rx,
      y: ry,
    };
  });
  return {
    rootPoint: rootPoint,
    relativePoint: relativePoint,
  };
}

function polygonsCollisionTest(A, B) {
  var resa = getOriginPoint(A);
  var resb = getOriginPoint(B);
  var sidesa = getSides(resa.relativePoint);
  var sidesb = getSides(resb.relativePoint);
  var sides = sidesa.concat(sidesb);

  for (var j = 0, l = sides.length; j < l; j++) {
    var axis = revert(sides[j]);
    var proA = getProjection(axis, resa.rootPoint),
      proB = getProjection(axis, resb.rootPoint);

    if (isOverlay(proA, proB)) {
      return false;
    }
  }

  return true;
}

function isOverlay(proA, proB) {
  var min, max;

  if (proA.min < proB.min) {
    min = proA.min;
  } else {
    min = proB.min;
  }

  if (proA.max > proB.max) {
    max = proA.max;
  } else {
    max = proB.max;
  }

  return proA.max - proA.min + (proB.max - proB.min) < max - min;
}

function Sat(v, select) {
  return polygonsCollisionTest(v, select);
}

var selectData = {
  selectDiv: null,
  posx: 0,
  posy: 0,
  startX: 0,
  startY: 0,
};
function selectRangeMouseDown(e, config) {
  if (!selectData.selectDiv) {
    selectData.selectDiv = document.createElement("div");
  }

  if (selectData.selectDiv) {
    selectData.startX = e.nativeEvent.offsetX;
    selectData.startY = e.nativeEvent.offsetY;
    selectData.posx = e.clientX;
    selectData.posy = e.clientY;
    selectData.selectDiv.className = styles.yhTempDiv;
    selectData.selectDiv.style.left = e.clientX + "px";
    selectData.selectDiv.style.top = e.clientY + "px";
    selectData.selectDiv.style.position = "fixed";
    document.body.appendChild(selectData.selectDiv);

    selectData.selectDiv.onmouseup = function (e) {
      return selectRangeMouseUp(e, config);
    };

    selectData.selectDiv.onmousemove = function (e) {
      return selectRangeMouseMove(e);
    };
  }
}
function selectRangeMouseMove(ev) {
  if (selectData.selectDiv) {
    selectData.selectDiv.style.left =
      Math.min(ev.clientX, selectData.posx) + "px";
    selectData.selectDiv.style.top =
      Math.min(ev.clientY, selectData.posy) + "px";
    selectData.selectDiv.style.width =
      Math.abs(selectData.posx - ev.clientX) + "px";
    selectData.selectDiv.style.height =
      Math.abs(selectData.posy - ev.clientY) + "px";
  }
}

function typeGuard(e) {
  return !(e instanceof Event);
}

function selectFocus(left, top, width, height, config) {
  if (width === 0 || height === 0) {
    return;
  }

  var store = config.getStore();
  var clonedata = deepCopy(store.getData());
  var focusState = config.getFocusState();
  var blocks = clonedata.block;
  var change = false;
  blocks.forEach(function (v) {
    var l = v.left;
    var t = v.top;
    var w = v.width;
    var h = v.height;

    if (
      typeof l === "number" &&
      typeof t === "number" &&
      typeof w === "number" &&
      typeof h === "number" &&
      v.canDrag === true
    ) {
      var curItem = {
        left: l,
        top: t,
        width: w,
        height: h,
        rotate: v.rotate.value,
      };
      var res = Sat(curItem, {
        left: left,
        width: width,
        height: height,
        top: top,
        rotate: 0,
      });

      if (res) {
        change = true;
        v.focus = true;
        focusState.blocks.push(v);
      }
    }
  });

  if (change) {
    store.setData(clonedata);
  }
}

function selectRangeMouseUp(e, config) {
  if (selectData.selectDiv) {
    // 这里需要判定区域
    // 如果是react触发 ，left和top就是起始值和终止值的最小值
    // 如果是原生触发，left和top是起始点减去其宽高
    var left = 0;
    var top = 0;
    var scaleState = config.getScaleState();

    var _selectData$selectDiv = selectData.selectDiv.getBoundingClientRect(),
      width = _selectData$selectDiv.width,
      height = _selectData$selectDiv.height;

    var scale = scaleState.value;
    var wwidth = width / scale;
    var wheight = height / scale;

    if (typeGuard(e)) {
      left = Math.min(e.nativeEvent.offsetX, selectData.startX);
      top = Math.min(e.nativeEvent.offsetY, selectData.startY);
    } else {
      left = selectData.startX - wwidth;
      top = selectData.startY - wheight;
    }

    selectFocus(left, top, wwidth, wheight, config);
    selectData.selectDiv.parentNode.removeChild(selectData.selectDiv);
    selectData.selectDiv = null;
  }
}

var ContextMenu = function ContextMenu() {
  var handleclick = function handleclick() {
    unmountContextMenu();
  };

  var forceUpdate = useState(0)[1];

  contextMenuState.forceUpdate = function () {
    forceUpdate(function (pre) {
      return pre + 1;
    });
  };

  return React.createElement(
    "div",
    {
      style: {
        left: contextMenuState.left,
        top: contextMenuState.top,
        position: "fixed",
        background: "rgb(24, 23, 23)",
      },
    },
    React.createElement(
      _Button,
      {
        onClick: function onClick() {
          handleclick();
        },
      },
      "\u8BF7\u53C2\u8003\u6587\u6863\u81EA\u5B9A\u4E49\u53F3\u952E\u83DC\u5355"
    )
  );
};

var contextMenuState = {
  left: 0,
  top: 0,
  menu: null,
  parent: null,
  contextMenu: /*#__PURE__*/ React.createElement(ContextMenu, null),
  unmountContextMenu: unmountContextMenu,
  observer: null,
  initLeft: 0,
  initTop: 0,
  forceUpdate: function forceUpdate() {},
  state: false,
};
function contextMenuEvent(e, ref, userConfig) {
  e.preventDefault();
  var scaleState = userConfig.getScaleState();
  contextMenuState.unmountContextMenu();
  var config = {
    attributes: true,
  };

  var callback = function callback(mutationsList) {
    if (isMac()) {
      //mac 有bug
      contextMenuState.unmountContextMenu();
    } else {
      for (
        var _iterator = _createForOfIteratorHelperLoose(mutationsList), _step;
        !(_step = _iterator()).done;

      ) {
        var mutation = _step.value;

        if (mutation.type === "attributes") {
          var scale = scaleState.value;
          var curLeft = parseFloat(mutation.target.style.left);
          var curTop = parseFloat(mutation.target.style.top);
          var diffL = (curLeft - contextMenuState.initLeft) * scale;
          var diffT = (curTop - contextMenuState.initTop) * scale;
          contextMenuState.initLeft = curLeft;
          contextMenuState.initTop = curTop;
          contextMenuState.left = contextMenuState.left + diffL;
          contextMenuState.top = contextMenuState.top + diffT;
          contextMenuState.forceUpdate();
        }
      }
    }
  };

  contextMenuState.state = true;
  contextMenuState.observer = new MutationObserver(callback);

  if (ref.current) {
    //记录初始值
    contextMenuState.initTop = parseFloat(ref.current.style.top);
    contextMenuState.initLeft = parseFloat(ref.current.style.left);
    contextMenuState.observer.observe(ref.current, config);
  }

  contextMenuState.left = e.clientX;
  contextMenuState.top = e.clientY;

  if (!contextMenuState.menu) {
    contextMenuState.menu = document.createElement("div");
    document.body && document.body.appendChild(contextMenuState.menu);
  }

  if (!contextMenuState.parent) {
    contextMenuState.parent = document.createElement("div");
  }

  contextMenuState.menu.appendChild(contextMenuState.parent);
  ReactDOM__default.render(
    contextMenuState.contextMenu,
    contextMenuState.parent
  );
}
function unmountContextMenu() {
  contextMenuState.state = false;

  if (contextMenuState.observer) {
    contextMenuState.observer.disconnect();
  }

  if (contextMenuState.menu && contextMenuState.parent) {
    unmountComponentAtNode(contextMenuState.parent);
    contextMenuState.menu.removeChild(contextMenuState.parent);
    contextMenuState.parent = null;
  }
}

function resolveRemove(config) {
  var store = config.getStore();
  var focusState = config.getFocusState();
  var clonedata = deepCopy(store.getData());
  var newBlock = clonedata.block.map(function (v) {
    v.focus = false;
    return v;
  });
  focusState.blocks = [];
  store.setData(
    _extends({}, clonedata, {
      block: newBlock,
    })
  );
  unmountContextMenu();
}

function innerRemoveFocus(config) {
  resolveRemove(config);
}
function containerFocusRemove(config) {
  var onMouseDown = function onMouseDown(e) {
    resolveRemove(config);

    if (!innerDragState.item) {
      selectRangeMouseDown(e, config);
    }
  };

  return {
    onMouseDown: onMouseDown,
  };
}
function blockFocus(e, item, config) {
  var store = config.getStore();
  var clonedata = deepCopy(store.getData());
  var focusState = config.getFocusState();

  if (e.shiftKey) {
    var newBlock = clonedata.block.map(function (v) {
      if (v.id === item.id) {
        v.focus = true;
        focusState.blocks.push(item);
      }

      return v;
    });
    store.setData(
      _extends({}, clonedata, {
        block: newBlock,
      })
    );
  } else {
    var blocks = [];

    var _newBlock = clonedata.block.map(function (v) {
      if (v.id === item.id) {
        blocks.push(item);
        v.focus = true;
      } else {
        v.focus = false;
      }

      return v;
    });

    focusState.blocks = blocks;
    store.setData(
      _extends({}, clonedata, {
        block: _newBlock,
      })
    );
  }
}

function createBlock(top, left, ComponentItem, config) {
  var _ComponentItem$initDa, _ComponentItem$initDa2, _ComponentItem$initDa3;

  innerRemoveFocus(config);
  return {
    id: createUid(ComponentItem.name),
    name: ComponentItem.name,
    top: top,
    left: left,
    zIndex: ComponentItem.initData.zIndex || 0,
    props: ComponentItem.initData.props || {},
    resize: ComponentItem.initData.resize || ComponentItem.resize,
    focus:
      (_ComponentItem$initDa = ComponentItem.initData.focus) != null
        ? _ComponentItem$initDa
        : true,
    position: ComponentItem.initData.position || "absolute",
    display: ComponentItem.initData.display || "block",
    width: ComponentItem.initData.width,
    height: ComponentItem.initData.height,
    syncList: ComponentItem.initData.syncList || [],
    canDrag:
      (_ComponentItem$initDa2 = ComponentItem.initData.canDrag) != null
        ? _ComponentItem$initDa2
        : true,
    canSee:
      (_ComponentItem$initDa3 = ComponentItem.initData.canSee) != null
        ? _ComponentItem$initDa3
        : true,
    eventMap: ComponentItem.initData.eventMap || {},
    functionList: ComponentItem.initData.functionList || [],
    animate: ComponentItem.initData.animate || [],
    fixed: ComponentItem.initData.fixed || false,
    rotate: ComponentItem.initData.rotate || {
      value: 0,
      canRotate: true,
    },
  };
}

var currentDrag = null;

function resolveDrop(config, item, e, x, y, dbclick) {
  if (dbclick === void 0) {
    dbclick = false;
  }

  var componentRegister = config.getComponentRegister();
  var store = config.getStore();
  var origin = componentRegister.getComp(item.component);

  if (!origin) {
    console.log(item.component, "wait the chunk pull compeletely and retry");
    return;
  }

  var target = e.target;
  var newblock; //如果有宽高，那么让其在中间

  var fixX = x;
  var fixY = y;

  if (origin.initData.width && typeof origin.initData.width === "number") {
    fixX = x - origin.initData.width / 2;
  }

  if (origin.initData.height && typeof origin.initData.height === "number") {
    fixY = y - origin.initData.height / 2;
  }

  if (!origin.needPosition) {
    var _origin$initData$top, _origin$initData$left;

    newblock = createBlock(
      (_origin$initData$top = origin.initData.top) != null
        ? _origin$initData$top
        : fixY,
      (_origin$initData$left = origin.initData.left) != null
        ? _origin$initData$left
        : fixX,
      origin,
      config
    );
  } else {
    if (dbclick) {
      newblock = createBlock(fixY, fixX, origin, config);
    } else {
      if (target.id !== "yh-container") {
        newblock = createBlock(
          fixY + target.offsetTop,
          fixX + target.offsetLeft,
          origin,
          config
        );
      } else {
        newblock = createBlock(fixY, fixX, origin, config);
      }
    }
  }

  var data = deepCopy(store.getData());
  data.block.push(newblock);
  store.setData(_extends({}, data));
}

var dragEventResolve = function dragEventResolve(item, config) {
  return {
    draggable: true,
    onDragStart: function onDragStart() {
      currentDrag = item;
    },
    onDragOver: function onDragOver(e) {
      e.preventDefault();
    },
    onDrop: function onDrop() {},
    onDragEnd: function onDragEnd() {},
    onDoubleClick: function onDoubleClick(e) {
      var container = config.getStore().getData().container;
      var x = container.width / 2;
      var y = container.height / 2;
      resolveDrop(config, item, e, x, y, true);
    },
  };
};
var containerDragResolve = function containerDragResolve(config) {
  return {
    onDragStart: function onDragStart() {},
    onDragOver: function onDragOver(e) {
      e.preventDefault();
    },
    onDrop: function onDrop(e) {
      var offsetX = Math.round(e.nativeEvent.offsetX);
      var offestY = Math.round(e.nativeEvent.offsetY); //drop后修改store，

      if (currentDrag) {
        resolveDrop(config, currentDrag, e, offsetX, offestY);
      }

      currentDrag = null;
    },
    onDragEnd: function onDragEnd() {},
  };
};

// 间隔距离执行吸附
var marklineConfig = {
  indent: 5,
  isAbsorb: true,
  mode: "normal",
  gridIndent: 50,
  resizeIndent: 0,
  marklineUnfocus: null,
  borderColor: "rgba( 33 , 150 , 243, 1 )",
  borderStyle: "dotted",
};

/*

 * @Date: 2021-07-23 20:31:30
 * @LastEditors:
 * @LastEditTime: 2021-07-26 11:12:02
 * @FilePath: \lowcode\packages\lowcode-lib\src\core\resizeHandler\state.ts
 */
var directionArr = ["lt", "t", "rt", "r", "rb", "b", "lb", "l"];
var resizeState = {
  startX: 0,
  startY: 0,
  item: null,
  isResize: false,
  direction: "b",
  ref: null,
  current: 0,
  currentTarget: null,
  symmetricPoint: {
    x: 0,
    y: 0,
  },
  curPosition: {
    x: 0,
    y: 0,
  },
};

/*

 * @Date: 2021-07-22 16:55:10
 * @LastEditors:
 * @LastEditTime: 2021-07-26 14:01:14
 * @FilePath: \lowcode\packages\lowcode-lib\src\core\resizeHandler\calcWithRotate.ts
 */

function getCenterPoint(p1, p2) {
  return {
    x: p1.x + (p2.x - p1.x) / 2,
    y: p1.y + (p2.y - p1.y) / 2,
  };
}

function calculateRotatedPointCoordinate(point, center, rotate) {
  return {
    x:
      (point.x - center.x) * Math.cos(angleToRadian(rotate)) -
      (point.y - center.y) * Math.sin(angleToRadian(rotate)) +
      center.x,
    y:
      (point.x - center.x) * Math.sin(angleToRadian(rotate)) +
      (point.y - center.y) * Math.cos(angleToRadian(rotate)) +
      center.y,
  };
}

function getRect(direction, item, rotate, curPositon, symmetricPoint, itemWH) {
  switch (direction) {
    case "lt":
      calculateTopLeft(item, rotate, curPositon, symmetricPoint);
      break;

    case "r":
      calculateRight(item, rotate, curPositon, symmetricPoint, itemWH);
      break;

    case "b":
      calculateBottom(item, rotate, curPositon, symmetricPoint, itemWH);
      break;

    case "l":
      calculateLeft(item, rotate, curPositon, symmetricPoint, itemWH);
      break;

    case "t":
      calculateTop(item, rotate, curPositon, symmetricPoint, itemWH);
      break;

    case "rb":
      calculateBottomRight(item, rotate, curPositon, symmetricPoint);
      break;

    case "rt":
      calculateTopRight(item, rotate, curPositon, symmetricPoint);
      break;

    case "lb":
      calculateBottomLeft(item, rotate, curPositon, symmetricPoint);
      break;
  }
}

function calculateTopLeft(item, rotate, curPositon, symmetricPoint) {
  var newCenterPoint = getCenterPoint(curPositon, symmetricPoint);
  var newTopLeftPoint = calculateRotatedPointCoordinate(
    curPositon,
    newCenterPoint,
    -rotate
  );
  var newBottomRightPoint = calculateRotatedPointCoordinate(
    symmetricPoint,
    newCenterPoint,
    -rotate
  );
  var newWidth = newBottomRightPoint.x - newTopLeftPoint.x;
  var newHeight = newBottomRightPoint.y - newTopLeftPoint.y;

  if (newWidth > 0 && newHeight > 0) {
    item.width = Math.round(newWidth);
    item.height = Math.round(newHeight);
    item.left = Math.round(newTopLeftPoint.x);
    item.top = Math.round(newTopLeftPoint.y);
  }
}

function calculateTopRight(item, rotate, curPositon, symmetricPoint) {
  var newCenterPoint = getCenterPoint(curPositon, symmetricPoint);
  var newTopRightPoint = calculateRotatedPointCoordinate(
    curPositon,
    newCenterPoint,
    -rotate
  );
  var newBottomLeftPoint = calculateRotatedPointCoordinate(
    symmetricPoint,
    newCenterPoint,
    -rotate
  );
  var newWidth = newTopRightPoint.x - newBottomLeftPoint.x;
  var newHeight = newBottomLeftPoint.y - newTopRightPoint.y;

  if (newWidth > 0 && newHeight > 0) {
    item.width = Math.round(newWidth);
    item.height = Math.round(newHeight);
    item.left = Math.round(newBottomLeftPoint.x);
    item.top = Math.round(newTopRightPoint.y);
  }
}

function calculateBottomRight(item, rotate, curPositon, symmetricPoint) {
  var newCenterPoint = getCenterPoint(curPositon, symmetricPoint);
  var newTopLeftPoint = calculateRotatedPointCoordinate(
    symmetricPoint,
    newCenterPoint,
    -rotate
  );
  var newBottomRightPoint = calculateRotatedPointCoordinate(
    curPositon,
    newCenterPoint,
    -rotate
  );
  var newWidth = newBottomRightPoint.x - newTopLeftPoint.x;
  var newHeight = newBottomRightPoint.y - newTopLeftPoint.y;

  if (newWidth > 0 && newHeight > 0) {
    item.width = Math.round(newWidth);
    item.height = Math.round(newHeight);
    item.left = Math.round(newTopLeftPoint.x);
    item.top = Math.round(newTopLeftPoint.y);
  }
}

function calculateBottomLeft(item, rotate, curPositon, symmetricPoint) {
  var newCenterPoint = getCenterPoint(curPositon, symmetricPoint);
  var newTopRightPoint = calculateRotatedPointCoordinate(
    symmetricPoint,
    newCenterPoint,
    -rotate
  );
  var newBottomLeftPoint = calculateRotatedPointCoordinate(
    curPositon,
    newCenterPoint,
    -rotate
  );
  var newWidth = newTopRightPoint.x - newBottomLeftPoint.x;
  var newHeight = newBottomLeftPoint.y - newTopRightPoint.y;

  if (newWidth > 0 && newHeight > 0) {
    item.width = Math.round(newWidth);
    item.height = Math.round(newHeight);
    item.left = Math.round(newBottomLeftPoint.x);
    item.top = Math.round(newTopRightPoint.y);
  }
}

function calculateTop(item, rotate, curPositon, symmetricPoint, itemWH) {
  var curPoint = resizeState.curPosition;
  var rotatedcurPositon = calculateRotatedPointCoordinate(
    curPositon,
    curPoint,
    -rotate
  );
  var rotatedTopMiddlePoint = calculateRotatedPointCoordinate(
    {
      x: curPoint.x,
      y: rotatedcurPositon.y,
    },
    curPoint,
    rotate
  );
  var newHeight = Math.sqrt(
    Math.pow(rotatedTopMiddlePoint.x - symmetricPoint.x, 2) +
      Math.pow(rotatedTopMiddlePoint.y - symmetricPoint.y, 2)
  );

  if (newHeight > 0) {
    var newCenter = {
      x:
        rotatedTopMiddlePoint.x -
        (rotatedTopMiddlePoint.x - symmetricPoint.x) / 2,
      y:
        rotatedTopMiddlePoint.y +
        (symmetricPoint.y - rotatedTopMiddlePoint.y) / 2,
    };
    var width = typeof item.width === "number" ? item.width : itemWH.width;
    item.width = width;
    item.height = Math.round(newHeight);
    item.top = Math.round(newCenter.y - newHeight / 2);
    item.left = Math.round(newCenter.x - width / 2);
  }
}

function calculateRight(item, rotate, curPositon, symmetricPoint, itemWH) {
  var curPoint = resizeState.curPosition;
  var rotatedcurPositon = calculateRotatedPointCoordinate(
    curPositon,
    curPoint,
    -rotate
  );
  var rotatedRightMiddlePoint = calculateRotatedPointCoordinate(
    {
      x: rotatedcurPositon.x,
      y: curPoint.y,
    },
    curPoint,
    rotate
  );
  var newWidth = Math.sqrt(
    Math.pow(rotatedRightMiddlePoint.x - symmetricPoint.x, 2) +
      Math.pow(rotatedRightMiddlePoint.y - symmetricPoint.y, 2)
  );

  if (newWidth > 0) {
    var newCenter = {
      x:
        rotatedRightMiddlePoint.x -
        (rotatedRightMiddlePoint.x - symmetricPoint.x) / 2,
      y:
        rotatedRightMiddlePoint.y +
        (symmetricPoint.y - rotatedRightMiddlePoint.y) / 2,
    };
    var height = typeof item.height === "number" ? item.height : itemWH.height;
    item.height = height;
    item.width = Math.round(newWidth);
    item.top = Math.round(newCenter.y - height / 2);
    item.left = Math.round(newCenter.x - newWidth / 2);
  }
}

function calculateBottom(item, rotate, curPositon, symmetricPoint, itemWH) {
  var curPoint = resizeState.curPosition;
  var rotatedcurPositon = calculateRotatedPointCoordinate(
    curPositon,
    curPoint,
    -rotate
  );
  var rotatedBottomMiddlePoint = calculateRotatedPointCoordinate(
    {
      x: curPoint.x,
      y: rotatedcurPositon.y,
    },
    curPoint,
    rotate
  );
  var newHeight = Math.sqrt(
    Math.pow(rotatedBottomMiddlePoint.x - symmetricPoint.x, 2) +
      Math.pow(rotatedBottomMiddlePoint.y - symmetricPoint.y, 2)
  );

  if (newHeight > 0) {
    var newCenter = {
      x:
        rotatedBottomMiddlePoint.x -
        (rotatedBottomMiddlePoint.x - symmetricPoint.x) / 2,
      y:
        rotatedBottomMiddlePoint.y +
        (symmetricPoint.y - rotatedBottomMiddlePoint.y) / 2,
    };
    var width = typeof item.width === "number" ? item.width : itemWH.width;
    item.width = width;
    item.height = Math.round(newHeight);
    item.top = Math.round(newCenter.y - newHeight / 2);
    item.left = Math.round(newCenter.x - width / 2);
  }
}

function calculateLeft(item, rotate, curPositon, symmetricPoint, itemWH) {
  var curPoint = resizeState.curPosition;
  var rotatedcurPositon = calculateRotatedPointCoordinate(
    curPositon,
    curPoint,
    -rotate
  );
  var rotatedLeftMiddlePoint = calculateRotatedPointCoordinate(
    {
      x: rotatedcurPositon.x,
      y: curPoint.y,
    },
    curPoint,
    rotate
  );
  var newWidth = Math.sqrt(
    Math.pow(rotatedLeftMiddlePoint.x - symmetricPoint.x, 2) +
      Math.pow(rotatedLeftMiddlePoint.y - symmetricPoint.y, 2)
  );

  if (newWidth > 0) {
    var newCenter = {
      x:
        rotatedLeftMiddlePoint.x -
        (rotatedLeftMiddlePoint.x - symmetricPoint.x) / 2,
      y:
        rotatedLeftMiddlePoint.y +
        (symmetricPoint.y - rotatedLeftMiddlePoint.y) / 2,
    };
    var height = typeof item.height === "number" ? item.height : itemWH.height;
    item.height = height;
    item.width = Math.round(newWidth);
    item.top = Math.round(newCenter.y - height / 2);
    item.left = Math.round(newCenter.x - newWidth / 2);
  }
}

/*

 * @Date: 2021-07-26 10:55:23
 * @LastEditors:
 * @LastEditTime: 2021-07-26 11:12:23
 * @FilePath: \lowcode\packages\lowcode-lib\src\core\resizeHandler\cursor.ts
 */
var initialAngle = {
  lt: 0,
  t: 45,
  rt: 90,
  r: 135,
  rb: 180,
  b: 225,
  lb: 270,
  l: 315,
};
var angleToCursor = [
  {
    start: 338,
    end: 23,
    cursor: "nw",
  },
  {
    start: 23,
    end: 68,
    cursor: "n",
  },
  {
    start: 68,
    end: 113,
    cursor: "ne",
  },
  {
    start: 113,
    end: 158,
    cursor: "e",
  },
  {
    start: 158,
    end: 203,
    cursor: "se",
  },
  {
    start: 203,
    end: 248,
    cursor: "s",
  },
  {
    start: 248,
    end: 293,
    cursor: "sw",
  },
  {
    start: 293,
    end: 338,
    cursor: "w",
  },
];

function mod360(deg) {
  return (deg + 360) % 360;
}

function getCursor(curRotate) {
  var rotate = mod360(curRotate);
  var result = {};
  var lastMatchIndex = -1;
  directionArr.forEach(function (point) {
    var angle = mod360(initialAngle[point] + rotate);
    var len = angleToCursor.length;

    while (true) {
      lastMatchIndex = (lastMatchIndex + 1) % len;
      var angleLimit = angleToCursor[lastMatchIndex];

      if (angle < 23 || angle >= 338) {
        result[point] = "nw-resize";
        return;
      }

      if (angleLimit.start <= angle && angle < angleLimit.end) {
        result[point] = angleLimit.cursor + "-resize";
        return;
      }
    }
  });
  return result;
}

var _onMouseDown = function onMouseDown(e, direction, item, ref, config) {
  e.stopPropagation();
  var store = config.getStore();
  resizeState.isResize = true;
  resizeState.item = item;
  resizeState.startX = e.clientX;
  resizeState.startY = e.clientY;
  resizeState.direction = direction;
  resizeState.ref = ref;
  resizeState.current = store.getIndex();
  resizeState.currentTarget = e.nativeEvent.target;
  var curDiv = resizeState.ref.current;
  var container = getContainer();

  if (!container) {
    return;
  }

  if (curDiv && ref.current) {
    var containerRect = container.getBoundingClientRect();
    var scale = config.getScaleState().value;
    var centerX = curDiv.offsetLeft + curDiv.offsetWidth / 2;
    var centerY = curDiv.offsetTop + curDiv.offsetHeight / 2;
    var poffsetLeft =
      resizeState.currentTarget.getBoundingClientRect().left -
      containerRect.left;
    var poffsetTop =
      resizeState.currentTarget.getBoundingClientRect().top - containerRect.top; //点相对于画布位置 未缩放

    var curPosition = {
      x: poffsetLeft / scale,
      y: poffsetTop / scale,
    };
    resizeState.symmetricPoint = {
      x: centerX - (curPosition.x - centerX),
      y: centerY - (curPosition.y - centerY),
    };
    resizeState.curPosition = curPosition;
  }
};

var resizerMouseUp = function resizerMouseUp(config) {
  resizeState.isResize = false;
  resizeState.item = null;
  var store = config.getStore();

  if (resizeState.current) {
    var endindex = store.getIndex();
    store
      .getStoreList()
      .splice(resizeState.current, endindex - resizeState.current);
    store.setIndex(resizeState.current);
  }

  resizeState.current = 0;
};
var resizerMouseMove = function resizerMouseMove(e, config) {
  var _resizeState$ref;

  //根据direction修改位置
  var scaleState = config.getScaleState();
  var store = config.getStore();

  if (
    resizeState.isResize &&
    resizeState.item &&
    (_resizeState$ref = resizeState.ref) != null &&
    _resizeState$ref.current &&
    resizeState.currentTarget
  ) {
    var moveX = e.clientX,
      moveY = e.clientY;
    var scale = scaleState.value;
    var container = getContainer();

    if (!container) {
      return;
    }

    var containerRect = container.getBoundingClientRect();
    var rotate = resizeState.item.rotate.value;
    var movePoint = {
      x: (moveX - containerRect.left) / scale,
      y: (moveY - containerRect.top) / scale,
    };
    var itemRef = resizeState.ref.current.getBoundingClientRect();
    var itemWH = {
      width: itemRef.width,
      height: itemRef.height,
    };
    var symmetricPoint = resizeState.symmetricPoint;
    var clonedata = deepCopy(store.getData());
    var id = resizeState.item.id;
    var newblock = clonedata.block.map(function (v) {
      if (v.id === id) {
        getRect(
          resizeState.direction,
          v,
          rotate,
          movePoint,
          symmetricPoint,
          itemWH
        );
      }

      return v;
    });
    resizeState.startX = moveX;
    resizeState.startY = moveY;
    store.setData(
      _extends({}, clonedata, {
        block: newblock,
      })
    );
  }
};
function BlockResizer(props) {
  var rotate = props.data.rotate.value;
  var cursorMap = getCursor(rotate);
  var render = useMemo(
    function () {
      if (props.data.focus && props.data.resize && props.data.canDrag) {
        return React.createElement(
          React.Fragment,
          null,
          directionArr.map(function (v) {
            return React.createElement("div", {
              style: {
                cursor: cursorMap[v],
              },
              key: v,
              className: classnames(styles.resizepoint, styles[v]),
              onMouseDown: function onMouseDown(e) {
                _onMouseDown(e, v, props.data, props.rect, props.config);
              },
              onMouseUp: function onMouseUp() {
                resizerMouseUp(props.config);
              },
            });
          })
        );
      } else {
        return null;
      }
    },
    [cursorMap, props.config, props.data, props.rect]
  );
  return React.createElement(React.Fragment, null, render);
}

/*

 * @Date: 2021-09-27 20:56:21
 * @LastEditors:
 * @LastEditTime: 2021-09-27 20:57:01
 * @FilePath: \lowcode\packages\lowcode-lib\src\components\control\state.ts
 */
var moveState = {
  startX: 0,
  startY: 0,
  fn: function fn() {},
  isMove: false,
};
var mouseUp = function mouseUp() {
  if (moveState.isMove) {
    moveState.isMove = false;
  }
};
var controlMouseMove = function controlMouseMove(e) {
  if (moveState.isMove) {
    var diffx = e.clientX - moveState.startX;
    var diffy = e.clientY - moveState.startY;
    var setXy = moveState.fn;
    if (setXy)
      setXy(function (pre) {
        return {
          x: pre.x + diffx,
          y: pre.y + diffy,
        };
      });
    moveState.startX = e.clientX;
    moveState.startY = e.clientY;
  }
};

/*

 * @Date: 2021-03-09 15:19:36
 * @LastEditors:
 * @LastEditTime: 2021-09-27 20:58:13
 * @FilePath: \lowcode\packages\lowcode-lib\src\core\resizeHandler\containerResizer.ts
 */
var containerState = {
  isDrag: false,
  startY: 0,
  startIndex: 0,
  minHeight: 0,
};
var containerResizer = {
  onMousedown: function onMousedown(e, config) {
    var store = config.getStore();
    containerState.isDrag = true;
    containerState.startY = e.clientY;
    containerState.startIndex = store.getIndex();
  },
  onMouseMove: function onMouseMove(e, config) {
    if (containerState.isDrag) {
      var scaleState = config.getScaleState();
      var store = config.getStore();
      var scale = scaleState.value;
      var diff = ((e.clientY - containerState.startY) / scale) * 2; //可以直接使用movementy

      var clonedata = deepCopy(store.getData());
      var height = clonedata.container.height;
      var tmpHeight = Math.round(
        height + diff < containerState.minHeight
          ? containerState.minHeight
          : height + diff
      );
      clonedata.container.height = tmpHeight;
      store.setData(clonedata);
      containerState.startY = e.clientY;
    }

    controlMouseMove(e);
  },
  onMouseUp: function onMouseUp(config) {
    if (containerState.isDrag) {
      var store = config.getStore();
      containerState.isDrag = false;
      var endIndex = store.getIndex();
      store
        .getStoreList()
        .splice(
          containerState.startIndex,
          endIndex - containerState.startIndex
        );
      store.setIndex(containerState.startIndex);
    }
  },
};

var wrapperMoveState = {
  isDrag: false,
  startX: 0,
  startY: 0,
  needX: 0,
  needY: 0,
  ref: null,
};
var wrapperEvent = function wrapperEvent(ref, config) {
  var scale = config.getScaleState().value;
  var store = config.getStore();
  return {
    onMouseDown: function onMouseDown(e) {
      // e.preventDefault();// 不能使用preventDefault 否则弹窗输入框焦点无法触发
      contextMenuState.unmountContextMenu();

      if (e.target !== ref.current);
      else {
        wrapperMoveState.isDrag = true;
        wrapperMoveState.startX = e.clientX;
        wrapperMoveState.startY = e.clientY;

        if (ref.current) {
          ref.current.style.cursor = "grab";
          wrapperMoveState.ref = ref;
        }
      }
    },
    onMouseMove: function onMouseMove(e) {
      //e.preventDefault();
      if (wrapperMoveState.isDrag) {
        var diffX = e.clientX - wrapperMoveState.startX;
        var diffY = e.clientY - wrapperMoveState.startY;
        wrapperMoveState.needX = wrapperMoveState.needX + diffX / scale;
        wrapperMoveState.needY = wrapperMoveState.needY + diffY / scale;
        wrapperMoveState.startX = e.clientX;
        wrapperMoveState.startY = e.clientY;
        store.forceUpdate();
      }

      containerResizer.onMouseMove(e, config);
    },
  };
};
var wrapperMoveMouseUp = function wrapperMoveMouseUp(config) {
  containerResizer.onMouseUp(config);
  wrapperMoveState.isDrag = false;
};

var wrapperMoveState$1 = {
  isDrag: false,
  startX: 0,
  startY: 0,
  needX: 0,
  needY: 0,
};
var wrapperRefState = {
  ref: null,
};
var wrapperEvent$1 = function wrapperEvent(ref, config) {
  var store = config.getStore();
  return {
    onMouseDown: function onMouseDown(e) {
      // e.preventDefault();// 不能使用preventDefault 否则弹窗输入框焦点无法触发
      contextMenuState.unmountContextMenu();

      if (e.target !== ref.current);
      else {
        wrapperMoveState$1.isDrag = true;
        wrapperMoveState$1.startX = e.clientX;
        wrapperMoveState$1.startY = e.clientY;

        if (ref.current) {
          ref.current.style.cursor = "grab";
          wrapperRefState.ref = ref;
        }
      }
    },
    onMouseMove: function onMouseMove(e) {
      //e.preventDefault();
      if (wrapperMoveState$1.isDrag) {
        var diffX = e.clientX - wrapperMoveState$1.startX;
        var diffY = e.clientY - wrapperMoveState$1.startY;
        wrapperMoveState$1.needX = wrapperMoveState$1.needX + diffX;
        wrapperMoveState$1.needY = wrapperMoveState$1.needY + diffY;
        wrapperMoveState$1.startX = e.clientX;
        wrapperMoveState$1.startY = e.clientY;
        store.forceUpdate();
      }

      containerResizer.onMouseMove(e, config);
    },
  };
};
var wrapperMoveMouseUp$1 = function wrapperMoveMouseUp(config) {
  if (wrapperRefState.ref && wrapperRefState.ref.current) {
    wrapperRefState.ref.current.style.cursor = "default";
  }

  containerResizer.onMouseUp(config);
  wrapperMoveState$1.isDrag = false;
};

var rotateState = {
  startX: 0,
  startY: 0,
  item: null,
  isRotate: false,
  ref: null,
  current: 0,
};

var _onMouseDown$1 = function onMouseDown(e, item, ref, config) {
  e.stopPropagation();
  var store = config.getStore();
  rotateState.isRotate = true;
  rotateState.item = item;
  rotateState.startX = e.clientX;
  rotateState.startY = e.clientY;
  rotateState.ref = ref;
  rotateState.current = store.getIndex();
};

var rotateMouseMove = function rotateMouseMove(e, config) {
  var _rotateState$ref;

  var store = config.getStore();

  if (
    rotateState.isRotate &&
    rotateState.item &&
    (_rotateState$ref = rotateState.ref) != null &&
    _rotateState$ref.current
  ) {
    var moveX = e.clientX,
      moveY = e.clientY;
    var startX = rotateState.startX,
      startY = rotateState.startY;
    var rect = rotateState.ref.current.getBoundingClientRect();
    var centerX = rect.left + rect.width / 2;
    var centerY = rect.top + rect.height / 2;
    var rotateDegreeBefore =
      Math.atan2(startY - centerY, startX - centerX) / (Math.PI / 180);
    var rotateDegreeAfter =
      Math.atan2(moveY - centerY, moveX - centerX) / (Math.PI / 180);
    var startRotate = rotateState.item.rotate.value;
    var frotate = startRotate + rotateDegreeAfter - rotateDegreeBefore;
    var clonedata = deepCopy(store.getData());
    var id = rotateState.item.id;
    var newblock = clonedata.block.map(function (v) {
      if (v.id === id) {
        v.rotate.value = frotate;
      }

      return v;
    });
    store.setData(
      _extends({}, clonedata, {
        block: newblock,
      })
    );
  }
};
var rotateMouseUp = function rotateMouseUp(config) {
  rotateState.isRotate = false;
  rotateState.item = null;
  var store = config.getStore();

  if (rotateState.current) {
    var endindex = store.getIndex();
    store
      .getStoreList()
      .splice(rotateState.current, endindex - rotateState.current);
    store.setIndex(rotateState.current);
  }

  rotateState.current = 0;
};
function RotateResizer(props) {
  var render = useMemo(
    function () {
      if (
        props.data.focus &&
        props.data.rotate.canRotate &&
        props.data.canDrag
      ) {
        return React.createElement(
          "div",
          {
            onMouseDown: function onMouseDown(e) {
              _onMouseDown$1(e, props.data, props.rect, props.config);
            },
            className: styles.rotate,
            title: "rotate",
          },
          React.createElement(ReloadOutlined, {
            style: {
              color: "#2196f3",
            },
          })
        );
      } else {
        return null;
      }
    },
    [props.config, props.data, props.rect]
  );
  return React.createElement(React.Fragment, null, render);
}

var resetResolve = function resetResolve(e, item, config) {
  e.stopPropagation();
  var store = config.getStore();
  var clonedata = deepCopy(store.getData());
  clonedata.block.forEach(function (v) {
    if (v.id === item.id) {
      v.rotate.value = 0;
    }
  });
  store.setData(clonedata);
};

function RotateReset(props) {
  var render = useMemo(
    function () {
      if (
        props.data.focus &&
        props.data.rotate.canRotate &&
        props.data.canDrag
      ) {
        return React.createElement(
          "div",
          {
            onMouseDown: function onMouseDown(e) {
              resetResolve(e, props.data, props.config);
            },
            className: styles.rotatereset,
            title: "rotate reset",
          },
          React.createElement(RotateLeftOutlined, null)
        );
      } else {
        return null;
      }
    },
    [props.config, props.data]
  );
  return React.createElement(React.Fragment, null, render);
}

var marklineState = {
  cache: null,
  sortLeft: null,
  sortTop: null,
  sortRight: null,
  sortBottom: null,
};

var iter = 500;
var itemHeight = 25;
var interval = 19;
var diff = 6;
var square = 2.5;
var times = interval + 1;
var moveState$1 = {
  startX: 0,
  isMove: false,
  uid: "",
};
var currentMoveItemId = "";
var resizeState$1 = {
  startX: 0,
  isMove: false,
  uid: "",
  left: true,
};

var resizeMouseDown = function resizeMouseDown(e, v, left) {
  e.stopPropagation();
  resizeState$1.startX = e.clientX;
  resizeState$1.uid = v.uid;
  resizeState$1.isMove = true;
  resizeState$1.left = left;
};

var TimeLineItemMouseMove = function TimeLineItemMouseMove(
  e,
  animate,
  forceUpdate
) {
  if (moveState$1.isMove) {
    //修改源属性
    var _diff = e.clientX - moveState$1.startX;

    animate.forEach(function (v) {
      if (v.uid === moveState$1.uid) {
        var f = parseFloat((v.animationDelay + _diff / times).toFixed(1));
        v.animationDelay = f < 0 ? 0 : f;
        forceUpdate(function (p) {
          return p + 1;
        });
      }
    });
    moveState$1.startX = e.clientX;
  } else if (resizeState$1.isMove) {
    var _diff2 = e.clientX - resizeState$1.startX;

    if (resizeState$1.left) {
      animate.forEach(function (v) {
        if (v.uid === resizeState$1.uid) {
          var count =
            v.animationIterationCount === "infinite"
              ? 500
              : parseInt(v.animationIterationCount);
          var f2 = parseFloat((v.animationDelay + _diff2 / times).toFixed(1));
          var f = parseFloat(
            (v.animationDuration - (f2 - v.animationDelay) / count).toFixed(1)
          );
          v.animationDuration = f2 < 0 ? v.animationDuration : f < 0 ? 0 : f;
          v.animationDelay = f2 < 0 ? 0 : f2;
          forceUpdate(function (p) {
            return p + 1;
          });
        }
      });
    } else {
      animate.forEach(function (v) {
        if (v.uid === resizeState$1.uid) {
          var count =
            v.animationIterationCount === "infinite"
              ? 500
              : parseInt(v.animationIterationCount);
          var f = parseFloat(
            (v.animationDuration + _diff2 / count / times).toFixed(1)
          );
          v.animationDuration = f < 0 ? 0 : f;
          forceUpdate(function (p) {
            return p + 1;
          });
        }
      });
    }

    resizeState$1.startX = e.clientX;
  }
};
var TimeLineItemMouseOver = function TimeLineItemMouseOver() {
  moveState$1.isMove = false;
  moveState$1.startX = 0;
  moveState$1.uid = "";
  resizeState$1.isMove = false;
  resizeState$1.startX = 0;
  resizeState$1.uid = "";
};
var resetCurrentMoveItemId = function resetCurrentMoveItemId() {
  currentMoveItemId = "";
};
var commonCss = {
  transform: "rotate(45deg)",
  height: square * 2,
  width: square * 2,
  position: "absolute",
  background: "rgba(0, 0, 0, 0.85)",
  top: (itemHeight - diff) / 2 - square,
  cursor: "e-resize",
};
var bgColorCache = {};
function TimeLineItem(props) {
  return React.createElement(
    React.Fragment,
    null,
    props.animate.map(function (v) {
      var left = v.animationDelay * times + interval;
      var repeat =
        v.animationIterationCount === "infinite"
          ? iter
          : parseInt(v.animationIterationCount);
      var width = v.animationDuration * times * repeat;

      if (!bgColorCache[v.uid]) {
        bgColorCache[v.uid] = randomColor();
      }

      return React.createElement(
        "div",
        {
          key: v.uid,
          onMouseDown: function onMouseDown(e) {
            moveState$1.startX = e.clientX;
            moveState$1.uid = v.uid;
            moveState$1.isMove = true;
            currentMoveItemId = v.uid;
          },
          className: "yh-timeline-item-mainblock",
          style: {
            position: "absolute",
            top: diff / 2,
            left: left,
            width: width,
            height: itemHeight - diff,
            background: bgColorCache[v.uid],
            zIndex: 1,
            cursor: "move",
            borderRadius: "4px",
            opacity: v.uid === currentMoveItemId ? 1 : 0.7,
          },
        },
        v.uid === currentMoveItemId &&
          React.createElement(
            React.Fragment,
            null,
            React.createElement("div", {
              className: "yh-timeline-item-left",
              style: _extends({}, commonCss, {
                left: -square,
              }),
              onMouseDown: function onMouseDown(e) {
                resizeMouseDown(e, v, true);
              },
            }),
            React.createElement("div", {
              className: "yh-timeline-item-right",
              style: _extends({}, commonCss, {
                right: -square,
              }),
              onMouseDown: function onMouseDown(e) {
                resizeMouseDown(e, v, false);
              },
            })
          )
      );
    })
  );
}

function createCommonjsModule(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var runtime = (function (exports) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
      return obj[key];
    }
    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return (obj[key] = value);
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator =
        outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (
      NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)
    ) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp =
      (GeneratorFunctionPrototype.prototype =
      Generator.prototype =
        Object.create(IteratorPrototype));
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      toStringTagSymbol,
      "GeneratorFunction"
    );

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
            // For the native GeneratorFunction constructor, the best we can
            // do is to check its .name property.
            (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function (arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (
            value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")
          ) {
            return PromiseImpl.resolve(value.__await).then(
              function (value) {
                invoke("next", value, resolve, reject);
              },
              function (err) {
                invoke("throw", err, resolve, reject);
              }
            );
          }

          return PromiseImpl.resolve(value).then(
            function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            },
            function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            }
          );
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return (previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise
            ? previousPromise.then(
                callInvokeWithMethodAndArg,
                // Avoid propagating failures to Promises returned by later
                // invocations of the iterator.
                callInvokeWithMethodAndArg
              )
            : callInvokeWithMethodAndArg());
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    });
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function (
      innerFn,
      outerFn,
      self,
      tryLocsList,
      PromiseImpl
    ) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;

      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList),
        PromiseImpl
      );

      return exports.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done,
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method"
          );
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    define(Gp, toStringTagSymbol, "Generator");

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function () {
      return this;
    });

    define(Gp, "toString", function () {
      return "[object Generator]";
    });

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined$1;
              next.done = true;

              return next;
            };

          return (next.next = next);
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    exports.values = values;

    function doneResult() {
      return { value: undefined$1, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function (skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined$1;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (
              name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))
            ) {
              this[name] = undefined$1;
            }
          }
        }
      },

      stop: function () {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function (exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (
            entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc
          ) {
            var finallyEntry = entry;
            break;
          }
        }

        if (
          finallyEntry &&
          (type === "break" || type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc
        ) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function (record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      catch: function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function (iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc,
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      },
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
  })(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports
  );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") {
      globalThis.regeneratorRuntime = runtime;
    } else {
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  }
});

/*

 * @Date: 2021-08-27 10:20:23
 * @LastEditors:
 * @LastEditTime: 2022-04-29 23:23:13
 * @FilePath: \lowcode\packages\lowcode-lib\src\locale\en.ts
 */
var en = {
  "timeline.name": "Component name",
  "contorl.popup.absolute":
    "Are you sure to change to absolutely positioned element",
  "contorl.popup.static": "Are you sure to change to static positioned element",
  "contorl.absolute": "Change to absolute",
  "contorl.static": "Change to static",
  "control.popup.delete": "Are you sure to delete",
  "control.delete": "Delete",
  "control.focus": "Focus",
  "control.no-component": "No components",
  "modal.new": "New modal",
  "modal.control": "Control modal",
  "modal.popup.exit":
    "Please exit the edit modal and open the configuration again",
  "modal.popup.edit": "Switch to this modal and edit it?",
  "modal.popup.save": "Please save the modal and edit another modal",
  "modal.popup.notfond": "Can not found {name} modal",
  "modal.popup.repeat": "Duplicate name {name} already exists",
  "modal.popup.remove": "Please save the modal before deleting",
  "modal.popup.nomodal": "No modal",
  "modal.popup.name": "Please enter modal name",
  "modal.name": "Modal name",
  "modal.control.remove": "Delete click to delete the effect of the modal",
  edit: "Edit",
  yes: "Ok",
  no: "Cancel",
  "right.noprops": "No properties have been configured",
  "right.global": "Global config",
  "right.containerheight": "Container height",
  "right.containerwidth": "Container width",
  "right.containerColor": "Container background color",
  "right.bodyColor": "Body background color",
  "right.fontSize": "Container font size",
  "right.lineHeight": "Container line height",
  title: "Title",
  description: "Description",
  "system.setting": "System Settings",
  "settings.openabsorb": "Turn on adsorption",
  on: "on",
  off: "off",
  "settings.absorbindent": "Adsorption spacing",
  "settings.min": "Canvas zoom min",
  "settings.max": "Canvas zoom max",
  "settings.autofocus": "Auto scroll focus on the animation panel",
  "error.minmax":
    "The maximum value should be greater than or equal to the minimum value",
  "settings.marklineColor": "Markline color",
  "settings.marklineStyle": "Markline style",
  "settings.containerOverflow": "Container Overflow",
  "settings.Layout": "Layout config",
};

/*

 * @Date: 2021-08-27 10:20:15
 * @LastEditors:
 * @LastEditTime: 2022-04-29 23:19:30
 * @FilePath: \lowcode\packages\lowcode-lib\src\locale\zh-CN.ts
 */
var zhCN = {
  "timeline.name": "组件名称",
  "contorl.popup.absolute": "确认变更为绝对定位吗",
  "contorl.popup.static": "确认变更为静态定位吗",
  "contorl.absolute": "切换绝对定位",
  "contorl.static": "切换静态定位",
  "control.popup.delete": "确认删除吗",
  "control.delete": "删除",
  "control.focus": "选中聚焦",
  "control.no-component": "暂无组件",
  "modal.new": "新增弹窗",
  "modal.control": "弹窗配置",
  "modal.popup.exit": "请退出编辑弹窗后再打开该配置",
  "modal.popup.edit": "是否切换至该弹窗并进行编辑?",
  "modal.popup.save": "请保存弹窗后编辑其他弹窗",
  "modal.popup.notfond": "未找到该弹窗 {name}",
  "modal.popup.repeat": "已有重名弹窗 {name}",
  "modal.popup.remove": "请保存弹窗后再删除",
  "modal.popup.nomodal": "暂时没有弹窗",
  "modal.popup.name": "请输入弹窗名称",
  "modal.name": "弹窗名称",
  "modal.control.remove": "取消点击删除弹窗",
  edit: "编辑",
  yes: "确定",
  no: "取消",
  "right.noprops": "还没有配置属性",
  "right.global": "全局设置",
  "right.containerheight": "容器高度",
  "right.containerwidth": "容器宽度",
  "right.containerColor": "容器底色",
  "right.bodyColor": "body底色",
  "right.fontSize": "容器字号",
  "right.lineHeight": "容器行高",
  title: "标题",
  description: "描述",
  "system.setting": "系统设置",
  "settings.openabsorb": "开启吸附",
  on: "开",
  off: "关",
  "settings.absorbindent": "吸附间距",
  "settings.min": "画布缩放最小值",
  "settings.max": "画布缩放最大值",
  "settings.autofocus": "动画面板点击自动滚动聚焦",
  "error.minmax": "最大值应大于等于最小值",
  "settings.marklineColor": "辅助线颜色",
  "settings.marklineStyle": "辅助线样式",
  "settings.containerOverflow": "容器边界外不显示元素",
  "settings.Layout": "外观设置",
};

/*

 * @Date: 2021-08-27 10:20:38
 * @LastEditors:
 * @LastEditTime: 2021-09-27 18:08:49
 * @FilePath: \lowcode\packages\lowcode-lib\src\locale\index.tsx
 */
var localeMap = {
  "zh-CN": zhCN,
  en: en,
};
var replaceLocale = function replaceLocale(
  id,
  msg,
  config,
  param,
  paramString
) {
  if (config.i18n) {
    // console.log('====================================');
    // console.log(id, msg, config, param, paramString);
    // console.log('====================================');
    if (paramString) {
      return React.createElement(FormattedMessage, {
        id: id,
        defaultMessage: paramString,
        values: param,
      });
    }

    return React.createElement(FormattedMessage, {
      id: id,
      defaultMessage: msg,
    });
  }

  return msg;
};

var index = {
  __proto__: null,
  localeMap: localeMap,
  replaceLocale: replaceLocale,
  en: en,
  zhCN: zhCN,
};

var animateTicker = /*#__PURE__*/ new Array(iter).fill(1).map(function (_, y) {
  return y;
});
var DragHandle = /*#__PURE__*/ SortableHandle(function () {
  return React.createElement(MenuOutlined, null);
});
var leftWidth = 200;
var WAIT = false;
var widthInterval = interval * 10 + 9;
var ruleWidth = (widthInterval * iter) / 10 + 10;
var borderColor = "1px solid rgb(204, 204, 204)";
var SortableItem = /*#__PURE__*/ SortableElement(function (_ref) {
  var value = _ref.value;
  return React.createElement(
    "div",
    {
      style: {
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        width: "100%",
        zIndex: 101,
      },
    },
    React.createElement(
      "div",
      {
        className: "yh-timeline-item",
        onClick: function onClick() {
          var store = value.config.getStore();
          var clone = deepcopy(store.getData());
          clone.block.forEach(function (v) {
            if (
              v.id === value.value.id &&
              !specialCoList.includes(value.value.name)
            ) {
              v.focus = true;
            } else {
              v.focus = false;
            }
          });
          store.setData(clone);
        },
        style: {
          display: "flex",
          alignItems: "center",
          width: leftWidth,
          overflow: "auto",
          minWidth: leftWidth,
          borderRight: borderColor,
          borderBottom: borderColor,
          backgroundColor: value.value.focus ? "#76767680" : "initial",
          cursor: "pointer",
        },
      },
      React.createElement(
        "div",
        {
          style: {
            width: 30,
            cursor: "move",
          },
        },
        React.createElement(DragHandle, null)
      ),
      React.createElement(
        "div",
        null,
        value.config.getComponentRegister().getMap()[value.value.name].display
      ),
      React.createElement("div", null, value.value.id.slice(-6)),
      React.createElement(
        "div",
        {
          style: {
            marginLeft: 5,
            flex: 1,
            textAlign: "right",
            paddingRight: 5,
          },
        },
        React.createElement(
          "span",
          {
            style: {
              marginRight: 5,
            },
            onClick: function onClick() {
              var store = value.config.getStore();
              var clone = deepcopy(store.getData());
              clone.block = clone.block.map(function (v) {
                if (
                  v.id === value.value.id &&
                  !specialCoList.includes(value.value.name)
                ) {
                  v.canSee = !v.canSee;
                  return v;
                }

                return v;
              });
              store.setData(clone);
            },
          },
          value.value.canSee
            ? React.createElement(EyeOutlined, null)
            : React.createElement(EyeInvisibleOutlined, null)
        ),
        React.createElement(
          _Popconfirm,
          {
            title: replaceLocale(
              "control.popup.delete",
              "确认删除么",
              value.config
            ),
            onConfirm: function onConfirm() {
              var store = value.config.getStore();
              var clone = deepcopy(store.getData());
              clone.block = clone.block.filter(function (v) {
                return !(
                  v.id === value.value.id &&
                  !specialCoList.includes(value.value.name)
                );
              });
              store.setData(clone);
            },
            okText: replaceLocale("yes", "确定", value.config),
            cancelText: replaceLocale("no", "取消", value.config),
          },
          React.createElement(DeleteOutlined, null)
        )
      )
    )
  );
});
var SortableList = /*#__PURE__*/ SortableContainer(function (_ref2) {
  var items = _ref2.items;
  return React.createElement(
    "div",
    null,
    items.data.map(function (value, index) {
      return (
        // @ts-ignore
        React.createElement(SortableItem, {
          key: value.id,
          index: index,
          value: {
            value: value,
            config: items.config,
          },
        })
      );
    })
  );
});
var cacheBlock = [];
var needleWidth = 2;
var initialLeft = 20 - needleWidth / 2;
var needleHeadWidth = 15;
var needleHeadHeight = 22;
var timer = null;
var needleState = {
  isDrag: false,
  startX: 0,
  origin: 0,
};

var needleHeadEvent = function needleHeadEvent(setNeedle, config) {
  return {
    onMouseDown: (function () {
      var _onMouseDown = _asyncToGenerator(
        /*#__PURE__*/ runtime_1.mark(function _callee(e) {
          var init;
          return runtime_1.wrap(function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  e.persist();
                  e.stopPropagation();

                  if (
                    !(
                      config.timelineNeedleConfig.status === "start" ||
                      !config.timelineNeedleConfig.isRefresh
                    )
                  ) {
                    _context.next = 8;
                    break;
                  }

                  init = initialLeft;
                  setNeedle(function (p) {
                    init = p;
                    return p;
                  });
                  _context.next = 7;
                  return config.timelineNeedleConfig.resetFunc();

                case 7:
                  // 重置后需要再回正
                  setNeedle(init);

                case 8:
                  setNeedle(function (p) {
                    needleState.origin = p;
                    return p;
                  });
                  needleState.isDrag = true;
                  needleState.startX = e.clientX;
                  config.blockForceUpdate.forEach(function (v) {
                    v();
                  });

                  if (timer) {
                    window.clearInterval(timer);
                  }

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })
      );

      function onMouseDown(_x) {
        return _onMouseDown.apply(this, arguments);
      }

      return onMouseDown;
    })(),
  };
};

var needleMoveEvent = function needleMoveEvent(config) {
  var setNeedle = config.timelineNeedleConfig.setNeedle;
  return {
    onMouseMove: (function () {
      var _onMouseMove = _asyncToGenerator(
        /*#__PURE__*/ runtime_1.mark(function _callee2(e) {
          var diff;
          return runtime_1.wrap(function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  if (needleState.isDrag) {
                    e.persist(); //不加这个很容易导致clientx为null

                    diff = e.clientX - needleState.startX;
                    setNeedle(function () {
                      var shouldMoveX = needleState.origin + diff;

                      if (shouldMoveX < initialLeft) {
                        config.timelineNeedleConfig.current = 0;
                        return initialLeft;
                      } else if (shouldMoveX > ruleWidth) {
                        config.timelineNeedleConfig.current =
                          (ruleWidth - initialLeft) / 20;
                        return ruleWidth;
                      } else {
                        config.timelineNeedleConfig.current =
                          (shouldMoveX - initialLeft) / 20;
                        return shouldMoveX;
                      }
                    });
                    config.timelineNeedleConfig.status = "stop";
                    config.blockForceUpdate.forEach(function (v) {
                      v();
                    });
                  }

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        })
      );

      function onMouseMove(_x2) {
        return _onMouseMove.apply(this, arguments);
      }

      return onMouseMove;
    })(),
    onMouseUp: function onMouseUp() {
      needleState.isDrag = false;
      needleState.startX = 0;
    },
  };
};

var needleDoubleClick = function needleDoubleClick(config) {
  return {
    onDoubleClick: (function () {
      var _onDoubleClick = _asyncToGenerator(
        /*#__PURE__*/ runtime_1.mark(function _callee3(e) {
          var dom, setNeedle, left, mouseLeft, diff;
          return runtime_1.wrap(function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  dom = config.timelineConfig.scrollDom;

                  if (!dom) {
                    _context3.next = 15;
                    break;
                  }

                  setNeedle = config.timelineNeedleConfig.setNeedle;
                  left = dom.getBoundingClientRect().left;
                  mouseLeft = e.clientX + dom.scrollLeft;
                  e.persist();
                  e.stopPropagation();
                  _context3.next = 9;
                  return config.timelineNeedleConfig.resetFunc();

                case 9:
                  config.timelineNeedleConfig.status = "stop";
                  diff = mouseLeft - left;

                  if (diff <= initialLeft) {
                    config.timelineNeedleConfig.current = 0;
                    diff = initialLeft;
                  } else if (diff > ruleWidth) {
                    config.timelineNeedleConfig.current =
                      (ruleWidth - initialLeft) / 20;
                    diff = ruleWidth;
                  } else {
                    config.timelineNeedleConfig.current =
                      (diff - initialLeft) / 20;
                  }

                  setNeedle(diff);
                  config.blockForceUpdate.forEach(function (v) {
                    v();
                  });

                  if (timer) {
                    window.clearInterval(timer);
                  }

                case 15:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        })
      );

      function onDoubleClick(_x3) {
        return _onDoubleClick.apply(this, arguments);
      }

      return onDoubleClick;
    })(),
  };
};

function TimeLine(props) {
  var store = props.config.getStore();
  var data = store.getData().block;
  var forceUpdate = useState(0)[1];

  var onSortEnd = function onSortEnd(sort) {
    var oldIndex = sort.oldIndex,
      newIndex = sort.newIndex;
    var newblocks = arrayMove(data, oldIndex, newIndex);
    var isEdit = props.config.getStore().isEdit();

    if (isEdit) {
      var firstType = newblocks[0].name;

      if (firstType !== "modalMask") {
        return;
      }
    }

    var store = props.config.getStore();
    var cloneData = deepcopy(store.getData());
    cloneData.block = newblocks;
    store.setData(cloneData);
  };

  var _useState = useState(0),
    state = _useState[0],
    setState = _useState[1];

  var _useState2 = useState(0),
    scrollx = _useState2[0],
    setScrollx = _useState2[1];

  var content = React.createElement(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
    },
    React.createElement(
      "div",
      {
        style: {
          transform: "translate(0, -" + state + "px)",
        },
      },
      React.createElement(SortableList, {
        distance: 2,
        useDragHandle: true,
        items: {
          data: data,
          config: props.config,
        },
        onSortEnd: onSortEnd,
        axis: "y",
      })
    )
  );
  var renderData = useMemo(
    function () {
      if (props.config.waitAnimate) {
        return cacheBlock;
      }

      cacheBlock = data;
      return cacheBlock;
    },
    [data, props.config.waitAnimate]
  );
  var ref = useRef(null);
  useEffect(
    function () {
      if (ref.current) {
        props.config.timelineConfig.scrollDom = ref.current;
      }
    },
    [props.config]
  );

  var _useState3 = useState(initialLeft),
    needle = _useState3[0],
    setNeedle = _useState3[1];

  var resetAnimate = /*#__PURE__*/ (function () {
    var _ref3 = _asyncToGenerator(
      /*#__PURE__*/ runtime_1.mark(function _callee4() {
        return runtime_1.wrap(function _callee4$(_context4) {
          while (1) {
            switch ((_context4.prev = _context4.next)) {
              case 0:
                return _context4.abrupt(
                  "return",
                  new Promise(function (res) {
                    if (!WAIT) {
                      WAIT = true;
                      props.config.waitAnimate = true;
                      var cache = data.map(function (v) {
                        return v.animate;
                      });
                      var cloneData = deepcopy(store.getData());
                      cloneData.block.forEach(function (v) {
                        v.animate = [];
                      });
                      store.setData(cloneData);
                      setTimeout(function () {
                        props.config.timelineNeedleConfig.status = "pause";
                        var cloneData = deepcopy(store.getData());
                        cloneData.block.forEach(function (v, i) {
                          v.animate = cache[i];
                        });
                        WAIT = false;
                        props.config.waitAnimate = false;
                        store.setData(cloneData);
                        store.cleanLast();
                        res();
                      });
                    }
                  })
                );

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      })
    );

    return function resetAnimate() {
      return _ref3.apply(this, arguments);
    };
  })();

  var refreshBlock = function refreshBlock() {
    var cloneData = deepcopy(store.getData());
    store.setData(cloneData);
    store.cleanLast();
  };

  var needlePlay = /*#__PURE__*/ (function () {
    var _ref4 = _asyncToGenerator(
      /*#__PURE__*/ runtime_1.mark(function _callee5() {
        return runtime_1.wrap(function _callee5$(_context5) {
          while (1) {
            switch ((_context5.prev = _context5.next)) {
              case 0:
                if (timer) {
                  window.clearInterval(timer);
                } //判断如果status不是pause，则要执行reset

                if (!(props.config.timelineNeedleConfig.status !== "pause")) {
                  _context5.next = 4;
                  break;
                }

                _context5.next = 4;
                return needleReset();

              case 4:
                props.config.timelineNeedleConfig.status = "start";
                props.config.timelineNeedleConfig.isRefresh = false;
                refreshBlock();
                setTimeout(function () {
                  timer = window.setInterval(function () {
                    setNeedle(function (pre) {
                      if (pre < ruleWidth) {
                        props.config.timelineNeedleConfig.current =
                          (pre - initialLeft) / 20;
                        return pre + 2;
                      } else {
                        if (timer) {
                          window.clearInterval(timer);
                        }

                        return pre;
                      }
                    }); //	props.config.blockForceUpdate.forEach((v) => v());
                  }, 100);
                });

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      })
    );

    return function needlePlay() {
      return _ref4.apply(this, arguments);
    };
  })();

  var needleReset = /*#__PURE__*/ (function () {
    var _ref5 = _asyncToGenerator(
      /*#__PURE__*/ runtime_1.mark(function _callee6(needResetAnimate) {
        return runtime_1.wrap(function _callee6$(_context6) {
          while (1) {
            switch ((_context6.prev = _context6.next)) {
              case 0:
                if (needResetAnimate === void 0) {
                  needResetAnimate = true;
                }

                if (timer) {
                  window.clearInterval(timer);
                }

                props.config.timelineNeedleConfig.status = "start";

                if (!needResetAnimate) {
                  _context6.next = 6;
                  break;
                }

                _context6.next = 6;
                return resetAnimate();

              case 6:
                return _context6.abrupt(
                  "return",
                  new Promise(function (res) {
                    setTimeout(function () {
                      props.config.timelineNeedleConfig.status = "pause";
                      props.config.timelineNeedleConfig.current = 0;
                      props.config.timelineNeedleConfig.isRefresh = true;
                      setNeedle(initialLeft);
                      refreshBlock();
                      res();
                    });
                  })
                );

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      })
    );

    return function needleReset(_x4) {
      return _ref5.apply(this, arguments);
    };
  })();

  var needlePause = function needlePause() {
    props.config.timelineNeedleConfig.status = "pause";
    props.config.timelineNeedleConfig.isRefresh = false;

    if (timer) {
      window.clearInterval(timer);
    }

    refreshBlock();
  };

  props.config.timelineNeedleConfig.resetFunc = needleReset;
  props.config.timelineNeedleConfig.runFunc = needlePlay;
  props.config.timelineNeedleConfig.pauseFunc = needlePause;
  props.config.timelineNeedleConfig.setNeedle = setNeedle;
  return React.createElement(
    "div",
    {
      className: props.classes + " ant-menu yh-timeline-wrap",
      style: _extends(
        {
          width: "100%",
          position: "absolute",
          height: "150px",
          bottom: "0",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
        },
        props.style
      ),
      onMouseDown: function onMouseDown(e) {
        var dom = e.target;

        if (
          !(
            dom.className &&
            dom.className.indexOf &&
            dom.className.indexOf("yh-timeline-item-mainblock") > -1
          )
        ) {
          resetCurrentMoveItemId();
        }
      },
    },
    React.createElement(
      React.Fragment,
      null,
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            lineHeight: "24px",
            paddingLeft: 10,
            height: "100%",
          },
        },
        React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            {
              style: {
                width: leftWidth,
                borderRight: "1px solid #dadada",
                minWidth: leftWidth,
                borderBottom: "1px solid #dadada",
                height: itemHeight,
                display: "flex",
              },
            },
            replaceLocale("timeline.name", "组件名称", props.config),
            React.createElement(
              "div",
              {
                style: {
                  flex: 1,
                  textAlign: "right",
                },
              },
              React.createElement(
                "span",
                {
                  style: {
                    display: "inline-block",
                    cursor: "pointer",
                    marginRight: "10px",
                  },
                  title: "reset",
                },
                React.createElement(ReloadOutlined, {
                  onClick: function onClick() {
                    needleReset();
                  },
                })
              ),
              React.createElement(
                "span",
                {
                  style: {
                    display: "inline-block",
                    cursor: "pointer",
                    marginRight: "10px",
                  },
                  title: "pause",
                },
                React.createElement(PauseCircleOutlined, {
                  onClick: function onClick() {
                    needlePause();
                  },
                })
              ),
              React.createElement(
                "span",
                {
                  title: "play",
                  style: {
                    display: "inline-block",
                    marginRight: "20px",
                    cursor: "pointer",
                  },
                  onClick: function onClick() {
                    needlePlay();
                  },
                },
                React.createElement(PlayCircleOutlined, null)
              )
            )
          ),
          content
        ),
        React.createElement(
          "div",
          Object.assign(
            {
              className: "yh-timeline-needle-head-wrap",
              style: {
                width: "calc(100% -  " + leftWidth + "px)",
                borderBottom: "1px solid #dadada",
                overflow: "hidden",
                position: "relative",
                cursor: "crosshair",
              },
            },
            needleDoubleClick(props.config)
          ),
          React.createElement(
            "div",
            Object.assign(
              {
                className: "yh-timeline-needle-head",
                style: {
                  position: "absolute",
                  transform: "translate(-" + scrollx + "px, 0px)",
                  width: needleHeadWidth,
                  height: needleHeadHeight,
                  backgroundColor: "#ff5722",
                  zIndex: 3,
                  left: needle - needleHeadWidth / 2,
                  transition: "left linear",
                  willChange: "left",
                  borderRadius: "2px",
                  cursor: "col-resize",
                },
              },
              needleHeadEvent(setNeedle, props.config)
            )
          ),
          React.createElement("div", {
            className: "yh-timeline-needle",
            style: {
              position: "absolute",
              transform: "translate(-" + scrollx + "px, 0px)",
              width: needleWidth,
              height: "100%",
              backgroundColor: "red",
              zIndex: 2,
              left: needle,
              transition: "left linear",
              willChange: "left",
              pointerEvents: "none",
            },
          }),
          React.createElement(
            "div",
            {
              style: {
                display: "flex",
                height: itemHeight,
                alignItems: "flex-end",
                borderBottom: borderColor,
                width: ruleWidth,
                overflow: "hidden",
                transform: "translate(-" + scrollx + "px, 0px)",
              },
            },
            animateTicker.map(function (v) {
              if (v % 10 === 0) {
                return React.createElement(
                  "div",
                  {
                    key: v,
                    style: {
                      marginLeft: interval,
                      height: "8px",
                      borderLeft: borderColor,
                      position: "relative",
                    },
                  },
                  React.createElement(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        top: "-20px",
                        transform: "translate(-50%, 0px)",
                      },
                    },
                    v
                  )
                );
              } else {
                return React.createElement("div", {
                  key: v,
                  style: {
                    marginLeft: interval,
                    height: "6px",
                    borderLeft: borderColor,
                  },
                });
              }
            })
          ),
          React.createElement(
            "div",
            {
              onScroll: function onScroll(e) {
                var target = e.target;
                setState(target.scrollTop);
                setScrollx(target.scrollLeft);
              },
              ref: ref,
              style: {
                overflow: "auto",
                height: "calc(100% - " + itemHeight + "px)",
              },
            },
            renderData.map(function (v) {
              return React.createElement(
                "div",
                {
                  key: v.id,
                  style: {
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: interval,
                    borderBottom: borderColor,
                    width: ruleWidth,
                    position: "relative",
                    overflow: "hidden",
                  },
                  onMouseMove: function onMouseMove(e) {
                    TimeLineItemMouseMove(e, v.animate, forceUpdate);
                  },
                  onMouseLeave: function onMouseLeave() {
                    return TimeLineItemMouseOver();
                  },
                  onMouseUp: function onMouseUp() {
                    return TimeLineItemMouseOver();
                  },
                },
                React.createElement(TimeLineItem, {
                  animate: v.animate,
                }),
                animateTicker.map(function (v) {
                  if (v % 10 === 0) {
                    return React.createElement("div", {
                      key: v,
                      style: {
                        marginRight: widthInterval,
                        borderLeft: borderColor,
                        position: "relative",
                        height: itemHeight - 1,
                      },
                    });
                  } else {
                    return null;
                  }
                })
              );
            })
          )
        )
      )
    )
  );
}

var innerDrag = function innerDrag(item, ref, config) {
  var store = config.getStore();
  return {
    onMouseDown: function onMouseDown(e) {
      //e.preventDefault();
      e.stopPropagation(); //特殊元素不可操作

      if (specialCoList.includes(item.name)) {
        containerFocusRemove(config).onMouseDown(e);
        return;
      }

      if (
        item.id &&
        innerDragState.lastClick &&
        item.id !== innerDragState.lastClick.id
      ) {
        contextMenuState.unmountContextMenu();
      } //candrag给选中，不给拖

      blockFocus(e, item, config); // 计算scrollTop值，更新dom

      if (config.timelineConfig.autoFocus && config.timelineConfig.scrollDom) {
        // 根据其为第几个block计算滚动高度
        var index = store.getData().block.findIndex(function (v) {
          return v.id === item.id;
        });

        if (index >= 0) {
          config.timelineConfig.scrollDom.scrollTop = itemHeight * index;
        }
      }

      if (!item.canDrag) {
        //containerFocusRemove(config).onMouseDown(e);
        return;
      }

      innerDragState.lastClick = item;

      if (item.position === "static") {
        return;
      }

      if (ref.current) {
        ref.current.style.cursor = "move";
        ref.current.style.willChange = "left,right,width,height";
      }

      innerDragState.startX = Math.round(e.clientX);
      innerDragState.startY = Math.round(e.clientY);
      innerDragState.item = item;
      innerDragState.itemX = item.left; // 会导致框选后移动问题 进行分类判断 否则体验不是很好

      innerDragState.itemY = item.top;
      innerDragState.isDrag = true;
      innerDragState.ref = ref;
      innerDragState.current = store.getIndex();
    },
  };
};
var innerContainerDrag = function innerContainerDrag(config) {
  var lastblock;
  var store = config.getStore();
  var scaleState = config.getScaleState();

  var onMouseMove = function onMouseMove(e) {
    var _innerDragState$item;

    //e.preventDefault();
    if (isMac() && contextMenuState.state) {
      //mac有bug
      return;
    }

    var id =
      (_innerDragState$item = innerDragState.item) == null
        ? void 0
        : _innerDragState$item.id;

    if (id && innerDragState.isDrag) {
      var current = store.getData().block.find(function (v) {
        return v.id === id;
      });

      if ((current == null ? void 0 : current.position) === "static") {
        return;
      }

      var focus = config.getFocusState();
      var isMulti = focus.blocks.length > 1;
      var moveX = e.clientX,
        moveY = e.clientY;
      var startX = innerDragState.startX,
        startY = innerDragState.startY;
      var scale = scaleState.value;
      var durX = Math.round((moveX - startX) / scale);
      var durY = Math.round((moveY - startY) / scale);
      var newblock;

      if (lastblock !== innerDragState.item) {
        var cloneblock = deepCopy(store.getData().block);
        lastblock = innerDragState.item;
        newblock = cloneblock.map(function (v) {
          if (v.focus && v.position !== "static") {
            if (isMulti) {
              v.left = Math.round(v.left + durX);
              v.top = Math.round(v.top + durY);
            } else {
              v.left = Math.round(innerDragState.itemX + durX);
              v.top = Math.round(innerDragState.itemY + durY);
            }
          }

          return v;
        });
      } else {
        newblock = store.getData().block.map(function (v) {
          if (v.focus && v.position !== "static") {
            if (isMulti) {
              v.left = Math.round(v.left + durX);
              v.top = Math.round(v.top + durY);
            } else {
              v.left = Math.round(innerDragState.itemX + durX);
              v.top = Math.round(innerDragState.itemY + durY);
            }
          }

          return v;
        });
      }

      store.setData(
        _extends({}, store.getData(), {
          block: newblock,
        })
      );

      if (isMulti) {
        innerDragState.startX = moveX;
        innerDragState.startY = moveY;
      }
    }

    resizerMouseMove(e, config);
    rotateMouseMove(e, config);

    if (selectData.selectDiv) {
      selectRangeMouseMove(e);
    }
  };

  return {
    onMouseMove: onMouseMove,
  };
};
var innerContainerDragUp = function innerContainerDragUp(config) {
  var store = config.getStore();

  var onMouseUp = function onMouseUp(e) {
    // e.preventDefault(); 这个会导致无法取消选中
    marklineState.cache = null;
    marklineState.sortLeft = null;
    marklineState.sortTop = null;
    marklineState.sortRight = null;
    marklineState.sortBottom = null;
    wrapperMoveMouseUp$1(config);
    needleMoveEvent(config).onMouseUp();
    wrapperMoveMouseUp(config);
    selectRangeMouseUp(e, config);

    if (innerDragState.ref && innerDragState.ref.current) {
      innerDragState.ref.current.style.willChange = "auto";
    }

    resizerMouseUp(config);
    rotateMouseUp(config);

    if (innerDragState.current) {
      var endindex = store.getIndex();
      store
        .getStoreList()
        .splice(innerDragState.current, endindex - innerDragState.current);
      store.setIndex(innerDragState.current);
    }

    innerDragState.ref = null;
    innerDragState.isDrag = false;
    innerDragState.item = null;
    innerDragState.current = 0;
    marklineConfig.marklineUnfocus = null;
    store.forceupdate();
  };

  return {
    onMouseUp: onMouseUp,
    onMouseMove: function onMouseMove(e) {
      needleMoveEvent(config).onMouseMove(e);
    },
  };
};

/**
 *
 *
 * @export 吸附间距之前已经算出，该函数直接做处理
 * @param {RealStyle} focusStyle
 * @param {RealStyle} unFocusStyle
 * @param {LinesTypes} lines
 * @param {IBlockType} focus
 * @param {number} diff 绝对值
 * @param {('left' | 'top' | 'bottom' | 'right' | 't-b' | 'b-t' |  'l-r' |  'r-l')} direction
 */

function marklineDisplay(
  focusStyle,
  unFocusStyle,
  lines,
  focus,
  diff,
  dirty,
  direction
) {
  var top = focusStyle.top,
    height = focusStyle.height,
    left = focusStyle.left,
    width = focusStyle.width;
  var t = unFocusStyle.top,
    h = unFocusStyle.height,
    l = unFocusStyle.left,
    w = unFocusStyle.width;
  var diffY = 0;
  var diffX = 0;

  switch (direction) {
    case "left":
      if (dirty.dirtyY) {
        if (diff <= 1) {
          lines.y.push(l);
        }
      } else {
        lines.y.push(l);
        diffX = l - left;
        dirty.dirtyY = true;
      }

      break;

    case "right":
      if (dirty.dirtyY) {
        if (diff <= 1) {
          lines.y.push(l + w);
        }
      } else {
        lines.y.push(l + w);
        diffX = l + w - left - width;
        dirty.dirtyY = true;
      }

      break;

    case "l-r":
      if (dirty.dirtyY) {
        if (diff <= 1) {
          lines.y.push(l + w);
        }
      } else {
        lines.y.push(l + w);
        diffX = l + w - left;
        dirty.dirtyY = true;
      }

      break;

    case "r-l":
      if (dirty.dirtyY) {
        if (diff <= 1) {
          lines.y.push(l);
        }
      } else {
        lines.y.push(l);
        diffX = l - (left + width);
        dirty.dirtyY = true;
      }

      break;

    case "top":
      if (dirty.dirtyX) {
        if (diff <= 1) {
          lines.x.push(t);
        }
      } else {
        lines.x.push(t);
        diffY = t - top;
        dirty.dirtyX = true;
      }

      break;

    case "bottom":
      if (dirty.dirtyX) {
        if (diff <= 1) {
          lines.x.push(t + h);
        }
      } else {
        lines.x.push(t + h);
        diffY = t + h - top - height;
        dirty.dirtyX = true;
      }

      break;

    case "t-b":
      if (dirty.dirtyX) {
        if (diff <= 1) {
          lines.x.push(t + h);
        }
      } else {
        lines.x.push(t + h);
        diffY = t + h - top;
        dirty.dirtyX = true;
      }

      break;

    case "b-t":
      if (dirty.dirtyX) {
        if (diff <= 1) {
          lines.x.push(t);
        }
      } else {
        lines.x.push(t);
        diffY = t - (top + height);
        dirty.dirtyX = true;
      }

      break;
  }

  if (marklineConfig.isAbsorb) {
    focus.top = Math.round(focus.top + diffY);
    focus.left = Math.round(focus.left + diffX);
  }
}
/**
 *
 * 第一次运算时需要
 * @export
 * @param {RealStyle} focusStyle
 * @param {RealStyle} unFocusStyle
 * @param {LinesTypes} lines
 * @param {IBlockType} focus
 */

function newMarklineDisplay(focusStyle, unFocusStyle, lines) {
  var top = focusStyle.top,
    height = focusStyle.height,
    left = focusStyle.left,
    width = focusStyle.width;
  var t = unFocusStyle.top,
    h = unFocusStyle.height,
    l = unFocusStyle.left,
    w = unFocusStyle.width; // 头对头

  if (Math.abs(t - top) <= 1) {
    lines.x.push(t);
  } // 尾对头
  else if (Math.abs(t - (top + height)) <= 1) {
    lines.x.push(t);
  } // 头对尾
  else if (Math.abs((t + h - top) / 2) <= 1) {
    lines.x.push(t + h);
  } // 尾对尾
  else if (Math.abs((t + h - top - height) / 2) <= 1) {
    lines.x.push(t + h);
  } // 纵线
  // 头对头

  if (Math.abs(l - left) <= 1) {
    lines.y.push(l);
  } // 尾对头
  else if (Math.abs(l - (left + width)) <= 1) {
    lines.y.push(l);
  } // 头对尾
  else if (Math.abs(l + w - left) <= 1) {
    lines.y.push(l + w);
  } // 尾对尾
  else if (Math.abs(l + w - left - width) <= 1) {
    lines.y.push(l + w);
  }
}

/*

 * @Date: 2021-03-14 04:29:09
 * @LastEditors:
 * @LastEditTime: 2022-01-12 09:15:44
 * @FilePath: \lowcode\packages\lowcode-lib\src\core\markline\calcRender.ts
 */
function cos(rotate) {
  return Math.abs(Math.cos(angleToRadian(rotate)));
}
function sin(rotate) {
  return Math.abs(Math.sin(angleToRadian(rotate)));
}
function getComponentRotatedStyle(rotate, width, height, left, top) {
  var style = {
    left: left,
    width: width,
    height: height,
    right: left + width,
    top: top,
    bottom: top + height,
  };

  if (rotate !== 0) {
    var newWidth = style.width * cos(rotate) + style.height * sin(rotate);
    var diffX = (style.width - newWidth) / 2; // 旋转后范围变小是正值，变大是负值

    style.left += diffX;
    style.right = style.left + newWidth;
    var newHeight = style.height * cos(rotate) + style.width * sin(rotate);
    var diffY = (newHeight - style.height) / 2; // 始终是正

    style.top -= diffY;
    style.bottom = style.top + newHeight;
    style.width = newWidth;
    style.height = newHeight;
  } else {
    style.bottom = style.top + style.height;
    style.right = style.left + style.width;
  }

  return style;
}
function marklineCalRender(config, iframe) {
  var _innerDragState$item, _innerDragState$item2;

  var store = config.getStore(); //focus可能好几个，做对比的是拖拽那个

  var lines = {
    x: [],
    y: [],
  };

  if (
    ((_innerDragState$item = innerDragState.item) == null
      ? void 0
      : _innerDragState$item.position) === "static" ||
    ((_innerDragState$item2 = innerDragState.item) == null
      ? void 0
      : _innerDragState$item2.position) === "relative"
  ) {
    return lines;
  }

  var item = innerDragState.item;
  var ref = innerDragState.ref;

  if (item && ref && ref.current && innerDragState.isDrag) {
    // 这个被拷贝过，所以必须重新获取
    var focus = store.getData().block.find(function (v) {
      return v.id === item.id;
    });

    if (!focus) {
      return lines;
    }

    var container = getContainer();

    if (!container) {
      return lines;
    }

    if (typeof focus.width !== "number" || typeof focus.height !== "number") {
      return lines;
    }

    if (!marklineConfig.marklineUnfocus) {
      marklineConfig.marklineUnfocus = store
        .getData()
        .block.filter(function (v) {
          return (
            v.focus === false &&
            v.position !== "static" &&
            v.position !== "relative"
          );
        });
    }

    var left = focus.left;
    var top = focus.top;
    var rotate = focus.rotate.value;
    var width = focus.width;
    var height = focus.height;
    var realStyle = getComponentRotatedStyle(rotate, width, height, left, top);

    if (typeof left !== "number" || typeof top !== "number") {
      return lines; //可能没有这2值
    }

    var unfocus = marklineConfig.marklineUnfocus;
    var len = unfocus.length; // 只要cache里有东西，说明有缓存

    if (marklineState.cache) {
      var focusItem = config.getFocusState();
      var isMulti = focusItem.blocks.length > 1;

      if (!isMulti) {
        if (!marklineState.sortLeft) {
          marklineState.sortLeft = Object.values(marklineState.cache).sort(
            function (a, b) {
              return a.left - b.left;
            }
          );
        }

        if (!marklineState.sortTop) {
          marklineState.sortTop = Object.values(marklineState.cache).sort(
            function (a, b) {
              return a.top - b.top;
            }
          );
        }

        if (!marklineState.sortBottom) {
          marklineState.sortBottom = Object.values(marklineState.cache).sort(
            function (a, b) {
              return a.bottom - b.bottom;
            }
          );
        }

        if (!marklineState.sortRight) {
          marklineState.sortRight = Object.values(marklineState.cache).sort(
            function (a, b) {
              return a.right - b.right;
            }
          );
        } // 划线的元素不应该冲突
        // 当横向或者纵向已经吸附过，则后续不进行吸附，差值为0则划线。
        // 未吸附过时的第一次划线会带吸附，后续按上述走

        var dirty = {
          dirtyX: false,
          dirtyY: false,
        };
        var indexLeft = binarySearchRemain(
          realStyle.left,
          marklineState.sortLeft,
          "left",
          marklineConfig.indent
        );

        if (indexLeft) {
          marklineDisplay(
            realStyle,
            indexLeft[0],
            lines,
            focus,
            indexLeft[1],
            dirty,
            "left"
          );
        }

        var indexLeftRight = binarySearchRemain(
          realStyle.left,
          marklineState.sortRight,
          "right",
          marklineConfig.indent
        );

        if (indexLeftRight) {
          marklineDisplay(
            realStyle,
            indexLeftRight[0],
            lines,
            focus,
            indexLeftRight[1],
            dirty,
            "l-r"
          );
        }

        var indexRightLeft = binarySearchRemain(
          realStyle.right,
          marklineState.sortLeft,
          "left",
          marklineConfig.indent
        );

        if (indexRightLeft) {
          marklineDisplay(
            realStyle,
            indexRightLeft[0],
            lines,
            focus,
            indexRightLeft[1],
            dirty,
            "r-l"
          );
        }

        var indexTopBottom = binarySearchRemain(
          realStyle.top,
          marklineState.sortBottom,
          "bottom",
          marklineConfig.indent
        );

        if (indexTopBottom) {
          marklineDisplay(
            realStyle,
            indexTopBottom[0],
            lines,
            focus,
            indexTopBottom[1],
            dirty,
            "t-b"
          );
        }

        var indexBottomTop = binarySearchRemain(
          realStyle.bottom,
          marklineState.sortTop,
          "top",
          marklineConfig.indent
        );

        if (indexBottomTop) {
          marklineDisplay(
            realStyle,
            indexBottomTop[0],
            lines,
            focus,
            indexBottomTop[1],
            dirty,
            "b-t"
          );
        }

        var indexTop = binarySearchRemain(
          realStyle.top,
          marklineState.sortTop,
          "top",
          marklineConfig.indent
        );

        if (indexTop) {
          marklineDisplay(
            realStyle,
            indexTop[0],
            lines,
            focus,
            indexTop[1],
            dirty,
            "top"
          );
        }

        var indexRight = binarySearchRemain(
          realStyle.right,
          marklineState.sortRight,
          "right",
          marklineConfig.indent
        );

        if (indexRight) {
          marklineDisplay(
            realStyle,
            indexRight[0],
            lines,
            focus,
            indexRight[1],
            dirty,
            "right"
          );
        }

        var indexBottom = binarySearchRemain(
          realStyle.bottom,
          marklineState.sortBottom,
          "bottom",
          marklineConfig.indent
        );

        if (indexBottom) {
          marklineDisplay(
            realStyle,
            indexBottom[0],
            lines,
            focus,
            indexBottom[1],
            dirty,
            "bottom"
          );
        }
      }
    } else {
      for (var i = 0; i < len; i++) {
        var v = unfocus[i];
        var l = v == null ? void 0 : v.left;
        var t = v == null ? void 0 : v.top;
        var w = v == null ? void 0 : v.width;
        var h = v == null ? void 0 : v.height;

        if (
          typeof l === "number" &&
          typeof t === "number" &&
          typeof w === "number" &&
          typeof h === "number"
        ) {
          var ro = v.rotate.value;
          var rstyle = getComponentRotatedStyle(ro, w, h, l, t);

          if (!marklineState.cache) {
            var _marklineState$cache;

            marklineState.cache =
              ((_marklineState$cache = {}),
              (_marklineState$cache[v.id] = rstyle),
              _marklineState$cache);
          } else {
            marklineState.cache[v.id] = rstyle;
          }

          newMarklineDisplay(realStyle, rstyle, lines); // if (lines.x.length !== 0 || lines.y.length !== 0) {
          // 	break; 这里不能break要算完所有值
          // }
        }
      }
    } // 如果是iframe 需要刷给iframe

    if (iframe) {
      config.refreshIframe();
    }
  }

  return lines;
}

/*

 * @Date: 2021-03-14 04:29:09
 * @LastEditors:
 * @LastEditTime: 2022-01-21 09:28:53
 * @FilePath: \lowcode\packages\lowcode-lib\src\core\markline\index.tsx
 */
function MarklineX(props) {
  return React.createElement("div", {
    className: "yh-markline",
    style: {
      borderTop:
        "1px " + marklineConfig.borderStyle + " " + marklineConfig.borderColor,
      position: "absolute",
      width: "100%",
      top: props.top,
      display: props.display,
      zIndex: 9999,
    },
  });
}
function MarklineY(props) {
  return React.createElement("div", {
    className: "yh-markline",
    style: {
      borderLeft:
        "1px " + marklineConfig.borderStyle + " " + marklineConfig.borderColor,
      position: "absolute",
      height: "100%",
      left: props.left,
      display: props.display,
      zIndex: 9999,
    },
  });
}
function NormalMarkLineRender(props) {
  var lines = marklineCalRender(props.config, props.iframe);
  var render = useMemo(
    function () {
      return React.createElement(
        React.Fragment,
        null,
        lines.x.map(function (v, i) {
          return React.createElement(MarklineX, {
            key: i,
            top: v,
          });
        }),
        lines.y.map(function (v, i) {
          return React.createElement(MarklineY, {
            key: i,
            left: v,
          });
        })
      );
    },
    [lines]
  );
  return React.createElement(React.Fragment, null, render);
}

/*

 * @Date: 2021-04-21 22:59:57
 * @LastEditors:
 * @LastEditTime: 2021-07-26 11:47:19
 * @FilePath: \lowcode\packages\lowcode-lib\src\core\transfer\index.ts
 */

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
function transfer(top, left, height, width, isFixed) {
  if (isFixed) {
    // 由于是375x667基准，所以top大于667的，那么top为底部高度
    var newtop = 0;
    var newleft = getRealWidth(left);
    var newheight;
    var newwidth;

    if (typeof height === "string" || typeof height === "undefined") {
      newheight = height;
    } else {
      newheight = getRealHeight(height);
    }

    if (typeof width === "string" || typeof width === "undefined") {
      newwidth = width;
    } else {
      newwidth = getRealWidth(width);
    }

    if (top >= 667) {
      if (typeof newheight === "number") {
        newtop = getRealHeight() - newheight;
      } else {
        // 如果没有高度或者高度是百分比，则定位会有问题
        newtop = getRealHeight();
      }
    } else {
      if (
        typeof height === "number" &&
        top >= 667 - height &&
        typeof newheight === "number"
      ) {
        // 这种是距离底部比高多 按底部计算
        newtop = getRealHeight() - newheight;
      } else {
        newtop = getRealHeight(top);
      }
    }

    return {
      top: newtop,
      left: newleft,
      height: newheight,
      width: newwidth,
    };
  } else {
    var _newtop = getRealHeight(top);

    var _newleft = getRealWidth(left);

    var _newheight;

    var _newwidth;

    if (typeof height === "string" || typeof height === "undefined") {
      _newheight = height;
    } else {
      _newheight = getRealHeight(height);
    }

    if (typeof width === "string" || typeof width === "undefined") {
      _newwidth = width;
    } else {
      _newwidth = getRealWidth(width);
    }

    return {
      top: _newtop,
      left: _newleft,
      height: _newheight,
      width: _newwidth,
    };
  }
}
function getCurrentMobileInfo() {
  var userAgentMatched = window.navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  var width = userAgentMatched
    ? window.innerWidth
    : window.innerWidth < 500
    ? window.innerWidth
    : 375;
  var height = userAgentMatched
    ? window.screen.availHeight
    : window.screen.availHeight < 667
    ? window.screen.availHeight
    : 667;
  return [width, height];
}
function getRealWidth(w) {
  if (w === void 0) {
    w = 375;
  }

  var width = typeof w === "string" ? parseFloat(w) : w;
  return (getCurrentMobileInfo()[0] / 375) * width;
}
function getRealHeight(H) {
  if (H === void 0) {
    H = 667;
  }

  var height = typeof H === "string" ? parseFloat(H) : H;
  return (getCurrentMobileInfo()[0] / 375) * height;
}

// duration
// 1s ease 1s 1 forwards paused bounce ,
function mergeAnimate(animate, config) {
  if (config === void 0) {
    config = {
      delay: 0,
      isPause: false,
    };
  }

  var configstr = "";
  var str = "";
  animate.forEach(function (v) {
    configstr =
      (configstr === "" ? configstr : configstr + ",") +
      (v.animationDuration +
        "s " +
        v.animationTimingFunction +
        " " +
        (v.animationDelay - config.delay).toFixed(1) +
        "s " +
        v.animationIterationCount +
        " forwards " +
        (config.isPause ? "paused" : "running") +
        " " +
        v.animationName);
    str =
      (str === "" ? str : str + ",") +
      (v.animationDuration +
        "s " +
        v.animationTimingFunction +
        " " +
        v.animationDelay +
        "s " +
        v.animationIterationCount +
        " forwards " +
        "running" +
        " " +
        v.animationName);
  });
  return [str, configstr];
}

/**
 * block在modal中也要使用，所以该组件不应该接收容器ref
 * 用来从component里拿到渲染进行渲染,由于异步拉代码，所以需要等待代码拉取完毕
 * @param {*} props
 * @returns
 */

function Blocks(props) {
  var _useState = useState(null),
    state = _useState[0],
    setState = _useState[1];

  var _useState2 = useState({
      top: props.data.top,
      left: props.data.left,
      height: props.data.height,
      width: props.data.width,
    }),
    previewState = _useState2[0],
    setPreviewState = _useState2[1];

  useEffect(
    function () {
      var fn = function fn() {
        return props.config.getComponentRegister().getComp(props.data.name);
      };

      var data = fn();

      var unregist = function unregist() {};

      var newdata = _extends({}, props.data);

      if (props.context === "preview") {
        newdata = _extends({}, props.data, {
          top: previewState.top,
          left: previewState.left,
          height: previewState.height,
          width: previewState.width,
        });
      }

      if (data) {
        setState(
          data.render(
            newdata,
            props.context,
            props.config.getStore(),
            props.config
          )
        );
      } else {
        var callback = function callback() {
          var tmp = fn();
          setState(
            tmp.render(
              newdata,
              props.context,
              props.config.getStore(),
              props.config
            )
          );
          unregist();
        };

        unregist = props.config
          .getComponentRegister()
          .on(props.data.name, callback);
      }

      return function () {
        unregist();
      };
    },
    [props.data, props.context, props.config, previewState]
  );
  var ref = useRef(null);
  var innerDragData = useMemo(
    function () {
      return _extends({}, innerDrag(props.data, ref, props.config));
    },
    [props.data, props.config]
  );
  useEffect(
    function () {
      var fn = function fn() {
        var _transfer = transfer(
            props.data.top,
            props.data.left,
            props.data.height,
            props.data.width,
            props.data.fixed
          ),
          top = _transfer.top,
          left = _transfer.left,
          width = _transfer.width,
          height = _transfer.height;

        setPreviewState({
          top: top,
          left: left,
          width: width,
          height: height,
        });
      };

      fn();
      window.addEventListener("resize", fn);
      return function () {
        window.removeEventListener("resize", fn);
      };
    },
    [
      previewState.height,
      previewState.left,
      previewState.top,
      previewState.width,
      props.data.height,
      props.data.left,
      props.data.top,
      props.data.width,
      props.data.fixed,
    ]
  );

  var _useState3 = useState(0),
    force = _useState3[0],
    animateForce = _useState3[1];

  useEffect(
    function () {
      var fn = function fn() {
        animateForce(function (p) {
          return p + 1;
        });
      };

      props.config.blockForceUpdate.push(fn);

      var unload = function unload() {
        props.config.blockForceUpdate = props.config.blockForceUpdate.filter(
          function (v) {
            return v !== fn;
          }
        );
      };

      return function () {
        unload();
      };
    },
    [animateForce, props.config]
  );

  var _useMemo = useMemo(
      function () {
        var _mergeAnimate = mergeAnimate(props.data.animate, {
            isPause:
              props.config.timelineNeedleConfig.status !== "start"
                ? true
                : false,
            delay:
              props.config.timelineNeedleConfig.status === "stop"
                ? props.config.timelineNeedleConfig.current
                : 0,
          }),
          normal = _mergeAnimate[0],
          editProps = _mergeAnimate[1];

        return [
          {
            animation: normal,
          },
          {
            animation: editProps,
          },
        ]; // eslint-disable-next-line react-hooks/exhaustive-deps
      },
      [props.data.animate, props.config.timelineNeedleConfig, force]
    ),
    animateProps = _useMemo[0],
    animationEdit = _useMemo[1];

  var render = useMemo(
    function () {
      // 如果是编辑模式下，则需要包裹不能选中层，位移层，缩放控制层，平面移动层。
      if (state && props.context === "edit") {
        var style = props.data.canDrag
          ? {
              pointerEvents: "none",
            }
          : {};
        return React.createElement(
          "div",
          Object.assign(
            {
              ref: ref,
              className:
                props.data.focus && props.data.position !== "static"
                  ? styles.yh_block_focus
                  : "",
              style: {
                position: props.data.position,
                top: props.data.top,
                left: props.data.left,
                width: props.data.width,
                height: props.data.height,
                zIndex: props.data.zIndex,
                display:
                  typeof props.data.canSee === "boolean"
                    ? props.data.canSee
                      ? props.data.display
                      : "none"
                    : props.data.display,
                opacity: props.iframe ? 0 : 1,
                transform: "rotate(" + props.data.rotate.value + "deg)",
              },
            },
            innerDragData,
            {
              onContextMenu: function onContextMenu(e) {
                if (props.data.name !== "modalMask") {
                  contextMenuEvent(e, ref, props.config);
                }
              },
            }
          ),
          props.data.position !== "static" &&
            React.createElement(
              "div",
              {
                style: _extends({}, style, animationEdit),
              },
              state
            ),
          props.data.position === "static" &&
            props.data.display !== "inline" &&
            React.createElement(
              "div",
              {
                style: _extends(
                  {
                    pointerEvents: "none",
                  },
                  animationEdit
                ),
              },
              state
            ),
          props.data.position === "static" &&
            props.data.display === "inline" &&
            React.createElement(
              "span",
              {
                style: _extends(
                  {
                    pointerEvents: "none",
                  },
                  animationEdit
                ),
              },
              state
            ),
          React.createElement(BlockResizer, {
            data: props.data,
            config: props.config,
            rect: ref,
          }),
          React.createElement(RotateResizer, {
            data: props.data,
            config: props.config,
            rect: ref,
          }),
          React.createElement(RotateReset, {
            data: props.data,
            config: props.config,
            rect: ref,
          })
        );
      } else {
        var _style = {
          position: props.data.fixed ? "fixed" : props.data.position,
          top: previewState.top,
          left: previewState.left,
          width: previewState.width,
          height: previewState.height,
          zIndex: props.data.zIndex,
          display: props.data.display,
          transform: "rotate(" + props.data.rotate.value + "deg)",
        };
        return React.createElement(
          React.Fragment,
          null,
          props.data.position !== "static" &&
            React.createElement(
              "div",
              {
                style: _style,
              },
              React.createElement(
                "div",
                {
                  style: _extends({}, animateProps),
                },
                state
              )
            ),
          props.data.position === "static" &&
            props.data.display !== "inline" &&
            React.createElement(
              "div",
              {
                style: _style,
              },
              React.createElement(
                "div",
                {
                  style: _extends({}, animateProps),
                },
                state
              )
            ),
          props.data.position === "static" &&
            props.data.display === "inline" &&
            React.createElement(
              "span",
              {
                style: _style,
              },
              React.createElement(
                "span",
                {
                  style: _extends({}, animateProps),
                },
                state
              )
            )
        );
      }
    },
    [
      state,
      props.context,
      props.data,
      props.iframe,
      props.config,
      innerDragData,
      animationEdit,
      previewState.top,
      previewState.left,
      previewState.width,
      previewState.height,
      animateProps,
    ]
  );
  return render;
}

function Container(props) {
  var _props$state$globalSt,
    _props$state$globalSt2,
    _props$state$globalSt3,
    _props$state$globalSt4,
    _props$state$globalSt5,
    _props$state$globalSt6,
    _props$state$globalSt7,
    _props$state$globalSt8;

  var editContainerStyle = props.editContainerStyle,
    previewContainerStyle = props.previewContainerStyle;
  var scaleState = props.config.getScaleState();
  var transform = useMemo(
    function () {
      if (props.context === "edit") {
        return (
          "scale(" +
          scaleState.value +
          ") translate(" +
          wrapperMoveState.needX +
          "px, " +
          wrapperMoveState.needY +
          "px)"
        );
      } else {
        return undefined;
      }
    },
    [props.context, scaleState]
  );

  var bgColor = function bgColor() {
    var isEdit = props.config.getStore().isEdit();

    if (isEdit) {
      return "rgba(255,255,255,1)";
    } else {
      return props.state.globalState.containerColor;
    }
  };

  var forceUpdate = useState(0)[1];

  props.config.containerForceUpdate = function () {
    forceUpdate(function (p) {
      return p + 1;
    });
  };

  useEffect(
    function () {
      if (props.context === "preview") {
        props.config.onMounted();
        props.config.onMountedFn.forEach(function (v) {
          return v();
        });
      }

      return function () {
        if (props.context === "preview") {
          props.config.destroyed();
          props.config.destroyedFn.forEach(function (v) {
            return v();
          });
        }
      };
    },
    [props.config, props.context]
  );

  var minWxEle = function minWxEle() {
    return React.createElement(
      "div",
      {
        className: styles.minwx,
      },
      React.createElement(
        "div",
        null,
        React.createElement(
          "svg",
          {
            // @ts-ignore
            t: "1652778150874",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "2782",
            width: "8",
            height: "8",
          },
          React.createElement("path", {
            d: "M480 480m-288 0a4.5 4.5 0 1 0 576 0 4.5 4.5 0 1 0-576 0Z",
            "p-id": "2783",
            fill: "#ffffff",
          })
        ),
        React.createElement(
          "svg",
          {
            // @ts-ignore
            t: "1652778150874",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "2782",
            width: "12",
            height: "12",
          },
          React.createElement("path", {
            d: "M480 480m-288 0a4.5 4.5 0 1 0 576 0 4.5 4.5 0 1 0-576 0Z",
            "p-id": "2783",
            fill: "#ffffff",
          })
        ),
        React.createElement(
          "svg",
          {
            // @ts-ignore
            t: "1652778150874",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "2782",
            width: "8",
            height: "8",
          },
          React.createElement("path", {
            d: "M480 480m-288 0a4.5 4.5 0 1 0 576 0 4.5 4.5 0 1 0-576 0Z",
            "p-id": "2783",
            fill: "#ffffff",
          })
        )
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "svg",
          {
            // @ts-ignore
            t: "1652775167764",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "2090",
            width: "20",
            height: "20",
          },
          React.createElement("path", {
            d: "M512 64c60.5 0 119.2 11.8 174.4 35.2 53.3 22.6 101.3 54.9 142.4 96 41.2 41.2 73.5 89.1 96 142.4C948.2 392.8 960 451.5 960 512s-11.8 119.2-35.2 174.4c-22.6 53.3-54.9 101.3-96 142.4-41.2 41.2-89.1 73.5-142.4 96C631.2 948.2 572.5 960 512 960s-119.2-11.8-174.4-35.2c-53.3-22.6-101.3-54.9-142.4-96-41.2-41.2-73.5-89.1-96-142.4C75.8 631.2 64 572.5 64 512s11.8-119.2 35.2-174.4c22.6-53.3 54.9-101.3 96-142.4s89.1-73.5 142.4-96C392.8 75.8 451.5 64 512 64m0-64C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z",
            "p-id": "2091",
            fill: "#ffffff",
          }),
          React.createElement("path", {
            d: "M512 512m-96 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0Z",
            "p-id": "2092",
            fill: "#ffffff",
          })
        )
      )
    );
  };

  return React.createElement(
    React.Fragment,
    null,
    props.context === "edit" &&
      React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "div",
          {
            style: {
              position: "absolute",
              height: props.state.container.height + 60 + "px",
              width: props.state.container.width + "px",
              transform:
                "scale(" +
                scaleState.value +
                ") translate(" +
                wrapperMoveState.needX +
                "px, " +
                wrapperMoveState.needY +
                "px)",
            },
          },
          React.createElement(
            "div",
            {
              style: {
                display: "flex",
              },
            },
            React.createElement(
              "div",
              Object.assign(
                {
                  id: "yh-container",
                  className: styles.yh_container,
                  style: _extends(
                    {
                      height: props.state.container.height + "px",
                      width: props.state.container.width + "px",
                      backgroundColor: bgColor(),
                      position: "relative",
                      overflow: props.config.containerOverFlow
                        ? "hidden"
                        : "visible",
                      cursor: "default",
                      lineHeight:
                        (_props$state$globalSt =
                          (_props$state$globalSt2 = props.state.globalState) ==
                          null
                            ? void 0
                            : _props$state$globalSt2.lineHeight) != null
                          ? _props$state$globalSt
                          : 1.575,
                      fontSize:
                        (_props$state$globalSt3 =
                          (_props$state$globalSt4 = props.state.globalState) ==
                          null
                            ? void 0
                            : _props$state$globalSt4.fontSize) != null
                          ? _props$state$globalSt3
                          : 14,
                    },
                    editContainerStyle
                  ),
                },
                props.context === "edit"
                  ? containerDragResolve(props.config)
                  : null,
                props.context === "edit"
                  ? innerContainerDrag(props.config)
                  : null,
                props.context === "edit"
                  ? containerFocusRemove(props.config)
                  : null
              ),
              props.state.container.isMinwx && minWxEle(),
              props.context === "edit" &&
                React.createElement(NormalMarkLineRender, {
                  config: props.config,
                  iframe: false,
                }),
              props.state.block.map(function (v) {
                return React.createElement(Blocks, {
                  config: props.config,
                  key: v.id,
                  data: v,
                  context: props.context,
                });
              })
            )
          ),
          React.createElement(
            "div",
            {
              style: {
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: props.state.container.width + "px",
              },
            },
            React.createElement(
              "div",
              {
                style: {
                  fontSize: "20px",
                  cursor: "s-resize",
                },
                onMouseDown: function onMouseDown(e) {
                  return containerResizer.onMousedown(e, props.config);
                },
              },
              props.config.getConfig().containerIcon
            )
          )
        )
      ),
    props.context === "preview" &&
      React.createElement(
        "div",
        {
          id: "yh-container-preview",
          className: styles.yh_container_preview,
          style: _extends(
            {
              height: getRealHeight(props.state.container.height) + "px",
              width: props.state.container.width + "px",
              position: "relative",
              overflow: "hidden",
              top: "20px",
              border: "2px solid #ccc",
              boxShadow: "0 0 10px #ccc",
              backgroundColor: bgColor(),
              transform: transform,
              lineHeight:
                (_props$state$globalSt5 =
                  (_props$state$globalSt6 = props.state.globalState) == null
                    ? void 0
                    : _props$state$globalSt6.lineHeight) != null
                  ? _props$state$globalSt5
                  : 1.575,
              fontSize:
                (_props$state$globalSt7 =
                  (_props$state$globalSt8 = props.state.globalState) == null
                    ? void 0
                    : _props$state$globalSt8.fontSize) != null
                  ? _props$state$globalSt7
                  : 14,
            },
            previewContainerStyle
          ),
        },
        props.state.container.isMinwx && minWxEle(),
        props.state.block.map(function (v) {
          return React.createElement(Blocks, {
            key: v.id,
            config: props.config,
            data: v,
            context: props.context,
          });
        })
      )
  );
}

/**
 *
 * 注册加载左侧组件方法，由于异步拉取，所以要异步加载
 * 不同tab页可以使用不同type区分
 * @param {*} props -LeftConfigProps options可选项：showName:是否显示displayName; mode:'horizontal' | 'vertical' icon与文案展示方向 ;footerConfig:底部功能配置ReactNode类型；
 * @returns
 */

function LeftConfig(props) {
  var _useState = useState("0"),
    menuSelect = _useState[0],
    setMenuSelect = _useState[1];

  var _useState2 = useState(null),
    leftRender = _useState2[0],
    setLeftRender = _useState2[1];

  var _useState3 = useState(0),
    force = _useState3[0],
    setForce = _useState3[1];

  useMemo(
    function () {
      props.config.leftForceUpdate = function () {
        setForce(function (v) {
          return v + 1;
        });
      };
    },
    [props.config]
  );
  var leftMapRenderListCategory = useMemo(
    function () {
      return props.config.getConfig().leftRenderListCategory; // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [props.config, force]
  );

  var _useState4 = useState(""),
    search = _useState4[0],
    setSearch = _useState4[1];

  useEffect(
    function () {
      var _leftMapRenderListCat, _leftMapRenderListCat2;

      var cache = [];
      var type =
        (_leftMapRenderListCat =
          leftMapRenderListCategory[parseInt(menuSelect, 10)]) == null
          ? void 0
          : _leftMapRenderListCat.type;
      var isCustom =
        (_leftMapRenderListCat2 =
          leftMapRenderListCategory[parseInt(menuSelect, 10)]) == null
          ? void 0
          : _leftMapRenderListCat2.custom;

      if (!isCustom) {
        var config = props.config.getConfig();
        cache = config.leftAllRegistMap.filter(function (k) {
          return k.type === type;
        });
        cache.forEach(function (v) {
          return props.config.asyncRegistComponent(v.component);
        });
        setLeftRender(
          React.createElement(
            "div",
            {
              className: styles.leftco + " yh-leftcomp",
            },
            React.createElement(
              "div",
              {
                className: "yh-left-top-wrapper",
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                },
              },
              React.createElement(
                "div",
                {
                  style: {
                    width: 120,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    height: 32,
                    lineHeight: "32px",
                    marginRight: "10px",
                    fontSize: "14px",
                    fontFamily: "PingFangSC-Medium, PingFang SC",
                    fontWeight: 600,
                    userSelect: "none",
                  },
                },
                leftMapRenderListCategory[parseInt(menuSelect, 10)].displayName
              ),
              React.createElement(_Input, {
                className: "yh-left-top-input",
                style: {
                  borderRadius: "40px",
                },
                allowClear: true,
                value: search,
                onChange: function onChange(e) {
                  setSearch(e.target.value);
                },
                prefix: React.createElement(SearchOutlined, null),
              })
            ),
            search &&
              search !== "" &&
              cache
                .reduce(function (prev, next) {
                  //筛选搜索条件，name或者displayName存在即显示
                  if (
                    next.displayName.includes(search) ||
                    next.component.includes(search)
                  ) {
                    prev.push(next);
                  }

                  return prev;
                }, [])
                .map(function (v, index) {
                  return React.createElement(
                    "div",
                    Object.assign(
                      {
                        className: styles.coitem + " yh-left-item-wrap",
                        key: index,
                      },
                      dragEventResolve(v, props.config)
                    ),
                    React.createElement(
                      "div",
                      {
                        className: styles.redbox + " yh-left-item-img-wrap",
                      },
                      v.imgCustom
                        ? v.imgCustom
                        : React.createElement("img", {
                            src: v.img,
                            style: {
                              width: "100%",
                              height: "100%",
                            },
                            alt: "component",
                          })
                    ),
                    React.createElement(
                      "div",
                      {
                        style: {
                          textAlign: "center",
                          lineHeight: "20px",
                          height: "20px",
                          overflow: "hidden",
                        },
                      },
                      v.displayName
                    )
                  );
                }),
            (!search || search === "") &&
              cache.map(function (v, index) {
                return React.createElement(
                  "div",
                  Object.assign(
                    {
                      className: styles.coitem + " yh-left-item-wrap",
                      key: index,
                    },
                    dragEventResolve(v, props.config)
                  ),
                  React.createElement(
                    "div",
                    {
                      className: styles.redbox + " yh-left-item-img-wrap",
                    },
                    v.imgCustom
                      ? v.imgCustom
                      : React.createElement("img", {
                          src: v.img,
                          style: {
                            width: "100%",
                            height: "100%",
                          },
                          alt: "component",
                        })
                  ),
                  React.createElement(
                    "div",
                    {
                      style: {
                        textAlign: "center",
                        lineHeight: "20px",
                        height: "20px",
                        overflow: "hidden",
                      },
                    },
                    v.displayName
                  )
                );
              })
          )
        );
      } else {
        var _leftMapRenderListCat3;

        var render =
          (_leftMapRenderListCat3 =
            leftMapRenderListCategory[parseInt(menuSelect, 10)]) == null
            ? void 0
            : _leftMapRenderListCat3.customRender;
        setLeftRender(
          React.createElement(
            "div",
            {
              className: styles.leftco,
            },
            render && render(props.config)
          )
        );
      }
    },
    [menuSelect, props.config, leftMapRenderListCategory, search]
  );

  var _useState5 = useState(props.config.getCollapse()),
    isCollapse = _useState5[0],
    setCollapse = _useState5[1];

  var _useState6 = useState(props.config.getCollapse()),
    renderCollapse = _useState6[0],
    setRenderCollaspe = _useState6[1];

  return React.createElement(
    "div",
    {
      style: {
        display: "flex",
        height: "100%",
      },
    },
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
        },
      },
      React.createElement(
        _Menu,
        {
          style: {
            flex: 1,
          },
          defaultSelectedKeys: [menuSelect],
          mode: "vertical",
          className: styles.menuWidth + " " + styles.menus + " yh-menu",
        },
        leftMapRenderListCategory.map(function (v, i) {
          return React.createElement(
            _Menu.Item,
            {
              key: i,
              onClick: function onClick() {
                return setMenuSelect(i + "");
              },
              icon: v.icon,
              className:
                props.mode === "vertical"
                  ? styles.menuStyle + " " + styles.menus + " yh-menuitem"
                  : "yh-menuitem",
            },
            props.showName && v.displayName
          );
        })
      ),
      React.createElement(
        "div",
        {
          className:
            styles.menu_footer +
            " yh-menufooter ant-menu-root ant-menu-vertical",
        },
        props.footerConfig
      ),
      React.createElement(
        _Menu,
        {
          selectedKeys: [],
        },
        React.createElement(_Menu.Item, {
          key: "1",
          onClick: function onClick() {
            return setCollapse(function (pre) {
              if (pre) {
                setTimeout(function () {
                  props.config.collapsed = false;
                  setRenderCollaspe(false);
                  props.config.getStore().forceUpdate();
                }, 300);
                return !pre;
              } else {
                props.config.collapsed = true;
                setRenderCollaspe(true);
                props.config.getStore().forceUpdate();
                return !pre;
              }
            });
          },
          className: styles.menu_footer,
          icon: isCollapse
            ? React.createElement(DoubleRightOutlined, null)
            : React.createElement(DoubleLeftOutlined, null),
        })
      )
    ),
    React.createElement(
      "div",
      {
        className: styles.yhLeftrender + " ant-menu scrollbar",
        style: {
          width: isCollapse ? 0 : 270,
          paddingRight: isCollapse ? 0 : 7,
          overflowX: "hidden",
        },
      },
      !renderCollapse && leftRender
    )
  );
}

function Preview(props) {
  var isEdit = props.config.getStore().isEdit(); /// 这里需要在渲染组件之前必须把所有config加载完成，否则会导致先运行的函数无法运行

  var _useState = useState(true),
    loading = _useState[0],
    setLoading = _useState[1];

  useEffect(
    function () {
      var finalFn = function finalFn() {
        props.config.created();
        props.config.createdFn.forEach(function (v) {
          return v();
        });
        setTimeout(function () {
          // 链接数据
          props.config
            .getDataCenter()
            .initAddToDataMap(props.config.getStore().getData()); // 链接事件

          props.config
            .getEventCenter()
            .syncEventMap(
              props.config.getStore().getData(),
              props.config.getStore()
            ); // 设置全局

          var global = props.config.getStore().getData().globalState;
          var bodyColor = global == null ? void 0 : global.bodyColor;
          var title = global == null ? void 0 : global.title;

          if (title) {
            document.title = title;
          }

          if (bodyColor) {
            document.body.style.backgroundColor = bodyColor;
          }

          var customAnimate = global == null ? void 0 : global.customAnimate;

          if (customAnimate && Array.isArray(customAnimate)) {
            // 插入自定义动画
            props.config.animateFactory.fromArrInsertKeyFrame(customAnimate);
          }

          if (props.completeFn) {
            props.completeFn();
          }

          props.config.beforeOnMounted();
          props.config.beforeOnMountedFn.forEach(function (v) {
            return v();
          });

          if (props.loadingState === undefined) {
            setLoading(false);
          }
        });
      }; // 加载 script

      var scripts = props.config.getStore().getData().globalState["script"];

      if (scripts && Array.isArray(scripts) && scripts.length > 0) {
        var fn = /*#__PURE__*/ (function () {
          var _ref = _asyncToGenerator(
            /*#__PURE__*/ runtime_1.mark(function _callee() {
              var allp, allplen, i;
              return runtime_1.wrap(
                function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        allp = scripts.map(function (v) {
                          return function () {
                            return new Promise(function (res) {
                              var s = document.createElement("script");
                              s.src = v;
                              document.body.appendChild(s);

                              s.onload = function () {
                                var item =
                                  window[props.config.SCRIPTGLOBALNAME];

                                try {
                                  props.config.registComponent(item);
                                } catch (_unused) {
                                  console.error("read item fail:", v);
                                }

                                document.body.removeChild(s);
                                res(0);
                              };
                            });
                          };
                        });
                        allplen = allp.length;
                        i = 0;

                      case 3:
                        if (!(i < allplen)) {
                          _context.next = 15;
                          break;
                        }

                        _context.prev = 4;
                        _context.next = 7;
                        return allp[i]();

                      case 7:
                        _context.next = 12;
                        break;

                      case 9:
                        _context.prev = 9;
                        _context.t0 = _context["catch"](4);
                        console.error("script load fail:", scripts[i]);

                      case 12:
                        i++;
                        _context.next = 3;
                        break;

                      case 15:
                        finalFn();

                      case 16:
                      case "end":
                        return _context.stop();
                    }
                  }
                },
                _callee,
                null,
                [[4, 9]]
              );
            })
          );

          return function fn() {
            return _ref.apply(this, arguments);
          };
        })();

        fn();
      } else {
        finalFn();
      }
    },
    [props, props.config]
  );

  if (isEdit) {
    // 正常情况不会走这
    var store = props.config.getStore();
    var data = store.getData();
    store.changeModaltoNormal(data);
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(Container, {
        config: props.config,
        context: "preview",
        state: store.getData(),
      })
    );
  } else {
    var loadingNode = React.createElement(
      "div",
      null,
      props.loadText ? props.loadText : "loading"
    );
    var container = React.createElement(
      React.Fragment,
      null,
      React.createElement(Container, {
        config: props.config,
        context: "preview",
        state: props.config.getStore().getData(),
        previewContainerStyle: props.previewContainerStyle,
      })
    );

    if (props.loadingState === undefined) {
      if (loading) {
        return loadingNode;
      } else {
        return container;
      }
    } else {
      if (props.loadingState) {
        return loadingNode;
      } else {
        return container;
      }
    }
  }
}

/*

 * @Date: 2022-01-20 11:04:15
 * @LastEditors:
 * @LastEditTime: 2022-01-21 13:40:19
 * @FilePath: \lowcode\packages\lowcode-lib\src\components\colorPicker\index.tsx
 */

function ColorPicker(props) {
  var _useState = useState(props.initColor),
    color = _useState[0],
    setColor = _useState[1];

  var _useState2 = useState(false),
    colorPickerVisible = _useState2[0],
    setColorPickerVisible = _useState2[1];

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      {
        style: {
          position: "relative",
          display: "flex",
        },
      },
      React.createElement(
        "div",
        {
          onClick: function onClick() {
            setColorPickerVisible(function (pre) {
              return !pre;
            });
          },
          style: {
            background: "#fff",
            borderRadius: "1px",
            boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
            cursor: "pointer",
            display: "inline-block",
          },
        },
        React.createElement("div", {
          style: {
            width: "20px",
            height: "20px",
            borderRadius: "2px",
            background:
              "rgba(" +
              color.r +
              ", " +
              color.g +
              ", " +
              color.b +
              ", " +
              color.a +
              ")",
          },
        })
      ),
      colorPickerVisible &&
        React.createElement(
          React.Fragment,
          null,
          React.createElement(
            "div",
            {
              style: {
                position: "absolute",
                zIndex: 2000,
                transform: "translate(-100%, 0px)",
              },
            },
            React.createElement(SketchPicker, {
              color: color,
              onChange: function onChange(c) {
                var newcolor = c.rgb;
                setColor(newcolor);
                props.onChange(newcolor);
              },
            })
          ),
          React.createElement("div", {
            style: {
              position: "fixed",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
              zIndex: 1000,
            },
            onClick: function onClick() {
              return setColorPickerVisible(false);
            },
          })
        )
    )
  );
}

var ColorPicker$1 = /*#__PURE__*/ memo(ColorPicker);

var colStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
};
var titletStyle = {
  display: "flex",
  alignItems: "center",
  userSelect: "none",
  height: 32,
};
/**
 *
 * 这里一个需要异步拿取当前注册组件的配置项，另外需要异步加载所需的配置项。
 * @param {*} props
 * @returns
 */

function RightConfig(props) {
  var _useState = useState("0"),
    menuSelect = _useState[0],
    setMenuSelect = _useState[1];

  var _useState2 = useState(null),
    current = _useState2[0],
    setCurrent = _useState2[1];

  var rightMapRenderListCategory = useMemo(
    function () {
      return props.config.getConfig().rightRenderListCategory;
    },
    [props.config]
  );
  var store = props.config.getStore();
  useEffect(
    function () {
      var fn = function fn() {
        var item;
        store.getData().block.some(function (v) {
          if (v.focus) {
            item = v;
          }

          return v.focus === true;
        });

        if (item) {
          setCurrent(_extends({}, item));
        } else {
          setCurrent(null);
        }
      };

      var unregist = store.subscribe(fn);
      return function () {
        unregist();
      };
    },
    [store]
  );
  var render = useMemo(
    function () {
      return function (type, current) {
        var fn = function fn() {
          return props.config.getComponentRegister().getComp(current.name);
        };

        var data = fn(); // 这里不可能拿不到组件，因为点击的那个组件已经渲染出来了

        if (data) {
          var renderList = data.props[type];

          if (renderList) {
            return renderList.map(function (v, i) {
              var Component = props.config.getFormRegister().formMap[v.type];

              if (!Component) {
                console.error(
                  "you might forgot to regist form component " + v.type
                );
                return null;
              }

              return (
                // @ts-ignore
                React.createElement(Component, {
                  key: i,
                  data: v,
                  current: current,
                  config: props.config,
                })
              );
            });
          } else {
            return React.createElement(
              "div",
              {
                className: "yh-right-noprops",
                style: {
                  textAlign: "center",
                },
              },
              replaceLocale("right.noprops", "还没有配置属性", props.config)
            );
          }
        }

        return null;
      };
    },
    [props.config]
  );
  var initColor = useMemo(
    function () {
      return rgba2Obj(
        props.config.getStore().getData().globalState.containerColor
      );
    },
    [props.config]
  ); // const initColor2 = useMemo(() => {
  //   return rgba2Obj(props.config.getStore().getData().globalState.bodyColor);
  // }, [props.config]);

  var initTitle = useMemo(
    function () {
      return props.config.getStore().getData().globalState.title;
    },
    [props.config]
  );
  var initDescription = useMemo(
    function () {
      return props.config.getStore().getData().globalState.description;
    },
    [props.config]
  );

  var _useState3 = useState(initTitle),
    title = _useState3[0],
    setTitle = _useState3[1];

  var _useState4 = useState(initDescription),
    description = _useState4[0],
    setDescription = _useState4[1];

  var customGlobal = props.config.getConfig().rightGlobalCustom;
  var isEdit = props.config.getStore().isEdit();
  var data = props.config.getStore().getData();
  var modalName = data.modalEditName;
  return React.createElement(
    "div",
    {
      className: "ant-menu right-pannel-wrap",
      style: {
        height: "100%",
        width: "400px",
        overflow: "auto",
        padding: "0 10px",
        lineHeight: 1.5715,
      },
    },
    current &&
      React.createElement(
        _Tabs,
        {
          activeKey: menuSelect,
          style: {
            width: "100%",
          },
          onChange: function onChange(e) {
            setMenuSelect(e);
          },
        },
        rightMapRenderListCategory.map(function (v, i) {
          return React.createElement(
            _Tabs.TabPane,
            {
              tab: v.icon,
              key: i + "",
            },
            React.createElement(
              "div",
              {
                className: "scrollbar right-pannel-tabdiv",
                style: {
                  height: "calc(100vh - 110px)",
                  overflow: "auto",
                  position: "fixed",
                  width: 380,
                },
              },
              v.custom &&
                v.customRender &&
                v.customRender(v.type, current, props.config),
              !v.custom && render(v.type, current)
            )
          );
        })
      ),
    !current &&
      !isEdit &&
      !customGlobal &&
      React.createElement(
        "div",
        {
          style: {
            padding: "10px",
          },
        },
        React.createElement(
          _Row,
          {
            style: {
              padding: "10px 0 20px 0",
              fontWeight: "bold",
              userSelect: "none",
            },
          },
          replaceLocale("right.global", "全局设置", props.config)
        ),
        React.createElement(
          _Row,
          {
            style: {
              padding: "10px 0",
            },
          },
          React.createElement(
            _Col,
            {
              span: 6,
              style: _extends({}, titletStyle),
            },
            replaceLocale("title", "标题", props.config)
          ),
          React.createElement(
            _Col,
            {
              span: 18,
              style: colStyle,
            },
            React.createElement(_Input, {
              value: title,
              onChange: function onChange(e) {
                var val = e.target.value;
                setTitle(val);
                var originData = deepcopy(props.config.getStore().getData());
                originData.globalState.title = val;
                props.config.getStore().setData(originData);
              },
            })
          )
        ),
        React.createElement(
          _Row,
          {
            style: {
              padding: "10px 0",
            },
          },
          React.createElement(
            _Col,
            {
              span: 6,
              style: _extends({}, titletStyle),
            },
            replaceLocale("description", "描述", props.config)
          ),
          React.createElement(
            _Col,
            {
              span: 18,
              style: colStyle,
            },
            React.createElement(_Input, {
              value: description,
              onChange: function onChange(e) {
                var val = e.target.value;
                setDescription(val);
                var originData = deepcopy(props.config.getStore().getData());
                originData.globalState.description = val;
                props.config.getStore().setData(originData);
              },
            })
          )
        ),
        React.createElement(
          _Row,
          {
            style: {
              padding: "10px 0",
            },
          },
          React.createElement(
            _Col,
            {
              span: 6,
              style: _extends({}, titletStyle),
            },
            replaceLocale("right.containerwidth", "容器宽度", props.config)
          ),
          React.createElement(
            _Col,
            {
              span: 18,
              style: colStyle,
            },
            React.createElement(_InputNumber, {
              min: 0,
              disabled: true,
              value: props.config.getStore().getData().container.width,
              onChange: function onChange(e) {
                var val = e;
                var originData = deepcopy(props.config.getStore().getData());
                originData.container.width = val;
                props.config.getStore().setData(originData);
              },
            })
          )
        ),
        React.createElement(
          _Row,
          {
            style: {
              padding: "10px 0",
            },
          },
          React.createElement(
            _Col,
            {
              span: 6,
              style: _extends({}, titletStyle),
            },
            replaceLocale("right.containerheight", "容器高度", props.config)
          ),
          React.createElement(
            _Col,
            {
              span: 18,
              style: colStyle,
            },
            React.createElement(_InputNumber, {
              min: 0,
              value: props.config.getStore().getData().container.height,
              onChange: function onChange(e) {
                var val = e;
                var originData = deepcopy(props.config.getStore().getData());
                originData.container.height = val;
                props.config.getStore().setData(originData);
              },
            })
          )
        ),
        React.createElement(
          _Row,
          {
            style: {
              padding: "10px 0",
            },
          },
          React.createElement(
            _Col,
            {
              span: 6,
              style: _extends({}, titletStyle),
            },
            replaceLocale("right.containerColor", "容器底色", props.config)
          ),
          React.createElement(
            _Col,
            {
              span: 18,
              style: colStyle,
            },
            React.createElement(ColorPicker$1, {
              initColor: initColor,
              onChange: function onChange(newcolor) {
                var originData = deepcopy(props.config.getStore().getData());
                originData.globalState.containerColor =
                  "rgba(" +
                  newcolor.r +
                  ", " +
                  newcolor.g +
                  ", " +
                  newcolor.b +
                  ", " +
                  newcolor.a +
                  ")";
                props.config.getStore().setData(originData);
              },
            })
          )
        ),
        React.createElement(
          _Row,
          {
            style: {
              padding: "10px 0",
            },
          },
          React.createElement(
            _Col,
            {
              span: 6,
              style: _extends({}, titletStyle),
            },
            "\u5C0F\u7A0B\u5E8F"
          ),
          React.createElement(
            _Col,
            {
              span: 18,
              style: colStyle,
            },
            React.createElement(_Switch, {
              checked: props.config.getStore().getData().container.isMinwx,
              onChange: function onChange(checked) {
                var val = checked;
                var originData = deepcopy(props.config.getStore().getData());
                originData.container.isMinwx = val;
                props.config.getStore().setData(originData);
              },
            })
          )
        ),
        props.globalExtra && props.globalExtra
      ),
    !current && !isEdit && customGlobal && customGlobal(props.config),
    !current &&
      isEdit &&
      React.createElement(
        "div",
        {
          style: {
            padding: "10px",
          },
          className: "yh-tcsz",
        },
        React.createElement(
          _Row,
          {
            style: {
              padding: "10px 0 20px 0",
              fontWeight: "bold",
            },
          },
          replaceLocale("modal.control", "弹窗配置", props.config)
        ),
        React.createElement(
          _Row,
          {
            style: {
              padding: "10px 0",
            },
          },
          React.createElement(
            _Col,
            {
              span: 8,
              style: _extends({}, titletStyle),
            },
            replaceLocale(
              "modal.control.remove",
              "取消点击删除弹窗",
              props.config
            )
          ),
          React.createElement(
            _Col,
            {
              span: 16,
              style: _extends({}, colStyle),
            },
            React.createElement(_Checkbox, {
              checked: data.modalConfig[modalName] || false,
              onChange: function onChange(e) {
                var val = e.target.checked;
                var cloneData = deepcopy(data);
                cloneData.modalConfig[modalName] = val;
                props.config.getStore().setData(cloneData);
              },
            })
          )
        ),
        props.modalExtra && props.modalExtra
      )
  );
}

var scaleCancelFn = function scaleCancelFn() {
  unmountContextMenu();
};

var onWheelEvent = function onWheelEvent(config) {
  var store = config.getStore();
  var scale = config.getScaleState();
  return {
    onWheel: function onWheel(e) {
      var dom = document.querySelector(".ant-modal-mask");

      if (dom) {
        //出现弹窗禁止滚动
        return;
      }

      if (e.deltaY > 0) {
        scaleCancelFn(); //往下滚缩小

        if (scale.value > scale.minValue) {
          scale.value = scale.value - 0.1;
          store.forceUpdate();
          config.refreshIframe();
        }
      } else {
        scaleCancelFn(); //往上滚放大

        if (scale.value < scale.maxValue) {
          scale.value = scale.value + 0.1;
          store.forceUpdate();
          config.refreshIframe();
        }
      }
    },
  };
};
var scaleFn = {
  increase: function increase(number, config) {
    if (number === void 0) {
      number = 0.1;
    }

    var store = config.getStore();
    var scaleState = config.getScaleState();

    if (scaleState.value < scaleState.maxValue) {
      scaleCancelFn();
      scaleState.value = scaleState.value + number;
      store.forceUpdate();
      config.refreshIframe();
    }

    return scaleState.value;
  },
  decrease: function decrease(number, config) {
    if (number === void 0) {
      number = 0.1;
    }

    var store = config.getStore();
    var scaleState = config.getScaleState();
    scaleCancelFn();

    if (scaleState.value > scaleState.minValue) {
      scaleState.value = scaleState.value - number;
      store.forceUpdate();
      config.refreshIframe();
    }

    return scaleState.value;
  },
};
var onWheelEventIframe = function onWheelEventIframe(config, scale) {
  return {
    onWheel: function onWheel(e) {
      var dom = document.querySelector(".ant-modal-mask");

      if (dom) {
        //出现弹窗禁止滚动
        return;
      }

      if (e.deltaY > 0) {
        scaleCancelFn(); //往下滚缩小

        if (scale.value > scale.minValue) {
          scale.value = scale.value - 0.1;
          config.sendParent({
            type: "update",
            column: "scale",
            data: scale,
          });
        }
      } else {
        scaleCancelFn(); //往上滚放大

        if (scale.value < scale.maxValue) {
          scale.value = scale.value + 0.1;
          config.sendParent({
            type: "update",
            column: "scale",
            data: scale,
          });
        }
      }
    },
  };
};

/*

 * @Date: 2021-07-12 15:54:35
 * @LastEditors:
 * @LastEditTime: 2022-01-13 13:41:48
 * @FilePath: \lowcode\packages\lowcode-lib\src\components\wrapperMove\ticker.tsx
 */
var width = "20px";
var indent = 50;

function Ticker(props) {
  var topRef = useRef(null);
  var leftRef = useRef(null);

  var _useState = useState(0),
    topRender = _useState[0],
    setTopRender = _useState[1];

  var _useState2 = useState(0),
    leftRender = _useState2[0],
    setLeftRender = _useState2[1];

  var scale = props.config.getScaleState().value;
  useEffect(
    function () {
      var timer = setTimeout(function () {
        if (topRef.current) {
          var _width = topRef.current.getBoundingClientRect().width;
          var renderWidth = Math.ceil(_width / 10 / scale);

          if (renderWidth < Math.pow(2, 32) - 1) {
            // new array的参数最大值
            setTopRender(renderWidth);
          }
        } // left可以不用放，但为了更新统一

        if (leftRef.current) {
          var height = leftRef.current.getBoundingClientRect().height;
          var renderHeight = Math.ceil(height / 10 / scale);

          if (renderHeight < Math.pow(2, 32) - 1) {
            setLeftRender(renderHeight);
          }
        }
      }, 300);
      return function () {
        clearTimeout(timer);
      };
    },
    [props.config, props.config.collapsed, scale]
  );
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      {
        ref: topRef,
        style: {
          position: "absolute",
          top: 0,
          left: indent,
          width: "100%",
          height: width,
          display: "flex",
          justifyContent: "space-between",
          userSelect: "none",
        },
      },
      Array(topRender)
        .fill(1)
        .map(function (_, i) {
          if (i % 10 === 0) {
            return React.createElement(
              "div",
              {
                key: i,
                style: {
                  background: "rgb(204, 204, 204)",
                  width: "1px",
                  height: "12px",
                  position: "relative",
                  userSelect: "none",
                },
              },
              React.createElement(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: "20px",
                    fontSize: "10px",
                    left: "-2px",
                    userSelect: "none",
                  },
                },
                i
              )
            );
          } else {
            return React.createElement("div", {
              key: i,
              style: {
                background: "rgb(204, 204, 204)",
                width: "1px",
                height: "6px",
              },
            });
          }
        })
    ),
    React.createElement(
      "div",
      {
        ref: leftRef,
        style: {
          position: "absolute",
          top: indent,
          left: 0,
          width: width,
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          userSelect: "none",
        },
      },
      Array(leftRender)
        .fill(1)
        .map(function (_, i) {
          if (i % 10 === 0) {
            return React.createElement(
              "div",
              {
                key: i,
                style: {
                  background: "rgb(204, 204, 204)",
                  width: "12px",
                  height: "1px",
                  position: "relative",
                  userSelect: "none",
                },
              },
              React.createElement(
                "div",
                {
                  style: {
                    position: "absolute",
                    left: "20px",
                    fontSize: "10px",
                    top: "-2px",
                    userSelect: "none",
                  },
                },
                i
              )
            );
          } else {
            return React.createElement("div", {
              key: i,
              style: {
                background: "rgb(204, 204, 204)",
                width: "6px",
                height: "1px",
                userSelect: "none",
              },
            });
          }
        })
    )
  );
}

var _excluded = ["children", "style", "classNames", "config"];

function ContainerWrapper(props) {
  var children = props.children,
    style = props.style,
    classNames = props.classNames,
    config = props.config,
    rest = _objectWithoutPropertiesLoose(props, _excluded);

  var ref = useRef(null);
  var ticker = props.config.ticker;
  return React.createElement(
    "div",
    Object.assign(
      {
        className:
          "ant-menu " +
          (classNames ? classNames : "") +
          " " +
          styles.yh_container_wrapper,
        ref: ref,
        style: _extends(
          {
            backgroundColor: "#f0f0f0",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            position: "relative",
            overflow: "hidden",
            userSelect: "none",
          },
          style
        ),
      },
      wrapperEvent(ref, props.config),
      onWheelEvent(props.config),
      rest
    ),
    config.timeline &&
      React.createElement(TimeLine, {
        config: config,
      }),
    children,
    ticker &&
      React.createElement(Ticker, {
        config: props.config,
      })
  );
}

var formItemLayout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 12,
  },
};

function SettingsModal(props) {
  var _Form$useForm = _Form.useForm(),
    form = _Form$useForm[0];

  var _useState = useState(rgba2Obj(props.config.marklineConfig.borderColor)),
    color = _useState[0],
    setColor = _useState[1];

  return React.createElement(
    _Modal,
    {
      width: 800,
      visible: props.visible,
      okText: replaceLocale("yes", "确定", props.config),
      cancelText: replaceLocale("no", "取消", props.config),
      title: replaceLocale("system.setting", "系统设置", props.config),
      onCancel: function onCancel() {
        return props.onCancel();
      },
      onOk: function onOk() {
        var res = form.getFieldsValue();
        var min = res.min,
          max = res.max,
          borderStyle = res.borderStyle,
          containerOverFlow = res.containerOverFlow;

        if (max < min) {
          props.message.error(
            replaceLocale("error.minmax", zhCN["error.minmax"], props.config)
          );
          return;
        } // 判断当前scale大小，如果超出范围，取最低值

        var currentScale = props.config.scaleState.value;

        if (currentScale < min || currentScale > max) {
          props.config.scaleState.value = min;
        }

        props.config.marklineConfig.borderColor =
          "rgba(" +
          color.r +
          ", " +
          color.g +
          ", " +
          color.b +
          ", " +
          color.a +
          ")";
        props.config.marklineConfig.borderStyle = borderStyle;
        props.config.containerOverFlow = containerOverFlow;
        props.onOk(res);
        props.config.containerForceUpdate();
        return;
      },
    },
    React.createElement(
      _Form,
      Object.assign({}, formItemLayout, {
        initialValues: {
          absorb: props.config.marklineConfig.isAbsorb,
          indent: props.config.marklineConfig.indent,
          min: props.config.scaleState.minValue,
          max: props.config.scaleState.maxValue,
          autofocus: props.config.timelineConfig.autoFocus,
          borderStyle: props.config.marklineConfig.borderStyle,
          containerOverFlow: props.config.containerOverFlow,
        },
        form: form,
      }),
      React.createElement(
        _Form.Item,
        {
          name: "absorb",
          label: replaceLocale(
            "settings.openabsorb",
            zhCN["settings.openabsorb"],
            props.config
          ),
        },
        React.createElement(
          _Radio.Group,
          null,
          React.createElement(
            _Radio,
            {
              value: true,
            },
            replaceLocale("on", zhCN["on"], props.config)
          ),
          React.createElement(
            _Radio,
            {
              value: false,
            },
            replaceLocale("off", zhCN["off"], props.config)
          )
        )
      ),
      React.createElement(
        _Form.Item,
        {
          name: "indent",
          label: replaceLocale(
            "settings.absorbindent",
            zhCN["settings.absorbindent"],
            props.config
          ),
        },
        React.createElement(_InputNumber, {
          min: 0.1,
        })
      ),
      React.createElement(
        _Form.Item,
        {
          label: replaceLocale(
            "settings.marklineColor",
            zhCN["settings.marklineColor"],
            props.config
          ),
        },
        React.createElement(ColorPicker$1, {
          initColor: rgba2Obj(props.config.marklineConfig.borderColor),
          onChange: function onChange(v) {
            setColor(v);
          },
        })
      ),
      React.createElement(
        _Form.Item,
        {
          name: "borderStyle",
          label: replaceLocale(
            "settings.marklineStyle",
            zhCN["settings.marklineStyle"],
            props.config
          ),
        },
        React.createElement(
          _Select,
          {
            style: {
              width: 88,
            },
          },
          React.createElement(
            _Select.Option,
            {
              value: "dotted",
            },
            "dotted"
          ),
          React.createElement(
            _Select.Option,
            {
              value: "solid",
            },
            "solid"
          ),
          React.createElement(
            _Select.Option,
            {
              value: "dashed",
            },
            "dashed"
          )
        )
      ),
      React.createElement(
        _Form.Item,
        {
          name: "min",
          // 最小值要大于0.1否则tiker计算有问题
          label: replaceLocale(
            "settings.min",
            zhCN["settings.min"],
            props.config
          ),
        },
        React.createElement(_InputNumber, {
          min: 0.1,
          step: 0.1,
        })
      ),
      React.createElement(
        _Form.Item,
        {
          name: "max",
          label: replaceLocale(
            "settings.max",
            zhCN["settings.max"],
            props.config
          ),
        },
        React.createElement(_InputNumber, {
          min: 0.1,
          step: 0.1,
        })
      ),
      React.createElement(
        _Form.Item,
        {
          name: "autofocus",
          label: replaceLocale(
            "settings.autofocus",
            zhCN["settings.autofocus"],
            props.config
          ),
        },
        React.createElement(
          _Radio.Group,
          null,
          React.createElement(
            _Radio,
            {
              value: true,
            },
            replaceLocale("on", zhCN["on"], props.config)
          ),
          React.createElement(
            _Radio,
            {
              value: false,
            },
            replaceLocale("off", zhCN["off"], props.config)
          )
        )
      ),
      React.createElement(
        _Form.Item,
        {
          name: "containerOverFlow",
          label: replaceLocale(
            "settings.containerOverflow",
            zhCN["settings.containerOverflow"],
            props.config
          ),
        },
        React.createElement(
          _Radio.Group,
          null,
          React.createElement(
            _Radio,
            {
              value: true,
            },
            replaceLocale("on", zhCN["on"], props.config)
          ),
          React.createElement(
            _Radio,
            {
              value: false,
            },
            replaceLocale("off", zhCN["off"], props.config)
          )
        )
      )
    )
  );
}

var SettingsModal$1 = /*#__PURE__*/ memo(SettingsModal);

function Control(props) {
  var style = props.style;

  var _useState = useState(false),
    visible = _useState[0],
    setVisible = _useState[1];

  var _useState2 = useState(false),
    configVisible = _useState2[0],
    setConfigVisible = _useState2[1];

  var _Form$useForm = _Form.useForm(),
    form = _Form$useForm[0];

  var _useState3 = useState(false),
    settingVisible = _useState3[0],
    setSettingVisible = _useState3[1];

  var _message$useMessage = _message.useMessage(),
    api = _message$useMessage[0],
    contextHolder = _message$useMessage[1];

  var _useState4 = useState({
      x: 0,
      y: 0,
    }),
    xy = _useState4[0],
    setXy = _useState4[1];

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      {
        className: "ant-menu",
        onMouseUp: mouseUp,
        style: _extends(
          {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            transform: "translate(" + xy.x + "px," + xy.y + "px)",
          },
          style
        ),
      },
      contextHolder,
      React.createElement(_Button, {
        onMouseDown: function onMouseDown(e) {
          moveState.startX = e.clientX;
          moveState.startY = e.clientY;
          moveState.fn = setXy;
          moveState.isMove = true;
        },
        type: "text",
        style: {
          cursor: "move",
        },
        icon: React.createElement(UnorderedListOutlined, null),
      }),
      React.createElement(_Button, {
        icon: React.createElement(LayoutOutlined, null),
        onClick: function onClick() {
          props.config.ticker = !props.config.ticker;
          props.config.getStore().forceUpdate();
        },
      }),
      React.createElement(_Button, {
        icon: React.createElement(SyncOutlined, null),
        onClick: function onClick() {
          wrapperMoveState.needX = 0;
          wrapperMoveState.needY = 0;
          props.config.getStore().forceUpdate();
        },
      }),
      React.createElement(_Button, {
        icon: React.createElement(SettingOutlined, null),
        onClick: function onClick() {
          setSettingVisible(true);
        },
      })
    ),
    React.createElement(
      _Modal,
      {
        title: replaceLocale("modal.control", "弹窗配置", props.config),
        visible: configVisible,
        onOk: function onOk() {
          return setConfigVisible(false);
        },
        onCancel: function onCancel() {
          return setConfigVisible(false);
        },
        footer: null,
      },
      React.createElement(
        _List,
        null,
        props.config.getStore().isEdit() &&
          React.createElement(
            "div",
            null,
            replaceLocale(
              "modal.popup.exit",
              "请退出编辑弹窗后再打开该配置",
              props.config
            )
          ),
        !props.config.getStore().isEdit() &&
          Object.keys(props.config.getStore().getData().modalMap).map(function (
            v
          ) {
            return React.createElement(
              _List.Item,
              {
                key: v,
                // @ts-ignore
                actions: [
                  React.createElement(
                    _Popconfirm,
                    {
                      title: replaceLocale(
                        "modal.popup.edit",
                        "是否切换至该弹窗并进行编辑?",
                        props.config
                      ),
                      onConfirm: function onConfirm() {
                        var store = props.config.getStore();
                        var clone = deepcopy(store.getData());
                        var sign = store.changeNormalToModal(clone, v);

                        if (!sign.success && sign.sign === 0) {
                          api.error(
                            replaceLocale(
                              "modal.popup.save",
                              "请保存弹窗后编辑其他弹窗",
                              props.config
                            )
                          );
                          return;
                        }

                        if (!sign.success && sign.sign === 1) {
                          api.error(
                            replaceLocale(
                              "modal.popup.notfond",
                              "\u672A\u627E\u5230\u8BE5\u5F39\u7A97 " +
                                sign.param,
                              props.config,
                              {
                                name: sign.param,
                              },
                              "未找到该弹窗 {name}"
                            )
                          );
                          return;
                        }

                        setConfigVisible(false);
                        store.setData(clone);
                      },
                      okText: replaceLocale("yes", "确定", props.config),
                      cancelText: replaceLocale("no", "取消", props.config),
                    },
                    React.createElement(
                      _Button,
                      {
                        type: "link",
                      },
                      replaceLocale("edit", "编辑", props.config)
                    )
                  ),
                  React.createElement(
                    _Popconfirm,
                    {
                      title:
                        "\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u5F39\u7A97\u5417?",
                      onConfirm: function onConfirm() {
                        var sign = props.config.getStore().removeModal(v);

                        if (!sign.success && sign.sign === 0) {
                          api.error(
                            replaceLocale(
                              "modal.popup.save",
                              "请保存弹窗后编辑其他弹窗",
                              props.config
                            )
                          );
                        }

                        if (!sign.success && sign.sign === 1) {
                          api.error(
                            replaceLocale(
                              "modal.popup.notfond",
                              "\u672A\u627E\u5230\u8BE5\u5F39\u7A97 " +
                                sign.param,
                              props.config,
                              {
                                name: sign.param,
                              },
                              "未找到该弹窗 {name}"
                            )
                          );
                        }

                        setConfigVisible(false);
                      },
                      okText: replaceLocale("yes", "确定", props.config),
                      cancelText: replaceLocale("no", "取消", props.config),
                    },
                    React.createElement(
                      _Button,
                      {
                        type: "link",
                      },
                      replaceLocale(
                        "control.delete",
                        "\u5220\u9664",
                        props.config
                      )
                    )
                  ),
                ],
              },
              v
            );
          }),
        !props.config.getStore().isEdit() &&
          Object.keys(props.config.getStore().getData().modalMap).length ===
            0 &&
          React.createElement(
            "div",
            {
              style: {
                textAlign: "center",
              },
            },
            replaceLocale(
              "modal.popup.nomodal",
              "\u6682\u65F6\u6CA1\u6709\u5F39\u7A97",
              props.config
            )
          )
      )
    ),
    React.createElement(
      _Modal,
      {
        okText: replaceLocale("yes", "确定", props.config),
        cancelText: replaceLocale("no", "取消", props.config),
        onOk: function onOk() {
          form
            .validateFields()
            .then(function (values) {
              form.resetFields();
              var modalName = values.modalName;
              var sign = props.config.getStore().newModalMap(modalName);

              if (!sign.succeess && sign.sign === 0) {
                api.error(
                  replaceLocale(
                    "modal.popup.save",
                    "\u8BF7\u4FDD\u5B58\u5F39\u7A97\u540E\u7F16\u8F91\u5176\u4ED6\u5F39\u7A97",
                    props.config
                  )
                );
              }

              if (!sign.succeess && sign.sign === 1) {
                api.error(
                  replaceLocale(
                    "modal.popup.repeat",
                    "\u5DF2\u6709\u91CD\u540D\u5F39\u7A97 " + sign.param,
                    props.config,
                    {
                      name: sign.param,
                    },
                    "已有重名弹窗 {name}"
                  )
                );
              }

              setVisible(false);
            })
            ["catch"](function (info) {
              console.log("Validate Failed:", info);
            });
        },
        title: replaceLocale("modal.new", "新增弹窗", props.config),
        onCancel: function onCancel() {
          return setVisible(false);
        },
        visible: visible,
      },
      React.createElement(
        _Form,
        {
          layout: "vertical",
          name: "basic",
          form: form,
        },
        React.createElement(
          _Form.Item,
          {
            label: replaceLocale("modal.name", "弹窗名称", props.config),
            name: "modalName",
            rules: [
              {
                required: true,
                message: replaceLocale(
                  "modal.popup.name",
                  "请输入弹窗名称!",
                  props.config
                ),
              },
            ],
          },
          React.createElement(_Input, null)
        )
      )
    ),
    React.createElement(SettingsModal$1, {
      config: props.config,
      visible: settingVisible,
      onOk: function onOk(v) {
        props.config.marklineConfig.isAbsorb = v.absorb;
        props.config.marklineConfig.indent = v.indent;
        props.config.scaleState.minValue = v.min;
        props.config.scaleState.maxValue = v.max;
        props.config.timelineConfig.autoFocus = v.autofocus;
        setSettingVisible(false);
      },
      onCancel: function onCancel() {
        return setSettingVisible(false);
      },
      message: api,
    })
  );
}

var formItemLayout$1 = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
var Text = _Typography.Text;
var reg =
  /[`~!@#-_$%^&*()+=|{}':;',\[\]<>/?~！@#￥%……&*（）——+|{}【】《》 ‘；：”“’。，、？]/g;
/**
 *
 * 左侧tab页插件
 * @param {LeftDataPannelProps} props
 * @returns
 */

function LeftDataPannel(props) {
  var config = props.config;
  var dataCenter = config.getDataCenter();
  var dataMap = dataCenter.getDataMap();
  var keys = Object.keys(dataMap);
  var dataSource = keys.map(function (v) {
    return {
      key: v,
      value: dataMap[v],
    };
  });
  var forceUpdate = useState(0)[1];

  var _useState = useState(false),
    addVisible = _useState[0],
    setAddVisible = _useState[1];

  var _useState2 = useState(false),
    editVisible = _useState2[0],
    setEditVisible = _useState2[1];

  var _useState3 = useState({}),
    current = _useState3[0],
    setCurrent = _useState3[1];

  var column = [
    {
      title: "Key",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "操作",
      align: "center",
      render: function render(_v, record) {
        return React.createElement(
          _Space,
          {
            size: "middle",
          },
          React.createElement(
            _Button,
            {
              type: "link",
              onClick: function onClick() {
                var value =
                  typeof record.value === "object"
                    ? JSON.stringify(record.value)
                    : record.value;
                var obj = {
                  value: value,
                  key: record.key,
                };
                editForm.setFieldsValue(obj);
                setCurrent(record);
                setEditVisible(true);
              },
            },
            "\u7F16\u8F91"
          ),
          React.createElement(
            _Popconfirm,
            {
              title: replaceLocale(
                "control.popup.delete",
                "确认删除么",
                config
              ),
              onConfirm: function onConfirm() {
                var newObj = _extends({}, dataMap);

                delete newObj[record.key];
                dataCenter.staticSetToMap(_extends({}, newObj), props.config);
                forceUpdate(function (v) {
                  return v + 1;
                });
              },
              okText: replaceLocale("yes", "确定", config),
              cancelText: replaceLocale("no", "取消", config),
            },
            React.createElement(
              _Button,
              {
                type: "link",
              },
              "\u5220\u9664"
            )
          )
        );
      },
    },
  ];

  var _Form$useForm = _Form.useForm(),
    form = _Form$useForm[0];

  var _Form$useForm2 = _Form.useForm(),
    editForm = _Form$useForm2[0];

  var formSubmit = function formSubmit(res) {
    var value = res.value;
    value = value.replace("/s", "").replace("↵", "");

    if (value.startsWith("{")) {
      try {
        var _newObj;

        var json = JSON.parse(value);
        var newObj = ((_newObj = {}), (_newObj[res.key] = json), _newObj);
        dataCenter.staticSetToMap(_extends({}, dataMap, newObj), props.config);
        setAddVisible(false);
        form.resetFields();
      } catch (error) {
        _message.error("json格式转换失败");
      }
    } else {
      var _newObj3;

      var _newObj2 = ((_newObj3 = {}), (_newObj3[res.key] = value), _newObj3);

      dataCenter.staticSetToMap(_extends({}, dataMap, _newObj2), props.config);
      setAddVisible(false);
      form.resetFields();
    }
  };

  return React.createElement(
    "div",
    {
      style: {
        width: "100%",
      },
    },
    React.createElement(
      _Row,
      {
        style: {
          marginBottom: "10px",
        },
      },
      React.createElement(
        _Button,
        {
          type: "primary",
          onClick: function onClick() {
            setAddVisible(true);
          },
        },
        "\u6DFB\u52A0\u6570\u636E\u6E90"
      )
    ),
    React.createElement(
      _Row,
      null,
      React.createElement(_Table, {
        pagination: false,
        style: {
          width: "100%",
        },
        dataSource: dataSource,
        columns: column,
      })
    ),
    addVisible &&
      React.createElement(
        _Modal,
        {
          visible: addVisible,
          title: "添加数据源",
          onCancel: function onCancel() {
            setAddVisible(false);
            form.resetFields();
          },
          onOk: function onOk() {
            form.validateFields().then(function (res) {
              formSubmit(res);
            });
          },
          okText: replaceLocale("yes", "确定", config),
          cancelText: replaceLocale("no", "取消", config),
        },
        React.createElement(
          "div",
          null,
          React.createElement(
            _Form,
            Object.assign(
              {
                form: form,
              },
              formItemLayout$1
            ),
            React.createElement(
              _Form.Item,
              {
                label: "key",
                name: "key",
                rules: [
                  {
                    required: true,
                    message: "Please input your key",
                  },
                  function () {
                    return {
                      validator: function validator(_, value) {
                        if (!keys.includes(value)) {
                          return Promise.resolve();
                        }

                        return Promise.reject(new Error("Duplicate  keys!"));
                      },
                    };
                  },
                  function () {
                    return {
                      validator: function validator(_, value) {
                        if (!reg.exec(value)) {
                          return Promise.resolve();
                        }

                        return Promise.reject(new Error("invalid key"));
                      },
                    };
                  },
                ],
              },
              React.createElement(_Input, null)
            ),
            React.createElement(
              _Form.Item,
              {
                label: "value",
                name: "value",
                extra: React.createElement(
                  Text,
                  {
                    type: "warning",
                  },
                  "\u652F\u6301\u5B57\u7B26\u4E32\u3001\u6570\u5B57\u3001JSON\u5BF9\u8C61\u683C\u5F0F\uFF0C\u76F4\u63A5\u8F93\u5165\u5185\u5BB9\u5373\u53EF"
                ),
                rules: [
                  {
                    required: true,
                    message: "Please input your value",
                  },
                ],
              },
              React.createElement(_Input.TextArea, null)
            )
          )
        )
      ),
    editVisible &&
      React.createElement(
        _Modal,
        {
          visible: editVisible,
          title: "修改数据源",
          onCancel: function onCancel() {
            setEditVisible(false);
            editForm.resetFields();
          },
          onOk: function onOk() {
            editForm.validateFields().then(function (res) {
              var value = res.value;
              value = value.replace("/s", "").replace("↵", "");

              if (value.startsWith("{")) {
                try {
                  var _newObj4;

                  var json = JSON.parse(value);
                  var newObj =
                    ((_newObj4 = {}), (_newObj4[current.key] = json), _newObj4);
                  dataCenter.staticSetToMap(
                    _extends({}, dataMap, newObj),
                    props.config
                  );
                  setEditVisible(false);
                  editForm.resetFields();
                } catch (error) {
                  _message.error("json格式转换失败");
                }
              } else {
                var _newObj6;

                var _newObj5 =
                  ((_newObj6 = {}), (_newObj6[current.key] = value), _newObj6);

                dataCenter.staticSetToMap(
                  _extends({}, dataMap, _newObj5),
                  props.config
                );
                setEditVisible(false);
                editForm.resetFields();
              }
            });
          },
          okText: replaceLocale("yes", "确定", config),
          cancelText: replaceLocale("no", "取消", config),
        },
        React.createElement(
          _Form,
          {
            form: editForm,
          },
          React.createElement(
            _Form.Item,
            {
              label: "value",
              name: "value",
              extra: React.createElement(
                Text,
                {
                  type: "warning",
                },
                "\u652F\u6301\u5B57\u7B26\u4E32\u3001\u6570\u5B57\u3001JSON\u5BF9\u8C61\u683C\u5F0F\uFF0C\u76F4\u63A5\u8F93\u5165\u5185\u5BB9\u5373\u53EF"
              ),
              rules: [
                {
                  required: true,
                  message: "Please input your value",
                },
              ],
            },
            React.createElement(_Input.TextArea, null)
          )
        )
      )
  );
}

/*

 * @Date: 2021-03-14 04:29:09
 * @LastEditors: chentianshang
 * @LastEditTime: 2021-07-06 09:53:29
 * @FilePath: /DooringV2/packages/dooring-v2-lib/src/core/components/formComponentRegister.ts
 */
var formComponentRegisterFn = function formComponentRegisterFn(
  formComponent,
  modules
) {
  Object.keys(modules).forEach(function (v) {
    formComponent.register(v, modules[v]);
  });
};
/**
 *
 * 拿到form组件地址和状态
 * 获取配置container配置项和普通组件配置项
 * @export
 * @class FormComponentRegister
 */

var FormComponentRegister = /*#__PURE__*/ (function () {
  function FormComponentRegister(formMap, listener, eventMap, containerConfig) {
    if (formMap === void 0) {
      formMap = {};
    }

    if (listener === void 0) {
      listener = [];
    }

    if (eventMap === void 0) {
      eventMap = {};
    }

    if (containerConfig === void 0) {
      containerConfig = [];
    }

    this.formMap = formMap;
    this.listener = listener;
    this.eventMap = eventMap;
    this.containerConfig = containerConfig;
  }

  var _proto = FormComponentRegister.prototype;

  _proto.getMap = function getMap() {
    return this.formMap;
  };

  _proto.getComp = function getComp(name) {
    return this.formMap[name];
  };

  _proto.getConfig = function getConfig() {
    return this.containerConfig;
  };

  _proto.setConfig = function setConfig(config) {
    this.containerConfig = config;
  };
  /**
   *
   *  同步注册方法
   * @memberof FormComponentRegister
   */

  _proto.register = function register(name, ele) {
    this.formMap[name] = ele;
  };

  _proto.emit = function emit() {
    this.listener.forEach(function (v) {
      return v();
    });
  };

  _proto.on = function on(event, fn) {
    var _this = this;

    if (!this.eventMap[event]) {
      this.eventMap[event] = [];
    }

    this.eventMap[event].push(fn);
    return function () {
      return _this.eventMap[event].filter(function (v) {
        return v !== fn;
      });
    };
  };

  return FormComponentRegister;
})();

/*

 * @Date: 2021-04-08 19:59:01
 * @LastEditors:
 * @LastEditTime: 2022-04-24 00:14:25
 * @FilePath: \lowcode\packages\lowcode-lib\src\core\functionCenter\index.ts
 */
/**
 *
 * 初始化时可以加载初始已配好的函数
 * {}
 * @export
 * @class FunctionCenter
 */

var FunctionCenter = /*#__PURE__*/ (function () {
  function FunctionCenter(initConfig) {
    if (initConfig === void 0) {
      initConfig = {};
    }

    this.initConfig = initConfig;
    /**
     *
     * 该map 用于获取函数未获取到时，异步拉取
     * @memberof FunctionCenter
     */

    this.asyncMap = {};
    this.configMap = {};
    this.funcitonMap = {};
    this.nameMap = {}; // id对名字

    this.componentIdMap = {}; // 组件id对函数id

    this.init(initConfig);
  }

  var _proto = FunctionCenter.prototype;

  _proto.init = function init(initConfig) {
    this.reset();
    this.funcitonMap = Object.keys(initConfig).reduce(function (prev, next) {
      prev[next] = initConfig[next].fn;
      return prev;
    }, {});
    this.configMap = Object.keys(initConfig).reduce(function (prev, next) {
      prev[next] = initConfig[next].config;
      return prev;
    }, {});
    this.nameMap = Object.keys(initConfig).reduce(function (prev, next) {
      prev[next] = initConfig[next].name;
      return prev;
    }, {});
    this.componentIdMap = Object.keys(initConfig).reduce(function (prev, next) {
      var cid = initConfig[next].componentId;

      if (prev[cid]) {
        prev[cid].add(next);
      } else {
        prev[cid] = new Set([next]);
      }

      return prev;
    }, {});
  };

  _proto.reset = function reset() {
    this.funcitonMap = {};
    this.configMap = {};
    this.nameMap = {};
    this.componentIdMap = {};
  };

  _proto.getFunctionMap = function getFunctionMap() {
    return this.funcitonMap;
  };

  _proto.getConfigMap = function getConfigMap() {
    return this.configMap;
  };

  _proto.getNameMap = function getNameMap() {
    return this.nameMap;
  };
  /**
   *
   * 通过name查id
   * @param {string} name
   * @return {*}  {(string | undefined)}
   * @memberof FunctionCenter
   */

  _proto.nameToKey = function nameToKey(name) {
    var keys = Object.keys(this.nameMap);
    var keylen = keys.length;
    var result;

    for (var i = 0; i < keylen; i++) {
      var key = keys[i];

      if (this.nameMap[key] === name) {
        result = key;
        break;
      }
    }

    return result;
  };
  /**
   *
   *
   * @param {{
   * 		id: string;唯一值 注意！每个组件都要不一样，所以需要带着每个组件的id，这样也方便区分是哪个组件抛出的函数!!
   * 		fn: FunctionCenterFunction;函数体
   * 		config: FunctionConfigType;配置项
   * 		name: string;显示名
   * 		componentId: string;所属组件id名用于卸载函数
   * 	}} obj
   * @returns
   * @memberof FunctionCenter
   */

  _proto.register = function register(obj) {
    var _this = this;

    var id = obj.id,
      fn = obj.fn,
      config = obj.config,
      name = obj.name,
      componentId = obj.componentId; // 注册时，需要通知asyncmap已经拿到

    this.funcitonMap[id] = fn;
    this.configMap[id] = config;
    this.nameMap[id] = name;

    if (this.componentIdMap[componentId]) {
      this.componentIdMap[componentId].add(id);
    } else {
      this.componentIdMap[componentId] = new Set([id]);
    }

    if (this.asyncMap[id]) {
      this.asyncMap[id]();
    }

    return function () {
      delete _this.funcitonMap[id];
      delete _this.configMap[id];
      delete _this.nameMap[id];

      _this.componentIdMap[componentId]["delete"](id);
    };
  };
  /**
   *
   * 画布更新时检查所有组件，不存在的组件和其挂载函数则删除，剔除_inner下的
   * @memberof FunctionCenter
   */

  _proto.syncFunction = function syncFunction(store) {
    var _this2 = this;

    var special = specialFnList;
    var allId = [];
    var data = store.getData(); // modalmap上

    var map = data.modalMap;
    Object.keys(map).forEach(function (v) {
      map[v].forEach(function (k) {
        allId.push(k.id);
      });
    }); // block上

    data.block.forEach(function (v) {
      allId.push(v.id);
    });

    if (store.isEdit()) {
      var _data$origin;

      // 额外origin上
      if (data.origin)
        (_data$origin = data.origin) == null
          ? void 0
          : _data$origin.forEach(function (v) {
              allId.push(v.id);
            });
    }

    var needDelete = [];
    Object.keys(this.componentIdMap).forEach(function (v) {
      if (!special.includes(v)) {
        if (!allId.includes(v)) {
          needDelete.push(v);
        }
      }
    });
    needDelete.forEach(function (v) {
      var ids = _this2.componentIdMap[v];
      ids.forEach(function (id) {
        delete _this2.funcitonMap[id];
        delete _this2.configMap[id];
        delete _this2.nameMap[id];
      });
      delete _this2.componentIdMap[v];
    });
  };
  /**
   *
   * 获取函数，包含异步获取函数 注意某些情况执行顺序
   * @param {string} name
   * @return {*}  {Promise<FunctionCenterFunction>}
   * @memberof FunctionCenter
   */

  _proto.getFunction = function getFunction(name) {
    var _this3 = this;

    //如果拿不到，可能是异步，进行监听回调
    var fn = this.funcitonMap[name];

    if (fn) {
      return Promise.resolve(fn);
    }

    return new Promise(function (resolve) {
      console.warn("waiting the function now " + name + " ");

      _this3.asyncMap[name] = function () {
        delete _this3.asyncMap[name];
        resolve(_this3.getFunction(name));
      };
    });
  };

  return FunctionCenter;
})();

var EventQuene = /*#__PURE__*/ (function () {
  function EventQuene(available, config, context) {
    if (available === void 0) {
      available = 1;
    }

    if (context === void 0) {
      context = {};
    }

    this.available = available;
    this.waiters = [];
    this._continue = this._continue.bind(this);
    this.context = context;
    this.config = config;
  }

  var _proto = EventQuene.prototype;

  _proto.take = function take(task, args, eventList, iname) {
    if (this.available > 0) {
      this.available--;
      task(
        this.context,
        this.leave.bind(this),
        this.config,
        args,
        eventList,
        iname
      );
    } else {
      this.waiters.push({
        fn: task,
        args: args,
        eventList: eventList,
        iname: iname,
      });
    }
  };

  _proto.leave = function leave() {
    this.available++;

    if (this.waiters.length > 0) {
      this._continue();
    }
  };

  _proto._continue = function _continue() {
    if (this.available > 0) {
      this.available--;
      var task = this.waiters.shift();

      if (task != null && task.fn) {
        task.fn(
          this.context,
          this.leave.bind(this),
          this.config,
          task.args,
          task.eventList,
          task.iname
        );
      }
    }
  };

  return EventQuene;
})();

var EventCenter = /*#__PURE__*/ (function () {
  function EventCenter(eventMap, configFunction) {
    if (eventMap === void 0) {
      eventMap = {};
    }

    this.eventMap = eventMap;
    this.functionCenter = new FunctionCenter(configFunction);
  }

  var _proto = EventCenter.prototype;

  _proto.getFunctionCenter = function getFunctionCenter() {
    return this.functionCenter;
  };

  _proto.getEventMap = function getEventMap() {
    return this.eventMap;
  };

  _proto.resetEventMap = function resetEventMap() {
    this.eventMap = {};
  };
  /**
   *
   * 重置map进行收集事件 主要就是收集eventMap字段
   * 这个应该优化在换store情况下。
   * @param {IStoreData} data
   * @memberof EventCenter
   */

  _proto.syncEventMap = function syncEventMap(data, store) {
    var _this = this;

    var sign = store.isEdit();
    this.eventMap = {};

    if (sign) {
      // 收集源block数据
      if (data.origin) {
        data.origin.forEach(function (v) {
          _this.eventMap = Object.assign(_this.eventMap, v.eventMap);
        });
      } //收集源modal数据

      Object.keys(data.modalMap).forEach(function (v) {
        data.modalMap[v].forEach(function (k) {
          _this.eventMap = Object.assign(_this.eventMap, k.eventMap);
        });
      }); //收集当前modal数据

      data.block.forEach(function (v) {
        _this.eventMap = Object.assign(_this.eventMap, v.eventMap);
      });
    } else {
      data.block.forEach(function (v) {
        _this.eventMap = Object.assign(_this.eventMap, v.eventMap);
      });
      Object.keys(data.modalMap).forEach(function (v) {
        data.modalMap[v].forEach(function (k) {
          _this.eventMap = Object.assign(_this.eventMap, k.eventMap);
        });
      });
    }
  };
  /**
   *
   * 手动更新状态eventMap
   * @param {string} name
   * @memberof EventCenter
   */

  _proto.manualUpdateMap = function manualUpdateMap(name, displayName, arr) {
    if (!this.eventMap[name]) {
      this.eventMap[name] = {
        arr: [],
        displayName: displayName,
        userSelect: [],
      };
    }

    if (arr && this.eventMap[name].displayName) {
      this.eventMap[name].arr = arr;
    } else if (arr && this.eventMap[name]) {
      this.eventMap[name] = {
        displayName: displayName,
        arr: arr,
        userSelect: [],
      };
    }
  };
  /**
   *
   * 执行事件链
   * @param {string} name
   * @memberof EventCenter
   */

  _proto.runEventQueue =
    /*#__PURE__*/
    (function () {
      var _runEventQueue = /*#__PURE__*/ _asyncToGenerator(
        /*#__PURE__*/ runtime_1.mark(function _callee(name, config) {
          var eventList, arr, _iterator, _step, i, fn;

          return runtime_1.wrap(
            function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    eventList = this.eventMap[name];

                    if (eventList) {
                      _context.next = 4;
                      break;
                    }

                    console.error(
                      "\u672A\u67E5\u8BE2\u5230\u8BE5\u4E8B\u4EF6" + name
                    );
                    return _context.abrupt("return");

                  case 4:
                    arr = new EventQuene(1, config); //如果组件异步加载，那么函数会过段时间载入，等同于异步函数
                    // 函数中心需要处理未找到时的异步处理情况

                    if (!Array.isArray(eventList.arr)) {
                      _context.next = 15;
                      break;
                    }

                    _iterator = _createForOfIteratorHelperLoose(eventList.arr);

                  case 7:
                    if ((_step = _iterator()).done) {
                      _context.next = 15;
                      break;
                    }

                    i = _step.value;
                    _context.next = 11;
                    return this.functionCenter.getFunction(i.name);

                  case 11:
                    fn = _context.sent;
                    arr.take(fn, i.args, eventList, i);

                  case 13:
                    _context.next = 7;
                    break;

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            },
            _callee,
            this
          );
        })
      );

      function runEventQueue(_x, _x2) {
        return _runEventQueue.apply(this, arguments);
      }

      return runEventQueue;
    })();

  return EventCenter;
})();

/*

 * @Date: 2021-04-13 11:20:55
 * @LastEditors:
 * @LastEditTime: 2022-04-23 17:54:22
 * @FilePath: \lowcode\packages\lowcode-lib\src\core\dataCenter\index.ts
 */

/**
 *
 * 用来管理页面数据，包括全局数据，做全局设置变量时可以加上
 * 使用Record<string,any>结构，每个组件的数据需要抛出并设定键进行通信。
 * @export
 * @class DataCenter
 */
var DataCenter = /*#__PURE__*/ (function () {
  function DataCenter(dataMap) {
    if (dataMap === void 0) {
      dataMap = {};
    }

    this.dataMap = dataMap;
    this.asyncMap = {};
  }
  /**
   *
   * 拿到map
   * @return {*}
   * @memberof DataCenter
   */

  var _proto = DataCenter.prototype;

  _proto.getDataMap = function getDataMap() {
    return this.dataMap;
  };
  /**
   *
   * 用于设置map数据
   * 在异步注册时会触发get的回调，动态不需要持久化
   * @memberof DataCenter
   */

  _proto.setToMap = function setToMap(data) {
    var _this = this;

    this.dataMap = Object.assign(this.dataMap, data);
    Object.keys(data).forEach(function (v) {
      if (_this.asyncMap[v]) {
        _this.asyncMap[v]();

        delete _this.asyncMap[v];
      }
    });
  };
  /**
   *
   * 静态设置map 和异步无关 静态需要持久化，datacenter存入store
   * 该更新不放在redo undo处
   * @param {Record<string, any>} data
   * @memberof DataCenter
   */

  _proto.staticSetToMap = function staticSetToMap(data, config) {
    this.dataMap = data;
    var store = config.getStore();
    var storeCurrentData = store.getData();
    storeCurrentData.dataSource = data;
  };
  /**
   *
   * 初始收集使用  -> to datacenter
   * @param {IStoreData} data
   * @memberof DataCenter
   */

  _proto.initAddToDataMap = function initAddToDataMap(data) {
    this.dataMap = data.dataSource;
  };
  /**
   *
   * 获取值可异步
   * @param {string} name
   * @memberof DataCenter
   */

  _proto.getValue = function getValue(name) {
    var _this2 = this;

    var value = this.dataMap[name];

    if (value) {
      return Promise.resolve(value);
    }

    return new Promise(function (resolve) {
      _this2.asyncMap[name] = function () {
        resolve(_this2.getValue(name));
      };
    });
  };
  /**
   *
   * 获取值不可异步
   * @param {string} name
   * @memberof DataCenter
   */

  _proto.get = function get(name) {
    var value = this.dataMap[name];
    return value;
  };

  return DataCenter;
})();

var unmountMap = /*#__PURE__*/ new Map();
function ModalRender(props) {
  //先获取数据
  var storeData = useMemo(
    function () {
      var z = props.data.modalMap[props.name];

      if (z) {
        var data = deepCopy(z); //需要把第一个mask扔了手动写一个

        data.shift();
        return {
          block: data,
        };
      }

      return {
        block: [],
      };
    },
    [props.data.modalMap, props.name]
  );
  var parentDom = props.parentDom,
    rootDom = props.rootDom;
  var modalConfig = props.data.modalConfig[props.name]; //这里还要添加个关闭函数，

  var unmount = useMemo(
    function () {
      return function () {
        if (parentDom && rootDom) {
          var _rootDom$parentElemen;

          unmountComponentAtNode(parentDom);
          rootDom.removeChild(parentDom);
          (_rootDom$parentElemen = rootDom.parentElement) == null
            ? void 0
            : _rootDom$parentElemen.removeChild(rootDom);
        }
      };
    },
    [parentDom, rootDom]
  );
  unmountMap.set(props.name, unmount);
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      {
        className: "yh-container-modal",
        style: {
          height: "100%",
          width: "100%",
          position: "fixed",
          overflow: "hidden",
        },
      },
      storeData.block.map(function (v) {
        return React.createElement(Blocks, {
          key: v.id,
          config: props.config,
          data: v,
          context: "preview",
        });
      }),
      React.createElement("div", {
        onClick: function onClick() {
          if (!modalConfig) {
            unmount();
          }
        },
        style: {
          backgroundColor: "#716f6f9e",
          width: "100%",
          height: "100%",
        },
      })
    )
  );
}
var wrap;
var createModal = function createModal(name, data, config) {
  if (wrap) {
    wrap = null;
  }

  if (!name) {
    return;
  }

  if (!wrap) {
    wrap = document.createElement("div");
    wrap.style.cssText =
      "line-height:\n        1.5;text-align:\n        center;color: #333;\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        position: fixed;\n        z-index: 100000;\n        width: 100%;\n        height:100%;\n        top:0;\n        left: 0;";

    if (wrap) {
      document.body.appendChild(wrap);
    }
  }

  var divs = document.createElement("div");
  wrap.appendChild(divs);
  render(
    React.createElement(ModalRender, {
      name: name,
      data: data,
      config: config,
      parentDom: divs,
      rootDom: wrap,
    }),
    divs
  );
};

/*

 * @Date: 2021-07-07 10:28:09
 * @LastEditors:
 * @LastEditTime: 2021-07-07 23:16:31
 * @FilePath: \DooringV2\packages\lowcode-lib\src\core\scale\state.ts
 */
var scaleState = {
  value: 0.8,
  maxValue: 1.3,
  minValue: 0.4,
};

var ComponentItemFactory = function ComponentItemFactory(
  name,
  display,
  props,
  initData,
  render,
  resize,
  needPosition,
  init,
  destroy,
  remoteConfig
) {
  if (resize === void 0) {
    resize = true;
  }

  if (needPosition === void 0) {
    needPosition = true;
  }

  if (init === void 0) {
    init = function init() {};
  }

  if (destroy === void 0) {
    destroy = function destroy() {};
  }

  if (remoteConfig === void 0) {
    remoteConfig = {};
  }

  this.name = name;
  this.display = display;
  this.props = props;
  this.initData = initData;
  this.render = render;
  this.resize = resize;
  this.needPosition = needPosition;
  this.init = init;
  this.destroy = destroy;
  this.remoteConfig = remoteConfig;
};

var MmodalMask = /*#__PURE__*/ new ComponentItemFactory(
  "modalMask",
  "模态框遮罩",
  {},
  {
    props: {},
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 999,
    width: "100%",
    height: "100%",
    canDrag: false,
  },
  function (_, context, store, config) {
    var container = store.getData().container;
    return React.createElement(
      "div",
      {
        style: {
          width: context === "preview" ? "100%" : container.width,
          height: context === "preview" ? "100%" : container.height,
          backgroundColor: "#716f6f9e",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
      context === "edit" &&
        React.createElement(_Button, {
          type: "primary",
          shape: "circle",
          title: "save",
          style: {
            position: "absolute",
            right: "10px",
            top: "10px",
          },
          icon: React.createElement(SaveOutlined, null),
          onClick: function onClick() {
            config.getStore().closeModal();
          },
        })
    );
  },
  true,
  false
);

var keymap = {
  a: "a",
  A: "a",
  b: "b",
  B: "b",
  c: "c",
  C: "c",
  d: "d",
  D: "d",
  e: "e",
  E: "e",
  f: "f",
  F: "f",
  g: "g",
  G: "g",
  h: "h",
  H: "h",
  i: "i",
  I: "i",
  j: "j",
  J: "j",
  k: "k",
  K: "k",
  l: "l",
  L: "l",
  m: "m",
  M: "m",
  n: "n",
  N: "n",
  o: "o",
  O: "o",
  p: "p",
  P: "p",
  q: "q",
  Q: "q",
  r: "r",
  R: "r",
  s: "s",
  S: "s",
  t: "t",
  T: "t",
  u: "u",
  U: "u",
  v: "v",
  V: "v",
  w: "w",
  W: "w",
  x: "x",
  X: "x",
  y: "y",
  Y: "y",
  z: "z",
  Z: "z",
};
var keycodeFilter = function keycodeFilter(key) {
  return keymap[key];
};

var CommanderWrapper = /*#__PURE__*/ (function () {
  function CommanderWrapper(store, commandMap, config) {
    if (commandMap === void 0) {
      commandMap = {};
    }

    this.store = store;
    this.commandMap = commandMap;
    this.config = config;
  }

  var _proto = CommanderWrapper.prototype;

  _proto.getList = function getList() {
    return this.commandMap;
  };

  _proto.register = function register(item) {
    item.init();

    if (this.commandMap[item.name]) {
      // console.error(`${item.name} commander has registed`);
      return;
    }

    this.commandMap[item.name] = item; //注册快捷键，快捷键执行调用excute

    var remove = this.registerKeyBoard(item); //改写销毁方法

    var origindestroy = item.destroy;

    var newdestroy = function newdestroy() {
      remove();
      origindestroy();
    };

    item.destroy = newdestroy;
  };

  _proto.registerKeyBoard = function registerKeyBoard(current) {
    var _this = this;

    if (current.keyboard.length === 0) {
      return function () {};
    }

    var onKeydown = function onKeydown(e) {
      if (
        document.activeElement !== document.body &&
        e.target !== document.body
      ) {
        return;
      }

      var shiftKey = e.shiftKey,
        altKey = e.altKey,
        ctrlKey = e.ctrlKey,
        metaKey = e.metaKey,
        key = e.key;
      var keyString = [];
      if (ctrlKey || metaKey) keyString.push("Control");
      if (shiftKey) keyString.push("Shift");
      if (altKey) keyString.push("Alt");

      if (key !== "Control" && key !== "Shift" && key !== "Alt") {
        var res = keycodeFilter(key);

        if (res !== undefined) {
          keyString.push(res);
        } else {
          keyString.push(key);
        }
      }

      var keyname = keyString.join("+");

      if (current.keyboard === keyname) {
        current.excute(_this.store, _this.config);
        e.stopPropagation();
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", onKeydown);
    return function () {
      return window.removeEventListener("keydown", onKeydown);
    };
  };

  _proto.unRegister = function unRegister(name) {
    if (!this.commandMap[name]) {
      console.error(name + " commander not found");
      return;
    }

    var item = this.commandMap[name];
    item.destroy();
    delete this.commandMap[item.name];
  };

  _proto.exec = function exec(name, options) {
    if (!this.commandMap[name]) {
      console.error(name + " commander not found");
      return;
    }

    this.commandMap[name].excute(this.store, this.config, options);
  };

  return CommanderWrapper;
})();

var focusState = {
  blocks: [],
};

/*

 * @Date: 2021-03-14 04:29:09
 * @LastEditors:
 * @LastEditTime: 2022-04-06 22:21:00
 * @FilePath: \lowcode\packages\lowcode-lib\src\core\components\index.ts
 */
/**
 *
 * 注册组件需要异步的，由注册时效果决定。
 * 主要是存放所有已注册组件。可以在其render时提供对应context
 * @class ComponentRegister
 */

var ComponentRegister = /*#__PURE__*/ (function () {
  function ComponentRegister(componentMap, componentList, listener, eventMap) {
    if (componentMap === void 0) {
      componentMap = {};
    }

    if (componentList === void 0) {
      componentList = [];
    }

    if (listener === void 0) {
      listener = [];
    }

    if (eventMap === void 0) {
      eventMap = {};
    }

    this.componentMap = componentMap;
    this.componentList = componentList;
    this.listener = listener;
    this.eventMap = eventMap;
  }

  var _proto = ComponentRegister.prototype;

  _proto.getMap = function getMap() {
    return this.componentMap;
  };

  _proto.getList = function getList() {
    return this.componentList;
  };

  _proto.getComp = function getComp(name) {
    return this.componentMap[name];
  };

  _proto.subscribe = function subscribe(fn) {
    var _this = this;

    this.listener.push(fn);
    return function () {
      return _this.listener.filter(function (v) {
        return v !== fn;
      });
    };
  };

  _proto.emit = function emit() {
    this.listener.forEach(function (v) {
      return v();
    });
  };

  _proto.on = function on(event, fn) {
    var _this2 = this;

    if (!this.eventMap[event]) {
      this.eventMap[event] = [];
    }

    this.eventMap[event].push(fn);
    return function () {
      return _this2.eventMap[event].filter(function (v) {
        return v !== fn;
      });
    };
  };

  _proto.emitEvent = function emitEvent(event) {
    if (!this.eventMap[event]) {
      return;
    }

    this.eventMap[event].forEach(function (v) {
      return v();
    });
  };

  _proto.register = function register(item) {
    if (this.componentMap[item.name]) {
      // console.error(`${item.name} component has registed`);
      return;
    }

    if (!(item instanceof ComponentItemFactory)) {
      console.error(item, "may be a problem in register");
    }

    this.componentMap[item.name] = item;
    this.componentList.push(item);
    this.emit();
    item.init();
  };

  _proto.unRegister = function unRegister(name) {
    if (!this.componentMap[name]) {
      console.error(name + " component not found");
      return;
    }

    var item = this.componentMap[name];
    item.destroy();
    this.emit();
    this.componentList = this.componentList.filter(function (v) {
      return v !== item;
    });
    delete this.componentMap[item.name];
  };

  return ComponentRegister;
})();

/*

 * @Date: 2022-04-23 17:03:36
 * @LastEditors:
 * @LastEditTime: 2022-04-23 17:03:37
 * @FilePath: \lowcode\packages\lowcode-lib\src\core\store\createModal.ts
 */
function createDefaultModalBlock() {
  return [
    {
      id: createUid("modal-mask"),
      name: "modalMask",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
      props: {},
      resize: true,
      focus: false,
      canSee: true,
      position: "absolute",
      display: "block",
      syncList: [],
      canDrag: false,
      eventMap: {},
      functionList: [],
      animate: [],
      fixed: true,
      rotate: {
        value: 0,
        canRotate: false,
      },
    },
  ];
}

var initialData = {
  container: {
    width: 375,
    height: 667,
    isMinwx: true,
  },
  block: [],
  modalMap: {},
  dataSource: {},
  globalState: {},
  modalConfig: {},
  origin: null,
  modalEditName: "",
};

var Store = /*#__PURE__*/ (function () {
  function Store(storeDataList, listeners, current, forceupdate) {
    if (storeDataList === void 0) {
      storeDataList = [initialData];
    }

    if (listeners === void 0) {
      listeners = [];
    }

    if (current === void 0) {
      current = 0;
    }

    if (forceupdate === void 0) {
      forceupdate = function forceupdate() {};
    }

    this.storeDataList = storeDataList;
    this.listeners = listeners;
    this.current = current;
    this.forceupdate = forceupdate;
  }

  var _proto = Store.prototype;

  _proto.getData = function getData() {
    return this.storeDataList[this.current];
  };

  _proto.getStoreList = function getStoreList() {
    return this.storeDataList;
  };

  _proto.getListeners = function getListeners() {
    return this.listeners;
  };

  _proto.getIndex = function getIndex() {
    return this.current;
  };

  _proto.getOriginBlock = function getOriginBlock() {
    if (this.isEdit()) {
      return this.getData().origin;
    } else {
      return this.getData().block;
    }
  };
  /**
   *
   * 编辑状态转普通
   * @param {IStoreData} data
   * @returns
   * @memberof Store
   */

  _proto.changeModaltoNormal = function changeModaltoNormal(data) {
    var _extends2;

    if (data.modalEditName === "") {
      return;
    }

    var tmp = data.origin || [];
    data.modalMap = _extends(
      {},
      data.modalMap,
      ((_extends2 = {}),
      (_extends2[data.modalEditName] = data.block),
      _extends2)
    );
    data.block = tmp;
    data.modalEditName = "";
    data.origin = null;
    return {};
  };
  /**
   *
   * 非编辑转编辑且已有弹窗
   * @param {IStoreData} data
   * @returns
   * @memberof Store
   */

  _proto.changeNormalToModal = function changeNormalToModal(data, name) {
    if (data.modalEditName !== "") {
      return {
        success: false,
        sign: 0,
      };
    }

    var sign2 = this.isInModalMap(name);

    if (!sign2) {
      return {
        success: false,
        sign: 1,
        param: name,
      };
    }

    var tmp = data.block || [];
    var modalBlock = data.modalMap[name];
    data.block = modalBlock;
    data.modalEditName = name;
    data.origin = tmp;
    return {
      success: true,
      sign: -1,
    };
  };
  /**
   *
   * 非编辑状态新增
   * @param {IStoreData} data
   * @returns
   * @memberof Store
   */

  _proto.newModaltoNormal = function newModaltoNormal(data, name) {
    var _extends3;

    if (data.modalEditName !== "") {
      return;
    }

    var tmp = data.block || [];
    var modalBlock = createDefaultModalBlock();
    data.modalMap = _extends(
      {},
      data.modalMap,
      ((_extends3 = {}), (_extends3[name] = modalBlock), _extends3)
    );
    data.block = modalBlock;
    data.modalEditName = name;
    data.origin = tmp;
  };
  /**
   *
   * 判断是否编辑
   * @returns
   * @memberof Store
   */

  _proto.isEdit = function isEdit() {
    if (this.getData().modalEditName !== "") {
      return true;
    }

    return false;
  };
  /**
   *
   *  判断有没有这个弹窗
   * @param {Store} store
   * @param {string} name
   * @returns
   * @memberof Store
   */

  _proto.isInModalMap = function isInModalMap(name) {
    var modalNameList = Object.keys(this.getData().modalMap);

    if (modalNameList.includes(name)) {
      return true;
    }

    return false;
  };
  /**
   *
   * 保存现阶段store，将store替换为新modal数据
   */

  _proto.newModalMap = function newModalMap(name) {
    var sign = this.isEdit();

    if (sign) {
      return {
        succeess: false,
        sign: 0,
      };
    } //新建modal name不能重名，否则直接报错

    var sign2 = this.isInModalMap(name);

    if (sign2) {
      return {
        succeess: false,
        sign: 1,
        param: name,
      };
    }

    var copyData = deepcopy(this.getData());
    this.newModaltoNormal(copyData, name);
    this.setData(copyData);
    return {
      succeess: true,
      sign: -1,
    };
  };
  /**
   *
   * 存储modal到主store的map中，切换主store
   * @memberof StoreChanger
   */

  _proto.closeModal = function closeModal() {
    var sign = this.isEdit();

    if (!sign) {
      return {
        success: false,
        sign: 0,
      };
    }

    var data = deepcopy(this.getData());
    this.changeModaltoNormal(data);
    this.setData(data);
    return {
      success: true,
      sign: 0,
    };
  };
  /**
   *
   * 删除弹窗，不能处于编辑弹窗状态
   * @param {string} name
   * @returns
   */

  _proto.removeModal = function removeModal(name) {
    var sign = this.isEdit();

    if (sign) {
      return {
        success: false,
        sign: 0,
      };
    }

    var sign2 = this.isInModalMap(name);

    if (!sign2) {
      return {
        success: false,
        sign: 1,
        param: name,
      };
    }

    var cloneData = deepcopy(this.getData());
    delete cloneData.modalMap[name];
    this.setData(cloneData);
    return {
      success: true,
      sign: -1,
    };
  };
  /**
   *
   * 重置需要注册事件
   * @param {IStoreData[]} initData
   * @param {boolean} [check=false] 清空编辑弹窗状态
   * @memberof Store
   */

  _proto.resetToInitData = function resetToInitData(initData, check) {
    if (check === void 0) {
      check = false;
    }

    this.storeDataList = initData;
    this.current = 0;
    var d = this.getData(); //如果是编辑模式，需要修改

    if (d.modalEditName !== "" && check) {
      this.changeModaltoNormal(d);
    }

    this.emit();
  };
  /**
   *
   * 注意重置需要注册事件
   * @param {IStoreData[]} initData
   * @param {number} current
   * @param {boolean} [check=false]
   * @memberof Store
   */

  _proto.resetToCustomData = function resetToCustomData(
    initData,
    current,
    check
  ) {
    if (check === void 0) {
      check = false;
    }

    this.storeDataList = initData;
    this.current = current; //如果是编辑模式，需要修改

    var d = this.getData();

    if (d.modalEditName !== "" && check) {
      this.changeModaltoNormal(d);
    }

    this.emit();
  };

  _proto.resetListeners = function resetListeners() {
    this.listeners = [];
  };

  _proto.replaceList = function replaceList(list) {
    this.storeDataList = list;
  };

  _proto.setForceUpdate = function setForceUpdate(fn) {
    this.forceupdate = fn;
  };

  _proto.forceUpdate = function forceUpdate() {
    this.forceupdate();
  };

  _proto.setIndex = function setIndex(num) {
    this.current = num;
  };

  _proto.redo = function redo() {
    var maxLength = this.storeDataList.length;

    if (this.current + 1 < maxLength) {
      this.current = this.current + 1;
      this.emit();
    }
  };

  _proto.undo = function undo() {
    if (this.current > 0) {
      this.current = this.current - 1;
      this.emit();
    }
  };

  _proto.cleanRedundant = function cleanRedundant(index) {
    this.storeDataList = this.storeDataList.slice(0, index + 1);
  };

  _proto.setData = function setData(data) {
    // 如果current不是最后那个，说明后面的被undo过的，如果要新增，那么需要清除之前的
    var flag = true;

    if (this.current + 1 !== this.storeDataList.length) {
      this.cleanRedundant(this.current);
      flag = false;
    }

    this.current = this.current + 1;
    this.storeDataList[this.current] = data;

    if (flag && this.current + 1 !== this.storeDataList.length) {
      this.storeDataList.length = this.current + 1;
    }

    this.emit();
  };

  _proto.cleanLast = function cleanLast() {
    if (this.current <= 1) {
      return;
    }

    var removeIndex = this.current - 1;
    this.storeDataList.splice(removeIndex, 1);
    this.current = this.current - 1;
  };

  _proto.emit = function emit() {
    var _this = this;

    this.listeners.forEach(function (fn) {
      fn(_this.getData());
    });
  };

  _proto.subscribe = function subscribe(listener) {
    var _this2 = this;

    this.listeners.push(listener);
    return function () {
      return (_this2.listeners = _this2.listeners.filter(function (v) {
        return v !== listener;
      }));
    };
  };

  return Store;
})();

var styleSheetId = "dooringx_dynamic_style";
var AnimateFactory = /*#__PURE__*/ (function () {
  function AnimateFactory(customAnimateName) {
    if (customAnimateName === void 0) {
      customAnimateName = [];
    }

    this.customAnimateName = customAnimateName;
  }

  var _proto = AnimateFactory.prototype;

  _proto.getCustomAnimateName = function getCustomAnimateName() {
    return this.customAnimateName;
  };

  _proto.searchSheet = function searchSheet() {
    var sheet = null;
    Array.from(document.styleSheets).forEach(function (v) {
      var node = v == null ? void 0 : v.ownerNode;

      if ((node == null ? void 0 : node.id) === styleSheetId) {
        sheet = v;
      }
    });
    return sheet;
  };

  _proto.getStyleSheets = function getStyleSheets() {
    var sheet = this.searchSheet();

    if (!sheet) {
      var style = document.createElement("style");
      style.id = styleSheetId;
      style.appendChild(document.createTextNode(""));
      document.head.appendChild(style);
    }

    sheet = this.searchSheet();
    return sheet;
  };
  /**
   *
   * 插入动画
   * @param {string} ruleText
   * @memberof AnimateFactory
   */

  _proto.inserKeyframeAnimate = function inserKeyframeAnimate(ruleText) {
    var sheet = this.getStyleSheets();
    if (sheet) sheet.insertRule(ruleText, sheet.cssRules.length);
  };
  /**
   *
   * 删除keyframe
   * @param {string} animateName
   * @returns
   * @memberof AnimateFactory
   */

  _proto.deleteKeyFrameAnimate = function deleteKeyFrameAnimate(animateName) {
    var sheets = this.getStyleSheets();

    if (!sheets) {
      return;
    }

    var len = sheets.cssRules.length;
    var ss = null;

    for (var i = 0; i < len; i++) {
      var rule = sheets.cssRules[i];
      var name = rule == null ? void 0 : rule.name;

      if (name && name === animateName) {
        ss = i;
      }
    }

    if (ss !== null) {
      sheets.deleteRule(ss);
    }
  };
  /**
   *
   * 配置时使用
   * @param {Array<CustomAnimateObj>} [customAnimateNameArr=[]]
   * @memberof AnimateFactory
   */

  _proto.addCustomAnimate = function addCustomAnimate(customAnimateNameArr) {
    if (customAnimateNameArr === void 0) {
      customAnimateNameArr = [];
    }

    this.customAnimateName = [].concat(
      this.customAnimateName,
      customAnimateNameArr
    );
  };
  /**
   *
   * 删除使用animateName 防止displayName重名 用完需要同步store
   * @param {string} animateName
   * @memberof AnimateFactory
   */

  _proto.deleteCustomAnimate = function deleteCustomAnimate(animateName) {
    this.customAnimateName = this.customAnimateName.filter(function (v) {
      return v.animateName !== animateName;
    });
  };
  /**
   *
   * 从配置项插入动画 导入设置
   * @memberof AnimateFactory
   */

  _proto.fromArrInsertKeyFrame = function fromArrInsertKeyFrame(
    customAnimateName
  ) {
    var _this = this;

    if (customAnimateName === void 0) {
      customAnimateName = this.customAnimateName;
    }

    customAnimateName.forEach(function (v) {
      _this.inserKeyframeAnimate(v.keyframe);
    });
  };
  /**
   *
   * 将this.customAnimateName写入store
   * @memberof AnimateFactory
   */

  _proto.syncToStore = function syncToStore(config) {
    // 先判断global的位置
    var store = config.getStore();
    var data = store.getData();
    var copy = deepCopy(data);
    var originGlobal = copy.globalState;
    originGlobal.customAnimate = [].concat(this.customAnimateName);
    store.setData(copy);
  };
  /**
   *
   * 将store中的配置写入config
   * 注意！只在导入新store后使用
   * @memberof AnimateFactory
   */

  _proto.syncStoreToConfig = function syncStoreToConfig(config) {
    var _data$globalState;

    var store = config.getStore();
    var data;
    data = store.getData();
    var dataAnimate =
      (_data$globalState = data.globalState) == null
        ? void 0
        : _data$globalState.customAnimate;
    this.customAnimateName = [].concat(dataAnimate);
  };
  /**
   *
   * 将用户输入转换为新的动画
   * @param {TransformItem} item
   * @memberof AnimateFactory
   */

  _proto.addUserInputIntoCustom = function addUserInputIntoCustom(
    item,
    config
  ) {
    // 先转换keyframe
    var keyframeItem = item.keyframes.map(function (v) {
      return (
        v.percent +
        "% {\n            transform:translate(" +
        v.positionX +
        "px, " +
        v.positionY +
        "px) scale(" +
        (v.scale / 100).toFixed(2) +
        ") rotate(" +
        v.rotate +
        "deg);\n         }"
      );
    });
    var keyframe =
      "@keyframes " +
      item.animateName +
      " {\n      " +
      keyframeItem.join(" ") +
      "\n    }";
    var customAnimateNameArr = [
      {
        displayName: item.displayName,
        keyframe: keyframe,
        animateName: item.animateName,
      },
    ]; // 添加内置

    this.addCustomAnimate(customAnimateNameArr); // 插入动画

    this.inserKeyframeAnimate(keyframe); // 写入store

    this.syncToStore(config);
  };

  return AnimateFactory;
})();

var defaultStore = {
  container: {
    width: 375,
    height: 667,
    isMinwx: true,
  },
  block: [],
  modalMap: {},
  dataSource: {
    defaultKey: "defaultValue",
  },
  globalState: {
    containerColor: "rgba(255,255,255,1)",
    title: "lowCode",
    description: "店铺模板",
    bodyColor: "rgba(255,255,255,1)",
    script: [],
    customAnimate: [],
    lineHeight: 1.575,
    fontSize: 14,
  },
  modalConfig: {},
  modalEditName: "",
  origin: null,
};
var defaultConfig = {
  initStoreData: [defaultStore],
  leftAllRegistMap: [],
  leftRenderListCategory: [],
  rightGlobalCustom: null,
  rightRenderListCategory: [],
  initComponentCache: {
    modalMask: {
      component: MmodalMask,
    },
  },
  initFunctionMap: {
    open_modal: {
      fn: function fn(_ctx, next, config, args) {
        var modalName = args["_modal"];
        var storeData = config.getStore().getData();
        createModal(modalName, storeData, config);
        next();
      },
      config: [
        {
          name: "弹窗名称",
          data: ["modal"],
          options: {
            receive: "_modal",
            multi: false,
          },
        },
      ],
      name: "打开弹窗函数",
      componentId: "_inner",
    },
    close_modal: {
      fn: function fn(_ctx, next, _config, args) {
        var modalName = args["_modal"];
        var fn = unmountMap.get(modalName);

        if (fn) {
          fn();
        }

        next();
      },
      config: [
        {
          name: "弹窗名称",
          data: ["modal"],
          options: {
            receive: "_modal",
            multi: false,
          },
        },
      ],
      name: "关闭弹窗函数",
      componentId: "_inner",
    },
  },
  initDataCenterMap: {},
  initCommandModule: [],
  initFormComponents: {},
  containerIcon: /*#__PURE__*/ React.createElement(
    VerticalAlignMiddleOutlined,
    null
  ),
};
/**
 *
 * 部分无法合并属性如果b传了会以b为准
 * initstore不合并
 * leftallregistmap合并
 * leftRenderListCategory合并
 * rightRenderListCategory合并
 * rightGlobalCustom 不合并
 * initComponentCache合并
 * initFunctionMap合并
 * initDataCenterMap合并
 * initCommandModule合并
 * initFormComponents合并
 * containerIcon不合并
 *
 * @export InitConfig
 */

function userConfigMerge(a, b) {
  var mergeConfig = {
    initStoreData: [defaultStore],
    leftAllRegistMap: [],
    leftRenderListCategory: [],
    rightRenderListCategory: [],
    initComponentCache: {},
    initFunctionMap: {},
    initDataCenterMap: {},
    initCommandModule: [],
    rightGlobalCustom: null,
    initFormComponents: {},
    containerIcon: null,
  };

  if (!b) {
    return userConfigMerge(mergeConfig, a);
  }

  mergeConfig.initStoreData = b.initStoreData
    ? [].concat(b.initStoreData)
    : a.initStoreData
    ? [].concat(a.initStoreData)
    : [defaultStore];
  mergeConfig.containerIcon = b.containerIcon
    ? b.containerIcon
    : a.containerIcon;
  mergeConfig.rightGlobalCustom = b.rightGlobalCustom
    ? b.rightGlobalCustom
    : a.rightGlobalCustom;
  mergeConfig.leftAllRegistMap = b.leftAllRegistMap
    ? a.leftAllRegistMap
      ? [].concat(a.leftAllRegistMap, b.leftAllRegistMap)
      : [].concat(b.leftAllRegistMap)
    : a.leftAllRegistMap
    ? [].concat(a.leftAllRegistMap)
    : [];
  mergeConfig.leftRenderListCategory = b.leftRenderListCategory
    ? a.leftRenderListCategory
      ? [].concat(a.leftRenderListCategory, b.leftRenderListCategory)
      : [].concat(b.leftRenderListCategory)
    : a.leftRenderListCategory
    ? [].concat(a.leftRenderListCategory)
    : [].concat(defaultConfig.leftRenderListCategory);
  mergeConfig.rightRenderListCategory = b.rightRenderListCategory
    ? a.rightRenderListCategory
      ? [].concat(a.rightRenderListCategory, b.rightRenderListCategory)
      : [].concat(b.rightRenderListCategory)
    : a.rightRenderListCategory
    ? [].concat(a.rightRenderListCategory)
    : [].concat(defaultConfig.rightRenderListCategory);
  mergeConfig.initComponentCache = _extends(
    {},
    a.initComponentCache,
    b.initComponentCache
  );
  mergeConfig.initFunctionMap = _extends(
    {},
    a.initFunctionMap,
    b.initFunctionMap
  );
  mergeConfig.initFormComponents = _extends(
    {},
    a.initFormComponents,
    b.initFormComponents
  );
  mergeConfig.initDataCenterMap = _extends(
    {},
    a.initDataCenterMap,
    b.initDataCenterMap
  );
  mergeConfig.initCommandModule = b.initCommandModule
    ? a.initCommandModule
      ? [].concat(a.initCommandModule, b.initCommandModule)
      : [].concat(b.initCommandModule)
    : a.initCommandModule
    ? [].concat(a.initCommandModule)
    : [];
  return mergeConfig;
}
/**
 *
 *
 * @export 用户配置项
 * @class UserConfig
 */

var UserConfig = /*#__PURE__*/ (function () {
  function UserConfig(initConfig) {
    this.store = new Store();
    this.componentRegister = new ComponentRegister();
    this.formRegister = new FormComponentRegister();
    this.animateFactory = new AnimateFactory();
    this.componentCache = {};
    this.asyncComponentUrlMap = {};
    this.marklineConfig = marklineConfig;
    this.contextMenuState = contextMenuState;
    this.scaleState = scaleState;
    this.focusState = focusState;
    this.collapsed = false;
    this.ticker = true;
    this.containerOverFlow = true;

    this.containerForceUpdate = function () {};

    this.timeline = false;
    this.timelineConfig = {
      autoFocus: true,
      scrollDom: null,
    };
    this.timelineNeedleConfig = {
      status: "start",
      runFunc: function runFunc() {},
      resetFunc: function resetFunc() {},
      pauseFunc: function pauseFunc() {},
      setNeedle: function setNeedle() {},
      current: 0,
      isRefresh: true,
    };
    this.createdFn = [];

    this.created = function () {};

    this.beforeOnMountedFn = [];

    this.beforeOnMounted = function () {};

    this.onMountedFn = [];

    this.onMounted = function () {};

    this.destroyedFn = [];

    this.destroyed = function () {};

    this.blockForceUpdate = [];
    this.waitAnimate = false;
    this.wrapperMoveState = wrapperMoveState;
    this.iframeWrapperMoveState = wrapperMoveState$1;

    this.refreshIframe = function () {};

    this.sendParent = function (message) {
      window.parent.postMessage(message, "*");
    };

    this.iframeOrigin = "";
    this.iframeId = "yh-container-iframe";
    this.i18n = true;
    this.SCRIPTGLOBALNAME = "DOORINGXPLUGIN";
    this.scriptLoading = false;

    this.leftForceUpdate = function () {};

    this.customMap = {};
    var mergeConfig = userConfigMerge(defaultConfig, initConfig);
    this.initConfig = mergeConfig;
    this.commanderRegister = new CommanderWrapper(this.store, {}, this);
    this.eventCenter = new EventCenter({}, mergeConfig.initFunctionMap);
    this.dataCenter = new DataCenter(mergeConfig.initDataCenterMap);
    this.init(); // 右侧配置项注册 初始注册组件暂时固定
  }

  var _proto = UserConfig.prototype;

  _proto.toRegist = function toRegist() {
    var _this = this;

    var modules = this.initConfig.initFormComponents;
    formComponentRegisterFn(this.formRegister, modules);
    var cache = this.initConfig.initComponentCache;
    this.componentCache = cache; // 拿到组件缓存后，先同步加载map上组件

    Object.values(cache).forEach(function (v) {
      if (v.component) {
        _this.registComponent(v.component);
      }
    }); // 异步组件注册地址

    this.initConfig.leftAllRegistMap.forEach(function (v) {
      if (v.urlFn) {
        //@ts-ignore
        _this.asyncComponentUrlMap[v.component] = v.urlFn;
      }
    }); // 注册画布上组件

    this.store.getData().block.forEach(function (v) {
      _this.asyncRegistComponent(v.name);
    }); // 注册data

    this.dataCenter = new DataCenter(this.initConfig.initDataCenterMap); //数据需要加上store上的

    this.dataCenter.initAddToDataMap(this.store.getData()); // 修改事件与数据初始

    this.eventCenter = new EventCenter({}, this.initConfig.initFunctionMap); // 注册画布事件

    this.eventCenter.syncEventMap(this.store.getData(), this.store);
  };

  _proto.init = function init() {
    this.store.resetToInitData(deepCopy(this.initConfig.initStoreData), true);
    this.toRegist();
  };

  _proto.getCollapse = function getCollapse() {
    return this.collapsed;
  };

  _proto.getStoreJSON = function getStoreJSON() {
    return JSON.stringify(this.store.getData());
  };

  _proto.parseStoreJson = function parseStoreJson(json) {
    return JSON.parse(json);
  };
  /**
   *
   * 重设store并根据store重设
   * @param {IStoreData[]} data
   * @memberof UserConfig
   */

  _proto.resetData = function resetData(data) {
    this.store.resetToInitData(data, true);
    this.toRegist();
    this.animateFactory.syncStoreToConfig(this);
  };

  _proto.getWrapperMove = function getWrapperMove() {
    return {
      data: this.wrapperMoveState,
      iframe: this.iframeWrapperMoveState,
    };
  };

  _proto.getFocusState = function getFocusState() {
    return this.focusState;
  };

  _proto.getScaleState = function getScaleState() {
    return this.scaleState;
  };

  _proto.getDataCenter = function getDataCenter() {
    return this.dataCenter;
  };

  _proto.getEventCenter = function getEventCenter() {
    return this.eventCenter;
  };

  _proto.getAnimateFactory = function getAnimateFactory() {
    return this.animateFactory;
  };

  _proto.getConfig = function getConfig() {
    return this.initConfig;
  };

  _proto.getStore = function getStore() {
    return this.store;
  };

  _proto.getComponentRegister = function getComponentRegister() {
    return this.componentRegister;
  };

  _proto.getContextMenuState = function getContextMenuState() {
    return this.contextMenuState;
  };

  _proto.getFormRegister = function getFormRegister() {
    return this.formRegister;
  };

  _proto.getCommanderRegister = function getCommanderRegister() {
    return this.commanderRegister;
  };
  /**
   *
   * 用于获取当前store数据，已判断弹窗编辑 不会储存正在编辑的内容
   * @returns
   * @memberof UserConfig
   */

  _proto.getCurrentData = function getCurrentData() {
    return this.store.getData();
  };
  /**
   *
   * 以默认设置重置配置项
   * @param {Partial<InitConfig>} v
   * @memberof UserConfig
   */

  _proto.resetConfig = function resetConfig(v) {
    var mergeConfig = userConfigMerge(defaultConfig, v);
    this.initConfig = mergeConfig;
    this.init();
    this.leftForceUpdate();
    this.store.forceUpdate();
  };
  /**
   *  会重置配置，请修改配置后增加
   * 异步增加左侧tab页
   * @memberof UserConfig
   */

  _proto.addLeftCategory = function addLeftCategory(v) {
    var obj = {};
    obj.leftRenderListCategory = v;
    this.initConfig = userConfigMerge(this.initConfig, obj);
    this.init();
    this.leftForceUpdate();
    this.store.forceUpdate();
  };
  /**
   *  会重置配置，请修改配置后增加
   * 异步增加右侧tab页
   * @memberof UserConfig
   */

  _proto.addRightCategory = function addRightCategory(v) {
    var obj = {};
    obj.rightRenderListCategory = v;
    this.initConfig = userConfigMerge(this.initConfig, obj);
    this.init();
    this.leftForceUpdate();
    this.store.forceUpdate();
  };
  /**
   * 会重置配置，请修改配置后增加
   * 异步增加组件map
   * @memberof UserConfig
   */

  _proto.addCoRegistMap = function addCoRegistMap(v) {
    var obj = {};
    obj.leftAllRegistMap = [v];
    this.initConfig = userConfigMerge(this.initConfig, obj);
    this.init();
    this.leftForceUpdate();
    this.store.forceUpdate();
  };
  /**
   *会重置配置，请修改配置后增加
   * 异步修改config 重置store
   * @memberof UserConfig
   */

  _proto.setConfig = function setConfig(v) {
    this.initConfig = userConfigMerge(this.initConfig, v);
    this.init();
    this.leftForceUpdate();
    this.store.forceUpdate();
  };
  /**
   *
   * 同步注册指令
   * @param {CommanderItem} command
   * @memberof UserConfig
   */

  _proto.registCommander = function registCommander(command) {
    this.commanderRegister.register(command);
  };
  /**
   *
   * 用于修改markline配置
   * @returns
   * @memberof UserConfig
   */

  _proto.getMarklineConfig = function getMarklineConfig() {
    return this.marklineConfig;
  };

  _proto.getComponentCache = function getComponentCache() {
    return this.componentCache;
  };
  /**
   *
   * 同步注册组件，不会检测缓存是否存在
   * @param {ComponentItemFactory} item
   * @memberof UserConfig
   */

  _proto.registComponent = function registComponent(item) {
    this.componentRegister.register(item);
  };
  /**
   *
   * 异步注册组件，会判定缓存是否存在
   * @param {string} name
   * @memberof UserConfig
   */

  _proto.asyncRegistComponent =
    /*#__PURE__*/
    (function () {
      var _asyncRegistComponent = /*#__PURE__*/ _asyncToGenerator(
        /*#__PURE__*/ runtime_1.mark(function _callee(name) {
          var chunk, chunkDefault;
          return runtime_1.wrap(
            function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    if (
                      !(
                        !this.componentCache[name] &&
                        this.asyncComponentUrlMap[name]
                      )
                    ) {
                      _context.next = 8;
                      break;
                    }

                    _context.next = 3;
                    return this.asyncComponentUrlMap[name]();

                  case 3:
                    chunk = _context.sent;
                    chunkDefault = chunk["default"];
                    this.componentRegister.register(chunkDefault);
                    this.componentCache[name] = {
                      component: chunkDefault,
                    };
                    this.componentRegister.emitEvent(name);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            },
            _callee,
            this
          );
        })
      );

      function asyncRegistComponent(_x) {
        return _asyncRegistComponent.apply(this, arguments);
      }

      return asyncRegistComponent;
    })();

  _proto.scriptRegistComponentSingle = function scriptRegistComponentSingle(
    item,
    leftProps
  ) {
    this.registComponent(item);
    this.addCoRegistMap(leftProps);
  }; // foreach可能导致问题
  // scriptRegistComponentMulti(
  // 	items: ComponentItemFactory[],
  // 	leftProps: LeftRegistComponentMapItem[]
  // ) {
  // 	items.forEach((item) => {
  // 		this.registComponent(item);
  // 	});
  // 	const obj = {} as InitConfig;
  // 	obj.leftAllRegistMap = leftProps;
  // 	this.initConfig = userConfigMerge(this.initConfig, obj);
  // 	this.init();
  // 	this.store.forceUpdate();
  // }

  /**
   *
   * 分类信息需要单独存储后加载
   * @param {string} src  url地址
   * @param {Partial<LeftRegistComponentMapItem>} leftProps 分类
   * @param {Function} [callback] 回调
   * @return {*}
   * @memberof UserConfig
   */

  _proto.scriptSingleLoad = function scriptSingleLoad(
    src,
    leftProps,
    callback
  ) {
    var _this2 = this;

    var storeData = this.store.getData();
    var globalState = storeData.globalState;

    if (globalState["script"].includes(src)) {
      console.error(src + "scripts have been loaded");
      return;
    }

    if (!this.scriptLoading) {
      this.scriptLoading = true;
      var script = document.createElement("script");
      script.src = src;

      script.onload = function () {
        var item = window[_this2.SCRIPTGLOBALNAME];

        try {
          var left = leftProps;
          left.component = item.name;
          left.displayName = item.display;

          _this2.scriptRegistComponentSingle(item, left);
        } catch (e) {
          console.error(e);
        } // 前面加载会重置store 新增组件需要事件初始化

        setTimeout(function () {
          window[_this2.SCRIPTGLOBALNAME] = undefined;
          globalState = _this2.store.getData().globalState;
          globalState["script"].push(src);
          storeData.globalState = globalState;

          _this2.store.resetToInitData([storeData], true);

          _this2.store.forceUpdate();

          _this2.scriptLoading = false;

          if (callback) {
            callback();
          }
        });
      };

      document.body.appendChild(script);
    }
  };

  return UserConfig;
})();

/*

 * @Date: 2021-03-14 04:29:09
 * @LastEditors:
 * @LastEditTime: 2021-07-06 23:45:02
 * @FilePath: \dooringv2\packages\dooring-v2-lib\src\core\components\formTypes.ts
 */
function createPannelOptions(type, option) {
  return {
    type: type,
    option: option,
  };
}

var CommanderItemFactory = function CommanderItemFactory(
  name,
  keyboard,
  excute,
  display,
  init,
  destroy
) {
  if (init === void 0) {
    init = function init() {};
  }

  if (destroy === void 0) {
    destroy = function destroy() {};
  }

  this.name = name;
  this.keyboard = keyboard;
  this.excute = excute;
  this.display = display;
  this.init = init;
  this.destroy = destroy;
};

/*

 * @Date: 2022-04-27 22:15:24
 * @LastEditors:
 * @LastEditTime: 2022-04-27 22:38:59
 * @FilePath: \lowcode\packages\lowcode-lib\src\hooks\useRegistFunc.ts
 */
/**
 *
 *
 * @export 用于简化注册函数代码
 * @param {boolean} dep 配置的开关
 * @param {('preview' | 'edit')} context 传递的环境变量
 * @param {Function} registFn 注册的函数
 */

function useRegistFunc(dep, context, registFn) {
  useEffect(
    function () {
      var unRegist = function unRegist() {};

      if (dep) {
        unRegist = registFn;
      }

      return function () {
        if (context === "preview") {
          unRegist(); // 必须在预览时注销，否则影响二次点击效果，不在预览注销影响编辑时跨弹窗
        }
      };
    },
    [context, dep, registFn]
  );
}

function Container$1(props) {
  var editContainerStyle = props.editContainerStyle,
    previewContainerStyle = props.previewContainerStyle;

  var _useState = useState({
      store: defaultStore,
      scaleState: {
        value: 0,
        maxValue: 0,
        minValue: 0,
      },
      isEdit: false,
      wrapperState: props.config.getWrapperMove(),
      origin: null,
    }),
    message = _useState[0],
    setMessage = _useState[1];

  var state = message.store;
  var scaleState = message.scaleState;
  var isEdit = message.isEdit;

  var bgColor = function bgColor() {
    if (isEdit) {
      return "rgba(255,255,255,1)";
    } else {
      return state.globalState.containerColor;
    }
  };

  var transform = useMemo(
    function () {
      if (props.context === "edit") {
        return (
          "scale(" +
          scaleState.value +
          ") translate(" +
          wrapperMoveState$1.needX +
          "px, " +
          wrapperMoveState$1.needY +
          "px)"
        );
      } else {
        return undefined;
      }
    },
    [props.context, scaleState.value]
  );
  useEffect(
    function () {
      var fn = function fn(e) {
        if (typeof e.data !== "object") {
          return;
        }

        if (!e.data.store) {
          // 后续通信待定
          return;
        }

        var data = e.data;
        setMessage(data);
        props.config.resetData([data.store]);
        props.config.scaleState = data.scaleState;
      };

      window.addEventListener("message", fn);
      window.parent.postMessage("ready", "*");
      return function () {
        window.removeEventListener("message", fn);
      };
    },
    [props.config]
  );
  return React.createElement(
    React.Fragment,
    null,
    props.context === "edit" &&
      React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "div",
          Object.assign(
            {
              style: {
                display: "flex",
                transform: "scale(" + scaleState.value + ")",
                transformOrigin: "left top",
                position: "absolute",
              },
            },
            onWheelEventIframe(props.config, scaleState)
          ),
          React.createElement(
            "div",
            Object.assign(
              {
                id: "yh-container",
                className: styles.yh_container,
                style: _extends(
                  {
                    height: state.container.height + "px",
                    width: state.container.width + "px",
                    backgroundColor: bgColor(),
                    position: "relative",
                    overflow: "hidden",
                  },
                  editContainerStyle
                ),
              },
              props.context === "edit"
                ? containerDragResolve(props.config)
                : null,
              props.context === "edit"
                ? innerContainerDrag(props.config)
                : null,
              props.context === "edit"
                ? containerFocusRemove(props.config)
                : null
            ),
            state.block.map(function (v) {
              return React.createElement(Blocks, {
                config: props.config,
                key: v.id,
                data: v,
                context: props.context,
              });
            })
          )
        )
      ),
    props.context === "preview" &&
      React.createElement(
        "div",
        {
          id: "yh-container-preview",
          className: styles.yh_container_preview,
          style: _extends(
            {
              height: getRealHeight(state.container.height) + "px",
              width: "100%",
              position: "relative",
              overflow: "hidden",
              backgroundColor: bgColor(),
              transform: transform,
            },
            previewContainerStyle
          ),
        },
        state.block.map(function (v) {
          return React.createElement(Blocks, {
            key: v.id,
            config: props.config,
            data: v,
            context: props.context,
          });
        })
      )
  );
}

/*

 * @Date: 2021-07-12 15:54:35
 * @LastEditors:
 * @LastEditTime: 2022-01-13 13:41:16
 * @FilePath: \lowcode\packages\lowcode-lib\src\components\IframeWrapperMove\ticker.tsx
 */
var width$1 = "20px";
var indent$1 = 50;

function Ticker$1(props) {
  var topRef = useRef(null);
  var leftRef = useRef(null);

  var _useState = useState(0),
    topRender = _useState[0],
    setTopRender = _useState[1];

  var _useState2 = useState(0),
    leftRender = _useState2[0],
    setLeftRender = _useState2[1];

  var scale = props.config.getScaleState().value;
  useEffect(
    function () {
      var timer = setTimeout(function () {
        if (topRef.current) {
          var _width = topRef.current.getBoundingClientRect().width;
          var renderWidth = Math.ceil(_width / 10 / scale);

          if (renderWidth < Math.pow(2, 32) - 1) {
            setTopRender(renderWidth);
          }
        } // left可以不用放，但为了更新统一

        if (leftRef.current) {
          var height = leftRef.current.getBoundingClientRect().height;
          var renderHeight = Math.ceil(height / 10 / scale);

          if (renderHeight < Math.pow(2, 32) - 1) {
            setLeftRender(renderHeight);
          }
        }
      }, 300);
      return function () {
        clearTimeout(timer);
      };
    },
    [props.config, props.config.collapsed, scale]
  );
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      {
        ref: topRef,
        style: {
          position: "absolute",
          top: 0,
          left: indent$1,
          width: "100%",
          height: width$1,
          display: "flex",
          justifyContent: "space-between",
          userSelect: "none",
        },
      },
      Array(topRender)
        .fill(1)
        .map(function (_, i) {
          if (i % 10 === 0) {
            return React.createElement(
              "div",
              {
                key: i,
                style: {
                  background: "rgb(204, 204, 204)",
                  width: "1px",
                  height: "12px",
                  position: "relative",
                  userSelect: "none",
                },
              },
              React.createElement(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: "20px",
                    fontSize: "10px",
                    left: "-2px",
                    userSelect: "none",
                  },
                },
                i
              )
            );
          } else {
            return React.createElement("div", {
              key: i,
              style: {
                background: "rgb(204, 204, 204)",
                width: "1px",
                height: "6px",
              },
            });
          }
        })
    ),
    React.createElement(
      "div",
      {
        ref: leftRef,
        style: {
          position: "absolute",
          top: indent$1,
          left: 0,
          width: width$1,
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          userSelect: "none",
        },
      },
      Array(leftRender)
        .fill(1)
        .map(function (_, i) {
          if (i % 10 === 0) {
            return React.createElement(
              "div",
              {
                key: i,
                style: {
                  background: "rgb(204, 204, 204)",
                  width: "12px",
                  height: "1px",
                  position: "relative",
                  userSelect: "none",
                },
              },
              React.createElement(
                "div",
                {
                  style: {
                    position: "absolute",
                    left: "20px",
                    fontSize: "10px",
                    top: "-2px",
                    userSelect: "none",
                  },
                },
                i
              )
            );
          } else {
            return React.createElement("div", {
              key: i,
              style: {
                background: "rgb(204, 204, 204)",
                width: "6px",
                height: "1px",
                userSelect: "none",
              },
            });
          }
        })
    )
  );
}

var _excluded$1 = ["children", "style", "classNames", "config", "extra"];

function ContainerWrapper$1(props) {
  var children = props.children,
    style = props.style,
    classNames = props.classNames,
    config = props.config,
    extra = props.extra,
    rest = _objectWithoutPropertiesLoose(props, _excluded$1);

  var ref = useRef(null);
  var ticker = props.config.ticker;
  var wrapperMoveState = config.getWrapperMove().iframe;
  var scaleState = config.getScaleState();
  var state = props.config.getStore().getData();
  return React.createElement(
    "div",
    Object.assign(
      {
        className: "ant-menu " + (classNames ? classNames : ""),
        ref: ref,
        style: _extends(
          {
            backgroundColor: "#f0f0f0",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
            userSelect: "none",
          },
          style
        ),
      },
      wrapperEvent$1(ref, props.config),
      onWheelEventIframe(props.config, scaleState),
      rest
    ),
    config.timeline &&
      React.createElement(TimeLine, {
        config: config,
      }),
    React.createElement(
      "div",
      {
        style: {
          position: "absolute",
          transform:
            "translate(" +
            wrapperMoveState.needX +
            "px, " +
            wrapperMoveState.needY +
            "px)",
          width: state.container.width * scaleState.value,
          height: state.container.height * scaleState.value,
        },
      },
      children
    ),
    extra && extra,
    ticker &&
      React.createElement(Ticker$1, {
        config: props.config,
      })
  );
}

/*

 * @Date: 2021-07-20 10:36:55
 * @LastEditors:
 * @LastEditTime: 2021-07-27 15:13:35
 * @FilePath: \lowcode\packages\lowcode-lib\src\components\iframeTarget.tsx
 */
function IframeTarget(props) {
  var scaleState = props.config.getScaleState();
  var state = props.config.getStore().getData();
  return React.createElement(
    "div",
    {
      style: {
        width: state.container.width * scaleState.value,
        height: state.container.height * scaleState.value + 1,
        position: "relative",
      },
    },
    React.createElement(
      "div",
      Object.assign(
        {},
        containerDragResolve(props.config),
        innerContainerDrag(props.config),
        containerFocusRemove(props.config),
        {
          style: {
            width: state.container.width * scaleState.value,
            height: state.container.height * scaleState.value,
            position: "absolute",
          },
        }
      ),
      React.createElement(
        "div",
        {
          id: "yh-container-iframe-mask",
          style: {
            display: "flex",
            transform: "scale(" + scaleState.value + ")",
            transformOrigin: "left top",
            position: "absolute",
            width: state.container.width,
            height: state.container.height,
          },
        },
        state.block.map(function (v) {
          return React.createElement(Blocks, {
            config: props.config,
            key: v.id,
            data: v,
            context: "edit",
            iframe: true,
          });
        }),
        React.createElement(NormalMarkLineRender, {
          config: props.config,
          iframe: true,
        })
      )
    ),
    React.createElement(
      "iframe",
      Object.assign(
        {
          title: "editor",
          id: "yh-container-iframe",
          scrolling: "no",
          style: {
            width: state.container.width * scaleState.value,
            height: state.container.height * scaleState.value,
            border: "none",
            userSelect: "none",
          },
        },
        props.iframeProps
      )
    ),
    React.createElement(
      "div",
      {
        style: {
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "scale(" + scaleState.value + ")",
          width: "100%",
          transformOrigin: "top",
        },
      },
      React.createElement(
        "div",
        {
          style: {
            fontSize: "20px",
            cursor: "s-resize",
          },
          onMouseDown: function onMouseDown(e) {
            return containerResizer.onMousedown(e, props.config);
          },
        },
        props.config.getConfig().containerIcon
      )
    )
  );
}

export {
  CommanderItemFactory,
  ComponentItemFactory,
  Container,
  ContainerWrapper,
  Control,
  Container$1 as IframeContainer,
  ContainerWrapper$1 as IframeContainerWrapper,
  IframeTarget,
  LeftConfig,
  LeftDataPannel,
  Preview,
  RightConfig,
  UserConfig,
  arrayMove,
  changeUserValue,
  changeUserValueRecord,
  createPannelOptions,
  createUid,
  deepCopy,
  defaultStore,
  dragEventResolve,
  focusState,
  innerContainerDragUp,
  index as locale,
  postMessage,
  rgba2Obj,
  scaleFn,
  specialCoList,
  specialFnList,
  swap,
  unmountContextMenu,
  useDynamicAddEventCenter,
  useIframeHook,
  useIframePostMessage,
  useRegistFunc,
  useStoreState,
  userConfigMerge,
};
//# sourceMappingURL=lowcode-lib.esm.js.map
