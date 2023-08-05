import React from 'react'

const Btncontainer = ({jobs,currentItem,setCurrentItem}) => {
    // console.log(jobs,"id aa raha he ");
  return (
    <div className='btn-container'>
        {
            jobs.map((item,index)=>{

                    return <button key={item.id} 
                            onClick={()=>setCurrentItem(index)}  // index par q gumaya
                            className={index === currentItem ? "job-btn active-btn":"job-btn"}>
                            {item.company}
                           </button>
                       
            })
        }
    </div>
  )
}

export default Btncontainer