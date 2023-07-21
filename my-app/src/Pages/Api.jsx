import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import Loading from '../component/Loading';

const Api = () => {
  const [Product, setProduct] = useState([]);
  const [visibleProduct, setVisibleProduct] = useState(4);
  const [isLoading, setisLoading] = useState(false);
  const [noMoreData, setNoMoreData] = useState(false);

  const URL = `https://dummyjson.com/products`;

        // useffect pahele likh na he 

  useEffect(() => {
    getProduct();
  }, []);

  const ShowMoreProduct = () =>{

    setVisibleProduct(perv =>perv + 4)

    // ye chalne pe perv click se double cart print ho rahe he 
    // setVisibleProduct(visibleProduct + visibleProduct);
    // setVisibleProduct(perv =>perv + visibleProduct);
}
          // api calling and loaing ... 
  const getProduct = async () => {
    try {
        setisLoading(true); 
      const response = await fetch(URL);
      const data = await response.json();
      setProduct(data.products);

            // no more data display 
            // if (data.products.length === 0) {
            //   setNoMoreData(true);
            // } else {
            //   setNoMoreData(false);
            // }
            // no working 

    } catch (error) {
      console.log(error, "producterror");
    }
    finally {
        setisLoading(false); 
      }

  };
        // slice method 
      const slice = Product.slice(0,visibleProduct)  
  return (
    <>
       
        
      <Header />
      { isLoading?( <Loading/>):(
        <>
      <h1 className='text-center'> API with Loading more </h1>
      <div className='container'>
        <div className='row gy-3 my-3'>
          { slice.map((item, index) => (
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
