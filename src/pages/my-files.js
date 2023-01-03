import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import GlobalStyle from '../components/GlobalStyles/GlobalStyles';
import ThemeWrapper from '../components/themeWrapper';

const MyFiles = ({ data }) => {
  return (
    <ThemeWrapper>
      <Layout>
        <GlobalStyle />
        <div>
          <h1>My Site's Files</h1>
          <table>
            <thead>
              <tr>
                <th>relativePath</th>
                <th>prettySize</th>
                <th>extension</th>
                <th>birthTime</th>
              </tr>
            </thead>
            <tbody>
              {data.allFile.edges.map(({ node }, index) => (
                <tr key={index}>
                  <td>{node.relativePath}</td>
                  <td>{node.prettySize}</td>
                  <td>{node.extension}</td>
                  <td>{node.birthTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </ThemeWrapper>
  );
};

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;

export default MyFiles;