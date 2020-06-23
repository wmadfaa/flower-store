import styled from "styled-components"
import { BaseInputProps, BaseInputStyles } from "./Input"
import textarea from "react-autosize-textarea"

export type TextAreaProps = BaseInputProps

const TextArea = styled(textarea)<TextAreaProps>`
  ${({ theme, ...props }) => BaseInputStyles(props)}
`

export default TextArea
