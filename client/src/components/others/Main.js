import React from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../Context/Context";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom"
const Main = () => {
  const { candidatesFee, candiFees } = useContext(AppContext)

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
  const studentsFilter = candiFees.filter((item) => {
    return item.status !== "Teacher"
  })
  const teacherFilter = candiFees.filter((item) => {
    return item.status === "Teacher"
  })
  console.log(teacherFilter);
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
                            <th>Starting Date</th>
                            <th>Status</th>
                            <th className="text-end">Status*</th>
                          </tr>
                        </thead>
                        {/*  */}
                        {studentsFilter.map((item, index) => {
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
                                      item.remaning !== 0 ? <Link to={"/paynow/"+item._id}> <button className="btn btn-info btn-sm">Pay Now</button></Link> :  <Link to={"/paynow/"+item._id}> <button className="btn btn-success btn-sm">Paid</button></Link>
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
              <div className="col-lg-4 mb-4">
                <div className="card h-100">
                  <div className="card-header">
                    <h5 className="card-heading">Teachers sellery</h5>
                  </div>
                  {teacherFilter.map((item) => {
                    return (
                      <>
                        <div className="card-body pb-2 ">
                          <div className="d-flex align-items-center mb-3  justify-content-around">
                            <div className="mt-1 "  >

                              <span
                                className="text-dark fw-bold text-decoration-none"

                              >
                                {item.name}
                              </span>
                              {
                                item.remaning !== 0 ? <p className="text-muted text-sm mb-0 text-danger">Unpaid</p> : <p className="text-muted text-sm mb-0 text-success">Paid</p>
                              }




                            </div>
                            {
                               item.remaning !== 0 ?
                            <Link to={"/paynow/"+item._id}>
                            <span className="btn btn-info btn-sm" >Pay Now</span>
                            </Link>:<Link to={"/paynow/"+item._id}>
                            <span className="btn btn-success btn-sm" >Paid</span>
                            </Link>
                            }
                          </div>

                        </div>
                      </>
                    )
                  })}


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
