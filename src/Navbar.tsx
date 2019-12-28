import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";

const NavHeader = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #def1f4;
  margin-bottom: 0.5rem;
  * {
    margin: 0.5rem 1rem;
  }
`;
const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .product-name {
    font-weight: bold;
  }
  .product-price {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

// type CardProps = {
//   image: string;
//   name: string;
//   price: string;
//   isSale: boolean;
//   isExclusive: boolean;
// }

type NavbarProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Navbar: FunctionComponent<NavbarProps> = ({ onChange }) => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  return (
    <NavHeader>
      <h1>Women's tops</h1>
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
