"use strict";
exports.__esModule = true;
var keycode_1 = require("./keycode");
var CommanderWrapper = /** @class */ (function () {
  function CommanderWrapper(store, commandMap, config) {
    if (commandMap === void 0) {
      commandMap = {};
    }
    this.store = store;
    this.commandMap = commandMap;
    this.config = config;
  }
  CommanderWrapper.prototype.getList = function () {
    return this.commandMap;
  };
  CommanderWrapper.prototype.register = function (item) {
    item.init();
    if (this.commandMap[item.name]) {
      // console.error(`${item.name} commander has registed`);
      return;
    }
    this.commandMap[item.name] = item;
    //注册快捷键，快捷键执行调用excute
    var remove = this.registerKeyBoard(item);
    //改写销毁方法
    var origindestroy = item.destroy;
    var newdestroy = function () {
      remove();
      origindestroy();
    };
    item.destroy = newdestroy;
  };
  CommanderWrapper.prototype.registerKeyBoard = function (current) {
    var _this = this;
    if (current.keyboard.length === 0) {
      return function () {};
    }
    var onKeydown = function (e) {
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
        var res = keycode_1.keycodeFilter(key);
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
  CommanderWrapper.prototype.unRegister = function (name) {
    if (!this.commandMap[name]) {
      console.error(name + " commander not found");
      return;
    }
    var item = this.commandMap[name];
    item.destroy();
    delete this.commandMap[item.name];
  };
  CommanderWrapper.prototype.exec = function (name, options) {
    if (!this.commandMap[name]) {
      console.error(name + " commander not found");
      return;
    }
    this.commandMap[name].excute(this.store, this.config, options);
  };
  return CommanderWrapper;
})();
exports["default"] = CommanderWrapper;
