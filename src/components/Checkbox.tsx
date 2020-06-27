import React from "react"
import styled from "styled-components"
import { getBackgroundColor, getTextColor } from "../shared/utils"

import theme from "../shared/theme"

export interface CheckboxComponentProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "type" | "id"
  > {
  id: string
  label?: React.ReactNode | string
}

export interface CheckboxProps extends CheckboxComponentProps {
  color?:
    | keyof typeof theme["colors"]["main"]
    | keyof Omit<
        typeof theme["colors"]["field_state"],
        "onfocus" | "disabled" | "active"
      >
  inline?: boolean
}

const CheckboxComponent: React.FC<CheckboxComponentProps> = ({
  id,
  label,
  className,
  children,
  ...props
}) => {
  return (
    <label htmlFor={id} className={className}>
      <input id={id} type="checkbox" {...props} />
      <div className="label">
        <span className="label-content">{children || label}</span>
      </div>
    </label>
  )
}

const Checkbox = styled(CheckboxComponent)<CheckboxProps>`
  display: ${({ inline }) => (inline ? "inline-block" : "block")};
  margin: 16px 0;
  cursor: pointer;

  & > input {
    display: none;
    &:checked + .label:before {
      border-color: ${({ color }) => getBackgroundColor(color)};
      background-color: ${({ color }) => getBackgroundColor(color)};
    }
    &:checked + .label:after {
      border-color: ${({ color }) => getTextColor(color)};
    }
  }

  & > .label {
    display: inline-block;
    min-height: 20px;
    position: relative;
    padding: 0 30px;
    margin-bottom: 0;
    cursor: pointer;

    .label-content {
      vertical-align: middle;
      ${props => props.theme.typography.c2}
      font-weight: normal;
    }

    &:before,
    &:after {
      position: absolute;
      box-sizing: border-box;
      content: "";
      transition: all 0.3s ease;
      transition-property: transform, border-color;
    }
    &:before {
      top: 0px;
      left: 0;
      width: 20px;
      height: 20px;
      background-color: ${({ theme }) => theme.colors.neutral.pale_gray};
      transition: all 0.28s ${props => props.theme.animation.easing.rubber};
      transition-property: background-color, border-color;
      ${({ theme }) => theme.shapes.radios1}
    }
    &:after {
      top: 4px;
      left: 8px;
      width: 5px;
      height: 10px;
      border-bottom: 1px solid transparent;
      border-right: 1px solid transparent;
      transform: rotate(45deg);
      transition: border-color 0.28s
        ${props => props.theme.animation.easing.rubber};
    }
  }

  ${props =>
    props.disabled &&
    `
      & > .label {
        cursor: not-allowed !important;
        opacity: 0.5;
      } 
  `}
`

Checkbox.defaultProps = {
  color: "primary",
}

export default Checkbox
