import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";
import selectCollectionsForPreview from "../../redux/shop/shop.selectors";
import CollectionPreview from "../Collection-preveiw.component";

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
  padding-top: 50px;
`;

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
