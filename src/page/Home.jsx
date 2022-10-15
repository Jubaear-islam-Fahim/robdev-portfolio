import React, { useEffect } from 'react'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'
import Portfolio from '../components/Portfolio/Portfolio'
import Skills from '../components/Skills/Skills'

const Home = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <>
            <Banner />
            <Portfolio />
            <About />
            <Skills />
        </>
    )
}

export default Home