import React from 'react';
import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Work from "./Work";
import Testimonials from "./Testimonials";

const index = () => {
    return (
        <main className='mt-[68px]'>
            <Intro />
            <About />
            <Skills />
            <Experience />
            <Work />
            <Testimonials />
        </main>
    )
}

export default index