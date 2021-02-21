import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import CustomButton from "../components/Custom-button.component";
import Directory from "../components/Directory.component";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations/animations";
import { connect } from "react-redux";
import { selectCurrentUser } from "../redux/user/user-selector";
import { createStructuredSelector } from "reselect";

const HomePage = ({ history, currentUser }) => {
  console.log(currentUser);
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Helmet>
        <title>CRWN Apperal | Home</title>
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

const StyledHome = styled(motion.div)`
  padding-top: 80px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(HomePage);
