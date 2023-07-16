import React from "react"
import Header from "../Header/Header";


import './Home.css'
import Food from "../Food/Food";
const Home = (props) => {
  return (
    <div>
      <Header></Header>
      <div className="banner text-center ">
        <h2 className="heading">Best food waiting for your belly</h2>

        <div className="search">
          <form id="form">
          <input type="text" name="" id="searchIn" placeholder="Search your food"/>
          <button type="submit" id="searchBtn">Search</button>
          </form>
        
        </div>

      </div>
      <Food></Food>
    </div>
  )
};

export default Home;
