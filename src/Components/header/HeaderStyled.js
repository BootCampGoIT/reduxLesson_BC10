import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 60px;
  background-color: #212121;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  border-bottom: 1px solid #819ff5;
  .title {
    color: #819ff5;
    margin-left: 20px;
  }
  .headerTitle {
    display: flex;
    align-items: center;
  }
  .headerTitleIcon {
    width: 25px;
    height: 25px;
    fill: #819ff5;
  }
`;
