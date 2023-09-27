import React from 'react'
import Experience from '../../components/Ui/Cards/Experience';
import ntLogo from "../../assets/images/najotTalim.svg";
import "./style.scss";

const index = () => {
    return (
        <section id='experience' className='dark:bg-[#111827] bg-[#F9FAFB]'>
            <div className="container">
                <button className='exp_btn'>Experience</button>
                <p className='exp_text dark:text-white text-[#4B5563]'>Here is a quick summary of my most recent experiences:</p>
                <div className='exp_wrapper'>
                    <Experience
                        logo={ntLogo}
                        title="Foundation"
                        list="C programming language"
                        list2="Python programming language"
                        list3="MySQL"
                        date="October 2022 - March 2023"
                    />
                </div>
            </div>
        </section>
    )
}

export default index;