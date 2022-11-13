import { CSSReset } from "../src/components/CSSReset";
import config from "../config.json";
import Menu from "../src/components/Menu";
import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";

function HomePage() {
    const estilosHomePage = { backgroundColor: "white" };

    return (
        <>
            <CSSReset />
            <div style={estilosHomePage}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} favorites={config.favorites} />
            </div>
        </>
    );
}

export default HomePage;