import React, { useState } from 'react'
import Header from '../component/Header'
import questions from '../API/Questions'
import Singalquestion from '../component/Singalquestion';
const Accordions = () => {
    const [Question, setQuestion] = useState(questions);
    
  return (
    <>
    <Header/>
    
    <h1 className='text-center mt-2'>Accordions</h1>

        <section className='container'>
            <h1>Questions</h1>
            {
                Question.map((que)=>{
                    return <Singalquestion key={que.id} {...que}>
                        
                
                    </Singalquestion>

                })
            }

        </section>

    

    
    </>
  )
}

export default Accordions