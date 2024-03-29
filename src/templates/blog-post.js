import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import GlobalStyle from '../components/GlobalStyles/GlobalStyles';
import ThemeWrapper from '../components/themeWrapper';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <ThemeWrapper>
      <Layout>
        <GlobalStyle />
        <div>
          <h1>{post.frontmatter.title}</h1>
          <img src={post.frontmatter.imageURL} alt={post.frontmatter.imageAlt} />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    </ThemeWrapper>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title,
        imageURL,
        imageAlt
      }
    }
  }
`;

export default BlogPost;
