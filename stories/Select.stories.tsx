import React from "react"
import styled from "styled-components"
import { withKnobs } from "@storybook/addon-knobs"

import Select from "../src/components/Select"

export default {
  title: "Design System|Select",
  decorators: [withKnobs],
  parameters: {
    component: Select,
    componentSubtitle: "a styled Select",
  },
}

const Block = styled.div`
  display: block;
  margin: 20px 0;
`

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
]

export const standard: React.FC = () => <Select options={options} />

export const states: React.FC = () => {
  return (
    <React.Fragment>
      <Block>
        <Select options={options} />
      </Block>
      <Block>
        <Select state="success" options={options} />
      </Block>
      <Block>
        <Select state="error" options={options} />
      </Block>
      <Block>
        <Select isDisabled options={options} />
      </Block>
    </React.Fragment>
  )
}
