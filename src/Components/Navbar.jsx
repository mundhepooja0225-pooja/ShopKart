import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
    const { theme, dispatch } = useContext(ThemeContext);
    return (
        <nav className="navbar">
            <h4 className="logo">Shop <span style={{ color: 'red' }}>Kart</span></h4>
            <ul className="nav-links">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/products'>Products</NavLink></li>
                <li><NavLink to='/cart'>Cart</NavLink></li>
                <li><NavLink to='/login'>Login</NavLink></li>
                <button onClick={() => dispatch({ type: 'THEME_TOGGLE'})}>
                    {theme === 'dark' ? 'light' : 'dark'}
                    </button>
                <li><NavLink to='/register'>Register</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to= '/about'> About US</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar

































// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//     return (
//         <nav>
//             <h4> Shop <span style={{ color:'red'}}>Kart</span></h4>
//             <ul>
//                 <NavLink to='/'>Home</NavLink>
//                 <NavLink to='/products'>Products</NavLink>
//                 <NavLink to='/cart'>Cart</NavLink>
//                 <NavLink to='/login'>Login</NavLink>
//                 {/* <NavLink to='/register'>Register</NavLink> */}

//             </ul>
//         </nav>
//     )

// }

// export default Navbar