import React from 'react'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'
import Portfolio from '../components/Portfolio/Portfolio'
import Skills from '../components/Skills/Skills'

const Home = () => {
    return (
        <>
            <Banner/>  
            <Portfolio /> 
            <About/> 
            <Skills/>
        </>
    )
}

export default Home