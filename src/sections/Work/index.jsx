import React from 'react';
import "./style.scss";
import WorkCard from '../../components/Ui/Cards/WorkCard';
import { workDb } from "../../db";

const index = () => {
    return (
        <section id='work' className='dark:bg-[#030712] tewxt-[#4B5563]'>
            <div className="container">
                <button className='work_btn'>Work</button>
                <p className='work_text dark:text-[#F9FAFB] text-[]'>Some of the noteworthy projects I have built:</p>
                <div className='card_wrapper'>
                    {
                        workDb?.map((item, index) => {
                            return (
                                <WorkCard
                                    case={item}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default index