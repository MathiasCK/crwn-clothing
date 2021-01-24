import React from "react";
import styled from "styled-components";
import Directory from "../../components/directory/Directory.component";

const HomePage = () => {
  return (
    <StyledHome>
      <Directory />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

export default HomePage;
