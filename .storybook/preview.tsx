import React, { useMemo } from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import {
  skyAllianceDarkTheme,
  skyAllianceLightTheme,
  skyAllianceMUITheme,
} from "../src/default-theme/default-theme"; // Убедитесь, что путь правильный
import { CssBaseline } from "@mui/material";

// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

// export default preview;
// .storybook/preview.js

export const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Theme for your components",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      dynamicTitle: true,
      items: [
        { value: "light", left: "☀️", title: "Light mode" },
        { value: "dark", left: "🌙", title: "Dark mode" },
      ],
    },
  },
};
const THEMES = {
  light: skyAllianceLightTheme,
  dark: skyAllianceDarkTheme,
};

const withMuiTheme = (Story, context) => {
  // The theme global we just declared
  const { theme: themeKey } = context.globals;

  // only recompute the theme if the themeKey changes
  // console.log("skyAllianceLightTheme", skyAllianceLightTheme);
  const theme = useMemo(() => THEMES[themeKey] || THEMES["light"], [themeKey]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withMuiTheme];

