import React from "react"
import styled from "styled-components"

const Heading = ({ level, children }) => {
  const Tag = level ? level : "h2"

  if (!children) return null

  return <Tag>{children}</Tag>
}

export default Heading
