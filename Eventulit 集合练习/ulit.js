var EventUilt = {
  addHander: function (ele, type, method) {
    if (addEventListener) {
      ele.addEventListener(type, method, false);
    } else if (attachEvent) {
      ele.attachEvent('on' + type, method);
    } else {
      ele['on' + type] = method;
    }
  },
  removeHandler: function (ele, type, method) {
    if (removeEventListener) {
      ele.removeEventListener(type, method, false);
    } else if (detachEvent) {
      ele.detachEvent('on' + type, method);
    } else {
      ele['on' + type] = null;
    }
  }
};