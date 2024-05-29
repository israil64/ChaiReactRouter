import React, { createContext, useContext } from "react";

//* 1 step do
const ThemeContext = createContext({
  themeMode: "light",
  lightMode: () => {},
  darkMode: () => {},
});

//* we need to create provider and 2nd step
export const ThemeProvider = ThemeContext.Provider;

//* we need to create hook and 3nd step
export default function useTheme() {
  return useContext(ThemeContext);
}
