import React from "react";
import styled from "styled-components";
import CustomButton from "./Custom-button.component";

const CartDropDown = () => {
  return (
    <StyledDropdown>
      <CartItems></CartItems>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  button {
    margin-top: auto;
  }
`;

const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export default CartDropDown;
