import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crown.svg";
import { auth } from "../Firebase/Firebase.utils";
import { connect } from "react-redux";
import CartIcon from "./Cart-icon.component";
import CartDropDown from "./Cart-dropdown.component";

const Header = ({ currentUser, hidden }) => {
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </Options>
      {hidden ? null : <CartDropDown />}
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
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
