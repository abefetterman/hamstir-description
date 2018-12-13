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

var origins = {
  baseLink: {
    visual: {
      x: 0.001,
      z: 0.05199
    },
    z: 0.05949
  }
};
var joints = {
  leftWheel: {
    type: 'continuous',
    origin: {
      y: 0.06,
      z: 0.0250,
      roll: -90,
      degrees: true
    },
    axis: {
      z: 1
    }
  },
  rightWheel: {
    type: 'continuous',
    origin: {
      y: -0.06,
      z: 0.0250,
      roll: -90,
      degrees: true
    },
    axis: {
      z: 1
    }
  },
  frontCaster: {
    origin: {
      x: 0.05,
      z: 0.007,
      roll: -90,
      degrees: true
    }
  },
  backCaster: {
    origin: {
      x: -0.05,
      z: 0.009,
      roll: -90,
      degrees: true
    }
  },
  camera: {
    origin: {
      x: 0.06,
      z: 0.1
    }
  }
};

var Wheel =
/*#__PURE__*/
function (_Component) {
  _inherits(Wheel, _Component);

  function Wheel() {
    _classCallCheck(this, Wheel);

    return _possibleConstructorReturn(this, _getPrototypeOf(Wheel).apply(this, arguments));
  }

  _createClass(Wheel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          parent = _this$props.parent;
      var name = attributes.name,
          joint = attributes.joint;
      return _urdx.default.createElement(_urdx.Wrapper, null, _urdx.default.createElement(_urdx.Cylinder, {
        name: name,
        length: 0.0206,
        radius: 0.0352,
        joint: Object.assign({}, {
          parentName: parent.name
        }, joint)
      }), _urdx.default.createElement("gazebo", {
        reference: name
      }, _urdx.default.createElement("mu1", {
        value: "10"
      }), _urdx.default.createElement("mu2", {
        value: "10"
      }), _urdx.default.createElement("kp", {
        value: "100000000.0"
      }), _urdx.default.createElement("kd", {
        value: "10000.0"
      })));
    }
  }]);

  return Wheel;
}(_urdx.Component);

var Caster =
/*#__PURE__*/
function (_Component2) {
  _inherits(Caster, _Component2);

  function Caster() {
    _classCallCheck(this, Caster);

    return _possibleConstructorReturn(this, _getPrototypeOf(Caster).apply(this, arguments));
  }

  _createClass(Caster, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          parent = _this$props2.parent;
      var name = attributes.name,
          joint = attributes.joint;
      return _urdx.default.createElement(_urdx.Wrapper, null, _urdx.default.createElement(_urdx.Cylinder, {
        name: name,
        length: 0.0176,
        radius: 0.017,
        joint: Object.assign({}, {
          parentName: parent.name
        }, joint)
      }), _urdx.default.createElement("gazebo", {
        reference: "".concat(name, "_link")
      }, _urdx.default.createElement("mu1", {
        value: "0"
      }), _urdx.default.createElement("mu2", {
        value: "0"
      }), _urdx.default.createElement("kp", {
        value: "100000000.0"
      }), _urdx.default.createElement("kd", {
        value: "10000.0"
      })));
    }
  }]);

  return Caster;
}(_urdx.Component);

var car = _urdx.default.createElement(_urdx.Wrapper, null, _urdx.default.createElement(_urdx.Cylinder, {
  name: "base",
  length: 0.10938,
  radius: 0.1,
  mass: 2.4,
  origin: origins.baseLink
}, _urdx.default.createElement(Wheel, {
  name: "right_wheel",
  joint: joints.rightWheel
}), _urdx.default.createElement(Wheel, {
  name: "left_wheel",
  joint: joints.leftWheel
}), _urdx.default.createElement(Caster, {
  name: "caster_front",
  joint: joints.frontCaster
}), _urdx.default.createElement(Caster, {
  name: "caster_back",
  joint: joints.backCaster
}), _urdx.default.createElement(_urdx.Box, {
  dx: 0.01,
  dy: 0.03,
  dz: 0.03,
  name: "camera",
  joint: joints.camera
})));

var _default = car;
exports.default = _default;