import styled from "styled-components"
import theme from "../shared/theme"

export interface TypographyProps {
  category?: keyof typeof theme["typography"]
  color?: keyof typeof theme["colors"]["neutral"]
  status?: keyof typeof theme["colors"]["ui"]
}

const Typography = styled.span<TypographyProps>`
  ${({ theme, category = "p1" }) => theme.typography[category]}
  color: ${({ theme, color = "black" }) => theme.colors.neutral[color]};
  color: ${({ theme, status }) => status && theme.colors.ui[status]};
`

export default Typography
