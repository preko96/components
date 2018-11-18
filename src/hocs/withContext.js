import React, { useContext } from "react";
import Context from "../contexts/Context.js";

function withConsumer(WrappedComponent) {
  return function WithComponent(props) {
    const context = useContext(Context);
    return <WrappedComponent {...props} context={context} />;
  };
}

function extendChildrenProps(children) {
  const length = React.Children.count(children);
  return React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        lastChild: index === length - 1
      });
    } else return child;
  });
}

function withProvider(WrappedComponent) {
  return function WithComponent(props) {
    const context = useContext(Context);
    const { children, ...rest } = props;
    const pass = { ...context, ...rest };
    return (
      <Context.Provider value={pass}>
        <WrappedComponent {...props} context={pass}>
          {extendChildrenProps(children)}
        </WrappedComponent>
      </Context.Provider>
    );
  };
}

export { withConsumer, withProvider };
