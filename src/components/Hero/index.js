import React from "react";
import styled from "styled-components";
import Context from "../../contexts/Context";
import { withConsumer, withProvider } from "../../hocs/withContext";
import { BackgroundVariations } from "../variations";

const Base = styled.section`
  ${BackgroundVariations}
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: ${props => props.context.size == "full" && "100vh"};
`;

const Body = styled.div`
  ${BackgroundVariations}
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
  padding-bottom: ${props => props.context.size == "medium" && "9rem"};
  padding-top: ${props => props.context.size == "medium" && "9rem"};
  padding-bottom: ${props => props.context.size == "large" && "18rem"};
  padding-top: ${props => props.context.size == "large" && "18rem"};
  display: ${props => props.context.size == "full" && "flex"};
  align-items: ${props => props.context.size == "full" && "center"};
  justify-content: ${props => props.context.textAlign == "center" && "center"};
  justify-content: ${props =>
    props.context.textAlign == "left" && "flex-start"};
  justify-content: ${props => props.context.textAlign == "right" && "flex-end"};
`;

const Head = styled.div`
  ${BackgroundVariations}
  flex-grow: 0;
  flex-shrink: 0;
`;

const Foot = styled.div`
  ${BackgroundVariations}
  flex-grow: 0;
  flex-shrink: 0;
`;

class Hero extends React.Component {
  static Base = withProvider(Base);
  static Body = withProvider(Body);
  static Head = withProvider(Head);
  static Foot = withProvider(Foot);
  render() {
    return (
      <Context.Provider value={this.props}>
        <Hero.Base {...this.props} />
      </Context.Provider>
    );
  }
}

export default Hero;
