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
        <center>
          <CustomButton
            onClick={() => {
              history.push("/shop");
            }}
          >
            ENTER SHOP
          </CustomButton>
        </center>
      </StyledHome>
    </motion.div>
  );
};

const StyledHome = styled(motion.div)`
  padding-top: 10px;
  button {
    margin-top: 2rem;
  }
`;

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(HomePage);
