import { Fragment } from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
function Navbar(props) {


    return (
        <>

            <nav>
                <h1>logo</h1>
                {props.test}
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="category/skincare">skincare</NavLink></li>
                    <li><NavLink to="category/laptops">laptops</NavLink></li>
                    <li><NavLink to="category/smartphones">smartphones</NavLink></li>
                    <li>Pages</li>
                </ul>

            </nav>
            <div>

            </div>
        </>
    )
}


export default Navbar