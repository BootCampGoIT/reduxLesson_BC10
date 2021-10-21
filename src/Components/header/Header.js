import React from "react";
import Navigation from "../navigation/Navigation";
import { HeaderContainer } from "./HeaderStyled";
const Header = () => {
  return (
    <HeaderContainer>
      <h2 className="title">Task tracker</h2>
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
