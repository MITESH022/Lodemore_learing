import React, { useState } from 'react'
import Header from './Header';

const Tourcom = ({id,image,info,name,price,removeTour}) => {
    // {id,title,url,thumbnailUrl}

    const [readMore , setReadMore] = useState(false);
    // console.log(info.substring(0,10));    // space ke sath gina jata he 
  return (
    
    <article className='single-tour'>
        <img src={image} alt={name} className='img' />
        <span className='tour-price'>${price}</span>
        <div className='tour-info'>
            <p>{name}</p>
            <h5>{readMore? info :`${info.substring(0,200)}...`}<button type='button' className='info-btn' onClick={()=>setReadMore(!readMore)}>{readMore ?"show less":"read more"}</button></h5>
            <button type='button' className='btn btn-block delete-btn' onClick={()=> removeTour(id)}>Not interested</button>
            {/* yaha pe back to home page kar sakte he  */}
        </div>
    </article>
  )
}

export default Tourcom;