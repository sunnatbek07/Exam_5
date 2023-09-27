import React from 'react'

const SkillsCard = ({image, title}) => {
  return (
    <div className='skills_card'>
        <img src={image} alt="Icon" />
        <p className='card_text'>{title}</p>
    </div>
  )
}

export default SkillsCard