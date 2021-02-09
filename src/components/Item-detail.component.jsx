import React from "react";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { connect, useSelector } from "react-redux";
import CustomButton from "./Custom-button.component";
import { addItem } from "../redux/cart/cart.actions";
import { Helmet } from "react-helmet";

import { motion } from "framer-motion";
import { pageAnimation } from "../animations/animations";

import { useHistory } from "react-router-dom";

const ItemDetail = ({ addItem }) => {
  const match = useRouteMatch();
  console.log(match);
  const shopData = useSelector((state) => state.shop.collections);
  const item = shopData[match.params.collection].items.find(
    (item) => item.id === Number(match.params.id)
  );

  const history = useHistory();

  return (
    <StyledItemDetail
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Helmet>
        <title>CRWN Clothing | {item.name}</title>
      </Helmet>
      <Scroll>
        <Image>
          <img src={item.imageUrl} alt="" />
          <img src={item.imageUrl2} alt="" />
        </Image>
      </Scroll>
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
      <CustomButton onClick={() => history.goBack()}>Go Back</CustomButton>
    </StyledItemDetail>
  );
};

const StyledItemDetail = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  justify-items: center;
`;

const Image = styled.div`
  height: 500px;
  width: 50%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Scroll = styled.div`
  min-height: 100vh;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Description = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    margin-bottom: 2rem;
  }
  h3 {
    font-weight: lighter;
    margin-bottom: 2rem;
  }
  .description {
    width: 50%;
    margin-bottom: 2rem;
  }
  button {
    width: 10%;
    margin-top: 2rem;
  }
`;

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ItemDetail);
