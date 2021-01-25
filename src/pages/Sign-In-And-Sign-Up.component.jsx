import React from "react";
import styled from "styled-components";
import SignIn from "../components/Sign-in.components";
import SignUp from "../components/Sign-up.component";

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUp>
      <SignIn />
      <SignUp />
    </SignInAndSignUp>
  );
};

const SignInAndSignUp = styled.div``;

export default SignInAndSignUpPage;
