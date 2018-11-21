import React from "react";
import {
  Container,
  Hero,
  Title,
  Tile,
  Input,
  Column,
  Form,
  Text
} from "./components";

import styled from "styled-components";

function standard(props) {
  return {
    borderRadius: 4,
    outline: "none",
    border: "none",
    userSelect: "none",
    cursor: "pointer",
    paddingTop: ".375em",
    paddingBottom: ".375em",
    paddingLeft: ".75em",
    paddingRight: ".75em",
    boxShadow: "0 0 0 .125em"
  };
}

function createStyle(creator, accumulator) {
  function createSingle(props) {
    for (const prop in props) {
      const value = props[prop];
      const result = creator(props, prop, value);
      if (result) return result;
    }
  }

  function createMerged(props) {
    const entries = Object.entries(props);
    const mergedResult = entries.reduce((acc, [prop, value]) => {
      const result = creator(props, prop, props[prop]);
      return { ...acc, ...result };
    }, accumulator);
    return mergedResult;
  }

  return accumulator ? createMerged : createSingle;
}

const background = createStyle((props, prop) => {
  const background = props.theme.standard[prop];
  const color = props.theme.pair[prop];
  if (background) return { background, color };
});

const outline = createStyle((props, prop) => {
  const outline = props.selected && props.theme.standardGhost[prop];
  return props.selected && outline && { boxShadow: `0 0 0 0.125em ${outline}` };
});

const Button = styled.button(standard, background, outline);

export default function App() {
  return (
    <Button selected primary>
      Hello
    </Button>
  );
}
