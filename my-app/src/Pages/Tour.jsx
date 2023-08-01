import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Tours from '../component/Tours';
import Loading from '../component/Loading';

const url = `https://course-api.com/react-tours-project`;
// const url = `https://jsonplaceholder.typicode.com/photos`;

const Tour = () => {
    const [tours ,setTours] =useState([])
    const [isLoding ,setisLoding] = useState(true);


    const removeTour = (id) =>{
        const newtours = tours.filter((tour)=> tour.id !== id);
        setTours(newtours);

    }
    useEffect(()=>{
        
        fetchTours();

    },[])

   

    

    const fetchTours = async() =>{
            setisLoding(true);
            try {

                const response = await fetch(url);
                const toursdata = await response.json();
                console.log(toursdata);
                // const firstThreeTours = toursdata.slice(0, 3);
                  setTours(toursdata);
                // setTours(firstThreeTours);

                
            } catch (error) {
                    console.log(error,"toursapi_error");
            }
            setisLoding(false)
           
            
     
    }

    if(isLoding){

      return(
       
        <main>
          <Loading/>
        </main>
      );
    }
            // muze header bhi jaye or uske andar referesh hoga 

    if(tours.length === 0)
    {

      return<main>
        <div className='title'>
          <h2>no tours left</h2>
          <button type='button' style={{marginTop:"2rem"}} className='btn' onClick={() => fetchTours()}>refresh</button>
        </div>
      </main>
    }

  

    
  return (
      
    <>
     
    <Header/>
    {/* { isLoding?( <Loading/>):( */}
    <>

    <h1 className='text-center mt-2'>Tour with API</h1>
    
    <div>
            <Tours tours ={tours}  removeTour={removeTour}/>
    </div>
     
    </>
    {/* )} */}
    </>

   
      
  )

  

  

  
}


    

export default Tour