import React, { Profiler } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import CustomButton from "../components/Custom-button.component";
import Directory from "../components/Directory.component";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations/animations";
import { useHistory } from "react-router";

const HomePage = () => {
  const history = useHistory();
  return (
    <>
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
          <Profiler
            id="Directory"
            onRender={(id, phase, actualDuration) =>
              console.log({
                id,
                phase,
                actualDuration,
              })
            }
          >
            <Directory />
          </Profiler>
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
    </>
  );
};

const StyledHome = styled(motion.div)`
  padding-top: 10px;
  button {
    margin-top: 2rem;
  }
`;

export default HomePage;
