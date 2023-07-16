import React from "react"
import { foodData } from "../Food/foodData";
import '../Food/Food.css'

const Filterout = ({ setFilterFood,setFood}) => {
  
    const filterFood = (cat) =>{
    const foodFilter =foodData.filter(items => {
      return  (items.cetagory === cat);
    })
    setFilterFood(foodFilter)
    
    }

  return (
    <div className="d-flex justify-content-center mt-4">
      <button className="btn" onClick={()=> filterFood("breakfast")}>Breakfast</button>
      <button className="btn mx-4" onClick={()=> filterFood("lunch")}>Lunch</button>
      <button className="btn" onClick={()=> filterFood("dinner")}>Dinner</button>
    </div>
  )
};

export default Filterout;
