import React from "react";
import styled from "styled-components";
import { withConsumer, withProvider } from "../../hocs/withContext";

const Base = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
`;

const BaseItem = styled.div`
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

const Item = styled(BaseItem)`
  flex-grow: 1;
  justify-content: center;
`;

const Left = styled(BaseItem)`
  justify-content: flex-start;
`;

const Right = styled(BaseItem)`
  justify-content: flex-end;
`;

class Level extends React.Component {
  static Base = Base;
  static BaseItem = BaseItem;
  static Item = Item;
  static Left = Left;
  static Right = Right;
  render() {
    return <Level.Base {...this.props} />;
  }
}

export default Level;
