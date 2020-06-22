import React from "react"
import styled from "styled-components"
import { withKnobs } from "@storybook/addon-knobs"

import Input from "../src/components/Input"

export default {
  title: "Design System|Input",
  decorators: [withKnobs],
  parameters: {
    component: Input,
    componentSubtitle: "text input field",
  },
}

const input_block = styled.input`
  display: block;
  margin: 20px 0;
`

export const standard: React.FC = () => (
  <Input as={input_block} placeholder="Input text" />
)

export const states: React.FC = () => {
  return (
    <React.Fragment>
      <Input as={input_block} placeholder="Default input text" />
      <Input
        as={input_block}
        placeholder="Success input text"
        state="success"
      />
      <Input as={input_block} placeholder="Error input text" state="error" />
      <Input as={input_block} placeholder="Default input text" disabled />
    </React.Fragment>
  )
}

export const outline: React.FC = () => {
  return (
    <React.Fragment>
      <Input as={input_block} outline placeholder="Default input text" />
      <Input
        as={input_block}
        outline
        placeholder="Success input text"
        state="success"
      />
      <Input
        as={input_block}
        outline
        placeholder="Error input text"
        state="error"
      />
      <Input
        as={input_block}
        outline
        placeholder="Disabled input text"
        disabled
      />
    </React.Fragment>
  )
}
