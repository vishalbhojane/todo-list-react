import { useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import TodoContext from '../context/TodoContext';

const Navbar = () => {
    return (
        <nav className="nav">
            <h1 className="title">My Todo List</h1>
            <Link to='/about'><i className="cta fa-solid fa-circle-info"></i></Link>
        </nav>
    );
}

export default Navbar;