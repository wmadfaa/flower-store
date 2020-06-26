import { css, DefaultTheme } from "styled-components"

const theme: DefaultTheme = {
  colors: {
    main: {
      primary: "#595CFF",
      secondary: "#ff5caf",
      secondary_dark: "#ff0082",
    },
    ui: {
      positive: "#4bb543",
      warning: "#ffc107",
      negative: "#EE0028",
      /* Main/Primary */
      active: "#595CFF",
    },
    neutral: {
      white: "#FFFFFF",
      snow: "#F9F9FB",
      pale_gray: "#F0F0F5",
      light_gray: "#E6E6EB",
      gray: "#AFB1BD",
      dark_gray: "#82828B",
      black: "#000000",
    },
    field_state: {
      /* Neutrals/Light grey */
      default: "#E6E6EB",
      /* Neutrals/Pale grey */
      disabled: "#F0F0F5",
      /* UI/Active */
      onfocus: "#595CFF",
      /* Border/Neutrals/Blach */
      active: "#000000",
      /* UI/Negative */
      error: "#EE0028",
      /* UI/Warning */
      warning: "#ffc107",
      /* UI/Positive */
      success: "#4bb543",
    },
  },
  shadows: {
    light: css`
      box-shadow: 0px 3px 52px rgba(90, 92, 102, 0.06);
    `,
    hover: css`
      box-shadow: 3px 7px 18px rgba(103, 105, 116, 0.0833424);
    `,
    light_left: css`
      box-shadow: -13px 1px 22px rgba(90, 92, 102, 0.0547148);
    `,
    hover_left: css`
      box-shadow: -10px 5px 18px rgba(103, 105, 116, 0.0833424);
    `,
  },
  image: {
    focus: css`
      border: 1px solid #e7e7ec;
      border-radius: 6px;
    `,
    /* Shadows/Hover */
    hover: css`
      box-shadow: 3px 7px 18px rgba(103, 105, 116, 0.0833424);
      border-radius: 6px;
    `,
  },
  typography: {
    h1: css`
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 38px;
    `,
    h2: css`
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 28px;
    `,
    h3: css`
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
    `,
    h4: css`
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
    `,
    h5: css`
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
    `,
    p1: css`
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
    `,
    p2: css`
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
    `,
    button: css`
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
    `,
    c1: css`
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
    `,
    c2: css`
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
    `,
    strike1: css`
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      text-decoration-line: line-through;
    `,
    strike2: css`
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      text-decoration-line: line-through;
    `,
  },
  shapes: {
    radios0: css`
      border-radius: 0;
    `,
    radios1: css`
      border-radius: 4px;
    `,
    radios2: css`
      border-radius: 8px;
    `,
    round: css`
      border-radius: 10000px;
    `,
  },
  animation: {
    easing: {
      rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)",
    },
  },
}

export default theme
