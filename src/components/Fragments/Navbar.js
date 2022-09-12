import React from "react";
import { Link, useNavigate } from 'react-router-dom';


function LoginButton(props){
    let navigate = useNavigate();
  
    function handleButton(event){
      //we want to go to the homepage no matter what page we are on
      navigate("/", {replace:true, state:{ loginName : props.login }});
    }

    return (
      <button onClick={handleButton}>Login</button>
    )
  }

function Navbar(props){
    return(
      <div className= "nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/app">Build a Pet</Link>
        <LoginButton login='User'/>
      </div>
    )
  }

  export default Navbar;