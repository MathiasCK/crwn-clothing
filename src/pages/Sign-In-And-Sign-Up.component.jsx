import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import SignIn from "../components/Sign-in.components";
import SignUp from "../components/Sign-up.component";

const SignInAndSignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>CRWN Clothing | Sign In</title>
      </Helmet>
      <SignInAndSignUp>
        <SignIn />
        <SignUp />
      </SignInAndSignUp>
    </>
  );
};

const SignInAndSignUp = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;

export default SignInAndSignUpPage;
