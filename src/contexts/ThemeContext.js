import React, { createContext } from 'react';
import { useToggle } from '../hooks/useToggle';

export const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [isDarkMode, toggleTheme] = useToggle(false);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
