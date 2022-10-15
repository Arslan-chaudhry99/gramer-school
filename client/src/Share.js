import { Outlet } from "react-router";
import Header from "./components/others/Header";

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