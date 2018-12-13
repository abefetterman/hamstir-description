import urdx, { Box, Component } from 'urdx';

class FrictionBox extends Box {
  renderContact() {
    return (
      <contact>
        <lateral_friction value="1" />
      </contact>
    )
  }

  renderLink() {
    const { attributes } = this.props;
    if (!attributes) return null;
    const { name } = attributes;
    return (
      <link name={`${name}_link`}>
        {this.renderVisual(this.props)}
        {this.renderCollision(this.props)}
        {this.renderInertial(this.props)}
        {this.renderContact(this.props)}
      </link>
    );
  }
}

class Floor extends Component {
  render() {
    const { parent, children, attributes } = this.props;
    const { size, material, name, joint } = attributes;
    let { depth } = attributes;

    depth = depth || 0.01;
    const origin = {
      z: -depth/2
    }
    return (
      <FrictionBox
        name={name}
        dx={size} dy={size} dz={depth}
        origin={origin}
        joint={Object.assign({},{parentName: parent && parent.name}, joint)}
        material={material}
      >
        {children}
      </FrictionBox>
    )
  }
}

export default Floor
