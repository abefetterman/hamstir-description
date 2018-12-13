import urdx, { Wrapper, Materials, Box } from 'urdx';

import materials from './materials';
import Wall from './wall';
import Floor from './floor';

const INNER_SIZE=12
const COLUMN_BOX=2
const COLUMN_OFFSET = 2
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
  ne_col0: {
    x: COLUMN_OFFSET-COLUMN_BOX/2,
    y: COLUMN_OFFSET
  },
  ne_col1: {
    x: COLUMN_OFFSET+COLUMN_BOX/2,
    y: COLUMN_OFFSET
  },
  se_col0: {
    x: COLUMN_OFFSET-COLUMN_BOX/2,
    y: -COLUMN_OFFSET
  },
  se_col1: {
    x: COLUMN_OFFSET+COLUMN_BOX/2,
    y: -COLUMN_OFFSET
  },
  sw_col0: {
    x: -COLUMN_OFFSET-COLUMN_BOX/2,
    y: -COLUMN_OFFSET
  },
  sw_col1: {
    x: -COLUMN_OFFSET+COLUMN_BOX/2,
    y: -COLUMN_OFFSET
  },
  nw_col0: {
    x: -COLUMN_OFFSET-COLUMN_BOX/2,
    y: COLUMN_OFFSET
  },
  nw_col1: {
    x: -COLUMN_OFFSET+COLUMN_BOX/2,
    y: COLUMN_OFFSET
  }
}

const room12x12 = (
  <Floor name="floor" size={INNER_SIZE} depth={FLOOR_THICK} height={3.0}
    material={materials.white}>
    <Materials materials={materials} />
    <Wall name="north" from={corners.nw} to={corners.ne} />
    <Wall name="east" from={corners.ne} to={corners.se} />
    <Wall name="south" from={corners.sw} to={corners.se} />
    <Wall name="west" from={corners.nw} to={corners.sw} />
    <Wall name="ne_col" from={corners.ne_col0} to={corners.ne_col1}  depth={2}/>
    <Wall name="se_col" from={corners.se_col0} to={corners.se_col1}  depth={2}/>
    <Wall name="sw_col" from={corners.sw_col0} to={corners.sw_col1}  depth={2}/>
    <Wall name="nw_col" from={corners.nw_col0} to={corners.nw_col1}  depth={2}/>
  </Floor>
);

export default room12x12;
