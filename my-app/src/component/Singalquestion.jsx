import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Singalquestion = ({title,info}) => {
    const [showInfo, setShowInfo] = useState(false);
  return (
    <h2 className='question'>
        <h5>{title}</h5>
        <button className='question-btn' onClick={()=>setShowInfo(!showInfo)}>{showInfo?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
        {showInfo && <p>{info}</p>}
    </h2>
  )
}

export default Singalquestion