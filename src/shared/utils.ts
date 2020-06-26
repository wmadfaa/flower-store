import { getLuminance } from "polished"

import theme from "../shared/theme"

export const getBackgroundColor = (color?: string): string => {
  if (!color) {
    return theme.colors.field_state.default
  }
  if (color in theme.colors.main) {
    const selectedColor = color as keyof typeof theme["colors"]["main"]
    return theme.colors.main[selectedColor]
  } else if (color in theme.colors.field_state) {
    const selectedColor = color as keyof typeof theme["colors"]["field_state"]
    return theme.colors.field_state[selectedColor]
  }
  return color
}

export const getTextColor = (color?: string): string => {
  const luminance = getLuminance(getBackgroundColor(color))

  if (luminance > 0.36) {
    return theme.colors.neutral.black
  }
  return theme.colors.neutral.white
}
