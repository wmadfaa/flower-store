import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;

    * {
      box-sizing: border-box;
    }
  }
`
