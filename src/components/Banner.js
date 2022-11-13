import styled from "styled-components"
import config from "../../config.json"

const StyledBanner = styled.div`
    width: 100vw;
    height: 230px;
    overflow: hidden;
    img {
        width: 100%;
        overflow: hidden;
    }
`

export default function Banner(props) {
  return (
    <StyledBanner>
      <img src={props.image} />
    </StyledBanner>
  )
}
