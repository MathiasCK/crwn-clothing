import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../redux/cart/cart.selectors";
import CartItem from "./Cart-item.component";
import CustomButton from "./Custom-button.component";

const CartDropDown = ({ cartItems }) => {
  return (
    <StyledDropdown>
      <CartItems>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </CartItems>
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
  overflow-x: hidden;
`;

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropDown);
