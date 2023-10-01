import { extendTheme } from "@chakra-ui/react";

const overrides = extendTheme({
  fonts: {
    body: "Inter",
  },
  colors: {
    body: "#343434B2",
    "canvas-color": "#F6F6F9",
    primary: "#198564",
    "placeholder-color": "#A3A8AD",
    "default-text": "#03050B",
    danger: "#F93F40",
  },
});

const AppTheme = extendTheme(overrides);

export default AppTheme;
