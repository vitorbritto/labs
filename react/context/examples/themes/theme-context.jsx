import { createContext } from 'react';

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#eeeeee',
        bcakground: '#000000',
    }
};

export const ThemeContext = createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});