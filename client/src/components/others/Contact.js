import React from "react";
import { useNavigate } from "react-router";
import Header from "./Header";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/Context";
import { NavLink } from "react-router-dom";
const Contact = () => {
  const { fetchSchoolAbout, schoolData } = useContext(AppContext)
  const [Schoolfilter, setSchoolfilter] = useState('Student')
  const [ClsFilter, setClsFilter] = useState(1)
  const setClsFilterFun = (e) => {
    setClsFilter(Number(e.target.value))
  }
  const navigate = useNavigate();
  useEffect(() => {
    fetchSchoolAbout()
  }, [])

  const data = schoolData.filter((item) => {
    if (Schoolfilter === "Student" || Schoolfilter === "Teacher") {
      if (Schoolfilter === "Teacher") {
        return item.status === Schoolfilter
      }
      if (Schoolfilter === "Student") {
        return item.status === Schoolfilter && item.currentStatus !== false &&
          item.classname === ClsFilter
      }

    }
    if (Schoolfilter === "disable") {
      return item.currentStatus === false
    }


  })



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
                      <option value="Student" onClick={(e) => { setSchoolfilter(e.target.value) }}>Students</option>
                      <option value="Teacher" onClick={(e) => { setSchoolfilter(e.target.value) }}>Teachers</option>
                      <option value="disable" onClick={(e) => { setSchoolfilter(e.target.value) }}>Disabled</option>
                    </select>
                    {
                      Schoolfilter === "Student"  ? 
                      <select className="form-select d-inline-block w-auto mt-3  mb-lg-0">
                      <option value="1" onClick={setClsFilterFun}>1st Class</option>
                      <option value="2" onClick={setClsFilterFun}>2st Class</option>
                      <option value="3" onClick={setClsFilterFun}>3rd Class</option>
                      <option value="4" onClick={setClsFilterFun}>4th Class</option>
                      <option value="5" onClick={setClsFilterFun}>5th Class</option>
                      <option value="6" onClick={setClsFilterFun}>6th Class</option>
                      <option value="7" onClick={setClsFilterFun}>7th Class</option>
                      <option value="8" onClick={setClsFilterFun}>8th Class</option>
                      <option value="9" onClick={setClsFilterFun}>9th Class</option>
                      <option value="10" onClick={setClsFilterFun}>10th Class</option>
                      <option value="11" onClick={setClsFilterFun}>11th Class</option>
                      <option value="12" onClick={setClsFilterFun}>12th Class</option>
                    </select>:""
                    }
                   
                  </div>

                </div>
              </div>
            </div>
            {/* student section */}
            <section className="mb-3 mb-lg-5">
              <div className="row mb-3">
                {
                  data.map((items) => {
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

                              <NavLink id="RouterNavLink" to={"/Profile/" + items._id} >
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
                              items.status === "Student" ? <p className="text-muted text-sm mb-0"> {`${items.classname}th Class`}</p> : <p className="text-muted text-sm mb-0"> {`${items.education}`}</p>
                            }
                            {
                              items.currentStatus === true ?
                                <p className="text-success">Active</p> : <p className="text-danger">Blocked</p>
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
