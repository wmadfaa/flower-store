import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
} from "styled-components"

export interface BaseInputProps {
  state?: "success" | "error"
}

export interface InputProps extends BaseInputProps {
  outline?: boolean
}

export const BaseInputStyles = ({
  state,
}: BaseInputProps): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
  /* reset default styles */
  outline: none;

  ${({ theme }) => theme.typography.c1}
  padding: 12px 13px;
  background-color: ${({ theme }) => theme.colors.neutral.white};
  border: 1px solid
    ${({ theme }) => theme.colors.field_state[state ? state : "default"]};
  border-radius: 4px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.dark_gray};
  }

  &:not(:placeholder-shown) {
    color: ${({ theme }) => theme.colors.neutral.black};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.field_state.onfocus};
  }

  &:disabled {
    &,
    &::placeholder {
      color: ${({ theme }) => theme.colors.neutral.light_gray};
    }
    border-color: ${({ theme }) => theme.colors.field_state.disabled};
  }
`

const Input = styled.input<InputProps>`
  ${({ theme, ...props }) => BaseInputStyles(props)}
  border-radius: ${({ outline }) => (outline ? 0 : 4)}px;

  border-width: ${({ outline }) => (outline ? 0 : 1)}px;
  border-bottom-width: 1px;
`

export default Input
