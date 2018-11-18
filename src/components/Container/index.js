import React from "react";
import styled from "styled-components";

function eitherBoolOr(arg, def) {
  if (typeof arg == "boolean") {
    return def;
  } else return arg;
}

const Base = styled.div`
  position: relative;
  padding: ${props => props.padding && eitherBoolOr(props.padding, "8px")};
  max-width: none;
  width: auto;
`;

const Flex = styled(Base)`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  flex-grow: ${props => props.grow || 1};
  flex-shrink: ${props => props.shrink || 0};
  flex-base: ${props => props.base || "auto"};
  justify-content: ${props => props.justify || "center"};
  align-items: ${props => props.align || "center"};
`;

class Container extends React.Component {
  static Base = Base;
  static Flex = Flex;
  render() {
    return <Container.Base {...this.props} />;
  }
}

export default Container;
