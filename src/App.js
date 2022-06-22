import React from "react";
import { Container } from "react-bootstrap";

//
import Dashboard from "./layouts/Dashboard/dashboard";

export default function App() {
  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      <Dashboard />
    </Container>
  );
}
