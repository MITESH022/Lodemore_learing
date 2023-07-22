import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Menuapi from "../API/Menuapi";
const Menu = () => {
  // const allcatValues = [...new Set(Menuapi.map((curvalue) =>  curvalue.category)), "all",];
  const allcatValues = [...new Set(Menuapi.map((curvalue) =>  curvalue.category)),"all",];
  console.log(allcatValues);   

  const [items, setitem] = useState(Menuapi);
  const [catItems, setCatItems] = useState(allcatValues);
  // console.log(catItems, "");

  const filterItem = (categitem) => {

    if (categitem === "all")
    {
      setitem(Menuapi);
      // return;    yaha se return ho gaya 

    }
    else{
      const UpdateItem = Menuapi.filter((curElem) => curElem.category === categitem);
      setitem(UpdateItem);
    }
  
  };

    
  return (
    <>
      <Header />
      <h1 className="mt-2 text-center ">Our Best products</h1>
      <div className="mt-2 menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">

        {
            catItems.map((curCelm,index)=>{

              return  <button
              className="btn btn-warning" key={index}
              onClick={() => filterItem(curCelm)}> {curCelm}</button>
            })
        }
         
          {/* <button
            className="btn btn-warning"
            onClick={() => filterItem("lunch")}
          >
            lunch
          </button> */}
          {/* <button
            className="btn btn-warning"
            onClick={() => filterItem("evening")}
          >
            evening
          </button> */}
          {/* <button
            className="btn btn-warning"
            onClick={() => filterItem("dinner")}
          >
            dinner
          </button> */}
          {/* <button className="btn btn-warning" onClick={() => setitem(Menuapi)}>ALL</button> */}
        </div>
      </div>

      <>
        <div className="container">
          <div className="row gy-3 my-3">
            {items.map((elem) => {
              const { id, title, image, name, price } = elem;
              // console.log(image);

              return (
                <div className="col-md-3 col-sm-6" key={elem.id}>
                  <div
                    className="card"
                    style={{ width: "20rem", height: "15rem" }}
                  >
                    <img
                      src={image}
                      className="card-img-top"
                      alt={name}
                      style={{ height: "10rem" }}
                    />
                    <div className="card-body">
                      <p className="card-text">{name}</p>
                      <p className="card-text">{price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    </>
  );
};

export default Menu;
