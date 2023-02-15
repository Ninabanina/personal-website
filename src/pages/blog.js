import React from "react"

import Layout from "../components/layout"
import Header from "../components/homeBanner"
import GlobalStyle from "../components/GlobalStyles/GlobalStyles"
import ThemeWrapper from "../components/themeWrapper"
import Text from "../components/text"

const BlogPage = () => (
  <ThemeWrapper>
    <Layout>
      <GlobalStyle />
      <div>
        <Header headerText="Blog" />
        <Text size="large">Some magic content is coming...</Text>
      </div>
    </Layout>
  </ThemeWrapper>
)

export default BlogPage
