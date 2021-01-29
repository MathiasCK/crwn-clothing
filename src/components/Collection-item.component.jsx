import React from "react";
import styled from "styled-components";
import CustomButton from "./Custom-button.component";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <StyledCollection>
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <CollectionFooter>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </CollectionFooter>
    <CustomButton inverted>ADD TO CART</CustomButton>
  </StyledCollection>
);

const StyledCollection = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
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
    width: 90%;
    margin-bottom: 15px;
  }
  & .price {
    width: 10%;
    margin-bottom: 15px;
  }
`;

export default CollectionItem;
