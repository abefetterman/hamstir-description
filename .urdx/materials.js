"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _urdx = require("urdx");

var materials = {
  blue: {
    name: 'blue',
    color: {
      r: 0,
      g: 0,
      b: 0.8,
      a: 1
    },
    density: _urdx.constants.density.aluminum
  },
  black: {
    name: 'black',
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    },
    density: _urdx.constants.density.steel
  },
  white: {
    name: 'white',
    color: {
      r: 1,
      g: 1,
      b: 1,
      a: 1
    },
    density: _urdx.constants.density.aluminum
  }
};
var _default = materials;
exports.default = _default;