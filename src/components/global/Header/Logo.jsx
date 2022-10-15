import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../img/rob.gif'
const Logo = () => {
    return (
        <>
            <Link className="navbar-brand nav-link" to="/">
                <img src={logo} alt='logo' height={70} />
            </Link>
        </>
    )
}

export default Logo