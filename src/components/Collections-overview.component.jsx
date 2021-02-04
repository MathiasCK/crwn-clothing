import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";
import CollectionPreview from "./Collection-preveiw.component";
import { shopCollections } from "../redux/cart/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => {
  return (
    <StyledCollections>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </StyledCollections>
  );
};
const StyledCollections = styled.div`
  display: flex;
  flex-direction: column;
`;

const mapStateToProps = createStructuredSelector({
  collections: shopCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
