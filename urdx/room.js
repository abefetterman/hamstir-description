import urdx, { Wrapper, Materials, Box } from 'urdx';

import materials from './materials';
import Wall from './wall';
import Floor from './floor';

const INNER_SIZE=6
const CENTER_BOX=2
const FLOOR_THICK=0.01

const corners = {
  ne: {
    x: INNER_SIZE/2,
    y: INNER_SIZE/2
  },
  nw: {
    x: -INNER_SIZE/2,
    y: INNER_SIZE/2
  },
  se: {
    x: INNER_SIZE/2,
    y: -INNER_SIZE/2
  },
  sw: {
    x: -INNER_SIZE/2,
    y: -INNER_SIZE/2
  },
  center0: {
    x: -CENTER_BOX/2,
    y: 0
  },
  center1: {
    x: CENTER_BOX/2,
    y: 0
  }
}

const room = (
  <Floor name="floor" size={INNER_SIZE} depth={0.5} height={3.0}
    material={materials.white}>
    <Materials materials={materials} />
    <Wall name="north" from={corners.nw} to={corners.ne} />
    <Wall name="east" from={corners.ne} to={corners.se} />
    <Wall name="south" from={corners.sw} to={corners.se} />
    <Wall name="west" from={corners.nw} to={corners.sw} />
    <Wall name="center" from={corners.center0} to={corners.center1}  depth={1}/>
  </Floor>
);

export default room;
