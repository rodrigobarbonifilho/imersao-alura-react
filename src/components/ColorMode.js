import React from "react";

export const colorModeContext = React.createContext({
  mode: "",
  setMode: () => { alert("Me configure primeiro!") },
  toggleMode: () => { alert("Me configure primeiro!") }
})

export default function ColorModeProvider({ children, ...props }) {
  const [mode, setMode] = React.useState(props.initialMode)

  function toggleMode() {
    if (mode === "dark") setMode("light");
    if (mode === "light") setMode("dark");
  }

  return (
    <colorModeContext.Provider value={{
      mode: mode,
      setMode: setMode,
      toggleMode: toggleMode
    }}>
      {children}
    </colorModeContext.Provider >
  );
}
