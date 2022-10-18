import React from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../Context/Context";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom"
const Main = () => {
  const { candidatesFee, candiFees } = useContext(AppContext)
  const [Prevalue, setPrevalue] = useState(0)
  const [Nextval, setNextval] = useState(5)
  // console.log(Prevalue, Nextval);
  // register a user
  const navigate = useNavigate()
  const register = () => {
    navigate("/Registration-form")
  }
  //registration
  const lists = () => {
    navigate("/students-details")
  }
  // ledger
  const ledger = () => {
    navigate("/Books-ledger")
  }

  useEffect(() => {
    candidatesFee()
  }, [])
  // student filter
  let currentDate=new Date().toDateString()
  
  const studentsFilter = candiFees.filter((item) => {
    return item.status !== "Teacher" && item.startingDate ===currentDate
  })
  console.log(studentsFilter);
  const teacherFilter = candiFees.filter((item) => {
    return item.status === "Teacher" && item.startingDate ===currentDate
  })
  const sliceStudentsFilter = studentsFilter.slice(Prevalue, Nextval)
  
  const moveNext = () => {
    if (Nextval < studentsFilter.length) {
      setNextval(Nextval + 5)
      setPrevalue(Prevalue + 5)
    }
    else{
      return alert("No more result available")
    }
    
  }
  const moveBack = () => {
    if (Prevalue !== 0) {
      setNextval(Nextval - 5)
      setPrevalue(Prevalue - 5)
    }
    else{
      return alert("No previous result available")
    }
    
  }
  return (
    <>

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
                      style={{ position: "absolute", top: "1rem", right: "1rem", cursor: "pointer" }}
                      onClick={register}

                    >
                      <i className="fas fa-plus "></i>

                    </div>
                    <h6>Registration </h6>
                    <h3 className="text-red"
                      style={{ inlineSize: "min-content" }}

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
                      style={{ position: "absolute", top: "1rem", right: "1rem", cursor: "pointer" }}
                      onClick={lists}
                    >
                      <i class="fas fa-list "></i>

                    </div>
                    <h6>Students Details</h6>
                    <h3 className="text-blue"
                      style={{ inlineSize: "min-content" }}

                    >
                      63+
                    </h3>
                    <p className="text-muted text-sm mb-0">
                      Current Students
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3" style={{ cursor: "pointer" }}>
                <div className="card mb-4">
                  <div className="card-body">
                    <div
                      className="icon icon-lg bg-green-light"
                      style={{ position: "absolute", top: "1rem", right: "1rem" }}
                      onClick={ledger}
                    >
                      <i className="fas fa-book-open "></i>
                    </div>
                    <h6>Books Ledger</h6>
                    <h3 className="text-green"
                      style={{ inlineSize: "min-content" }}

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
              <div className="col-lg-12 mb-4">
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
                            <th>Starting Date</th>
                            <th>Status</th>
                            <th className="text-end">Status*</th>
                          </tr>
                        </thead>
                        {/*  */}
                        {sliceStudentsFilter.map((item, index) => {
                          return (
                            <>
                              <tbody className="align-middle" key={index}>
                                <tr>
                                  <td>
                                    <span className="d-flex align-items-center">

                                      <span className="d-inline-block">
                                        <strong>{item.name}</strong>
                                        <br />
                                        <span className="text-muted text-sm">
                                          {item.classname}th Class
                                        </span>
                                      </span>
                                    </span>
                                  </td>
                                  <td>{item.rollNumber}</td>
                                  <td>{item.startingDate}</td>
                                  <td>{item.remaning !== 0 ? <span class="badge me-2 badge-danger-light">Unpaid</span> : <span class="badge me-2 badge-success-light">Paid</span>}</td>
                                  <td className="text-end">
                                    {
                                      item.remaning !== 0 ? <Link to={"/paynow/" + item._id}> <button className="btn btn-info btn-sm">Pay Now</button></Link> : <Link to={"/paynow/" + item._id}> <button className="btn btn-success btn-sm">Paid</button></Link>
                                    }


                                  </td>

                                </tr>
                              </tbody>
                            </>
                          )
                        })}

                      </table>
                    </div>
                  </div>
                  <div class="dataTable-bottom">
                    <span class="d-flex" style={{ justifyContent: "space-between", alignItems: "center" }}>
                      <button className="btn btn-sm btn-warning" onClick={moveBack}>
                        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                        <span style={{ marginLeft: "4px" }} >Move To Previous</span>
                      </button>

                      <button className="btn btn-sm btn-warning" onClick={moveNext}><span style={{ marginRight: "5px" }} >Move To Next</span>
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                      </button>
                    </span>
                  </div>

                </div>

              </div>

            </div>
            <div className="row mb-3">
              {/* fee and sellery details */}
              <div className="col-lg-12 mb-4">
                <div className="card card-table h-100">
                  <div className="card-header">
                    <h5 className="card-heading">Teachers Fees</h5>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-borderless table-hover mb-0">
                        <thead className="light">
                          <tr>
                            <th>Name</th>

                            <th>Starting Date</th>
                            <th>Status</th>
                            <th className="text-end">Status*</th>
                          </tr>
                        </thead>
                        {/*  */}
                        {teacherFilter.map((item, index) => {
                          return (
                            <>
                              <tbody className="align-middle" key={index}>
                                <tr>
                                  <td>
                                    <span className="d-flex align-items-center">

                                      <span className="d-inline-block">
                                        <strong>{item.name}</strong>
                                        <br />
                                        <span className="text-muted text-sm">
                                          {item.cnic}
                                        </span>
                                      </span>
                                    </span>
                                  </td>

                                  <td>{item.startingDate}</td>
                                  <td>{item.remaning !== 0 ? <span class="badge me-2 badge-danger-light">Unpaid</span> : <span class="badge me-2 badge-success-light">Paid</span>}</td>
                                  <td className="text-end">
                                    {
                                      item.remaning !== 0 ? <Link to={"/paynow/" + item._id}> <button className="btn btn-info btn-sm">Pay Now</button></Link> : <Link to={"/paynow/" + item._id}> <button className="btn btn-success btn-sm">Paid</button></Link>
                                    }


                                  </td>

                                </tr>
                              </tbody>
                            </>
                          )
                        })}

                      </table>
                    </div>
                  </div>

                </div>
              </div>

              {/* <!-- </Projects Table>-->
              <!-- <Team Members>--> */}

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
