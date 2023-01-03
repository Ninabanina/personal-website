import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Header from '../components/header';
import GlobalStyle from '../components/GlobalStyles/GlobalStyles';

import ThemeWrapper from '../components/themeWrapper';

const HomePage = ({ data }) => {

  return (
    <>
      <ThemeWrapper>
      <Layout>
        <GlobalStyle />
        <div>
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
      </ThemeWrapper>
    </>
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

export default HomePage;
