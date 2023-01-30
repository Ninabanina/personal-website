import React from 'react';
import Layout from '../components/layout';
import Header from '../components/homeBanner';
import GlobalStyle from '../components/GlobalStyles/GlobalStyles';
import ThemeWrapper from '../components/themeWrapper';

const AboutPage = () => (
  <ThemeWrapper>
    <Layout>
      <GlobalStyle />
      <div>
        <Header headerText='About me' />
        <p>Such wow. Very React.</p>
      </div>
    </Layout>
  </ThemeWrapper>
);

export default AboutPage;
