import React, { useEffect, useState } from 'react';
import Header from '../component/Header';

const Api = () => {
  const [Product, setProduct] = useState([]);
  const [visibleProduct, setVisibleProduct] = useState([]);

  const URL = `https://dummyjson.com/products`;

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setProduct(data.products);
    } catch (error) {
      console.log(error, "producterror");
    }
  };

  return (
    <>
      <Header />
      <h1 className='text-center'> API with Loading more </h1>
      <div className='container'>
        <div className='row gy-3 my-3'>
          { Product.slice(0,4).map((item, index) => (
              <div className='col-md-3 col-sm-6' key={index}>
                <div className='card' style={{ width: "18rem",height:"30rem" }}>
                  <img src={item.thumbnail} className='card-img-top' alt='no product' />
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
            <button className='btn btn-primary'>LOAD MORE</button>

        </div>
      </div>
    </>
  );
};

export default Api;
