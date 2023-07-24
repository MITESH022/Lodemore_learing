import React, { useState } from 'react'
import Header from '../component/Header'
import questions from '../API/Questions'
import Singalquestion from '../component/Singalquestion';
const Accordions = () => {
    // const [Question, setQuestion] = useState(questions);
    const [showInfo, setShowInfo] = useState(false);

    
  return (
    <>
    <Header/>
    
    <h1 className='text-center mt-2'>Accordions</h1>

        <section className='container'>
            <h1>Questions</h1>
            {
                questions.map((que)=>{
                 return <Singalquestion key={que.id} {...que}
                //   showInfo={showInfo}
                //    setShowInfo={setShowInfo}
                   
                   />

                
                    // </Singalquestion>

                })
            }

        </section>

    

    
    </>
  )
}

export default Accordions