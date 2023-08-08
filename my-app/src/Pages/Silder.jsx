import React, { useState } from 'react'
import Header from '../component/Header'
import silderdata from '../API/silderdata';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Silder = () => {
    // console.log(silderdata.length - 1);
    const [index , setIndex] = useState(0);
    const {name,job,image,text} = silderdata[index];

    // console.log(name);

    const checkNumber = (number) =>{
        if(number > silderdata.length - 1){
            return 0;
        }
        if(number <  0){
            return silderdata.length - 1;
        }
        return number;

    }

    const randomPerson = () =>{
            let randomNumber = Math.floor(Math.random() * silderdata.length);
            if(randomNumber === index){
                randomNumber = index + 1;
             }
             setIndex(checkNumber(randomNumber));
    }


    const nextPerson = () => {
        setIndex((currentIndex)=>{
            const newIndex = currentIndex + 1;
            // if(newIndex > silderdata.length - 1){
            //     return 0;
            // }
            return checkNumber(newIndex);
        })
    };
    const prevPerson = () => {
        setIndex((currentIndex)=>{
            const newIndex = currentIndex - 1;
            // if(newIndex <  0){
            //     return silderdata.length - 1;
            // }
            return checkNumber(newIndex);
        })
    };
  return (
    <>
    <Header/>
    <h1 className='text-center mt-2'>Silder</h1>
    <main className='sildermain'>

    <div className='review'>
        <div className='img-container'>
            <img src={image} alt={name} className='person-img'/>
            <span className='quote-icon'>
                <FaQuoteRight/>
            </span>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='btn-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft/>
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight/>
                </button>
            </div>
            <button className='btn btn-hipster' onClick={randomPerson}>suprise</button>
            
        </div>
    </div>
    </main>

    </>
  )
}

export default Silder