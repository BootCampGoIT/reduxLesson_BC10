import styled from "styled-components";

export const NavigationContainer = styled.nav`
  .navList {
    list-style: none;
    display: flex;
    align-items: center;
  }
  .navItem:not(:last-child) {
    margin-right: 20px;
  }
  .navLink {
    text-decoration: none;
    text-transform: uppercase;
    color: #819ff5;
    cursor: pointer;
    font-weight: 600;
    &:hover {
      color: #5f73a1;
    }
  }
  .activeNavLink {
    color: #5f73a1;
  }
`;
