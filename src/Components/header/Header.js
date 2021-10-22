import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../navigation/Navigation";
import { HeaderContainer } from "./HeaderStyled";
const Header = () => {
  const user = useSelector((state) => state.authorization.user?.email);
  return (
    <HeaderContainer>
      <h2 className='title'>Task tracker</h2>
      {user && <h3 className='title'>{user}</h3>}
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
