import React from 'react'
import about from '../../img/about.png'
import './About.scss'
const About = () => {
    return (
        <div className="about-area">
            <div className="container">
                <div className="row row-gap">
                    <div className="col-lg-8">
                        <div className="about-text">
                            <p>
                                Auf eine minimalistische und kundenorientierte Art und Weise löse ich täglich Design und Webentwicklung Probleme für Unternehmen auf der ganzen Welt.
                            </p>
                            <br />
                            <p>
                                In meiner Freizeit betauche ich die Weltmeere und schütze das, was von unserer Natur noch übrig ist.  Das Wichtigste, was mich das Tauchen gelehrt hat, ist, dass Scheitern eine Chance ist, aus seinen Fehlern zu lernen, und dass man nie damit fertig ist, neue Dinge zu lernen.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 align-self-center">
                        <div className="about-img">
                            <img src={about} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About