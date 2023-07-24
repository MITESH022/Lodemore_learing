import React, { useState } from 'react'
import Header from '../component/Header'
import Text from '../API/Text';
const Paragraphgenerator = () => {

        const [count , setCount] = useState(1);
        const [Paratext ,setParaText] = useState([])
        // console.log(Text);
        // console.log(Paratext);

        const handlesubmit = (e) => {
            e.preventDefault();
            // console.log(typeof count,"count");  // pahela number aata he dusra string aata q ??
            // console.log( typeof 1);   
            const amount = parseInt(count)
            // console.log( typeof amount);
            setParaText(Text.slice(0,amount));
            
        }


  return (
    <>
    <Header/>
    <section className='section-center'>
        <h4>Paragraph generator</h4>
        <form className='lorem-form' onSubmit={handlesubmit}>
            <label htmlFor='amount'>paragraphs:</label>
            <input type="number" name='amount' id='amount' min='1' step="1" max="8" value={count} onChange={(e)=> setCount(e.target.value)}/>
            <button className='btn' type='submit'>generate</button>
        </form>
        <article className='lorem-text'>
            {
                Paratext.map((item,index)=>{

                    return <p key={index}>
                        {index}  {item}
                    </p>
                })
            }
        </article>
    </section>
    </>
  )
}

export default Paragraphgenerator