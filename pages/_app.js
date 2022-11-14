import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import config from "../config.json";
import ColorModeProvider, { colorModeContext } from "../src/components/ColorMode";

const themeActive = config.theme;

function ProvideWrapper(props) {
  return (
    <ColorModeProvider initialMode={"dark"}>
      {props.children}
    </ColorModeProvider>
  )
}

function MyApp({ Component, pageProps }) {
  const context = React.useContext(colorModeContext);

  return (
    <ThemeProvider theme={themeActive[context.mode]}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default function _App(props) {
  return (
    <ProvideWrapper>
      <MyApp {...props} />
    </ProvideWrapper>
  )
}
