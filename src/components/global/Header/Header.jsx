import React, { useState, useEffect } from "react";  
import {Link} from 'react-scroll';
// import logo from '../../../img/rob.gif'
import { GrClose } from "react-icons/gr"; 
import { GoThreeBars } from "react-icons/go"; 
import './Header.scss'
import Logo from "./Logo";
const Header = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click) 
    const closeMenu = () => setClick(false)
    
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []); 
    return (
        <nav className={scroll ? "navbar navBarTop navScroll" : "navbar navBarTop"}>
            <div className="container"> 
                <div className="nav-content"> 
                    <div className="logo-nav"> 
                        {/* <Link className="navbar-brand nav-link" to="/"> 
                            <img src={logo} alt='logo' height={70} />
                        </Link> */}
                        <Logo/>
                    </div> 
                    <div className="ms-auto d-lg-none">
                        <button class="navbar-toggler d-flex border-0 " type="button" onClick={handleClick}> 
                            <GoThreeBars/>
                        </button> 
                    </div>
                    <div className={click ? "nav-offcanvas active" : "nav-offcanvas"}> 
                        <div className="d-lg-none navClose">
                            <Link onClick={closeMenu}>
                                <GrClose/>
                            </Link>
                        </div>
                        <ul className="navbar-nav"> 
                            <li className="nav-item">
                                <Link to="portfolio" activeClass="active" className="nav-link" spy={true} offset={-120} onClick={closeMenu}>
                                    Portfolio
                                </Link>
                            </li> 
                            <li className="nav-item"> 
                                {/* <Link to="lebenslauf" activeClass="active" className="nav-link" spy={true} offset={-80} onClick={closeMenu}>
                                    Lebenslauf
                                </Link> */}
                                <a className='download' href="../../../img/Robin_Reher_Lebenslauf.pdf" download>Lebenslauf</a>
                            </li>  
                            <li className="nav-item"> 
                                <Link to="footer" activeClass="active" className="nav-link" spy={true} offset={-160} onClick={closeMenu}>
                                    Kontakt
                                </Link>
                            </li>   
                        </ul> 
                    </div> 
                </div>
            </div>
        </nav>
    )
}

export default Header