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

export default function App() {
  return (
    <Form>
      <Form.Field>
        <Form.Control>
          <Form.Input background="dark" />
        </Form.Control>
      </Form.Field>
    </Form>
  );
}
