import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import GlobalStyle from "../components/GlobalStyles/GlobalStyles"
import ThemeWrapper from "../components/themeWrapper"
import Heading from "../components/heading"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <ThemeWrapper>
      <Layout>
        <GlobalStyle />
        <div>
          <Heading level="h1">{post.frontmatter.title}</Heading>
          <img
            src={post.frontmatter.imageURL}
            alt={post.frontmatter.imageAlt}
          />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    </ThemeWrapper>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        imageURL
        imageAlt
      }
    }
  }
`

export default BlogPost
