import React from "react";
import { useNavigate } from "react-router";
import Header from "./Header";
import { useContext, useEffect } from "react";
import { AppContext } from "../Context/Context";
import { NavLink } from "react-router-dom";
const Contact = () => {
  const { fetchSchoolAbout, schoolData } = useContext(AppContext)
  const navigate = useNavigate();
  
  useEffect(() => {
    fetchSchoolAbout()
  }, [])
  
  return (
    <>
      {/* <Header /> */}
      <div className="page-holder bg-gray-100">
        <div className="container-fluid px-lg-4 px-xl-5">
          {/* <!-- Page Header--> */}
          <div className="page-header d-flex justify-content-between align-items-center">
            <h1 className="page-heading mb-0">All About School</h1>
          </div>

          <section className="mb-5">
            <div className="card mb-5">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12">
                    <select className="form-select d-inline-block w-auto me-3 mb-1 mb-lg-0">
                      
                      <option value="Teacher">Teachers</option>
                      <option value="Student">Students</option>
                    </select>
                    <select className="form-select d-inline-block w-auto mb-1 mb-lg-0">
                      <option value="all">All dates</option>
                      <option value="all">1st Class </option>
                    </select>
                  </div>
                  
                </div>
              </div>
            </div>
            {/* student section */}
            <section className="mb-3 mb-lg-5">
              <div className="row mb-3">
                {
                  schoolData.map((items) => {
                    return (<>
                      <div className="col-md-6 col-lg-3">
                        <div className="card mb-4">
                          <div
                            className="card-body "
                            style={{ cursor: "pointer" }}
                          
                          >
                            <div
                              className="  "
                              style={{
                                position: "absolute",
                                top: "1rem",
                                right: "1rem",
                                cursor: "pointer",
                              }}
                            >
                              
                              <NavLink id="RouterNavLink"  to={"/Profile/" + items._id} >
                              <img
                                className="avatar p-1 me-2"
                                src="/logo.jpeg"
                                alt="img"
                              ></img>
                              </NavLink>
                            </div>

                            <h6>{items.name}</h6>
                            <h3
                              className="text-info"
                              style={{ inlineSize: "min-content" }}
                            >
                              {items.status}
                            </h3>
                            {
                              items.status === "Student" ?<p className="text-muted text-sm mb-0"> {`${items.classname}th Class`}</p>:<p className="text-muted text-sm mb-0"> {`${items.education}`}</p>
                            }
                            
                          </div>
                        </div>
                      </div>
                    </>)
                  })
                }

              </div>
              <div className="row mb-3"></div>
            </section>
          </section>
        </div>
        <footer className="footer bg-white shadow align-self-end py-3 px-xl-5 w-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 text-center text-md-start fw-bold">
                <p className="mb-2 mb-md-0 fw-bold">Your company &copy; 2022</p>
              </div>
              <div className="col-md-6 text-center text-md-end text-gray-400">
                <p className="mb-0">Version 1.3.0</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      ;
    </>
  );
};

export default Contact;
