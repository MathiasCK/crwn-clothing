import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animations/animations";
import CollectionItem from "../../components/Collection-item.component";

const CollectionPage = ({ collection }) => {
  // HVER ENKELT COLLECTION PÅ SHOP SIDEN

  const { title, items, routeName } = collection;
  return (
    <StyledCollectionPage
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} collectionId={routeName} item={item} />
        ))}
      </div>
    </StyledCollectionPage>
  );
};

const StyledCollectionPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-top: 80px;

  .title {
    font-size: 50px;
    font-weight: lighter;
    margin: 0 auto 30px;
  }

  .items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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
