import urdx, { Wrapper, Materials, Box } from 'urdx';

import materials from './materials';
import Wall from './wall';
import Floor from './floor';

const EW_SIZE=2
const NS_SIZE=12
const FLOOR_THICK=0.01

const corners = {
  ne: {
    x: EW_SIZE/2,
    y: NS_SIZE/2
  },
  nw: {
    x: -EW_SIZE/2,
    y: NS_SIZE/2
  },
  se: {
    x: EW_SIZE/2,
    y: -NS_SIZE/2
  },
  sw: {
    x: -EW_SIZE/2,
    y: -NS_SIZE/2
  }
}

const room2x12 = (
  <Floor name="floor" size={Math.max(EW_SIZE,NS_SIZE)} depth={FLOOR_THICK} height={3.0}
    material={materials.white}>
    <Materials materials={materials} />
    <Wall name="north" from={corners.nw} to={corners.ne} />
    <Wall name="east" from={corners.ne} to={corners.se} />
    <Wall name="south" from={corners.sw} to={corners.se} />
    <Wall name="west" from={corners.nw} to={corners.sw} />
  </Floor>
);

export default room2x12;
