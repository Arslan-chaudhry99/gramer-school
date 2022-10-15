import React from "react";
import { useNavigate } from "react-router";

import Header from "./Header";
const Main = () => {
  // register a user
  const navigate=useNavigate()
  const register=()=>{
    navigate("/Registration-form")
  }
  //registration
  const lists=()=>{
   navigate("/students-details")
  }
  // ledger
  const ledger=()=>{
    navigate("/Books-ledger")
  }
  return (
    <>
    {/* <Header/> */}
      <div className="page-holder bg-gray-100">
        <div className="container-fluid px-lg-4 px-xl-5">
          {/* <!-- Page Header--> */}
          <div className="page-header">
            <h1 className="page-heading">Usman's Dashboard</h1>
          </div>
          <section className="mb-3 mb-lg-5">
            <div className="row mb-3 ">
              <div className="col-md-6 col-lg-3" >
                <div className="card mb-4" >
                  <div className="card-body">
                    <div
                      className="icon icon-lg bg-red-light"
                      style={{position:"absolute",top:"1rem", right:"1rem", cursor:"pointer"}}
                      onClick={register}
                      
                    >
                      <i className="fas fa-plus "></i>

                    </div>
                    <h6>Registration </h6>
                    <h3 className="text-red"
                    style={{inlineSize:"min-content"}}
                     
                     >
                      70+
                    </h3>
                    <p className="text-muted text-sm mb-0">
                      Student / Teacher
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <div
                      className="icon icon-lg bg-blue-light"
                      style={{position:"absolute", top:"1rem", right:"1rem",cursor:"pointer"}}
                      onClick={lists}
                    >
                      <i class="fas fa-list "></i>
                      
                    </div>
                    <h6>Students Details</h6>
                    <h3 className="text-blue"
                    style={{inlineSize:"min-content"}}
                     
                     >
                     63+
                    </h3>
                    <p className="text-muted text-sm mb-0">
                    Current Students 
                    </p>
                  </div>
                </div>
              </div>
             
              <div className="col-md-6 col-lg-3"style={{cursor:"pointer"}}>
                <div className="card mb-4">
                  <div className="card-body">
                    <div
                      className="icon icon-lg bg-green-light"
                      style={{position:"absolute", top:"1rem", right:"1rem"}}
                      onClick={ledger}
                    >
                    <i className="fas fa-book-open "></i>
                    </div>
                    <h6>Books Ledger</h6>
                    <h3 className="text-green"
                    style={{inlineSize:"min-content"}}
                     
                     >
                      3,500
                    </h3>
                    <p className="text-muted text-sm mb-0">
                      complete students Ledger
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              {/* fee and sellery details */}

              <div className="col-lg-8 mb-4">
                <div className="card card-table h-100">
                  <div className="card-header">
                    <h5 className="card-heading">Students Fees</h5>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-borderless table-hover mb-0">
                        <thead className="light">
                          <tr>
                            <th>Name</th>
                            <th>Roll Number</th>
                            <th>Due Date</th>
                            <th>Submite</th>
                            <th className="text-end">Status*</th>
                          </tr>
                        </thead>
                        <tbody className="align-middle">
                          <tr>
                            <td>
                              <span className="d-flex align-items-center">
                                <img
                                  className="avatar p-1 me-2"
                                  src="dist/img/avatar-0.jpg"
                                  alt="Nielsen Cobb"
                                />
                                <span className="d-inline-block">
                                  <strong>Arslan</strong>
                                  <br />
                                  <span className="text-muted text-sm">
                                    4th Class
                                  </span>
                                </span>
                              </span>
                            </td>
                            <td>14</td>
                            <td>January 25</td>
                            <td>N/A</td>
                            <td className="text-end">
                              {/* <span className="btn btn-success btn-sm text-white">
                                Paid
                              </span> */}
                              <button className="btn btn-info btn-sm">Pay Now</button>
                            </td>
                          
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                
                </div>
              </div>
              {/* <!-- </Projects Table>-->
              <!-- <Team Members>--> */}
              <div className="col-lg-4 mb-4">
                <div className="card h-100">
                  <div className="card-header">
                    <h5 className="card-heading">Teachers sellery</h5>
                  </div>
                  <div className="card-body pb-2 ">
                    <div className="d-flex align-items-center mb-3  justify-content-around">
                      
                      <img
                        className="avatar p-1 me-2"
                        src="dist/img/avatar-0.jpg"
                        alt="Nielsen Cobb"
                      />
                      <div className="mt-1 "  >
                       
                        <a
                          className="text-dark fw-bold text-decoration-none"
                          href="#!"
                        >
                          Nielsen Cobb
                        </a>
                        <p className="text-muted text-sm mb-0 text-danger">Unpaid</p>
                        

                       
                      </div>
                      
                      <span className="btn btn-info btn-sm">Pay Now</span>
                    </div>
                    
                  </div>
                 
                </div>
              </div>
              {/* <!-- </Team Members>--> */}
            </div>

         
          </section>
        </div>
        <footer className="footer bg-white shadow align-self-end py-3 px-xl-5 w-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 text-center text-md-start fw-bold">
                <p className="mb-2 mb-md-0 fw-bold">Your company &copy; 2022</p>
              </div>
              <div className="col-md-6 text-center text-md-end text-gray-400">
                <p className="mb-0">Version 1.0</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Main;
