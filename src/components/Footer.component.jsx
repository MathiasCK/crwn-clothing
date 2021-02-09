import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <h1>I am a footer</h1>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  height: 30vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Footer;
