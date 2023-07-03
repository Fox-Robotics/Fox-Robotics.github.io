import React from "react";
import { PaymentForm } from "./PaymentForm";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

export const Donate = () => {
  return (
    <div className="donate" id="donate">
      <Container className="m-5">
        <Row className="text-center">
          <h2>Donate</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <PaymentForm />
        </Row>
      </Container>
    </div>
  );
};
