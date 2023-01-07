import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {

    /* Colors */
    --theme-color--purple: #C3AFC9;
    --theme-color--rose: #F8DBDB;
    --theme-color--blue: #B3D9EE;
    --theme-color--wheat: #FAF0D7;
    --theme-color--peach: #FFD9C0;

    --theme-color--charcoal: #454657;
    --theme-color--black: #121419;
    --theme-color--white: #F6F6F6;

    --theme-color--light-grey-100: #fcfefe;
    --theme-color--light-grey-200: #D9D9D9;
    --theme-color--grey: #5B5E62;
    --theme-color--dark-grey-100: #656565;
    --theme-color--dark-grey-200: #2d2f31;

    /* Font families and stacks */
    --font-body: Poppins;
    --font-heading: Lato;
    --font-stack-body: var(--font-body), sans-serif;
    --font-stack-heading: var( --font-heading), sans-serif;

    /* Typography sizing */
    --h1-sm: 4.0rem;
    --h1-lg: 7.5rem;

    --h2-sm: 2.6rem;
    --h2-lg: 5.7rem;

    --h3-sm: 2.4rem;
    --h3-lg: 4.2rem;

    --h4-sm: 2.2rem;
    --h4-lg: 3.21rem;

    --h5-sm: 1.8rem;
    --h5-lg: 2.6rem;

    --h6-sm: 1.6rem;
    --h6-lg: 1.8rem;

    --font-size-body:1.8rem;

    /* Typography spacing */
    --letter-spacing-body: 0.05rem;
    --letter-spacing-sm: -0.05rem;
    --letter-spacing-md: 0.3rem;
    
    --line-height-h1: 1.15em;
    --line-height-h2: 1.15em;
    --line-height-h3: 1.3em;
    --line-height-h4: 1.3em;
    --line-height-h5: 1.3em;
    --line-height-h6: 1.4em;

    /* Transition defaults */
    --transition-duration: 0.2s;
    --transition-easing: ease-out;
    --transition-delay: 0s;

    --bg-transition: var(--transition-duration) linear;
    --color-transition: var(--transition-duration) linear;

    /* Light theme setting */
    --light-bg-color: var(--theme-color--white);
    --light-body-text-color: var(--theme-color--black);
    --light-link-color: var(--theme-color--charcoal);

    /* Dark theme setting */
    --dark-bg-color: var(--theme-color--black);
    --dark-body-text-color: var(--theme-color--white);
    --dark-link-color: var(--theme-color--white);
  }

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
    font-family: var(--font-stack-body);
    font-weight: 400;
    font-size: var(--font-size-body);
  }

  h1, .h1,
  h2, .h2,
  h3, .h3,
  h4, .h4,
  h5, .h5,
  h6, .h6 {
    font-family: var(--font-stack-heading);
    font-weight: 700;
    margin-top: 0;
  }
  
  h1, .h1 {
    font-size: var(--h1-sm);
    line-height: var(--line-height-h1);

    @media (min-width: var(--md)) {
      font-size: var(--h1-lg);
    }
  }

  h2, .h2 {
    font-size: var(--h2-sm);
    line-height: var(--line-height-h2);

    @media (min-width: var(--md)) {
      font-size: var(--h2-lg);
    }
  }

  h3, .h3 {
    font-size: var(--h3-sm);
    line-height: var(--line-height-h3);

    @media (min-width: var(--md)) {
      font-size: var(--h3-lg);
    }
  }

  h4, .h4 {
    font-size: var(--h4-sm);
    line-height: var(--line-height-h4);

    @media (min-width: var(--md)) {
      font-size: var(--h4-lg);
    }
  }

  h5, .h5 {
    font-size: var(--h5-sm);
    line-height: var(--line-height-h5);

    @media (min-width: var(--md)) {
      font-size: var(--h5-lg);
    }
  }

  h6, .h6 {
    font-size: var(--h6-sm);
    line-height: var(--line-height-h6);

    @media (min-width: var(--md)) {
      font-size: var(--h6-lg);
    }
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: background var(--bg-transition), color var(--color-transition);
  }

`;

export default GlobalStyle;