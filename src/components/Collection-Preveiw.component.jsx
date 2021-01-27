import React from "react";
import styled from "styled-components";
import CollectionItem from "./Collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <StyledCollecion>
      <Title>{title.toUpperCase()}</Title>
      <Preview>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
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
  font-size: 28px;
  margin-bottom: 25px;
`;

const Preview = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  /*display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem; */
`;

export default CollectionPreview;
