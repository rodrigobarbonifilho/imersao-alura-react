import styled from "styled-components"

const StyledDarkModeSwitch = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  width: 50px;
  height: 26px;
  border-radius: 17px;
  background-color: #333;
  transition: .3s ease-in-out¨;
  cursor: pointer;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 4px;
    width: 16px;
    height: 100%;
  }
  
  .slider {
    content: "";
    position: absolute;
    top: 1px;
    left: ${({ preferTheme }) => preferTheme === "light" ? "2%" : "50%"};
    width: calc(50% - 1px);
    height: calc(100% - 2px);
    border-radius: 100%;
    background: #fff;
    align-items: center;
    justify-items: center;
    transition: .3s ease-in-out;
    z-index: 999;
  }
`;

export default function DarkModeSwitch({ preferTheme, setPreferTheme }) {
  return (
    <StyledDarkModeSwitch preferTheme={preferTheme} onClickCapture={() => setPreferTheme(preferTheme === "light" ? "dark" : "light")}>
      <div className="slider"></div>
      <div>🌙</div>
      <div>☀️</div>
    </StyledDarkModeSwitch>
  );
}
