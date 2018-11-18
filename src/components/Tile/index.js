import React from "react";
import styled from "styled-components";

const Base = styled.div`
  align-items: stretch;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  min-height: min-content;

  flex-direction: ${props => props.vertical && "column"};
  padding: ${props => props.parent && ".75rem"};
`;

class Tile extends React.Component {
  static Base = Base;
  render() {
    return <Tile.Base {...this.props} />;
  }
}

export default Tile;
