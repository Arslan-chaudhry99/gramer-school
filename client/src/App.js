import React from "react";
import Login from "./components/auth/Login";
import Header from "./components/others/Header";
import Main from "./components/others/Main";
import Contact from "./components/others/Contact";
import SchoolCards from "./components/others/SchoolCards";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/others/Profile";
import RegisForm from "./components/others/RegisForm";
import Booksledger from "./components/others/Booksledger";
import Error from "./components/others/Error";
import Setting from "./components/others/Setting";
import { Cookies } from "react-cookie";

const App = () => {
  let user = true

  return (

    <>
      <BrowserRouter>
        <Routes>
          {
            !user ? (
              <Route path="*" element={<Login />} />
            ) : (
              <>
                <Route path="/" element={<Main />} />
                <Route path="/Home" element={<Main />} />
                <Route path="/regestration" element={<Contact />} />
                <Route path="/SchoolCards" element={<SchoolCards />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Registration-form" element={<RegisForm />} />
                <Route path="/students-details" element={<Contact />} />
                <Route path="/Books-ledger" element={<Booksledger />} />
                <Route path="/Setting" element={<Setting />} />
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
