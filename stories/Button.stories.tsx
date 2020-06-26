import React from "react"
import styled from "styled-components"
import { withKnobs, select, text, boolean } from "@storybook/addon-knobs"

import Button from "../src/components/Button"
import Icon from "../src/components/Icon"

export default {
  title: "Design System|Button",
  decorators: [withKnobs],
  parameters: {
    component: Button,
    componentSubtitle: "a styled Button",
  },
}

const ButtonWithSpacing = styled(Button)`
  margin: 16px 8px;
`

export const standard: React.FC = () => (
  <React.Fragment>
    <ButtonWithSpacing>Button standard</ButtonWithSpacing>
    <ButtonWithSpacing loading>Button loading</ButtonWithSpacing>
    <ButtonWithSpacing disabled>Button disabled</ButtonWithSpacing>
  </React.Fragment>
)

export const colors: React.FC = () => (
  <React.Fragment>
    <ButtonWithSpacing color="default">default Button</ButtonWithSpacing>
    <ButtonWithSpacing color="primary">primary Button</ButtonWithSpacing>
    <ButtonWithSpacing color="secondary">secondary Button</ButtonWithSpacing>
    <ButtonWithSpacing color="secondary_dark">
      secondary_dark Button
    </ButtonWithSpacing>
    <ButtonWithSpacing color="error">error Button</ButtonWithSpacing>
    <ButtonWithSpacing color="warning">error Button</ButtonWithSpacing>
    <ButtonWithSpacing color="success">success Button</ButtonWithSpacing>
  </React.Fragment>
)

export const shapes: React.FC = () => (
  <React.Fragment>
    <ButtonWithSpacing shape="radios0">Button radios0</ButtonWithSpacing>
    <ButtonWithSpacing shape="radios1">Button radios1</ButtonWithSpacing>
    <ButtonWithSpacing shape="radios2">Button radios2</ButtonWithSpacing>
    <ButtonWithSpacing shape="round">Button round</ButtonWithSpacing>
  </React.Fragment>
)

export const sizes: React.FC = () => (
  <React.Fragment>
    <ButtonWithSpacing size="large">Button large</ButtonWithSpacing>
    <ButtonWithSpacing size="small">Button small</ButtonWithSpacing>
  </React.Fragment>
)

export const withIcon: React.FC = () => (
  <React.Fragment>
    <div>
      <ButtonWithSpacing icon={<Icon icon="cart" />} color="default">
        default Button
      </ButtonWithSpacing>
      <ButtonWithSpacing icon={<Icon icon="cart" />} color="primary">
        primary Button
      </ButtonWithSpacing>
      <ButtonWithSpacing icon={<Icon icon="cart" />} color="secondary">
        secondary Button
      </ButtonWithSpacing>
    </div>
    <div>
      <ButtonWithSpacing
        size="small"
        icon={<Icon icon="cart" />}
        color="default"
      >
        default Button
      </ButtonWithSpacing>
      <ButtonWithSpacing
        size="small"
        icon={<Icon icon="cart" />}
        color="primary"
      >
        primary Button
      </ButtonWithSpacing>
      <ButtonWithSpacing
        size="small"
        icon={<Icon icon="cart" />}
        color="secondary"
      >
        secondary Button
      </ButtonWithSpacing>
    </div>
    <div>
      <ButtonWithSpacing color="primary" icon={<Icon icon="cart" />} loading>
        Button loading
      </ButtonWithSpacing>
      <ButtonWithSpacing color="primary" icon={<Icon icon="cart" />} disabled>
        Button disabled
      </ButtonWithSpacing>
    </div>
  </React.Fragment>
)

export const playground: React.FC = () => (
  <ButtonWithSpacing
    size={select(
      "size",
      {
        default: undefined,
        large: "large",
        small: "small",
      },
      undefined
    )}
    shape={select(
      "shape",
      {
        default: undefined,
        round: "round",
        radios0: "radios0",
        radios1: "radios1",
        radios2: "radios2",
      },
      undefined
    )}
    loading={boolean("loading", false)}
    loadingText={text("loadingText", "")}
    disabled={boolean("disabled", false)}
    color={select(
      "color",
      {
        default: "default",
        primary: "primary",
        secondary: "secondary",
        secondary_dark: "secondary_dark",
        error: "error",
        warning: "warning",
        success: "success",
      },
      "default"
    )}
  >
    {text("label", "I am your playground, edit me!")}
  </ButtonWithSpacing>
)
