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
  /*width: 850px;
  display: flex;
  flex-direction: column !important;
  justify-content: space-between;
  margin: 30px auto;

  @media (min-width: 1000px) {
    flex-direction: row !important;
  }*/
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 5rem;
  justify-items: center;
`;

export default SignInAndSignUpPage;
