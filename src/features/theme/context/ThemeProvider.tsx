import React from "react";
import type { Theme } from "../types/themes.type";
import { ThemeContext } from "./ThemeContext";
import { THEMES } from "../constants/themes";

interface Props {
    children: React.ReactNode;
    defaultTheme?: Theme;
}

export const ThemeProvider = ({ children, defaultTheme = THEMES.LIGHT }: Props) => {

    const [theme, setTheme] = React.useState<Theme>(defaultTheme);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            if (prevTheme === THEMES.LIGHT) {
                return THEMES.DARK;
            }
            return THEMES.LIGHT;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}