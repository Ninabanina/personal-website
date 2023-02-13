import React from "react"
import styled from "styled-components"
import breakpoints from "./GlobalStyles/breakpoints"

const Layout = ({ children }) => {
  return <Contianer>{children}</Contianer>
}

const Contianer = styled.main`
  width: 128rem;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 4rem;
  padding-right: 4rem;

  @media ${breakpoints.device.maxMD} {
    padding-right: 3rem;
    padding-left: 3rem;
  }

  @media ${breakpoints.device.maxXS} {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
`

export default Layout
