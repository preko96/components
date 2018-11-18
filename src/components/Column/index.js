import React from "react";
import styled from "styled-components";
import { withConsumer, withProvider } from "../../hocs/withContext";

const Base = styled.div`
  display: flex;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
  flex-wrap: ${props => props.multiline && "wrap"};
  justify-content: ${props => props.center && "center"};
  margin-bottom: ${props => !props.last && ".75rem"};

  margin-left: ${props => props.gap && `${-1 * props.gap * 0.25}rem`};
  margin-right: ${props => props.gap && `${-1 * props.gap * 0.25}rem`};

  margin-left: ${props => props.gapless && 0};
  margin-right: ${props => props.gapless && 0};
  margin-top: ${props => props.gapless && 0};
`;

Base.defaultProps = { gapless: false };

const Item = styled.div`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;

  padding-left: ${props =>
    props.context.gap && `${props.context.gap * 0.25}rem`};

  padding-right: ${props =>
    props.context.gap && `${props.context.gap * 0.25}rem`};

  padding: ${props => props.context.gapless && 0};

  flex: ${props => props.full && "none"};
  flex: ${props => props.fourFifths && "none"};
  flex: ${props => props.threeQuarters && "none"};
  flex: ${props => props.twoThirds && "none"};
  flex: ${props => props.threeFifths && "none"};
  flex: ${props => props.half && "none"};
  flex: ${props => props.twoFifths && "none"};
  flex: ${props => props.oneThird && "none"};
  flex: ${props => props.oneQuarter && "none"};
  flex: ${props => props.oneFifth && "none"};

  width: ${props => props.full && "100%"};
  width: ${props => props.fourFifths && "80%"};
  width: ${props => props.threeQuarters && "75%"};
  width: ${props => props.twoThirds && "66%"};
  width: ${props => props.threeFifths && "60%"};
  width: ${props => props.half && "50%"};
  width: ${props => props.twoFifths && "40%"};
  width: ${props => props.oneThird && "33%"};
  width: ${props => props.oneQuarter && "25%"};
  width: ${props => props.oneFifth && "20%"};
`;

const TestItem = props => {
  console.log(props);
  return <Item {...props} />;
};

class Column extends React.Component {
  static Base = withProvider(Base);
  static Item = withConsumer(TestItem);
  render() {
    return <Column.Base {...this.props} />;
  }
}

export default Column;
