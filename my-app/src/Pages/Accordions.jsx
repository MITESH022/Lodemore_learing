import React, { useState } from 'react'
import Header from '../component/Header'
import questions from '../API/Questions'
import Singalquestion from '../component/Singalquestion';
const Accordions = () => {
    const [Question, setQuestion] = useState(questions);
    // const [showInfo, setShowInfo] = useState(false);

      const handleOpen = (id) =>{

            // const changeQuestion = Question.map((item)=>item.id  === id ? {...item,isOpen:true}: {...item,isOpen:false})
            // setQuestion(changeQuestion);

            // setQuestion((perv)=>perv.map((item)=>item.id  === id ? {...item,isOpen:true}: {...item,isOpen:false}))
            setQuestion((perv)=>perv.map((item)=>item.id  === id ? {...item,isOpen:!item.isOpen}: {...item,isOpen:false}))
            
      }    

  return (
    <>
    <Header/>
    
    <h1 className='text-center mt-2'>Accordions</h1>

        <section className='container'>
            <h1>Questions</h1>
            {
                Question.map((que)=>{
                 return <Singalquestion key={que.id} {...que}
                  handleOpen={handleOpen}
                   
                   />

                
                    // </Singalquestion>

                })
            }

        </section>

    

    
    </>
  )
}

export default Accordions