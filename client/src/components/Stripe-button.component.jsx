import React from "react";
import StripeCheckout from "react-stripe-checkout";
import CustomButton from "./Custom-button.component";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IHS8SAkxwsxxcnkwLeWPnVkUo18pRARyYpcsm1yPfZ584DsAEUE3VyTWn3j9Frb7Ju8YsfNx3ZSGOpnokpGDEXx00wMVEBCQE";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("succesful payment");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total is ${price}`}
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
