import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { foodData } from "../Food/foodData";
import Header from "../Header/Header";
import './Item.css'
const Item = () => {
 const{Id}= useParams()
 const[food, setFood]= useState([])

 useEffect(() => {
  const foodFilter =foodData.filter(item => item.id === Id)
  setFood(foodFilter)
 }, [Id])


 


  return (
    <div>
      <Header ></Header>
      <div className="container">
          {food.map(items=> {
             const{id,name,description,price,image}= items ;
            return(
         <div className="row">
             <div className="col-xl-5">
              <h1 className="food-name">{name}</h1>
              <p className="details">{description}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui voluptates, a ipsam sunt reiciendis amet adipisci quisquam laboriosam voluptas, eos dolor consequuntur.
              </p>
              <div className="price-div d-flex align-item-center">
              <h3 className="price"> $ {price}</h3>
                 <div className="quantity ">
                 <button id="plus">+</button>
                 <input type="text" name="" id="QnNumber" />
                 <button id="minus">-</button>
                 </div>
              </div>
              <button >Add</button>
              </div>    
           <div className="col-xl-7">
           <img src={image} alt="" />
           </div>
            </div>
            )
          })}
      </div>
      </div>
  )
};

export default Item;
