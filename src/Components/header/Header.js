import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../navigation/Navigation";
import { HeaderContainer } from "./HeaderStyled";
import sprite from "../../icons/sprite.svg";
const Header = () => {
  const user = useSelector((state) => state.authorization.user?.email);
  return (
    <HeaderContainer>
      <div className='headerTitle'>
        <svg className='headerTitleIcon'>
          <use href={sprite + "#icon-bookmarks"} />
        </svg>
        <h2 className='title'>Task manager</h2>
      </div>
      {user && <h3 className='title'>{user}</h3>}
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
