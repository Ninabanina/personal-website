import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Navigation from "./navigation"
import styled from "styled-components"

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
      <Navigation />
      {children}
    </Contianer >
  )
}

const Contianer = styled.main`
  width: 100%;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    width: 54rem;
  }

  @media (min-width: 992px) {
    width: 72rem;
  }

  @media (min-width: 992px) {
    width: 96rem;
  }

  @media (min-width: 1200px) {
    width: 114rem;
  }
`

