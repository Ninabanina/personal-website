import React from "react"
import styled from "styled-components"
import { typography } from "styled-system"

const Text = ({ as, fontSize, fontFamily, children }) => {
  return (
    <Tag as={as} fontSize={fontSize} fontFamily={fontFamily}>
      {children}
    </Tag>
  )
}

const Tag = styled.p`
  ${typography}
`

export default Text
