import styled from "styled-components"

export interface InputProps {
  state?: "success" | "error"
  outline?: boolean
}

const Input = styled.input<InputProps>`
  /* reset default styles */
  outline: none;

  ${({ theme }) => theme.typography.c1}
  padding: 12px 13px;
  background-color: ${({ theme }) => theme.colors.neutral.white};
  border: 1px solid
    ${({ state, theme }) => theme.colors.field_state[state ? state : "default"]};
  border-radius: ${({ outline }) => (outline ? 0 : 4)}px;

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

  border-width: ${({ outline }) => (outline ? 0 : 1)}px;
  border-bottom-width: 1px;
`

export default Input
