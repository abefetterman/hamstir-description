"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _urdx = _interopRequireWildcard(require("urdx"));

var _materials = _interopRequireDefault(require("./materials"));

var _wall = _interopRequireDefault(require("./wall"));

var _floor = _interopRequireDefault(require("./floor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var INNER_SIZE = 12;
var COLUMN_BOX = 2;
var COLUMN_OFFSET = 2;
var FLOOR_THICK = 0.01;
var corners = {
  ne: {
    x: INNER_SIZE / 2,
    y: INNER_SIZE / 2
  },
  nw: {
    x: -INNER_SIZE / 2,
    y: INNER_SIZE / 2
  },
  se: {
    x: INNER_SIZE / 2,
    y: -INNER_SIZE / 2
  },
  sw: {
    x: -INNER_SIZE / 2,
    y: -INNER_SIZE / 2
  },
  ne_col0: {
    x: COLUMN_OFFSET - COLUMN_BOX / 2,
    y: COLUMN_OFFSET
  },
  ne_col1: {
    x: COLUMN_OFFSET + COLUMN_BOX / 2,
    y: COLUMN_OFFSET
  },
  se_col0: {
    x: COLUMN_OFFSET - COLUMN_BOX / 2,
    y: -COLUMN_OFFSET
  },
  se_col1: {
    x: COLUMN_OFFSET + COLUMN_BOX / 2,
    y: -COLUMN_OFFSET
  },
  sw_col0: {
    x: -COLUMN_OFFSET - COLUMN_BOX / 2,
    y: -COLUMN_OFFSET
  },
  sw_col1: {
    x: -COLUMN_OFFSET + COLUMN_BOX / 2,
    y: -COLUMN_OFFSET
  },
  nw_col0: {
    x: -COLUMN_OFFSET - COLUMN_BOX / 2,
    y: COLUMN_OFFSET
  },
  nw_col1: {
    x: -COLUMN_OFFSET + COLUMN_BOX / 2,
    y: COLUMN_OFFSET
  }
};

var room12x12 = _urdx.default.createElement(_floor.default, {
  name: "floor",
  size: INNER_SIZE,
  depth: FLOOR_THICK,
  height: 3.0,
  material: _materials.default.white
}, _urdx.default.createElement(_urdx.Materials, {
  materials: _materials.default
}), _urdx.default.createElement(_wall.default, {
  name: "north",
  from: corners.nw,
  to: corners.ne
}), _urdx.default.createElement(_wall.default, {
  name: "east",
  from: corners.ne,
  to: corners.se
}), _urdx.default.createElement(_wall.default, {
  name: "south",
  from: corners.sw,
  to: corners.se
}), _urdx.default.createElement(_wall.default, {
  name: "west",
  from: corners.nw,
  to: corners.sw
}), _urdx.default.createElement(_wall.default, {
  name: "ne_col",
  from: corners.ne_col0,
  to: corners.ne_col1,
  depth: 2
}), _urdx.default.createElement(_wall.default, {
  name: "se_col",
  from: corners.se_col0,
  to: corners.se_col1,
  depth: 2
}), _urdx.default.createElement(_wall.default, {
  name: "sw_col",
  from: corners.sw_col0,
  to: corners.sw_col1,
  depth: 2
}), _urdx.default.createElement(_wall.default, {
  name: "nw_col",
  from: corners.nw_col0,
  to: corners.nw_col1,
  depth: 2
}));

var _default = room12x12;
exports.default = _default;