import styled from "styled-components";
import StyledBanner from "./components/Banner";

const StyledHeader = styled.div`
    .profile-img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

export default function Header({ bg, github, name, job }) {
  return (
    <StyledHeader>
      <StyledBanner bg={bg} />
      <section className="user-info">
        <img className="profile-img" src={`https://github.com/${github}.png`} />
        <div>
          <h2>{name}</h2>
          <p>{job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}