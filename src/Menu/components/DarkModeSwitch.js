import React from "react";
import styled from "styled-components"
import { colorModeContext } from "../../components/ColorMode";

const StyledDarkModeSwitch = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  width: 50px;
  height: 25px;
  padding: 3px;
  border: 0;
  border-radius: 10000px;
  background-color: #333;
  label {
    width: 50px;
  }
  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
  }
  label::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    border: 1px solid #333;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    transition: .3s;
    cursor: pointer;
    background-color: #fafafa;
  }
  input[type="checkbox"] { display: none; }
  input[type="checkbox"]:checked + label::before { transform: translateX(100%); }
`;

export default function DarkModeSwitch() {
  const contexto = React.useContext(colorModeContext)

  return (
    <StyledDarkModeSwitch>
      <input id="darkmode" type="checkbox" onChange={() => {
        contexto.toggleMode();
      }} />
      <label
        htmlFor="darkmode"
        className="darkmode-switch"
      >
        <span>🌙</span>
        <span>☀️</span>
      </label>
    </StyledDarkModeSwitch>
  );
}
