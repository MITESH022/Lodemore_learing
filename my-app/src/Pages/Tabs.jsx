import React, { useEffect } from 'react'
import Header from '../component/Header'
import { useState } from 'react'
import Loading from '../component/Loading'
import Jobs from '../component/Jobs'
import Btncontainer from '../component/Btncontainer'

        const API = `https://course-api.com/react-tabs-project`
        // console.log(API);
const Tabs = () => {
        const [isLoding , setisLoding] = useState(true);
        const [jobs , setJobs] = useState([]);
        const [currentItem , setCurrentItem] = useState(1);               
            useEffect(()=>{

                fetchjob();

            },[]);


            const fetchjob = async() =>{
                
                        // isLoding(true);  //  ye na likhe to bhi kaya 
                    try {
                        const response = await fetch(API);
                        const newJobs = await response.json();
                        // console.log(newJobs[0].title);
                        setJobs(newJobs);
                        setisLoding(false);
                        
                    } catch (error) {
                        console.log(error,"fetchjob data not found");
                    }
            }


  return (
    <>
    <Header/>
    {
        isLoding?(<Loading/>):(


            <section className='jobs-center'>
                <h2 className='text-center'>Tabs stater</h2>
                {/* {btn container} */}
                <Btncontainer jobs={jobs} currentItem={currentItem}  setCurrentItem={setCurrentItem}/>
                {/* job info */}
                <Jobs jobs={jobs} currentItem={currentItem}/>
            </section>
        )
    }
    </>
  )
}

export default Tabs