import React from "react";
import styled from "styled-components";
import { withConsumer, withProvider } from "../../hocs/withContext";

const Base = styled.div`
  background-color: #fafafa;
  padding: 3rem 1.5rem 6rem;
  background-color: ${props => props.background || "hsl(0, 0%, 98%"};
  padding: ${props => props.padding || "3rem 1.5rem 6rem"};
`;

class Footer extends React.Component {
  static Base = Base;
  render() {
    return <Footer.Base {...this.props} />;
  }
}

export default Footer;
