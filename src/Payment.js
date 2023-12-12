import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom'
const TakeMoney = ({ p }) => {
var navigate = useNavigate();
  const onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
    console.log("payment successful!");
    // sessionStorage.removeItem('section');
    // sessionStorage.removeItem('price');
    // sessionStorage.removeItem('stand_type');
    navigate('/ticket')
  };

  return (
    <StripeCheckout
      token={onToken}
      stripeKey="pk_test_51NKgQXSCotXdXBTWNDDVsTyY0kLythcKrSk1C0Gh3uoXhYFTgbW4X9w6msBO2baOJaHMrfCuHugypQGKemYr2lR400vupqbFv7"
      // image={img}
      panelLabel="pay"
      amount={p * 100}
      currency="INR"
      email={sessionStorage.getItem("user")}
      shippingAddress
      billingAddress
    />
  );
};

export default TakeMoney;
