"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tab = void 0;
//var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
require("./tab.css");
var Tab = function Tab(_ref) {
  var active = _ref.active,
    value = _ref.value,
    children = _ref.children,
    handleClick = _ref.onClick;
//   var className = (0, _clsx.default)(
//     "tab",
//     { tab_type_current: active },
//     "pt-4",
//     "pr-10",
//     "pb-4",
//     "pl-10",
//     "noselect"
//   );
  var onClick = _react.default.useCallback(
    function () {
      if (typeof handleClick === "function") {
        handleClick(value);
      }
    },
    [handleClick, value]
  );
  return /*#__PURE__*/ _react.default.createElement(
    "div",
    { //className: className, 
        onClick: onClick },
    /*#__PURE__*/ _react.default.createElement(
      "span",
      { className: "text text_type_main-default" },
      children
    )
  );
};
exports.Tab = Tab;
Tab.displayName = "Tab";
