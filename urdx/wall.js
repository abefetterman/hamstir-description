import urdx, { Box, Component } from 'urdx';

const DEFAULT_HEIGHT=3
const DEFAULT_DEPTH=0.5

// takes from={x,y} to={x,y}
class Wall extends Component {
  render() {
    const { attributes, parent } = this.props;
    const { name, from, to } = attributes;
    const height = attributes.height || parent.height || DEFAULT_HEIGHT;
    const depth = attributes.depth || parent.depth || DEFAULT_DEPTH;
    const jointOrigin = {
      x: (from.x + to.x)/2,
      y: (from.y + to.y)/2,
      z: 0
    }

    const joint = {
      origin: jointOrigin,
      parentName: parent.name
    }

    const dx = Math.abs(to.x - from.x)
    const dy = Math.abs(to.y - from.y)
    const theta = Math.atan2(dy, dx)
    const length = Math.sqrt(dx*dx + dy*dy)

    const origin = {
      z: height/2,
      yaw: theta
    }

    return (
      <Box
        name={name}
        dx={length} dy={depth} dz={height}
        joint={joint}
        origin={origin}
      />
    )
  }
}

export default Wall
