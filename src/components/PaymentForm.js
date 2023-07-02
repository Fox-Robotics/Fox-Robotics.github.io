import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

export const PaymentForm = () => {
  const [cardDetails, setCardDetails] = useState({});

  const handleToken = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      stripeKey="TU_CLAVE_API_STRIPE"
      token={handleToken}
      name="Mi Tienda"
      description="Descripción de la compra"
      amount={100}
      currency="USD"
    >
      <button>Comprar</button>
    </StripeCheckout>
  );
};

