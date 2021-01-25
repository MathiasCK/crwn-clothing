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
`;

export default CollectionPreview;
