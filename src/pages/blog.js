import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Header from "../components/header"
import GlobalStyle from "../components/GlobalStyles/GlobalStyles"

export default () => (
    <Layout>
        <GlobalStyle />
        <div>
            <Header headerText="Blog" />
            <p>Some magic content is coming...</p>
        </div>
    </Layout>
)