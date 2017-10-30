"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dom_1 = require("react-dom");
var react_shadow_wrapper_1 = require("react-shadow-wrapper");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(react_shadow_wrapper_1.default, null,
            React.createElement("span", null, "Matt"),
            React.createElement("br", null),
            React.createElement("span", null, "Landers")));
    };
    return App;
}(React.Component));
react_dom_1.render(React.createElement(App, null), document.getElementById('app'));
var TypicalApp = (function (_super) {
    __extends(TypicalApp, _super);
    function TypicalApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypicalApp.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("span", null, "Matt"),
            React.createElement("br", null),
            React.createElement("span", null, "Landers")));
    };
    return TypicalApp;
}(React.Component));
react_dom_1.render(React.createElement(TypicalApp, null), document.getElementById('typicalapp'));
