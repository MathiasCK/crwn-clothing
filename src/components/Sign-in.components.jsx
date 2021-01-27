import React from "react";
import styled from "styled-components";
import { auth, signInWithGoogle } from "../Firebase/Firebase.utils";
import CustomButton from "./Custom-button.component";
import FormInput from "./Form-input.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      alert(error);
    }

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <StyledSignIn>
        <Title>I already have an account</Title>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <Button>
            <CustomButton type="submit">sign in</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              sign in with google
            </CustomButton>
          </Button>
        </form>
      </StyledSignIn>
    );
  }
}

const StyledSignIn = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 10px 0;
`;

const Button = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default SignIn;
