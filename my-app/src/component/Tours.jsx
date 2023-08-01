import React from 'react'
import Tourcom from './Tourcom'
const Tours = ({tours,removeTour}) => {
  return (
   <section>
        <div className='title'>
            <h2>our Tours</h2>
            <div className="title-underline">
                <div className="tours">
                    {

                        tours.map((tour)=>{
                                // console.log(tour);
                            return <Tourcom key={tour.id} {...tour} removeTour={removeTour}/>
                        })
                    }
                    </div>    
            </div>
        </div>
   </section>
  )
}

export default Tours