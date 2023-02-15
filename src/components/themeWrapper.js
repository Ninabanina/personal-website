import React, { useState, useEffect } from "react"
import styled from "styled-components"
import breakpoints from "./GlobalStyles/breakpoints"

import { ThemeProvider } from "styled-components"
import { light, dark } from "../components/GlobalStyles/Theme"
import ThemeToggler from "../components/themeToggler"
import Navigation from "./navigation"

const themesMap = {
  light,
  dark,
}

export const ThemePreferenceContext = React.createContext()

const ThemeWrapper = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light")
  const theme = { colors: themesMap[currentTheme] }
  const themeToggler = () => {
    currentTheme === "light"
      ? setCurrentTheme("dark")
      : setCurrentTheme("light")
  }

  // Using the operating system theme preference to set theme color
  useEffect(() => {
    const themeQuery = window.matchMedia("(prefers-color-scheme: light)")
    setCurrentTheme(themeQuery.matches ? "light" : "dark")
    themeQuery.addEventListener("change", ({ matches }) => {
      setCurrentTheme(matches ? "light" : "dark")
    })
  }, [])

  return (
    <>
      <ThemePreferenceContext.Provider
        value={{ currentTheme, setCurrentTheme }}
      >
        <ThemeProvider theme={theme}>
          <NavWrapper>
            <Navigation />
            <ThemeToggler theme={currentTheme} toggleTheme={themeToggler} />
          </NavWrapper>
          {children}
        </ThemeProvider>
      </ThemePreferenceContext.Provider>
    </>
  )
}

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 128rem;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 4rem 4rem 0 4rem;

  @media ${breakpoints.device.maxXXS} {
    flex-direction: column-reverse;
    align-items: flex-end;
  }

  @media ${breakpoints.device.maxMD} {
    padding: 3rem 3rem 0 3rem;
  }

  @media ${breakpoints.device.maxXS} {
    padding: 1.5rem 1.5rem 0 1.5rem;
  }
`
export default ThemeWrapper
