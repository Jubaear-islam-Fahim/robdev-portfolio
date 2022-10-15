import React from 'react'
import { Link } from 'react-router-dom'
import pdf from '../../../img/pdf.png'
import './Footer.scss'
const Footer = () => {
    return (
        <div className="footer-area" id='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="footer-content">
                            <div className="h3">Lassen Sie uns zusammenarbeiten
                            an Ihrem nächsten Projekt.</div>
                            <a href="" className='btn'>hi@robdev.de</a>
                            <br />
                            <a className='download' href="../../../img/Robin_Reher_Lebenslauf.pdf" download><img src={pdf} alt="" /> Robin_Reher_Lebenslauf.pdf</a>
                        </div>
                        <div className="copyright">
                            <ul>
                                <li><Link to="/impressum">Impressum</Link></li> 
                                <li> | </li>
                                <li><Link to="/datenschutz">Datenschutz</Link></li>
                            </ul>
                            <p>(c)2022 by RobDev</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer