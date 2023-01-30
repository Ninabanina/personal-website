import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import GlobalStyle from '../components/GlobalStyles/GlobalStyles';

import ThemeWrapper from '../components/themeWrapper';
import HomeBanner from '../components/homeBanner';
import Cards from '../components/cards';

const HomePage = ({ data }) => {

  return (
    <>
      <ThemeWrapper>
      <Layout>
        <GlobalStyle />
        <div>
          <HomeBanner name='Nina' descriptionText='Frontend Web&nbsp;UI Programming Usability&#38;More' />
          {/* <ul>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <li key={node.id}>
                <Cards linkURL={node.fields.slug} image={node.frontmatter.imageURL} imageAlt={node.frontmatter.imageAlt} title={node.frontmatter.title} date={node.frontmatter.date} summary={node.excerpt}/>
              </li>
            ))}
          </ul> */}
          <Cards data={data} />
        </div>
      </Layout>
      </ThemeWrapper>
    </>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMM, YYYY")
            imageURL
            imageAlt
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
