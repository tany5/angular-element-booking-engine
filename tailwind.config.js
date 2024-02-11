/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

export const content = ["./src/**/*.{html,ts}"];
export const prefix = 'lf-';
export const theme = {
  extend: {
    fontFamily: {
      Montserrat: ["Montserrat", ..._fontFamily.sans],
    },
  },
};
export const plugins = [];
