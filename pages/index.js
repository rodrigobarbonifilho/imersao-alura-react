import React from "react";
import { CSSReset } from "../src/components/CSSReset";
import config from "../config.json";
import Menu from "../src/Menu";
import Header from "../src/Header";
import Timeline from "../src/Timeline";
import { ThemeConsumer } from "styled-components";

function HomePage() {
  const estilosHomePage = { backgroundColor: "white" };
  const [filterValue, setFilterValue] = React.useState("");
  const [preferTheme, setPreferTheme] = React.useState("light");
  const theme = config.theme[preferTheme];
  console.log(preferTheme);
  console.log(theme);

  return (
    <>
      <CSSReset />
      <div style={estilosHomePage}>
        <Menu filterValue={filterValue} setFilterValue={setFilterValue} preferTheme={preferTheme} setPreferTheme={setPreferTheme} theme={theme} />
        <Header bg={config.bg} github={config.github} name={config.name} job={config.job} theme={theme} />
        <Timeline theme={theme} filterValue={filterValue} playlists={config.playlists} favorites={config.favorites} />
      </div>
    </>
  );
}

export default HomePage;
