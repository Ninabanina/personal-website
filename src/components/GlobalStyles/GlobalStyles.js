import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Poppins:ital@0;1&display=swap');

  // CSS Reset
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    height: 100%;
  }

  /*
    Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /*
    Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }

  /*
    Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* 
    Remove list styles on ul, ol elements with a list role, 
    which suggests default styling will be removed 
  */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* 
    Set core root defaults 
  */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* 
    A elements that don't have a class get default styles
  */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* 
    Remove all animations, transitions and smooth scroll 
    for people that prefer not to see them 
  */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* 
    Typograohy 
  */
  html {
    font-size: 10px;
  }

  body {
    line-height: 1.5;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  
  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.8rem;
    color: #333;
  }

  h1, .h1,
  h2, .h2,
  h3, .h3,
  h4, .h4,
  h5, .h5,
  h6, .h6 {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    margin-top: 0;
  }
  
  h1, .h1 {
    font-size: 4.0rem;
    line-height: 1.15em;

    @media (min-width: 992px) {
      font-size: 7.5rem;
    }
  }

  h2, .h2 {
    font-size: 2.6rem;
    line-height: 1.15em;

    @media (min-width: 992px) {
      font-size: 5.7rem;
    }
  }

  h3, .h3 {
    font-size: 2.4rem;
    line-height: 1.3em;

    @media (min-width: 992px) {
      font-size: 4.2rem;
    }
  }

  h4, .h4 {
    font-size: 2.2rem;
    line-height: 1.3em;

    @media (min-width: 992px) {
      font-size: 3.21rem;
    }
  }

  h5, .h5 {
    font-size: 1.8rem;
    line-height: 1.3em;

    @media (min-width: 992px) {
      font-size: 2.6rem;
    }
  }

  h6, .h6 {
    font-size: 1.6rem;
    line-height: 1.4em;

    @media (min-width: 992px) {
      font-size: 1.8rem;
    }
  }

  /* --xs: 480px;
  --sm: 768px;
  --md: 992px;
  --lg: 1200px;
  --xlg: 1440px; */

`;

export default GlobalStyle;