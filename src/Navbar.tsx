import React from "react";
import styled from "styled-components";

const NavHeader = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #def1f4;
  margin-bottom: 0.5rem;
  * {
    margin: 0 1rem;
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

interface CardProps {
  image: string;
  name: string;
  price: string;
  isSale: boolean;
  isExclusive: boolean;
}

const Navbar = () => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  return (
    <NavHeader>
      <h1>Women's tops</h1>
      <select name="pets" id="pet-select">
        <option value="">Filter by size:</option>
        {sizes.map(size => (
          <option value={size}>{size}</option>
        ))}
      </select>
    </NavHeader>
  );
};

export default Navbar;
