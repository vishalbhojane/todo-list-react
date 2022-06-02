import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const About = () => {
    const date = new Date().getFullYear()
    const { theme, setTheme } = useContext(TodoContext)

    return (
        <div className='flex-center-c fht'>
            <div className='flex-center-c' >
                <p className='desc'>Choose Theme</p>
                <div>
                    {theme === "light" ? <i className="cta fa-solid fa-sun" onClick={() => setTheme("dark")}></i> : <i className="cta fa-solid fa-moon" onClick={() => setTheme("light")}></i>}
                </div>
            </div>
            <h1 className='desc'>Created by Vishal Bhojane &copy; {date}</h1>
        </div>
    );
}

export default About;