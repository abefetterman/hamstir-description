import urdx from 'urdx';

import room6x6 from './room6x6';
import room2x12 from './room2x12';
import room12x12 from './room12x12';
import car from './car';

const files = [
  {
    filename: 'room6x6.urdf',
    args: {
      name: 'room6x6'
    },
    robot: room6x6
  },
  {
    filename: 'room2x12.urdf',
    args: {
      name: 'room2x12'
    },
    robot: room2x12
  },
  {
    filename: 'room12x12.urdf',
    args: {
      name: 'room12x12'
    },
    robot: room12x12
  },
  {
    filename: 'car.urdf',
    args: {
      name: 'car'
    },
    robot: car
  },
];

urdx.writeOutput(files);
