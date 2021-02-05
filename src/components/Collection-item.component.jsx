import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addItem } from "../redux/cart/cart.actions";
import CustomButton from "./Custom-button.component";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <StyledCollection>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooter>
        <span className="name">{name}</span>
        <span className="price">NOK {price} ,-</span>
      </CollectionFooter>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </StyledCollection>
  );
};

const StyledCollection = styled.div`
  //width: 22vw;
  display: flex;
  flex-direction: column;
  min-height: 500px;
  align-items: center;
  position: relative;
  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 80%;
    display: none;
  }

  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  & .name {
    margin-bottom: 15px;
  }
  & .price {
    margin-bottom: 15px;
  }
`;

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
