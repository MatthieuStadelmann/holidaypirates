export const theme = {
  colors: {
    primary: "#6A3460",
    primaryHover: "#552b4e",
    secondary: "#FABF37",
    secondaryHover: "#f5b520",
    white: "#FFFFFF",
    gray: "#666666",
    lightGray: "#e5e5e5"
  },
  spacing: {
    small: "8px",
    medium: "12px",
    large: "16px",
  },
  fontSize: {
    small: "14px",
    medium: "16px",
    large: "18px",
    xlarge: "24px",
  },
  lineHeight: {
    small: 1.2,
    medium: 1.5,
    large: 1.8,
  },
} as const;

export type Theme = typeof theme;
