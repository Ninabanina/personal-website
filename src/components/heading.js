import React from "react"
import styled from "styled-components"
import { typography } from "styled-system"

const Heading = ({ as, fontSize, fontFamily, children }) => {
  return (
    <Tag as={as || "h2"} fontSize={fontSize} fontFamily={fontFamily}>
      {children}
    </Tag>
  )
}

const getSize = props =>
  `font-size: clamp(var(--${props.as}-sm), var(--${props.as}-fluid-rate), ${props.fontSize});`

const Tag = styled.h2`
  ${typography}
  ${getSize}
`

export default Heading
