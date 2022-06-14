import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {dark, light} from "./modes"

type ThemeDefaultProps ={
  children?: React.ReactNode;
}

export const ThemeDefault: React.FC<ThemeDefaultProps> = ({children}) => {

  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title == 'dark' ? light : dark);
  }

  return(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
