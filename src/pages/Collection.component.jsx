import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import styled from "styled-components";
import CollectionItem from "../components/Collection-item.component";
import { selectCollection } from "../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
  // HVER ENKELT COLLECTION
  const { title, items, routeName } = collection;
  return (
    <StyledCollectionPage>
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} collectionId={routeName} item={item} />
        ))}
      </div>
    </StyledCollectionPage>
  );
};

const StyledCollectionPage = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 38px;
    margin: 0 auto 30px;
  }

  .items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;

    & .collection-item {
      margin-bottom: 30px;
    }
  }
`;

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
