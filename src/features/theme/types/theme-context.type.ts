import type { Theme } from "./themes.type"

export type ThemeContextType = {
    theme: Theme,
    toggleTheme: () => void,
}