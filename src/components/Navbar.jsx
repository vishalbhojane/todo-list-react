import { Link } from 'react-router-dom'
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const Navbar = () => {
    const { theme, setTheme } = useContext(TodoContext)

    return (
        <nav className="nav">
            <h1 className="title">My Todo List</h1>

            <div className='cta-container'>
                {theme === "light" ? <i className="cta fa-solid fa-sun" onClick={() => setTheme("dark")}></i> : <i className="cta fa-solid fa-moon" onClick={() => setTheme("light")}></i>}
                <Link to='/about'><i className="cta fa-solid fa-circle-info"></i></Link>
            </div>
        </nav>
    );
}

export default Navbar;