import { createContext, useState } from "react";

interface Theme { theme: string; setTheme: React.Dispatch<React.SetStateAction<string>>; state: string;}

export const ThemeContext = createContext<Theme>({} as Theme);

function ThemeProvider({children}) {
    const [theme, setTheme] = useState(() => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    return <ThemeContext.Provider value={{theme, setTheme, state: "hello"}}>{children}</ThemeContext.Provider>
    
}

export default ThemeProvider;