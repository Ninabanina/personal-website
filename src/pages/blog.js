import React from 'react';
import Layout from '../components/layout';
import Header from '../components/homeBanner';
import GlobalStyle from '../components/GlobalStyles/GlobalStyles';
import ThemeWrapper from '../components/themeWrapper';

const BlogPage = () => (
  <ThemeWrapper>
    <Layout>
      <GlobalStyle />
      <div>
        <Header headerText='Blog' />
        <p>Some magic content is coming...</p>
      </div>
    </Layout>
  </ThemeWrapper>
);

export default BlogPage;
