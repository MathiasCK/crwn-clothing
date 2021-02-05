import React from "react";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { connect, useSelector } from "react-redux";
import CustomButton from "./Custom-button.component";
import { addItem } from "../redux/cart/cart.actions";
import { Helmet } from "react-helmet";

const ItemDetail = ({ addItem }) => {
  const match = useRouteMatch();
  console.log(match);
  const shopData = useSelector((state) => state.shop.collections);
  const item = shopData[match.params.collection].items.find(
    (item) => item.id === Number(match.params.id)
  );
  console.log(item);
  return (
    <StyledItemDetail>
      <Helmet>
        <title>CRWN Clothing | {item.name}</title>
      </Helmet>
      <Image>
        <img src={item.imageUrl} alt="" />
      </Image>
      {/*<img src={item.imageUrl2} alt="" />*/}
      <Description>
        <h1>{item.name}</h1>
        <h3>NOK {item.price}</h3>
        <p className="description">{item.description}</p>
        <CustomButton
          onClick={() => {
            addItem(item);
            alert(`${item.name} has been added to your cart!`);
          }}
          inverted
        >
          ADD TO CART
        </CustomButton>
      </Description>
    </StyledItemDetail>
  );
};

const StyledItemDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  justify-items: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
  }
  h3 {
    font-weight: lighter;
  }
  .description {
    width: 50%;
  }
  button {
    width: 10%;
  }
`;

const Image = styled.div``;

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ItemDetail);
