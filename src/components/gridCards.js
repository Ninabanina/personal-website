import React from "react"
import styled from "styled-components"
import breakpoints from "./GlobalStyles/breakpoints"
import Text from "./text"
import Heading from "./heading"
import Spacer from "./space"

function GridCardComponent({ imageUrl, title, date, description, link }) {
  return (
    <GridCard>
      <Card>
        <GridCardInner href={link} target="_blank" rel="noopener noreferrer">
          <GridCardImageContainer>
            <GridCardImage src={imageUrl} alt={title} />
          </GridCardImageContainer>
          <GridCardContent>
            <Heading fontFamily="Lato" fontSize="4.8rem">
              {title}
            </Heading>
            <Spacer mb={[1, 2, 3]} />
            <Text
              as="span"
              fontFamily="Poppins"
              fontSize="2.2rem"
              fontStyle="italic"
            >
              {date}
            </Text>
            <Spacer mb={[1, 2, 3]} />
            <Text fontFamily="Poppins" fontSize="2.8rem">
              {description}
            </Text>
          </GridCardContent>
        </GridCardInner>
      </Card>
    </GridCard>
  )
}

function GridCardContainer({ data }) {
  let cardNumbeEven = false
  let cardLength = data.allMarkdownRemark.edges.length

  if (cardLength > 3 && cardLength % 2 === 0) {
    cardNumbeEven = true
  }

  const gridCards = data.allMarkdownRemark.edges
    .slice(0, 5)
    .map(({ node }) => (
      <GridCardComponent
        key={node.id}
        imageUrl={node.frontmatter.imageURL}
        title={node.frontmatter.title}
        date={node.frontmatter.date}
        description={node.excerpt}
        link={node.fields.slug}
      />
    ))

  return (
    <GridContainer cardNumbeEven={cardNumbeEven}>{gridCards}</GridContainer>
  )
}

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 3rem;
  padding-left: 0;

  & > li:nth-child(3n + 1) {
    background-color: var(--theme-color--pink-100);
  }

  & > li:nth-child(3n + 2) {
    background-color: var(--theme-color--blue-100-100);
  }

  & > li:nth-child(3n) {
    background-color: var(--theme-color--yellow-100);
  }

  @media ${breakpoints.device.minSM} {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: ${props => {
      return props.cardNumbeEven === true ? "0.86fr 1fr" : "0.86fr 1fr 1fr"
    }};

    & > li:first-child {
      grid-column: 1 / 3;

      a {
        flex-direction: row;

        img {
          height: 100%;
          width: auto;
          overflow: hidden;
          object-fit: cover;
        }

        div:nth-child(2) {
          @media ${breakpoints.device.minSM} {
            flex-basis: 85%;
          }

          @media ${breakpoints.device.minMD} {
            flex-basis: 60%;
          }
        }
      }
    }

    & > li:last-child {
      grid-column: ${props => {
        return props.cardNumbeEven === true ? "1 / 3" : "2"
      }};

      a {
        flex-direction: ${props => {
          return props.cardNumbeEven === true ? "row-reverse" : "column"
        }};

        div:first-child {
          @media ${breakpoints.device.minSM} {
            flex-basis: 250%;
          }
        }
      }
    }
  }
`

const GridCard = styled.li`
  display: block;
`

const Card = styled.div`
  height: 100%;
`

const GridCardInner = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  color: currentColor;
  text-decoration: none;

  img {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0, 1);
  }

  :hover,
  :focus {
    div:first-child {
      overflow: hidden;

      img {
        transform: scale(1.05);
      }
    }
  }
`

const GridCardImageContainer = styled.div`
  overflow: hidden;
  flex-grow: 2;
`

const GridCardImage = styled.img`
  height: 100%;
  min-width: 100%;
  object-fit: cover;
}
`

const GridCardContent = styled.div`
  padding: 1.5rem;
  color: var(--light-body-text-color);

  @media ${breakpoints.device.minSM} {
    padding: 3rem;
  }

  h2 {
    text-transform: uppercase;
  }
`

export default GridCardContainer
