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
            Your support helps us keep our mission alive. Donate today and
            become a part of our team making a difference.
          </p>
          <PaymentForm />
        </Row>
      </Container>
    </div>
  );
};
