import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import breakpoints from "./GlobalStyles/breakpoints"

const Navigation = () => {
  return (
    <NavContianer>
      <NavLists>
        <NavItem>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/about/" activeClassName="active">
            About
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/blog/" activeClassName="active">
            Blog
          </Link>
        </NavItem>
      </NavLists>
    </NavContianer>
  )
}

const NavContianer = styled.nav`
  width: calc(100% - var(--toggler-width));
`

const NavLists = styled.ul`
  display: flex;
  justify-content: right;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 0;
  list-style: none;
`

const NavItem = styled.li`
  font-size: 1.6rem;
  padding-left: 1rem;
  padding-right: 1rem;
  line-height: 1;
  border-right: 2px solid #444658;

  a {
    font-family: var(--font-stack-heading);
    text-decoration: none;
    color: ${({ theme }) => theme.colors.link};
    text-transform: uppercase;
    font-weight: 400;

    background-image: linear-gradient(
      var(--theme-color--grape-100) 100%,
      var(--theme-color--grape-100) 100%
    );
    background-repeat: no-repeat;
    background-size: 100% 0;
    transition: background-size 0.4s cubic-bezier(0.19, 1, 0.5, 1);
    transform-origin: bottom;
    background-position: 50% 100%, center bottom;

    &:hover,
    &:focus,
    &.active {
      background-size: 100% 70%;
    }
  }

  &:last-child {
    border-right: none;
  }

  @media ${breakpoints.device.minXS} {
    font-size: 2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media ${breakpoints.device.minSM} {
    font-size: 2.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

export default Navigation
