import React from "react"
import classNames from "classnames"

const Text = ({ component, size, weight, display, align, children }) => {
  const Tag = component ? component : "p"

  const classes = classNames(
    { smallFontSize: size === "small" },
    { mediumFontSize: size === "medium" },
    { largeFontSize: size === "large" },

    { regularFontWeight: weight === "regular" },
    { boldFontWeight: weight === "bold" },

    { inlineTextDisplay: display === "inline" },
    { blockTextDisplay: display === "block" },
    { inlineBlockTextDisplay: display === "inline-block" },
    { flexTextDisplay: display === "flex" },
    { inlineFlexTextDisplay: display === "inline-flex" },

    { leftTextAlign: align === "left" },
    { ceterTextAlign: align === "center" },
    { rightTextAlign: align === "right" }
  )

  if (!children) return null

  return <Tag className={classes}>{children}</Tag>
}

export default Text
