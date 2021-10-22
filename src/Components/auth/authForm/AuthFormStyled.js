import styled from "styled-components";

export const AuthFormContainer = styled.div`
  max-width: 350px;
  padding: 10px;
  border: 1px solid #424242;
  border-radius: 16px;

  .authForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .authFormLabel {
    position: relative;
    width: 100%;
  }

  .authFormInput {
    outline: none;
  }
  .authFormInput:focus + .authFormInputIconContainer,
  .authFormInput:not(:placeholder-shown) + .authFormInputIconContainer {
    opacity: 0;
  }

  .authFormInputIconContainer {
    position: absolute;
    top: 32px;
    left: 14px;
    width: 14px;
    height: 14px;
    transition: opacity 300ms linear;
  }

  .authFormSubmitButton {
    margin: 10px 0;
  }

  .authFormInputIconContainer:not(:placeholder-shown)::placeholder {
    opacity: 0;
  }

  .authFormInputIconContainer:focus::placeholder {
    opacity: 0;
  }
  .authFormInput::placeholder {
    color: #3d3d3d;
    padding-left: 24px;
    font-size: 16px;
    transition: opacity 300ms linear;
  }

  .authFormInputIcon {
    width: 100%;
    height: 100%;
    fill: #3d3d3d;
    opacity: 0.4;
  }
`;
