import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Logout = () => {
           const navigate = useNavigate();
           const logOut = async () => {

                      const res = fetch("/logout", {
                                 method: "GET",
                                 headers: {
                                            Accept: "application/json",
                                            "Content-Type": "application/json"
                                 }
                      })

                      if ((await res).status === 200) {
                                 setTimeout(() => {
                                return window.location.reload();
                                 
                                 }, 1000);
                                 

                      }



           }
           useEffect(() => {
                      logOut()
           }, [])

           return (
                      < div style={{ width: "100vw", height: "100vh" }} className="d-flex justify-content-center align-items-center">
                                 <img src="/logout.webp" alt="img" style={{ width: "500px" }} />
                      </div>
           )
}

export default Logout