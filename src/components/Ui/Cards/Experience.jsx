import React from 'react'

const Experience = ({ logo, title, list, list2, list3, date }) => {
    return (
        <div className='exp_card dark:bg-[#1F2937] bg-white dark:text-white'>
            <img src={logo} alt="Logo" />
            <div className='exp_card_txt'>
                <h4 className='text-[#111827] dark:text-white'>{title}</h4>
                <p>{date}</p>
                <ul>
                    <li>{list}</li>
                    <li>{list2}</li>
                    <li>{list3}</li>
                </ul>
            </div>
            <p>{date}</p>
        </div>
    )
}

export default Experience