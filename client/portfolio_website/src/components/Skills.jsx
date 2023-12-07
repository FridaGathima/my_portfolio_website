import React from 'react'
import htmlcss from '../assets/htmlcssjs2.png'
import pythonflask from '../assets/pythonflask.jpeg'
import reactlogo from '../assets/reactlogo2.png'
import bootstraplogo from '../assets/bootstraplogo2.png'
import tailwindlogo from '../assets/tailwindcss4.svg'


const Skills = () => {
  return (
    <div className='techstack'>
        <img src={htmlcss} alt="htmlcssjs" className='jslogos' />
        <img src={reactlogo} alt="react" className='react' />
        <img src={pythonflask} alt="Python and Flask" className='pylogos'/>
        <img src={bootstraplogo} alt="Bootstrap" className='bootstrap' />
        <img src={tailwindlogo} alt="Tailwind CSS" className='tailwind' />
    </div>
  )
}

export default Skills