import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

export const PaymentForm = () => {
  const [cardDetails, setCardDetails] = useState({});

  const handleToken = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      stripeKey="pk_test_51NPGvTIWTu7I8BFTiMa7VxCefbTLM1z3JIBEo8c0PvyMTOzYwUYLxYhDTflBcICoaYuu56rerspz1o9PFm65sONs005pSPZgyq"
      token={handleToken}
      name="FoxRobotics"
      description="Donation"
      amount={1000}
      currency="USD"
    >
      <button>
        <span>Donate</span>
      </button>
    </StripeCheckout>
  );
};
