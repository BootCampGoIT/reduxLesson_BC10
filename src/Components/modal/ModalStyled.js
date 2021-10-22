import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;

  .modal {
    background-color: #3d3d3d;
    padding: 40px;
    border: 1px solid #819ff5;
    border-radius: 16px;
  }
`;
