import React from "react"

import Layout from "../components/layout"
import Header from "../components/homeBanner"
import GlobalStyle from "../components/GlobalStyles/GlobalStyles"
import ThemeWrapper from "../components/themeWrapper"
import Text from "../components/text"

const AboutPage = () => (
  <ThemeWrapper>
    <Layout>
      <GlobalStyle />
      <div>
        <Header headerText="About me" />
        <Text size="large">Such wow. Very React.</Text>
      </div>
    </Layout>
  </ThemeWrapper>
)

export default AboutPage
