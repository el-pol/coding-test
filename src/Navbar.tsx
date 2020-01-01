import React, { FunctionComponent } from "react";
import styled from "styled-components";

const NavHeader = styled.nav`
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
  h1 {
    font-size: 36px;
  }
  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;

type NavbarProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  headingText: string;
};

const Navbar: FunctionComponent<NavbarProps> = ({ onChange, headingText }) => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  return (
    <NavHeader>
      <h1>{headingText}</h1>
      <select onChange={onChange} name="sizes" id="size-select">
        <option value="">Filter by size:</option>
        {sizes.map(size => (
          <option value={size} key={size}>
            {size}
          </option>
        ))}
      </select>
    </NavHeader>
  );
};

export default Navbar;
