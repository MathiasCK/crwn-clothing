import React from "react";
import StripeCheckout from "react-stripe-checkout";
import CustomButton from "./Custom-button.component";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IHS8SAkxwsxxcnkwLeWPnVkUo18pRARyYpcsm1yPfZ584DsAEUE3VyTWn3j9Frb7Ju8YsfNx3ZSGOpnokpGDEXx00wMVEBCQE";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total is ${price},-`}
      amout={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      currency="NOK"
      stripeKey={publishableKey}
    >
      <CustomButton>Pay Now</CustomButton>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
