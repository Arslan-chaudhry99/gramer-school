import { Outlet } from "react-router";
import Header from "./components/others/Header";
import Bottom from "./components/others/Bottom";
import React from 'react'
const Share = () => {
  return (
   <>
   <Header/>
   <Outlet/>
   
   </>
   
  )
}

export default Share