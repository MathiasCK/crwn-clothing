import React from "react";
import styled from "styled-components";
import CollectionItem from "./Collection-item.component";

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <StyledCollecion>
      <Title>{title.toUpperCase()}</Title>
      <Preview>
        {items
          .filter((item, idx) => idx < 10)
          .map((item) => (
            <CollectionItem
              key={item.id}
              collectionId={routeName}
              item={item}
            />
          ))}
      </Preview>
    </StyledCollecion>
  );
};

const StyledCollecion = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 60px;
  margin: 25px 0;
  font-weight: lighter;
`;

const Preview = styled.div`
  /*display: flex;
  justify-content: space-between;
  margin: 50px 0;*/
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;

export default CollectionPreview;
