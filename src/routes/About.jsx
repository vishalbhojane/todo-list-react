import { Link } from 'react-router-dom'

const About = () => {
    const date = new Date().getFullYear()
    return (
        <>
            <h1 className='desc'>Created by Vishal Bhojane &copy; {date}</h1>
            <Link to='/'><p className="cta">Back To Home</p></Link>
        </>
    );
}

export default About;