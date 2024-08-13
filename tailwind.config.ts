import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        success: "var(--success-color)",
        danger: "var(--danger-color)",
      },
      padding: {
        verticleSpacing: "var(--spacing)",
      },
      fontFamily: {
        graphikBold: ["GraphikBold", "sans-serif"],
        bagoss: ["Bagoss", "sans-serif"],
        sohne: ["Sohne", "sans-serif"],
      },
      fontSize: {
        base: "var(--font-size-base)",
        sm: "var(--font-size-sm)",
        md: "var(--font-size-md)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
      },
      fontWeight: {
        light: "var(--font-weight-light)",
        normal: "var(--font-weight-noraml)",
        medium: "var(--font-weight-medium)",
        semiBold: "var(--font-weight-semi-bold)",
        bold: "var(--font-weight-bold)",
      },
      lineHeight: {
        small: "var(--line-height-small)",
        base: "var(--line-height-base)",
        large: "var(--line-height-large)",
        xlarge: "var(--line-height-xlarge)",
      },
    },
  },
  plugins: [],
};
export default config;
