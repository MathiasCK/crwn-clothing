import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import { addItem } from "../redux/cart/cart.actions";

const CollectionItem = ({ item, collectionId }) => {
  const { params } = useRouteMatch();

  const { name, price, imageUrl, id } = item;
  // HVER ENKELT ITEM I COLLECTION
  return (
    <StyledCollection>
      <Link
        style={{ width: "100%", height: "100%" }}
        to={`/shop/${collectionId || params.collectionId}/${id}`}
      >
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
          /*
        src={`url(${imageUrl})`}
        src1={`url(${imageUrl2})`}*/
        />
      </Link>
      <CollectionFooter>
        <span className="name">{name}</span>
        <span className="price">NOK {price} </span>
      </CollectionFooter>
    </StyledCollection>
  );
};

const StyledCollection = styled.div`
  //width: 22vw;
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  align-items: center;
  position: relative;
  /* button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 75%;
    left: 50%;
    display: none;
    transform: translateX(-50%);
  }*/

  .image {
    width: 100%;
    height: 90%;
    background-size: cover;
    background-position: center;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    .image {
      opacity: 0.8;
    }
    /*button {
      opacity: 0.85;
      display: flex;
    }*/
  }
`;

const CollectionFooter = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
