import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from "styled-components"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

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
      <header>
        <ul>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
        </ul >
      </header >
      {children}
    </Contianer >
  )
}

const Contianer = styled.div`
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

