import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Text from "./text"
import Heading from "./heading"

const Cards = ({ data }) => {
  return (
    <>
      <CardsContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <Card>
              <Link to={node.fields.slug}>
                <ImageWrapper>
                  <Image>
                    <img
                      src={node.frontmatter.imageURL}
                      alt={node.frontmatter.imageAl}
                    />
                  </Image>
                </ImageWrapper>
                <ContentWrapper>
                  <Heading fontFamily="Lato" fontSize="4.8rem">
                    {node.frontmatter.title}
                  </Heading>
                  <Text as="span" fontFamily="Poppins" fontSize="2.5rem">
                    {node.frontmatter.date}
                  </Text>
                  <Text fontFamily="Poppins" fontSize="2.8rem">
                    {node.excerpt}
                  </Text>
                </ContentWrapper>
              </Link>
            </Card>
          </li>
        ))}
      </CardsContainer>
    </>
  )
}

const CardsContainer = styled.ul`
  padding: 0;
  list-style: none;
`

const Card = styled.div`
  display: flex;

  a {
    display: flex;
    width: 100%;
    background-color: var(--theme-color--light-grey-200);
    text-decoration: none;
  }
`

const ImageWrapper = styled.div`
  overflow: hidden;
  display: block;
  width: 40%;
`

const Image = styled.div`
  display: block;
  padding-bottom: 120%;
  overflow: hidden;
  position: relative;
  z-index: 0;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0, 1);

  img {
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--theme-color--pink-100);
  color: var(--light-body-text-color);
  padding: 7rem;

  h2 {
    text-transform: uppercase;
  }
`

export default Cards
