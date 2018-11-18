import React from "react";
import { Container, Hero, Title, Tile, Column, Form, Text } from "./components";

export default function App() {
  return (
    <Form>
      <Form.Field>
        <Form.Control>
          <Form.Button background="info">
            <Text>Hello</Text>
          </Form.Button>
        </Form.Control>
      </Form.Field>
    </Form>
  );
}
