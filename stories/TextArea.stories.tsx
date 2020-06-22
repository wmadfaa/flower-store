import React from "react"
import styled from "styled-components"
import { withKnobs } from "@storybook/addon-knobs"

import TextArea from "../src/components/TextArea"

export default {
  title: "Design System|TextArea",
  decorators: [withKnobs],
  parameters: {
    component: TextArea,
    componentSubtitle: "a styled TextArea",
  },
}

const TextArea_block = styled.textarea`
  display: block;
  margin: 20px 0;
`

export const standard: React.FC = () => (
  <TextArea as={TextArea_block} placeholder="TextArea text" />
)

export const states: React.FC = () => {
  return (
    <React.Fragment>
      <TextArea as={TextArea_block} placeholder="Default TextArea text" />
      <TextArea
        as={TextArea_block}
        placeholder="Success TextArea text"
        state="success"
      />
      <TextArea
        as={TextArea_block}
        placeholder="Error TextArea text"
        state="error"
      />
      <TextArea
        as={TextArea_block}
        placeholder="Default TextArea text"
        disabled
      />
    </React.Fragment>
  )
}

export const outline: React.FC = () => {
  return (
    <React.Fragment>
      <TextArea
        as={TextArea_block}
        outline
        placeholder="Default TextArea text"
      />
      <TextArea
        as={TextArea_block}
        outline
        placeholder="Success TextArea text"
        state="success"
      />
      <TextArea
        as={TextArea_block}
        outline
        placeholder="Error TextArea text"
        state="error"
      />
      <TextArea
        as={TextArea_block}
        outline
        placeholder="Disabled TextArea text"
        disabled
      />
    </React.Fragment>
  )
}
