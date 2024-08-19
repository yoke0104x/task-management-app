import {
  __commonJS
} from "./chunk-5WRI5ZAA.js";

// node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/.pnpm/rc-pagination@4.2.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-pagination/lib/locale/en_GB.js
var require_en_GB = __commonJS({
  "node_modules/.pnpm/rc-pagination@4.2.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-pagination/lib/locale/en_GB.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var locale = {
      // Options
      items_per_page: "/ page",
      jump_to: "Go to",
      jump_to_confirm: "confirm",
      page: "Page",
      // Pagination
      prev_page: "Previous Page",
      next_page: "Next Page",
      prev_5: "Previous 5 Pages",
      next_5: "Next 5 Pages",
      prev_3: "Previous 3 Pages",
      next_3: "Next 3 Pages",
      page_size: "Page Size"
    };
    var _default = exports.default = locale;
  }
});

// node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    function _typeof(o) {
      "@babel/helpers - typeof";
      return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
    }
    module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/toPrimitive.js
var require_toPrimitive = __commonJS({
  "node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/toPrimitive.js"(exports, module) {
    var _typeof = require_typeof()["default"];
    function toPrimitive(t, r) {
      if ("object" != _typeof(t) || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }
    module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/toPropertyKey.js
var require_toPropertyKey = __commonJS({
  "node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/toPropertyKey.js"(exports, module) {
    var _typeof = require_typeof()["default"];
    var toPrimitive = require_toPrimitive();
    function toPropertyKey(t) {
      var i = toPrimitive(t, "string");
      return "symbol" == _typeof(i) ? i : i + "";
    }
    module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/defineProperty.js"(exports, module) {
    var toPropertyKey = require_toPropertyKey();
    function _defineProperty(e, r, t) {
      return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[r] = t, e;
    }
    module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/objectSpread2.js
var require_objectSpread2 = __commonJS({
  "node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/objectSpread2.js"(exports, module) {
    var defineProperty = require_defineProperty();
    function ownKeys(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r2) {
          return Object.getOwnPropertyDescriptor(e, r2).enumerable;
        })), t.push.apply(t, o);
      }
      return t;
    }
    function _objectSpread2(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
          defineProperty(e, r2, t[r2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
        });
      }
      return e;
    }
    module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/.pnpm/rc-picker@4.6.13_dayjs@1.11.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-picker/lib/locale/common.js
var require_common = __commonJS({
  "node_modules/.pnpm/rc-picker@4.6.13_dayjs@1.11.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-picker/lib/locale/common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.commonLocale = void 0;
    var commonLocale = exports.commonLocale = {
      yearFormat: "YYYY",
      dayFormat: "D",
      cellMeridiemFormat: "A",
      monthBeforeYear: true
    };
  }
});

// node_modules/.pnpm/rc-picker@4.6.13_dayjs@1.11.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-picker/lib/locale/en_GB.js
var require_en_GB2 = __commonJS({
  "node_modules/.pnpm/rc-picker@4.6.13_dayjs@1.11.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-picker/lib/locale/en_GB.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var _common = require_common();
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
      locale: "en_GB",
      today: "Today",
      now: "Now",
      backToToday: "Back to today",
      ok: "OK",
      clear: "Clear",
      month: "Month",
      year: "Year",
      timeSelect: "Select time",
      dateSelect: "Select date",
      monthSelect: "Choose a month",
      yearSelect: "Choose a year",
      decadeSelect: "Choose a decade",
      dateFormat: "D/M/YYYY",
      dateTimeFormat: "D/M/YYYY HH:mm:ss",
      previousMonth: "Previous month (PageUp)",
      nextMonth: "Next month (PageDown)",
      previousYear: "Last year (Control + left)",
      nextYear: "Next year (Control + right)",
      previousDecade: "Last decade",
      nextDecade: "Next decade",
      previousCentury: "Last century",
      nextCentury: "Next century"
    });
    var _default = exports.default = locale;
  }
});

// node_modules/.pnpm/antd@5.20.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/lib/time-picker/locale/en_GB.js
var require_en_GB3 = __commonJS({
  "node_modules/.pnpm/antd@5.20.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/lib/time-picker/locale/en_GB.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var locale = {
      placeholder: "Select time"
    };
    var _default = exports.default = locale;
  }
});

// node_modules/.pnpm/antd@5.20.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/lib/date-picker/locale/en_GB.js
var require_en_GB4 = __commonJS({
  "node_modules/.pnpm/antd@5.20.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/lib/date-picker/locale/en_GB.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _en_GB = _interopRequireDefault(require_en_GB2());
    var _en_GB2 = _interopRequireDefault(require_en_GB3());
    var locale = {
      lang: Object.assign({
        placeholder: "Select date",
        yearPlaceholder: "Select year",
        quarterPlaceholder: "Select quarter",
        monthPlaceholder: "Select month",
        weekPlaceholder: "Select week",
        rangePlaceholder: ["Start date", "End date"],
        rangeYearPlaceholder: ["Start year", "End year"],
        rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
        rangeMonthPlaceholder: ["Start month", "End month"],
        rangeWeekPlaceholder: ["Start week", "End week"]
      }, _en_GB.default),
      timePickerLocale: Object.assign({}, _en_GB2.default)
    };
    var _default = exports.default = locale;
  }
});

