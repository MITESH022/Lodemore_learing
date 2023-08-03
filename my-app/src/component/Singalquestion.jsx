import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Singalquestion = ({title,info,handleOpen,id,isOpen}) => {
    // const [showInfo, setShowInfo] = useState(false);
    console.log(isOpen,"kaha se aya");

  return (
    <h2 className='question'>
        <h5>{title}</h5>
        <button className='question-btn' onClick={()=>handleOpen(id)}>{isOpen?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
        {isOpen && <p>{info}</p>}
    </h2>
  )
}

export default Singalquestion