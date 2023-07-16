import React, { createContext, useContext, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Food.css'
import { foodData } from "./foodData";
import Filterout from "../Filterout/FilterOut";
import { Link } from "react-router-dom";


 
const Food = (props) => {
const [food ,setFood] =useState(foodData)

const [filterFood ,setFilterFood] =useState(foodData.slice(0,6))

  return (
 
  <div>
    <Filterout 
    setFilterFood={setFilterFood}
    setFood={setFood}
    ></Filterout>
      <div className="container-xl">

      <div className="row  food-row">

  
   {filterFood.map(item =>{
    const{id,name,description,price,image}= item ;

    return(
     
      <div className="col-xl-4  col-md-6 mt-4 text-center">
        <Link to={`food/${id}`}>
      <img className="food-img" src={image} alt="" />
      
      <div className="food-details mt-3" >
      <span className="food-title ">{name}</span>
      <p className="food-des">{description}</p>
      <h5 className="price">$ {price}</h5>
      </div>
      </Link>
      </div>
         
    
    ) 

   })}
  
  
    </div>

      </div>
    </div>
   
  )
};

export default Food;
