import React, { FunctionComponent } from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #def1f4;
  margin-bottom: 0.5rem;
  * {
    margin: 0.5rem 1rem;
  }
  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;

const NavbarHeading = styled.h1`
  font-size: 36px;
`;

type NavbarProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  headingText: string;
};

const Navbar: FunctionComponent<NavbarProps> = ({ onChange, headingText }) => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  return (
    <NavbarContainer>
      <NavbarHeading data-testid="navbar-text">{headingText}</NavbarHeading>
      <select
        data-testid="size-select"
        onChange={onChange}
        name="sizes"
        id="size-select"
      >
        <option value="">Filter by size:</option>
        {sizes.map(size => (
          <option value={size} key={size}>
            {size}
          </option>
        ))}
      </select>
    </NavbarContainer>
  );
};

export default Navbar;
