import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "./Custom-button.component";
import { addItem } from "../redux/cart/cart.actions";
import { Helmet } from "react-helmet";

import { motion } from "framer-motion";
import { pageAnimation } from "../animations/animations";

import { useHistory } from "react-router-dom";
import { Spinner } from "./With-spinner.component";
import ShopActionTypes from "../redux/shop/shop.types";

const ItemDetail = ({ title, items }) => {
  const match = useRouteMatch();
  const history = useHistory();
  const shopData = useSelector((state) => state.shop.collections);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: ShopActionTypes.FETCH_COLLECTIONS_START,
    });
  }, [dispatch]);

  if (!shopData) return <Spinner />;

  const collection = shopData[match.params.collection];

  const item = collection.items.find(
    (item) => item.id === Number(match.params.id)
  );

  if (!item || !collection) return null;

  return (
    <div>
      <StyledItemDetail
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <Helmet>
          <title>CRWN Apperal | {item.name}</title>
        </Helmet>
        <Scroll>
          <Image>
            <img src={item.imageUrl} alt="" />
          </Image>
          <Image>
            <img src={item.imageUrl2} alt="" />
          </Image>
        </Scroll>
        <Description>
          <h1>{item.name}</h1>
          <h3>NOK {item.price}</h3>
          <p className="description">{item.description}</p>
          <CustomButton
            onClick={() => {
              dispatch(addItem(item));
              alert(`${item.name} has been added to your cart!`);
            }}
            inverted
          >
            ADD TO CART
          </CustomButton>
        </Description>
      </StyledItemDetail>
      {/*<OtherItems>
        <h1>Other items</h1>
        {collection.items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return (
              <Preview>
                <img src={item.imageUrl} />;
              </Preview>
            );
          })}
        </OtherItems>*/}
      <ButtonRow>
        <CustomButton onClick={() => history.goBack()}>Go Back</CustomButton>
      </ButtonRow>
    </div>
  );
};

const StyledItemDetail = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  justify-items: center;
  min-height: 90vh;
  padding-top: 80px;
`;

const Image = styled.div`
  height: 500px;
  width: 100%;
  margin-bottom: 1rem;
  img {
    height: 100%;
    width: 100%;
    padding: 0 2rem;
    object-fit: cover;
  }
`;

const Scroll = styled.div`
  /* max-height: 90vh; */
  /* overflow-y: scroll; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Description = styled.div`
  position: sticky;
  top: 5rem;
  height: 50vh;
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
/*
const OtherItems = styled.div`
  margin-top: 100px;
  height: 30vh;
`;
const Preview = styled.div`
  display: flex;
  width: 100%;
  img {
    max-width: 25%;
  }
`;*/

const ButtonRow = styled.div`
  margin-top: 200px;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

export default ItemDetail;
