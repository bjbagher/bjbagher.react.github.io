import { createContext, ReactNode, useState } from "react";

interface Theme { theme: string; setTheme: React.Dispatch<React.SetStateAction<string>>;}

export const ThemeContext = createContext<Theme>({} as Theme);

type Props = {
    children: ReactNode
  }
  
function ThemeProvider({children}: Props) {
    const [theme, setTheme] = useState(() => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
    
}

export default ThemeProvider;