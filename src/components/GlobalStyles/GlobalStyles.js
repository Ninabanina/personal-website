import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {

    /* Colors */
    --theme-color--grape-100: #C3AFC9;
    --theme-color--grape-200: #816289;
    
    --theme-color--pink-100: #F8DBDB;

    --theme-color--blue-100-100: #B3D9EE;

    --theme-color--yellow-100: #FAF0D7;

    --theme-color--orange-100: #FFD9C0;

    --theme-color--gray-000: #FCFEFE;
    --theme-color--gray-100: #F6F6F6;
    --theme-color--gray-200: #D9D9D9;
    --theme-color--gray-300: #5B5E62;
    --theme-color--gray-400: #656565;
    --theme-color--gray-500: #454657;
    --theme-color--gray-600: #2D2F31;
    --theme-color--gray-700: #121419;

    /* Font families and stacks */
    --font-body: Poppins;
    --font-heading: Lato;
    --font-stack-body: var(--font-body), sans-serif;
    --font-stack-heading: var( --font-heading), sans-serif;

    /* Typography sizing */
    --h1-sm: 4.0rem;
    --h1-lg: 7.5rem;
    --h1-fluid-rate: 5vw + 2rem;

    --h2-sm: 2.6rem;
    --h2-lg: 5.7rem;
    --h2-fluid-rate: 4vw + 1rem;

    --h3-sm: 2.4rem;
    --h3-lg: 4.2rem;
    --h3-fluid-rate: 2.5vw + 1.4rem;

    --h4-sm: 2.2rem;
    --h4-lg: 3.2rem;
    --h4-fluid-rate: 2vw + 1rem;

    --h5-sm: 1.8rem;
    --h5-lg: 2.6rem;
    --h5-fluid-rate: 1.5vw + 1rem;

    --h6-sm: 1.6rem;
    --h6-lg: 1.8rem;
    --h6-fluid-rate: 1vw + 1rem;

    --font-size-body:1.8rem;
    --font-fluid-body-rate: 1vw + 1rem;

    --font-size-body-small-mobile: 1.2rem;
    --font-size-body-small-desktop: 1.4rem;

    --font-size-body-medium-mobile: 1.6rem;
    --font-size-body-medium-desktop: 1.8rem;

    --font-size-body-large-mobile: 2rem;
    --font-size-body-large-desktop: 2.4rem;

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

    /* Typography weight */
    --font-weight-regular: 400;
    --font-weight-bold: 700;

    /* Transition defaults */
    --transition-duration: 0.2s;
    --transition-easing: ease-out;
    --transition-delay: 0s;

    --bg-transition: var(--transition-duration) linear;
    --color-transition: var(--transition-duration) linear;

    /* Light theme setting */
    --light-bg-color: var(--theme-color--gray-100);
    --light-body-text-color: var(--theme-color--gray-700);
    --light-link-color: var(--theme-color--gray-500);

    /* Dark theme setting */
    --dark-bg-color: var(--theme-color--gray-700);
    --dark-body-text-color: var(--theme-color--gray-100);
    --dark-link-color: var(--theme-color--gray-100);

    /* Component figs */
    --toggler-width: 48px;
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
    font-size: clamp(var(--h1-sm), var(--h1-fluid-rate), var(--h1-lg));
    line-height: var(--line-height-h1);
  }

  h2, .h2 {
    font-size: clamp(var(--h2-sm), var(--h2-fluid-rate), var(--h2-lg));
    line-height: var(--line-height-h2);
  }

  h3, .h3 {
    font-size: clamp(var(--h3-sm), var(--h3-fluid-rate), var(--h3-lg));
    line-height: var(--line-height-h3);
  }

  h4, .h4 {
    font-size: clamp(var(--h4-sm), var(--h4-fluid-rate), var(--h4-lg));
    line-height: var(--line-height-h4);
  }

  h5, .h5 {
    font-size: clamp(var(--h5-sm), var(--h5-fluid-rate), var(--h5-lg));
    line-height: var(--line-height-h5);
  }

  h6, .h6 {
    font-size: clamp(var(--h6-sm), var(--h6-fluid-rate), var(--h6-lg));
    line-height: var(--line-height-h6);
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: background var(--bg-transition), color var(--color-transition);
  }

  // Size
  .smallFontSize {
    font-size: clamp(var(--font-size-body-small-mobile), var(--font-fluid-body-rate), var(--font-size-body-small-desktop));
  }

  .mediumFontSize {
    font-size: clamp(var(--font-size-body-medium-mobile), var(--font-fluid-body-rate), var(--font-size-body-medium-desktop));
  }

  .largeFontSize {
    font-size: clamp(var(--font-size-body-large-mobile), var(--font-fluid-body-rate), var(--font-size-body-large-desktop));
  }



  // Weights
  .regularFontWeight {
    font-weight: var(--font-weight-regular);
  }

  .boldFontWeight {
    font-weight: var(--font-weight-bold);
  }

  // Display
  .inlineTextDisplay {
    display: inline;
  }

  .blockTextDisplay {
    display: block;
  }

  .inlineBlockTextDisplay {
    display: inline-block;
  }

  .flexTextDisplay {
    display: flex;
  }

  .inlineFlexTextDisplay {
    display: inline-flex;
  }

  // Alignment
  .leftTextAlign {
    text-align: left;
  }

  .ceterTextAlign {
    text-align: right;
  }

  .rightTextAlign {
    text-align: center;
  }
`

export default GlobalStyle
