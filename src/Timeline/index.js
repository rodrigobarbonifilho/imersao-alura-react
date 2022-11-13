import styled from "styled-components"

const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgroundBase || "#f9f9f9"};
  color: ${({ theme }) => theme.textColorBase || "#222"};
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    overflow: hidden;
    padding: 16px;
    div {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222"};
        }
      }
    }
  }
`


export default function Timeline({ filterValue, theme, ...props }) {
  const playlistsNames = Object.keys(props.playlists);

  // Statement
  // Retorno por expressão
  // o map transforma um dado do array en alguma coisa que será retornada ao front, diferente do forEach

  return (
    <StyledTimeline theme={theme}>
      {playlistsNames.map(playlistName => {
        const videos = props.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const filterValueNormalized = filterValue.toLowerCase();
                  return titleNormalized.includes(filterValueNormalized)
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb} />
                      <span>
                        {video.title}
                      </span>
                    </a>
                  )
                })}
            </div>
          </section>
        )
      })}
      <section>
        <h2>AluraTubes Favoritos</h2>
        <div>
          {props.favorites.map(favorite => {
            return (
              <a key={favorite.url} href={favorite.url}>
                <img style={{ aspectRatio: "1/1", borderRadius: "50%" }} src={`${favorite.url}.png`} />
                <span style={{ display: "flex", justifyContent: "center", fontWeight: "400", fontSize: "14px" }}>
                  {favorite.title}
                </span>
              </a>
            )
          })}
        </div>
      </section>
    </StyledTimeline>
  )
}
