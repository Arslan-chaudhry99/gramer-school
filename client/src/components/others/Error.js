import React from "react";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate=useNavigate()
  const goback=()=>{
    navigate("/")
  }
  return <>
  <div className="d-flex" style={{width:"100vw",height:"100vh",justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
 <img src="404_animation.gif" alt="img"  style={{width:"50%"}} />
 <button className="btn btn-warning" onClick={goback}>GO BACK</button>
  </div>
 
  </>;
};

export default Error;
