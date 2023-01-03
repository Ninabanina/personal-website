import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from "styled-components"
import breakpoints from "./GlobalStyles/breakpoints"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
  )

  return (
    <Contianer>
      {children}
    </Contianer >
  )
}

const Contianer = styled.main`
  width: 128rem;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 4rem;


  @media ${breakpoints.device.maxXS} {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }

  @media ${breakpoints.device.maxMD} {
    padding-right: 3rem;
    padding-left: 3rem;
  }
`

