import "styled-components"
import { FlattenSimpleInterpolation } from "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: {
        primary: string
        secondary: string
        secondary_dark: string
      }
      ui: {
        positive: string
        warning: string
        negative: string
        active: string
      }
      neutral: {
        white: string
        snow: string
        pale_gray: string
        light_gray: string
        gray: string
        dark_gray: string
        black: string
      }
      field_state: {
        default: string
        disabled: string
        active: string
        onfocus: string
        error: string
        warning: string
        success: string
      }
    }
    shadows: {
      light: FlattenSimpleInterpolation
      hover: FlattenSimpleInterpolation
      light_left: FlattenSimpleInterpolation
      hover_left: FlattenSimpleInterpolation
    }
    image: {
      focus: FlattenSimpleInterpolation
      hover: FlattenSimpleInterpolation
    }
    typography: {
      h1: FlattenSimpleInterpolation
      h2: FlattenSimpleInterpolation
      h3: FlattenSimpleInterpolation
      h4: FlattenSimpleInterpolation
      h5: FlattenSimpleInterpolation
      p1: FlattenSimpleInterpolation
      p2: FlattenSimpleInterpolation
      button: FlattenSimpleInterpolation
      c1: FlattenSimpleInterpolation
      c2: FlattenSimpleInterpolation
      strike1: FlattenSimpleInterpolation
      strike2: FlattenSimpleInterpolation
    }
    shapes: {
      radios0: FlattenSimpleInterpolation
      radios1: FlattenSimpleInterpolation
      radios2: FlattenSimpleInterpolation
      round: FlattenSimpleInterpolation
    }
    animation: {
      easing: {
        rubber: string
      }
    }
  }
}
