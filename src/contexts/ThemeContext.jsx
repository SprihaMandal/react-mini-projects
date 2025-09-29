import { createContext, useState } from "react";

export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = () => setIsDark(prev => !prev);
    const themeText = isDark ? "Change to light" : "Change to dark";
    return <ThemeContext.Provider value={{ isDark, themeText, toggleTheme }}>{children}</ThemeContext.Provider>
}