import React from 'react'
import { styled } from 'styled-components'

import { NavLink } from "react-router-dom"
import { useState } from 'react';
import Searchbar from './SearchBar';

function Sidebar() {
  const [Menu, setMenu] = useState(false);

  return (
    
    <Conatiner show={Menu}>
      {!Menu && <i className="fa-solid fa-bars ham" onClick={() => { setMenu(true) }}></i>}
      <DeskView show={Menu}>
        {Menu && <i className="fa-solid fa-x x" onClick={() => { setMenu(false) }}></i>}
        <br></br>
        <img src='/images/logo.png' width={"150px"}></img>
        <nav>

          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/pendingorder">PendingOrder</NavLink></li>
          <li><NavLink to="/acceptedorder">AcceptedOrder</NavLink></li>
          <li><NavLink to="/completedorder">CompletedOrder</NavLink></li>
          <li><NavLink to="/allorder">AllOrder</NavLink></li>

        </nav>
      </DeskView>
      {/* <Searchbar></Searchbar> */}
      
    </Conatiner>



  )
}
const Conatiner = styled.div`
  .ham{
    float:left;
    font-size:25px;
    position:fixed;
    
    display:none;  
    
    z-index:10;
  }
 
  @media screen and (max-width: 780px) {
    .ham{
      display:block;  
      padding:10px;
    }
    
  }
  display:flex;
  // width:100%;
  border:2px solid;
`
const DeskView = styled.div`
   
    background-color:#0D73EC;
    // border:2px solid black;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: #F3F2F5;
  
    
    height:100vh;
    position:sticky;
    top:0;
    width:270px;
    z-index:100;
    @media screen and (max-width: 780px) {
      position:fixed;

      display:${props => props.show ? "block" : "none"};
      
    }

    li{
      
      list-style-type: none;
      padding:20px;
      margin-top:10px;
    }
    
    .x{
      
      // position:relative;
      // top:100px;
      // float:right;
    
      
    }

    nav {
      
      margin-top:100px;
    }
    

    
    `





export default Sidebar
