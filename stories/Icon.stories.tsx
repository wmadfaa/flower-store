import React, { Fragment } from "react"
import styled, { css } from "styled-components"

import Icon from "../src/components/Icon"
import icons from "../src/shared/icons"

const Meta = styled.div`
  color: #666;
  font-size: 12px;
`

const iconSetKeys = Object.keys(icons) as (keyof typeof icons)[]

const Item = styled.li<{ minimal?: boolean }>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 20%;
  min-width: 120px;

  padding: 0px 7.5px 20px;

  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }

  ${props =>
    props.minimal &&
    css`
      flex: none;
      min-width: auto;
      padding: 0;
      background: #fff;
      border: 1px solid #666;

      svg {
        display: block;
        margin-right: 0;
        width: 48px;
        height: 48px;
      }
    `};
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`

export default {
  title: "Design System|Icon",
  component: Icon,
}

export const labels: React.FC = () => (
  <Fragment>
    There are {iconSetKeys.length} icons
    <List>
      {iconSetKeys.map(key => (
        <Item key={key}>
          <Icon icon={key} aria-hidden />
          <Meta>{key}</Meta>
        </Item>
      ))}
    </List>
  </Fragment>
)

export const noLabels: React.FC = () => (
  <List>
    {iconSetKeys.map(key => (
      <Item minimal key={key}>
        <Icon icon={key} aria-label={key} />
      </Item>
    ))}
  </List>
)

export const inline: React.FC = () => (
  <Fragment>
    this is an inline <Icon icon="cart" aria-label="shopping cart" /> icon
    (default)
  </Fragment>
)

export const block: React.FC = () => (
  <Fragment>
    this is a block <Icon icon="cart" aria-label="shopping cart" block /> icon
  </Fragment>
)
