import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import CustomButton from "../components/Custom-button.component";
import Directory from "../components/Directory.component";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations/animations";

const HomePage = ({ history }) => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Helmet>
        <title>CRWN Clothing | Home</title>
      </Helmet>
      <StyledHome>
        <Directory />
        <Button>
          <CustomButton
            onClick={() => {
              history.push("/shop");
            }}
          >
            ENTER SHOP
          </CustomButton>
        </Button>
      </StyledHome>
    </motion.div>
  );
};

const StyledHome = styled(motion.div)``;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

export default HomePage;
