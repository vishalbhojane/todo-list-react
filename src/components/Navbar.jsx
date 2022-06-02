import { Link } from 'react-router-dom'
import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

const Navbar = () => {
    const {user, iscustomUser } = useContext(TodoContext)
    const [aboutPath, setPath] = useState('/about')

    return (
        <nav className="nav">
            <h1 className='title text-left'>{user + `${iscustomUser ? '\'s' : ""}`} Todo List</h1>
            <div className='cta-container' onClick={() => {window.location.pathname === '/' ? setPath('/about') : setPath('/')}}>
                <Link to={aboutPath}><i className="cta fa-solid fa-ellipsis-vertical"></i></Link>
            </div>
        </nav>
    );
}

export default Navbar;