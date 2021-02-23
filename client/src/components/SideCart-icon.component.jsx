import React from "react";
import { connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../redux/cart/cart.selectors";
import styled from "styled-components";

const SideCartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  return (
    <StyledCartIcon>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{itemCount}</ItemCount>
    </StyledCartIcon>
  );
};

const StyledCartIcon = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .shopping-icon {
    width: 24px;
    height: 24px;
  }
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

export default React.memo(SideCartIcon);
