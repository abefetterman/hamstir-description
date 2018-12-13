import urdx, { Wrapper, Cylinder, Component, Box } from 'urdx';

const origins = {
  baseLink: {
    visual: {
      x: 0.001,
      z: 0.05199,
    },
    z: 0.05949,
  }
}

const joints = {
  leftWheel: {
    type: 'continuous',
    origin: {
      y: 0.06,
      z: 0.0250,
      roll: -90,
      degrees: true,
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
      degrees: true,
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
      degrees: true,
    }
  },
  backCaster: {
    origin: {
      x: -0.05,
      z: 0.009,
      roll: -90,
      degrees: true,
    }
  },
  camera: {
    origin: {
      x: 0.06,
      z: 0.1,
    }
  }
}

class Wheel extends Component {
  render() {
    const { attributes, parent } = this.props;
    const { name, joint } = attributes;
    return (
      <Wrapper>
        <Cylinder
          name={name}
          length={0.0206}
          radius={0.0352}
          joint={Object.assign({},{parentName: parent.name}, joint)}
        />
        <gazebo reference={name}>
          <mu1 value="10"/>
          <mu2 value="10"/>
          <kp value="100000000.0"/>
          <kd value="10000.0"/>
        </gazebo>
      </Wrapper>
    )
  }
}

class Caster extends Component {
  render() {
    const { attributes, parent } = this.props;
    const { name, joint } = attributes;
    return (
      <Wrapper>
        <Cylinder
          name={name}
          length={0.0176}
          radius={0.017}
          joint={Object.assign({},{parentName: parent.name}, joint)}
        />
        <gazebo reference={`${name}_link`}>
          <mu1 value="0"/>
          <mu2 value="0"/>
          <kp value="100000000.0"/>
          <kd value="10000.0"/>
        </gazebo>
      </Wrapper>

    )
  }
}

const car = (
  <Wrapper>
    <Cylinder
      name="base"
      length={0.10938}
      radius={0.1}
      mass={2.4}
      origin={origins.baseLink}
    >
      <Wheel name="right_wheel" joint={joints.rightWheel} />
      <Wheel name="left_wheel" joint={joints.leftWheel} />
      <Caster name="caster_front" joint={joints.frontCaster} />
      <Caster name="caster_back" joint={joints.backCaster} />
      <Box dx={0.01} dy={0.03} dz={0.03} name="camera" joint={joints.camera}/>
    </Cylinder>
  </Wrapper>
);

export default car;
