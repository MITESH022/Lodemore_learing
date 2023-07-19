import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import Loading from '../component/Loading';

const Api = () => {
  const [Product, setProduct] = useState([]);
  const [visibleProduct, setVisibleProduct] = useState(4);
  const [isLoading, setisLoading] = useState(false);

  const URL = `https://dummyjson.com/products`;

        const ShowMoreProduct = () =>{

            setVisibleProduct(perv =>perv + 4)
        }

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
        setisLoading(true); 
      const response = await fetch(URL);
      const data = await response.json();
      setProduct(data.products);
    } catch (error) {
      console.log(error, "producterror");
    }
    finally {
        setisLoading(false); 
      }

  };


  return (
    <>
       
        
      <Header />
      { isLoading?( <Loading/>):(
        <>
      <h1 className='text-center'> API with Loading more </h1>
      <div className='container'>
        <div className='row gy-3 my-3'>
          { Product.slice(0,visibleProduct).map((item, index) => (
              <div className='col-md-3 col-sm-6' key={index}>
                <div className='card' style={{ width: "18rem",height:"25rem" }}>
                  <img src={item.thumbnail} className='card-img-top' alt='no product' style={{height:"10rem"}}/>
                  <div className='card-body'>
                    <h5 className='card-title'>{item.title}</h5>
                    <p className='card-text'>
                     {item.description}
                    </p>
                    <a href='#' className='btn btn-primary'>
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            ))}
            <button className='btn btn-primary' onClick={ShowMoreProduct}>LOAD MORE</button>

        </div>
      </div>
      </>
      )}
    </>
  );
};

export default Api;
