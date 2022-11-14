import React from "react";
import config from "../config.json";
import Menu from "../src/Menu";
import Header from "../src/Header";
import Timeline from "../src/Timeline";

function HomePage() {
  const estilosHomePage = { backgroundColor: "white" };
  const [filterValue, setFilterValue] = React.useState("");
  // console.log(preferTheme);
  // console.log(theme);

  return (
    <div style={estilosHomePage}>
      <Menu filterValue={filterValue} setFilterValue={setFilterValue} />
      <Header bg={config.bg} github={config.github} name={config.name} job={config.job} />
      <Timeline filterValue={filterValue} playlists={config.playlists} favorites={config.favorites} />
    </div>
  );
}

export default HomePage;
