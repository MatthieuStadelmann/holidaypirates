import styled from "styled-components";
import holidayPiratesLogo from "../assets/holidaypirates_purple.svg";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-center: flex-start;
`;

const Logo = styled.img`
  height: 48px;
  width: auto;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo src={holidayPiratesLogo} alt="Holiday Pirates" />
      </Container>
    </StyledHeader>
  );
};

export default Header;
