import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crown.svg";
const Header = () => {
  return (
    <StyledHeader>
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <Options>
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        <Link className="option" to="/signin">
          Sign In
        </Link>
      </Options>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  & .logo-container {
    height: 100%;
    width: 70px;
    padding: 25px;
  }
`;

const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & .option {
    text-transform: uppercase;
    padding: 10px 15px;
    &:hover {
      color: black;
    }
  }
`;

export default Header;
