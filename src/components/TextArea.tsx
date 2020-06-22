import styled from "styled-components"
import { BaseInputProps, BaseInputStyles } from "./Input"

export type TextAreaProps = BaseInputProps

const TextArea = styled.span<TextAreaProps>`
  ${({ theme, ...props }) => BaseInputStyles(props)}
`

export default TextArea
