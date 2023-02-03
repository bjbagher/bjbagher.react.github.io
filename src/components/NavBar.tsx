import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../provider";



export default function NavBar() { 
 const { theme, setTheme } = useContext(ThemeContext)

 
 const toggleColorScheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
     setTheme(newTheme)
     document.getElementsByTagName('html')[0].style.setProperty('color-scheme', newTheme)
 }
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
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
            <div className="switch">
                <input type="checkbox"  checked={theme === 'dark'} onChange={toggleColorScheme}/>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
