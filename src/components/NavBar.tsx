import { useContext } from "react";
import { ThemeContext } from "../provider";



export default function NavBar() { 
 const { theme, setTheme, state } = useContext(ThemeContext)

 
 const toggleColorScheme = () => {
     console.log('got', theme, state)
    const newTheme = theme === 'dark' ? 'light' : 'dark'
     setTheme(newTheme)
     document.getElementsByTagName('html')[0].style.setProperty('color-scheme', newTheme)
 }
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bjbagher/" target="_blank">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/bjbagher" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <input type="checkbox"  checked={theme === 'dark'} onChange={toggleColorScheme}/>
          </li>
        </ul>
      </nav>
    </header>
  );
}
