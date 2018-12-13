"use strict";

var _urdx = _interopRequireDefault(require("urdx"));

var _room6x = _interopRequireDefault(require("./room6x6"));

var _room2x = _interopRequireDefault(require("./room2x12"));

var _room12x = _interopRequireDefault(require("./room12x12"));

var _car = _interopRequireDefault(require("./car"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var files = [{
  filename: 'room6x6.urdf',
  args: {
    name: 'room6x6'
  },
  robot: _room6x.default
}, {
  filename: 'room2x12.urdf',
  args: {
    name: 'room2x12'
  },
  robot: _room2x.default
}, {
  filename: 'room12x12.urdf',
  args: {
    name: 'room12x12'
  },
  robot: _room12x.default
}, {
  filename: 'car.urdf',
  args: {
    name: 'car'
  },
  robot: _car.default
}];

_urdx.default.writeOutput(files);