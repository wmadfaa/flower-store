import React from "react"
import { withKnobs } from "@storybook/addon-knobs"

import Radio from "../src/components/Radio"

export default {
  title: "Design System|Radio",
  decorators: [withKnobs],
  parameters: {
    component: Radio,
    componentSubtitle: "a styled Radio",
  },
}

export const standard: React.FC = () => (
  <React.Fragment>
    <Radio id="default-id" label="default radio" />
    <Radio id="disabled-id" disabled label="disabled radio" checked />
  </React.Fragment>
)

export const colors: React.FC = () => (
  <React.Fragment>
    <Radio id="default-id" color="default">
      default Radio
    </Radio>
    <Radio id="primary-id" color="primary">
      primary Radio
    </Radio>
    <Radio id="secondary-id" color="secondary">
      secondary Radio
    </Radio>
    <Radio id="secondary_dark-id" color="secondary_dark">
      secondary_dark Radio
    </Radio>
    <Radio id="error-id" color="error">
      error Radio
    </Radio>
    <Radio id="warning-id" color="warning">
      error Radio
    </Radio>
    <Radio id="success-id" color="success">
      success Radio
    </Radio>
  </React.Fragment>
)
