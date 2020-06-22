import React from "react"
import { withKnobs, select, text } from "@storybook/addon-knobs"

import Typography from "../src/components/Typography"
import styled from "styled-components"

export default {
  title: "Design System|Typography",
  decorators: [withKnobs],
  parameters: {
    component: Typography,
    componentSubtitle:
      "render a text tag e.g h1,p,i... with customizable style",
  },
}

const spacing = styled.div`
  margin: 20px 0;
`

const dark_background = styled(spacing)`
  background-color: ${({ theme }) => theme.colors.neutral.black};
`

export const standard: React.FC = () => <Typography>Hallo World!</Typography>

export const categories: React.FC = () => {
  return (
    <React.Fragment>
      <Typography as={spacing} category="h1">
        H1
      </Typography>
      <Typography as={spacing} category="h2">
        H2
      </Typography>
      <Typography as={spacing} category="h3">
        H3
      </Typography>
      <Typography as={spacing} category="h4">
        H4
      </Typography>
      <Typography as={spacing} category="h5">
        H5
      </Typography>
      <Typography as={spacing} category="p1">
        Paragraph1
      </Typography>
      <Typography as={spacing} category="p2">
        Paragraph2
      </Typography>
      <Typography as={spacing} category="button">
        Button
      </Typography>
      <Typography as={spacing} category="c1">
        Caption1
      </Typography>
      <Typography as={spacing} category="c2">
        Caption2
      </Typography>
      <Typography as={spacing} category="strike1">
        Strike1
      </Typography>
      <Typography as={spacing} category="strike1">
        Strike2
      </Typography>
    </React.Fragment>
  )
}

export const colors: React.FC = () => {
  return (
    <React.Fragment>
      <Typography as={dark_background} category="p1" color="snow">
        Colors/snow
      </Typography>
      <Typography as={dark_background} category="p1" color="white">
        Colors/white
      </Typography>
      <Typography as={dark_background} category="p1" color="pale_gray">
        Colors/pale gray
      </Typography>
      <Typography as={dark_background} category="p1" color="light_gray">
        Colors/light gray
      </Typography>
      <Typography as={dark_background} category="p1" color="gray">
        Colors/gray
      </Typography>
      <Typography as={dark_background} category="p1" color="dark_gray">
        Colors/dark gray
      </Typography>
      <Typography as={spacing} category="p1" color="black">
        Colors/black
      </Typography>
    </React.Fragment>
  )
}

export const Status: React.FC = () => {
  return (
    <React.Fragment>
      <Typography as={dark_background} category="p1" status="positive">
        Status/positive
      </Typography>
      <Typography as={dark_background} category="p1" status="warning">
        Status/warning
      </Typography>
      <Typography as={dark_background} category="p1" status="negative">
        Status/negative
      </Typography>
      <Typography as={spacing} category="p1" status="active">
        Status/active
      </Typography>
    </React.Fragment>
  )
}

export const playground: React.FC = () => (
  <Typography
    category={select(
      "category",
      {
        default: undefined,
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        p1: "p1",
        p2: "p2",
        button: "button",
        c1: "c1",
        c2: "c2",
        strike1: "strike1",
        strike2: "strike2",
      },
      undefined
    )}
    color={select(
      "color",
      {
        default: undefined,
        white: "white",
        snow: "snow",
        pale_gray: "pale_gray",
        light_gray: "light_gray",
        gray: "gray",
        dark_gray: "dark_gray",
        black: "black",
      },
      undefined
    )}
    status={select(
      "status",
      {
        default: undefined,
        positive: "positive",
        warning: "warning",
        negative: "negative",
        active: "active",
      },
      undefined
    )}
  >
    {text("content", "I am your playground, edit me!")}
  </Typography>
)
