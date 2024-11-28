import React, { useMemo } from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import {
  skyAllianceDarkTheme,
  skyAllianceLightTheme,
} from "../src/default-theme/default-theme"; // Убедитесь, что путь правильный
import { CssBaseline } from "@mui/material";

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
  const { theme: themeKey } = context.globals;

  const theme = useMemo(() => THEMES[themeKey] || THEMES["light"], [themeKey]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withMuiTheme];

