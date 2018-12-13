"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _urdx = _interopRequireWildcard(require("urdx"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FrictionBox =
/*#__PURE__*/
function (_Box) {
  _inherits(FrictionBox, _Box);

  function FrictionBox() {
    _classCallCheck(this, FrictionBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(FrictionBox).apply(this, arguments));
  }

  _createClass(FrictionBox, [{
    key: "renderContact",
    value: function renderContact() {
      return _urdx.default.createElement("contact", null, _urdx.default.createElement("lateral_friction", {
        value: "1"
      }));
    }
  }, {
    key: "renderLink",
    value: function renderLink() {
      var attributes = this.props.attributes;
      if (!attributes) return null;
      var name = attributes.name;
      return _urdx.default.createElement("link", {
        name: "".concat(name, "_link")
      }, this.renderVisual(this.props), this.renderCollision(this.props), this.renderInertial(this.props), this.renderContact(this.props));
    }
  }]);

  return FrictionBox;
}(_urdx.Box);

var Floor =
/*#__PURE__*/
function (_Component) {
  _inherits(Floor, _Component);

  function Floor() {
    _classCallCheck(this, Floor);

    return _possibleConstructorReturn(this, _getPrototypeOf(Floor).apply(this, arguments));
  }

  _createClass(Floor, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          parent = _this$props.parent,
          children = _this$props.children,
          attributes = _this$props.attributes;
      var size = attributes.size,
          material = attributes.material,
          name = attributes.name,
          joint = attributes.joint;
      var depth = attributes.depth;
      depth = depth || 0.01;
      var origin = {
        z: -depth / 2
      };
      return _urdx.default.createElement(FrictionBox, {
        name: name,
        dx: size,
        dy: size,
        dz: depth,
        origin: origin,
        joint: Object.assign({}, {
          parentName: parent && parent.name
        }, joint),
        material: material
      }, children);
    }
  }]);

  return Floor;
}(_urdx.Component);

var _default = Floor;
exports.default = _default;