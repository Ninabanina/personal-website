import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import GlobalStyle from "../components/GlobalStyles/GlobalStyles"

import ThemeWrapper from "../components/themeWrapper"
import HomeBanner from "../components/homeBanner"
import GridCardContainer from "../components/gridCards"

const HomePage = ({ data }) => {
  return (
    <>
      <ThemeWrapper>
        <Layout>
          <GlobalStyle />
          <div>
            <HomeBanner
              name="Nina"
              descriptionText="Frontend Web&nbsp;UI Programming Usability&#38;More"
            />
            <GridCardContainer data={data} />
          </div>
        </Layout>
      </ThemeWrapper>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { id: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            imageURL
            imageAlt
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default HomePage
