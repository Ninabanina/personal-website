import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { ThemeProvider } from 'styled-components';
import { light,dark } from '../components/GlobalStyles/Theme';
import ThemeToggler from '../components/themeToggler';

const themesMap = { 
  light,
  dark
}

export const ThemePreferenceContext = React.createContext();

const ThemeWrapper = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light')
  const theme = { colors: themesMap[currentTheme] }
  const themeToggler = () => {
    currentTheme === 'light' ? setCurrentTheme('dark') : setCurrentTheme('light')
  }

  // Using the operating system theme preference to set theme color
  useEffect(() => {
    const themeQuery = window.matchMedia('(prefers-color-scheme: light)')
    setCurrentTheme(themeQuery.matches ? 'light' : 'dark')
    themeQuery.addEventListener('change', ({ matches }) => {
      setCurrentTheme(matches ? 'light' : 'dark')
    })
  }, [])
  
  return (
    <>
      <ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
        <ThemeProvider theme={theme}>
          <ThemeToggler theme={currentTheme} toggleTheme={themeToggler} />
          {children}
        </ThemeProvider>
      </ThemePreferenceContext.Provider>
    </>
  )
}

export default ThemeWrapper;