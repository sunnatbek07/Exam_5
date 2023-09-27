import React from 'react'

const Feedbacks = ({ case: { image, body, name, job } }) => {
    return (
        <div className='test_card bg-[#fff] dark:bg-[#1F2937] text-[#4B5563] dark:text-white'>
            <img src={image} alt="" />
            <p>{body}</p>
            <div className='card_footer'>
                <h5 className='text-[#111827] dark:text-white'>{name}</h5>
                <span>{job}</span>
            </div>
        </div>
    )
}

export default Feedbacks