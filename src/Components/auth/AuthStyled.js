import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: center;
    height: calc(100vh - 120px);
  }

  @media (min-width: 1024px) {
  }
`;
