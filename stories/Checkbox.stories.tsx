import React from "react"
import { withKnobs } from "@storybook/addon-knobs"

import Checkbox from "../src/components/Checkbox"

export default {
  title: "Design System|Checkbox",
  decorators: [withKnobs],
  parameters: {
    component: Checkbox,
    componentSubtitle: "a styled Checkbox",
  },
}

export const standard: React.FC = () => (
  <React.Fragment>
    <Checkbox id="default-id" label="default Checkbox" />
    <Checkbox id="disabled-id" disabled label="disabled Checkbox" checked />
  </React.Fragment>
)

export const colors: React.FC = () => (
  <React.Fragment>
    <Checkbox id="default-id" color="default">
      default Checkbox
    </Checkbox>
    <Checkbox id="primary-id" color="primary">
      primary Checkbox
    </Checkbox>
    <Checkbox id="secondary-id" color="secondary">
      secondary Checkbox
    </Checkbox>
    <Checkbox id="secondary_dark-id" color="secondary_dark">
      secondary_dark Checkbox
    </Checkbox>
    <Checkbox id="error-id" color="error">
      error Checkbox
    </Checkbox>
    <Checkbox id="warning-id" color="warning">
      error Checkbox
    </Checkbox>
    <Checkbox id="success-id" color="success">
      success Checkbox
    </Checkbox>
  </React.Fragment>
)
