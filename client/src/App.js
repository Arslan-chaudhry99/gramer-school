import React from "react";
import Login from "./components/auth/Login";
import Header from "./components/others/Header";
import Main from "./components/others/Main";
import Contact from "./components/others/Contact";
import SchoolCards from "./components/others/SchoolCards";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Profile from "./components/others/Profile";
import RegisForm from "./components/others/RegisForm";
import Booksledger from "./components/others/Booksledger";
import Error from "./components/others/Error";
import Setting from "./components/others/Setting";
import LedgerDetails from "./components/others/LedgerDetails";
import Share from "./Share";
import Feepayment from "./components/others/Feepayment";
import { useEffect, useState } from "react";
 import Cookies from "js-cookie";
import Logout from "./components/others/Logout";
const App = () => {

  const user=Cookies.get("userToken")
 




  return (

    <>
      <BrowserRouter>
        <Routes>
          {
            !user ? (
              <Route path="*" element={<Login />} />
            ) : (
              <>
                <Route path="/" element={<Share />} >

                  <Route index path="/" element={<Main />} />
                  <Route path="/regestration" element={<Contact />} />
                  <Route path="/SchoolCards" element={<SchoolCards />} />
                  <Route path="/Profile/:userId" element={<Profile />} />
                  <Route path="/Registration-form" element={<RegisForm />} />
                  <Route path="/students-details" element={<Contact />} />
                  <Route path="/Books-ledger" element={<Booksledger />} />
                  <Route path="/Setting" element={<Setting />} />
                  <Route path="/more-details/:id" element={<LedgerDetails />} />
                </Route>
                <Route path="/paynow/:id" element={<Feepayment />} />
                <Route path="/logout" element={<Logout />} />
                <Route
                  path="*"
                  element={
                    <Error />
                  }
                />
              </>
            )
          }

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
