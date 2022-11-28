import React from 'react';
import styled from 'styled-components';

const ThemeToggler = ({ theme, toggleTheme }) => {
  const areaLabel = theme === 'light' ? 'Activate dark mode' : 'Activate light mode';

  return (
    <Toggler onClick={toggleTheme} aria-label={areaLabel} title={areaLabel}>
      <HidenText>
       Dark and Light Mode toggle.
      </HidenText>
    </Toggler>
  )
}

const Toggler = styled.button`
  margin: 0;
  padding: 0;
  width: 48px;
  height: 28px;
  border: none;
  /* outline: none; */
  overflow: hidden;
  position: relative;
  border-radius: 14px;
  display: inline-block;
  background: ${({ theme }) => theme.colors.togglerBg};
  transition: all 0.2s ease-in-out;

  &::before {
    top: 4px;
    left: ${({ theme }) => theme.colors.togglerLeftSpace};;
    content: "";
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.togglerItemFg};
    transition: all 0.2s ease-in-out;
  }

  &::after {
    content: "";
    top: ${({ theme }) => theme.colors.togglerTopSpace};
    right: ${({ theme }) => theme.colors.togglerRightSpace};
    width: ${({ theme }) => theme.colors.togglerWidth};
    height: ${({ theme }) => theme.colors.togglerHeight};
    display: block;
    position: absolute;
    border-radius: ${({ theme }) => theme.colors.togglerBorderRadius};
    background: ${({ theme }) => theme.colors.togglerItemBg};
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.toggleHover};

    &::after {
      background: ${({ theme }) => theme.colors.toggleHover};
    }
  }
`

const HidenText = styled.span`
  border: 0 !important;
	clip-path: inset(50%) !important;
	height: 1px !important;
	margin: -1px !important;
	overflow: hidden !important;
	padding: 0 !important;
	position: absolute !important;
	width: 1px !important;
	white-space: nowrap !important;
`

export default ThemeToggler;