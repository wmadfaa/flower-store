import React from "react"
import styled from "styled-components"
import { getBackgroundColor } from "../shared/utils"

import theme from "../shared/theme"

export interface RadioComponentProps
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

export interface RadioProps extends RadioComponentProps {
  color?:
    | keyof typeof theme["colors"]["main"]
    | keyof Omit<
        typeof theme["colors"]["field_state"],
        "onfocus" | "disabled" | "active"
      >
  inline?: boolean
}

const RadioComponent: React.FC<RadioComponentProps> = ({
  id,
  label,
  className,
  children,
  ...props
}) => {
  return (
    <label htmlFor={id} className={className}>
      <input id={id} type="radio" {...props} />
      <div className="label">{children || label}</div>
    </label>
  )
}

const Radio = styled(RadioComponent)<RadioProps>`
  display: ${({ inline }) => (inline ? "inline-block" : "block")};
  margin: 16px 0;
  cursor: pointer;

  & > input {
    display: none;
    &:checked + .label:before {
      border-color: ${({ color }) => getBackgroundColor(color)};
    }
    &:checked + .label:after {
      transform: scale(1);
    }
  }

  & > .label {
    display: inline-block;
    min-height: 20px;
    position: relative;
    padding: 0 30px;
    margin-bottom: 0;
    cursor: pointer;

    ${props => props.theme.typography.c2}
    font-weight: normal;

    &:before,
    &:after {
      position: absolute;
      box-sizing: border-box;
      content: "";
      border-radius: 50%;
      transition: all 0.3s ease;
      transition-property: transform, border-color;
    }
    &:before {
      left: 0;
      top: 0;
      width: 20px;
      height: 20px;
      border: 2px solid ${({ color }) => getBackgroundColor(color)};
    }
    &:after {
      top: 5px;
      left: 5px;
      width: 10px;
      height: 10px;
      transform: scale(0);
      background: ${({ color }) => getBackgroundColor(color)};
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

Radio.defaultProps = {
  color: "primary",
}

export default Radio
