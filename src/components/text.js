import React from "react"
import styled from "styled-components"
import { fontStyle, typography } from "styled-system"

const Text = ({ as, fontSize, fontFamily, fontStyle, children }) => {
  return (
    <Tag
      as={as || "p"}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontStyle={fontStyle || "normal"}
    >
      {children}
    </Tag>
  )
}

const getSize = props =>
  `font-size: clamp(var(--${props.as}-sm), var(--${props.as}-fluid-rate), ${props.fontSize});`

const Tag = styled.p`
  ${typography}
  ${getSize}
`

export default Text
