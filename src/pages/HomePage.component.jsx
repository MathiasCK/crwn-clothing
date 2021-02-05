import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import CustomButton from "../components/Custom-button.component";
import Directory from "../components/Directory.component";

const HomePage = ({ history }) => {
  return (
    <>
      <Helmet>
        <title>CRWN Clothing | Home</title>
      </Helmet>
      <StyledHome>
        <Directory />
        <CustomButton
          onClick={() => {
            history.push("/shop");
          }}
        >
          ENTER SHOP
        </CustomButton>
      </StyledHome>
    </>
  );
};

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

export default HomePage;
