import React from "react"
import { ThemeProvider } from "styled-components"

import theme from "../shared/theme"
import { GlobalStyle } from "../shared/global"

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Layout
