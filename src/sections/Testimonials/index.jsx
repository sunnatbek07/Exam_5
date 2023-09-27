import React from 'react';
import "./style.scss";
import { comments } from '../../db';
import Feedbacks from '../../components/Ui/Cards/Feedbacks';

const index = () => {
    return (
        <section id='testimonials' className='bg-[#F9FAFB] dark:bg-[#111827]'>
            <div className="container">
                <button className='test_btn'>Testimonials</button>
                <p className='test_text text-[#4B5563] dark:text-white'>Nice things people have said about me:</p>

                <div className='card_wrapper'>
                    {
                        comments?.map((comment, index) => {
                            return <Feedbacks
                                case={comment}
                                key={index}
                            />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default index