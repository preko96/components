import React from "react";
import styled from "styled-components";
import { withConsumer, withProvider } from "../../hocs/withContext";
import Text from "../Text";

const Base = styled(Text)`
  word-break: break-word;
  color: #363636;
  font-size: 2rem;
  line-height: 1.125;
  font-weight: ${props => (props.bold ? "bold" : "600")};
`;

const Subtitle = styled(Text)`
  word-break: break-word;
  color: #4a4a4a;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25;
`;

class Title extends React.PureComponent {
  static Base = withConsumer(Base);
  static Subtitle = withConsumer(Subtitle);
  render() {
    return <Title.Base {...this.props} />;
  }
}

export default Title;
