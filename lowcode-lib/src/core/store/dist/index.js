"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
exports.__esModule = true;
exports.initialData = void 0;
/*

 * @Date: 2021-03-14 04:29:09
 * @LastEditors: 
 * @LastEditTime: 2022-04-23 18:53:36
 * @FilePath: \lowcode\packages\lowcode-lib\src\core\store\index.ts
 */
var deepcopy_1 = require("deepcopy");
var createModal_1 = require("./createModal");
exports.initialData = {
  container: {
    width: 375,
    height: 667,
  },
  block: [],
  modalMap: {},
  dataSource: {},
  globalState: {},
  modalConfig: {},
  origin: null,
  modalEditName: "",
};
var Store = /** @class */ (function () {
  function Store(storeDataList, listeners, current, forceupdate) {
    if (storeDataList === void 0) {
      storeDataList = [exports.initialData];
    }
    if (listeners === void 0) {
      listeners = [];
    }
    if (current === void 0) {
      current = 0;
    }
    if (forceupdate === void 0) {
      forceupdate = function () {};
    }
    this.storeDataList = storeDataList;
    this.listeners = listeners;
    this.current = current;
    this.forceupdate = forceupdate;
  }
  Store.prototype.getData = function () {
    return this.storeDataList[this.current];
  };
  Store.prototype.getStoreList = function () {
    return this.storeDataList;
  };
  Store.prototype.getListeners = function () {
    return this.listeners;
  };
  Store.prototype.getIndex = function () {
    return this.current;
  };
  Store.prototype.getOriginBlock = function () {
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
  Store.prototype.changeModaltoNormal = function (data) {
    var _a;
    if (data.modalEditName === "") {
      return;
    }
    var tmp = data.origin || [];
    data.modalMap = __assign(
      __assign({}, data.modalMap),
      ((_a = {}), (_a[data.modalEditName] = data.block), _a)
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
  Store.prototype.changeNormalToModal = function (data, name) {
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
    return { success: true, sign: -1 };
  };
  /**
   *
   * 非编辑状态新增
   * @param {IStoreData} data
   * @returns
   * @memberof Store
   */
  Store.prototype.newModaltoNormal = function (data, name) {
    var _a;
    if (data.modalEditName !== "") {
      return;
    }
    var tmp = data.block || [];
    var modalBlock = createModal_1.createDefaultModalBlock();
    data.modalMap = __assign(
      __assign({}, data.modalMap),
      ((_a = {}), (_a[name] = modalBlock), _a)
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
  Store.prototype.isEdit = function () {
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
  Store.prototype.isInModalMap = function (name) {
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
  Store.prototype.newModalMap = function (name) {
    var sign = this.isEdit();
    if (sign) {
      return {
        succeess: false,
        sign: 0,
      };
    }
    //新建modal name不能重名，否则直接报错
    var sign2 = this.isInModalMap(name);
    if (sign2) {
      return {
        succeess: false,
        sign: 1,
        param: name,
      };
    }
    var copyData = deepcopy_1["default"](this.getData());
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
  Store.prototype.closeModal = function () {
    var sign = this.isEdit();
    if (!sign) {
      return {
        success: false,
        sign: 0,
      };
    }
    var data = deepcopy_1["default"](this.getData());
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
  Store.prototype.removeModal = function (name) {
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
    var cloneData = deepcopy_1["default"](this.getData());
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
  Store.prototype.resetToInitData = function (initData, check) {
    if (check === void 0) {
      check = false;
    }
    this.storeDataList = initData;
    this.current = 0;
    var d = this.getData();
    //如果是编辑模式，需要修改
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
  Store.prototype.resetToCustomData = function (initData, current, check) {
    if (check === void 0) {
      check = false;
    }
    this.storeDataList = initData;
    this.current = current;
    //如果是编辑模式，需要修改
    var d = this.getData();
    if (d.modalEditName !== "" && check) {
      this.changeModaltoNormal(d);
    }
    this.emit();
  };
  Store.prototype.resetListeners = function () {
    this.listeners = [];
  };
  Store.prototype.replaceList = function (list) {
    this.storeDataList = list;
  };
  Store.prototype.setForceUpdate = function (fn) {
    this.forceupdate = fn;
  };
  Store.prototype.forceUpdate = function () {
    this.forceupdate();
  };
  Store.prototype.setIndex = function (num) {
    this.current = num;
  };
  Store.prototype.redo = function () {
    var maxLength = this.storeDataList.length;
    if (this.current + 1 < maxLength) {
      this.current = this.current + 1;
      this.emit();
    }
  };
  Store.prototype.undo = function () {
    if (this.current > 0) {
      this.current = this.current - 1;
      this.emit();
    }
  };
  Store.prototype.cleanRedundant = function (index) {
    this.storeDataList = this.storeDataList.slice(0, index + 1);
  };
  Store.prototype.setData = function (data) {
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
  Store.prototype.cleanLast = function () {
    if (this.current <= 1) {
      return;
    }
    var removeIndex = this.current - 1;
    this.storeDataList.splice(removeIndex, 1);
    this.current = this.current - 1;
  };
  Store.prototype.emit = function () {
    var _this = this;
    this.listeners.forEach(function (fn) {
      fn(_this.getData());
    });
  };
  Store.prototype.subscribe = function (listener) {
    var _this = this;
    this.listeners.push(listener);
    return function () {
      return (_this.listeners = _this.listeners.filter(function (v) {
        return v !== listener;
      }));
    };
  };
  return Store;
})();
exports["default"] = Store;
