import React from "react";
import styled from "styled-components";
import { withConsumer } from "../../hocs/withContext";
import { TextVariation } from "../variations";

const Base = styled.p`
  ${TextVariation}
  text-align: ${props => props.context.textAlign};
  margin: 0;
  padding: 0;
  font-family: Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
`;

const H1 = styled.h1`
  ${TextVariation}
  text-align: ${props => props.context.textAlign};
  margin: 0;
  padding: 0;
  font-family: Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
`;
const H2 = styled.h2`
  ${TextVariation}
  text-align: ${props => props.context.textAlign};
  margin: 0;
  padding: 0;
  font-family: Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
`;
const H3 = styled.h3`
  ${TextVariation}
  text-align: ${props => props.context.textAlign};
  margin: 0;
  padding: 0;
  font-family: Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
`;
const H4 = styled.h4`
  ${TextVariation}
  text-align: ${props => props.context.textAlign};
  margin: 0;
  padding: 0;
  font-family: Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
`;
const H5 = styled.h5`
  ${TextVariation}
  text-align: ${props => props.context.textAlign};
  margin: 0;
  padding: 0;
  font-family: Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
`;
const H6 = styled.h6`
  ${TextVariation}
  text-align: ${props => props.context.textAlign};
  margin: 0;
  padding: 0;
  font-family: Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
`;

class Text extends React.Component {
  static Base = withConsumer(Base);
  static H1 = withConsumer(H1);
  static H2 = withConsumer(H2);
  static H3 = withConsumer(H3);
  static H4 = withConsumer(H4);
  static H5 = withConsumer(H5);
  static H6 = withConsumer(H6);

  render() {
    return <Text.Base {...this.props} />;
  }
}

export default Text;
