import React from "react"
import ReactSelect, { Props as ReactSelectProps } from "react-select"
import theme from "../shared/theme"
import { BaseInputProps } from "./Input"

export type SelectProps = BaseInputProps & ReactSelectProps

const Select: React.FC<SelectProps> = ({ state, ...props }) => {
  return (
    <div style={{ display: "inline-block", minWidth: 153, outline: "none" }}>
      <ReactSelect
        {...props}
        styles={{
          container: styles => ({ ...styles, outline: "none" }),
          control: (styles, status) => {
            console.log(status)
            return {
              ...styles,
              outline: "none",
              boxShadow: "none",
              // caption1 styles
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: 12,

              backgroundColor: theme.colors.neutral.white,
              border: `1px solid ${
                theme.colors.field_state[state ? state : "default"]
              }`,
              "&:hover": {
                border: `1px solid ${
                  theme.colors.field_state[state ? state : "onfocus"]
                }`,
              },
              borderRadius: 4,

              ...(status.isFocused
                ? {
                    border: `1px solid ${
                      theme.colors.field_state[state ? state : "onfocus"]
                    }`,
                  }
                : {}),

              ...(status.isDisabled
                ? {
                    border: `1px solid ${theme.colors.field_state.disabled}`,
                  }
                : {}),
            }
          },
          option: styles => ({
            ...styles,
            // caption1 styles
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 12,
          }),
          placeholder: (styles, status) => ({
            ...styles,
            color:
              theme.colors.neutral[
                status.isDisabled ? "light_gray" : "dark_gray"
              ],
          }),
          input: (styles, status) => ({
            ...styles,
            color:
              theme.colors.neutral[status.isDisabled ? "light_gray" : "black"],
          }),
        }}
      />
    </div>
  )
}

export default Select
