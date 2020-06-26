import React from "react"
import styled from "styled-components"
import { rgba } from "polished"

import theme from "../shared/theme"
import { getBackgroundColor, getTextColor } from "../shared/utils"

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "size"> {
  size?: "small" | "large"
  shape?: keyof typeof theme["shapes"]
  loading?: boolean
  loadingText?: string
  disabled?: boolean
  icon?: React.ReactNode
  color?:
    | keyof typeof theme["colors"]["main"]
    | keyof Omit<
        typeof theme["colors"]["field_state"],
        "onfocus" | "disabled" | "active"
      >
}

const Text = styled.span`
  display: inline-block;
`

const Loading = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  opacity: 0;
`

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  className,
  loading,
  loadingText,
  icon,
}) => {
  return (
    <button className={className}>
      <Text>{children}</Text>
      {loading && <Loading>{loadingText || "Loading..."}</Loading>}
      {icon}
    </button>
  )
}

const Button = styled(ButtonComponent)`
  outline: none;
  border: 0;
  margin: 0;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: ${({ size }) => (size === "small" ? "14px 10px" : "16px 30px")};
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out, border 1ms;
  transform: translate3d(0, 0, 0);
  white-space: nowrap;
  user-select: none;
  text-transform: uppercase;
  opacity: 1;
  background: ${({ color }) => getBackgroundColor(color)};
  color: ${({ color }) => getTextColor(color)};

  ${({ shape, theme }) => (shape ? theme.shapes[shape] : theme.shapes.radios1)}
  ${({ size, theme }) =>
    size === "small" ? theme.typography.c1 : theme.typography.button}

  ${props =>
    !props.loading &&
    !props.disabled &&
    `
      &:hover {
        transform: translate3d(0, -2px, 0);
        ${props.theme.shadows.hover}
      }

      &:active {
        transform: translate3d(0, 0, 0);
      }

      &:focus {
        ${props.theme.shadows.light};
      }

      &:focus:hover {
        ${props.theme.shadows.hover};
      }
    `}

  ${Text} {
    transform: scale3d(1,1,1) translate3d(0,0,0);
    transition: transform 700ms ${({ theme }) => theme.animation.easing.rubber};
    opacity: 1;
  }

  ${Loading} {
    transform: translate3d(0, 100%, 0);
  }

  svg {
    width: ${({ size }) => (size === "small" ? 18 : 24)}px;
    height: ${({ size }) => (size === "small" ? 18 : 24)}px;
    pointer-events: none;
  }

    ${props =>
      props.disabled &&
      `
      cursor: not-allowed !important;
      background: ${rgba(getBackgroundColor(props.color), 0.5)};
      color: ${getTextColor(rgba(getBackgroundColor(props.color), 0.5))};
      &:hover {
        transform: none;
      }
    `}

    ${props =>
      props.loading &&
      `
      cursor: progress !important;
      background: ${rgba(getBackgroundColor(props.color), 0.7)};

      ${Loading} {
        color: ${getTextColor(rgba(getBackgroundColor(props.color), 0.7))};
        transition: transform 700ms ${props.theme.animation.easing.rubber};
        transform: translate3d(0, -50%, 0);
        opacity: 1;
      }

      ${Text} {
        transform: scale3d(0, 0, 1) translate3d(0, -100%, 0);
        opacity: 0;
      }

      &:hover {
        transform: none;
      }
    `}
`

export default Button
