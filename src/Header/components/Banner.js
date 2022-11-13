import styled from "styled-components"

const StyledBanner = styled.div`
  width: 100vw;
  height: 230px;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center center;
`

export default StyledBanner