// node_modules/.pnpm/antd@5.20.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/lib/calendar/locale/en_GB.js
var require_en_GB5 = __commonJS({
  "node_modules/.pnpm/antd@5.20.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/lib/calendar/locale/en_GB.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _en_GB = _interopRequireDefault(require_en_GB4());
    var _default = exports.default = _en_GB.default;
  }
});

// node_modules/.pnpm/antd@5.20.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/lib/locale/en_GB.js
var require_en_GB6 = __commonJS({
  "node_modules/.pnpm/antd@5.20.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/lib/locale/en_GB.js"(exports) {
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _en_GB = _interopRequireDefault(require_en_GB());
    var _en_GB2 = _interopRequireDefault(require_en_GB5());
    var _en_GB3 = _interopRequireDefault(require_en_GB4());
    var _en_GB4 = _interopRequireDefault(require_en_GB3());
    var typeTemplate = "${label} is not a valid ${type}";
    var localeValues = {
      locale: "en-gb",
      Pagination: _en_GB.default,
      DatePicker: _en_GB3.default,
      TimePicker: _en_GB4.default,
      Calendar: _en_GB2.default,
      global: {
        placeholder: "Please select"
      },
      Table: {
        filterTitle: "Filter menu",
        filterConfirm: "OK",
        filterReset: "Reset",
        filterEmptyText: "No filters",
        filterCheckall: "Select all items",
        filterSearchPlaceholder: "Search in filters",
        emptyText: "No data",
        selectAll: "Select current page",
        selectInvert: "Invert current page",
        selectNone: "Clear all data",
        selectionAll: "Select all data",
        sortTitle: "Sort",
        expand: "Expand row",
        collapse: "Collapse row",
        triggerDesc: "Click to sort descending",
        triggerAsc: "Click to sort ascending",
        cancelSort: "Click to cancel sorting"
      },
      Modal: {
        okText: "OK",
        cancelText: "Cancel",
        justOkText: "OK"
      },
      Popconfirm: {
        okText: "OK",
        cancelText: "Cancel"
      },
      Transfer: {
        titles: ["", ""],
        searchPlaceholder: "Search here",
        itemUnit: "item",
        itemsUnit: "items",
        remove: "Remove",
        selectCurrent: "Select current page",
        removeCurrent: "Remove current page",
        selectAll: "Select all data",
        removeAll: "Remove all data",
        selectInvert: "Invert current page"
      },
      Upload: {
        uploading: "Uploading...",
        removeFile: "Remove file",
        uploadError: "Upload error",
        previewFile: "Preview file",
        downloadFile: "Download file"
      },
      Empty: {
        description: "No Data"
      },
      Icon: {
        icon: "icon"
      },
      Text: {
        edit: "Edit",
        copy: "Copy",
        copied: "Copied",
        expand: "Expand"
      },
      Form: {
        optional: "(optional)",
        defaultValidateMessages: {
          default: "Field validation error for ${label}",
          required: "Please enter ${label}",
          enum: "${label} must be one of [${enum}]",
          whitespace: "${label} cannot be a blank character",
          date: {
            format: "${label} date format is invalid",
            parse: "${label} cannot be converted to a date",
            invalid: "${label} is an invalid date"
          },
          types: {
            string: typeTemplate,
            method: typeTemplate,
            array: typeTemplate,
            object: typeTemplate,
            number: typeTemplate,
            date: typeTemplate,
            boolean: typeTemplate,
            integer: typeTemplate,
            float: typeTemplate,
            regexp: typeTemplate,
            email: typeTemplate,
            url: typeTemplate,
            hex: typeTemplate
          },
          string: {
            len: "${label} must be ${len} characters",
            min: "${label} must be at least ${min} characters",
            max: "${label} must be up to ${max} characters",
            range: "${label} must be between ${min}-${max} characters"
          },
          number: {
            len: "${label} must be equal to ${len}",
            min: "${label} must be minimum ${min}",
            max: "${label} must be maximum ${max}",
            range: "${label} must be between ${min}-${max}"
          },
          array: {
            len: "Must be ${len} ${label}",
            min: "At least ${min} ${label}",
            max: "At most ${max} ${label}",
            range: "The amount of ${label} must be between ${min}-${max}"
          },
          pattern: {
            mismatch: "${label} does not match the pattern ${pattern}"
          }
        }
      },
      Image: {
        preview: "Preview"
      }
    };
    var _default = exports.default = localeValues;
  }
});
export default require_en_GB6();
//# sourceMappingURL=antd_lib_locale_en_GB.js.map
