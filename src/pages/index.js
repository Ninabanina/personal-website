import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Header from '../components/header';
import GlobalStyle from '../components/GlobalStyles/GlobalStyles';

//Theme Style
import { ThemeProvider } from 'styled-components';
import { light,dark } from '../components/GlobalStyles/Theme';
import ThemeToggler from '../components/themeToggler';

const themesMap = { 
  light,
  dark
}

export const ThemePreferenceContext = React.createContext();

export default ({ data }) => {
  const [currentTheme, setCurrentTheme] = useState('light')
  const theme = { colors: themesMap[currentTheme] }
  const themeToggler = () => {
    currentTheme === 'light' ? setCurrentTheme('dark') : setCurrentTheme('light')
  }

  // Using the operating system theme preference to set theme color
  useEffect(() => {
    const themeQuery = window.matchMedia('(prefers-color-scheme: light)')
    setCurrentTheme(themeQuery.matches ? 'light' : 'dark')
    themeQuery.addEventListener('change', ({ matches }) => {
      setCurrentTheme(matches ? 'light' : 'dark')
    })
  }, [])

  return (
    <ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={theme}>
      <>
        <Layout>
          <GlobalStyle />
          <div>
            <ThemeToggler theme={currentTheme} toggleTheme={themeToggler} />
            <Header headerText='Nina Frontend Web UI Programming Usability&More' />
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
                <Link to={node.fields.slug}>
                  <h3>
                    {node.frontmatter.title}{' '}
                    <span> - {node.frontmatter.date} </span>
                  </h3>
                  <p>{node.excerpt}</p>
                </Link>
              </div>
            ))}
          </div>
        </Layout>
      </>
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
      totalCount
    }
  }
`;
