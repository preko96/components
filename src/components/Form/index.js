import React, { Fragment } from "react";
import styled from "styled-components";
import { withProvider, withConsumer } from "../../hocs/withContext";
import useFocus from "../../hooks/useFocus";
import useHover from "../../hooks/useHover";
import SharedStyle from "./shared";
import {
  DarkenBackgroundVariation,
  GhostBoxShadow,
  BackgroundVariation,
  BorderVariation,
  SelectionVariation
} from "../variations";

const Base = styled.div``;

const Field = styled.div`
  margin-bottom: ${props => !props.lastChild && "0.75rem"};
`;

const Label = styled.label`
  color: #363636;
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: ${props => !props.lastChild && "0.5rem"};
`;

const Help = styled.p`
  display: block;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

const Control = styled.div`
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: left;
`;

const StyledInput = styled.input`
  ${SharedStyle}
  ${BorderVariation};
  ${SelectionVariation};
  ${props => props.focused && GhostBoxShadow(props)};

  cursor: ${props => props.disabled && "not-allowed"};
  border-radius: ${props => props.small && "2px"};
  font-size: ${props => props.small && ".75rem"};
  font-size: ${props => props.medium && "1.25rem"};
  font-size: ${props => props.large && "1.5rem"};

  border-radius: ${props => props.rounded && "290486px"};
  padding-left: ${props => props.rounded && "1em"};
  padding-right: ${props => props.rounded && "1em"};

  padding-left: ${props => props.hasIconLeft && "2.25em"};
  padding-left: ${props => props.hasIconRight && "2.25em"};

  border-width: 1px;
  border-style: solid;
  outline: none;
  background-color: #fff;
  color: #363636;
  max-width: 100%;
  width: 100%;
`;

const Loading = withConsumer(styled.div`
  ${BorderVariation};
  ${props =>
    props.loading &&
    `
    @keyframes example {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    animation: example 0.5s infinite linear;
  `}
  border-width: 2px;
  border-style: solid;
  border-radius: 290486px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 1em;
  width: 1em;
  position: absolute !important;
  right: 0.625em;
  top: 0.625em;
  z-index: 4;
`);

function Input(props) {
  const hover = useHover();
  const focus = useFocus();
  return (
    <Fragment>
      <StyledInput {...hover} {...focus} {...props} />
      {props.loading && <Loading {...props} />}
    </Fragment>
  );
}

const SelectContainer = styled.div`
  display: inline-block;
  max-width: 100%;
  position: relative;
  vertical-align: top;
`;

const StyledSelect = styled.select`
  ${SharedStyle}
  padding-right: 2.5em;
  background-color: #fff;
  border-color: #dbdbdb;
  color: #363636;
  cursor: pointer;
  display: block;
  font-size: 1em;
  max-width: 100%;
  outline: 0;

  border-color: ${props => props.focused && "#3273dc"};
  box-shadow: ${props =>
    props.focused && "0 0 0 0.125em rgba(50, 115, 220, 0.25)"};
`;

const ArrowDown = styled.div`
  border: 3px solid transparent;
  border-radius: 2px;
  border-right: 0;
  border-top: 0;
  content: " ";
  display: block;
  height: 0.625em;
  margin-top: -0.4375em;
  pointer-events: none;
  position: absolute;
  top: 50%;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: center;
  transform-origin: center;
  width: 0.625em;
  border-color: #3273dc;
  right: 1.125em;
  z-index: 4;
`;

const Option = styled.option`
    background-color: red;
    border-color: #dbdbdb;
    color: #363636;
    cursor: pointer;
    display: block;
    font-size: 1em;
    max-width: 100%;
    outline: 0;
}`;

function Select({ options, ...props }) {
  const focus = useFocus();
  return (
    <SelectContainer>
      <StyledSelect {...focus}>
        <Option>Select dropdown</Option>
        {options.map(option => (
          <Option>{option}</Option>
        ))}
      </StyledSelect>
      <ArrowDown />
    </SelectContainer>
  );
}

const StyledButton = styled.button`
  ${SharedStyle}
  ${BackgroundVariation}
  ${props => props.hovered && DarkenBackgroundVariation(props)};
  ${props => props.focused && GhostBoxShadow(props)};
  outline: none;
  border: 0;
  user-select: none;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.375em - 1px);
  padding-left: 0.75em;
  padding-right: 0.75em;
  padding-top: calc(0.375em - 1px);
  text-align: center;
  white-space: nowrap;
`;

function Button(props) {
  const hover = useHover();
  const focus = useFocus();
  return <StyledButton {...hover} {...focus} {...props} />;
}

class Form extends React.Component {
  static Base = withProvider(Base);
  static Field = withProvider(Field);
  static Label = Label;
  static Help = Help;
  static Control = Control;
  static Input = withConsumer(Input);
  static Select = Select;
  static Button = withProvider(Button);

  render() {
    return <Form.Base {...this.props} />;
  }
}

export default Form;
