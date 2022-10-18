import React from "react";
import Header from "./Header";
import { useContext, useEffect, useState, useRef } from "react";
import { AppContext } from "../Context/Context";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
function Profile() {
  const [statusChek, setstatusChek] = useState(1)

  const { fetchSchoolAbout, schoolData, ftechLedger, ledgerDataVal, candidatesFee, candiFees } = useContext(AppContext)

  const { userId } = useParams("userId")
  useEffect(() => {
    fetchSchoolAbout()
    ftechLedger()
    candidatesFee()
  }, [])
  const canData = schoolData.filter((item) => {
    return item._id === userId
  })
  // console.log(canData[0].classname,canData[0].rollNumber);
  let remainingLedger = ledgerDataVal.filter((ledg) => {
    return ledg.className === canData[0].classname && ledg.rollNumber === canData[0].rollNumber

  })
  const adcanceremainingLedger = remainingLedger.filter((item) => {
    if (statusChek === 1) {
      return item.remaning === 1 || item.remaning > 1
    }
    if (statusChek === 0) {
      return item.remaning === 0
    }

  })
  // adcanceremainingLedger.reverse()

  const teacherOrStudent = candiFees.filter((item) => {
    return item.candidateId === userId
  })
console.log(teacherOrStudent);




  const copyToClip = () => {
    navigator.clipboard.writeText(document.getElementById("currentId").value);
    return alert("Copied!")

  }
  return (
    <>
      {canData.map((item) => {
        return (<>

          <div className="page-holder bg-gray-100">
            <div className="container-fluid px-lg-4 px-xl-5">
              {/* <!-- Breadcrumbs --> */}
              <div className="page-breadcrumb">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a >Home</a>
                  </li>
                  <li className="breadcrumb-item active">Profile</li>
                </ul>
              </div>
              {/* <!-- Page Header--> */}
              <div className="page-header">
                <h1 className="page-heading">Profile</h1>
              </div>
              <section>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card card-profile mb-4">
                      <div
                        className="card-header"
                        style={{ backgroundImage: "url(/dist/img/photos/paul-morris-116514-unsplash.jpg)" }}

                      ></div>
                      <div className="card-body text-center">
                        <img
                          className="card-profile-img"
                          src="/logo.jpeg"
                          alt="Nathan Andrews"
                        />
                        <h3 className="mb-3">{item.name}</h3>
                        <p className="mb-4">{item.status}</p>

                        {
                          item.currentStatus === true ? <button className="btn btn-sm btn-success shadow-0">Active</button> : <button className="btn btn-sm btn-danger shadow-0">Disabled</button>
                        }
                        <div class="input-group mb-3 mt-3">
                          <input type="text" class="form-control" value={item._id}
                            id="currentId"
                          />

                          <span class="input-group-text" id="liveToastBtn" style={{ cursor: "pointer" }} onClick={copyToClip}>

                            <i class="fa fa-clone text-info" aria-hidden="true"></i>

                          </span>
                        </div>

                      </div>

                    </div>

                    <form className="card mb-4">
                      <div className="card-header">
                        <h4 className="card-heading">Payment Details</h4>
                      </div>
                      <div>
                        <div className="col-sm-12 col-md-12 p-3 ">
                          {
                            item.status === "Teacher" ? "" :
                              <span className="form-control" data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                <span>
                                  <i class="fa fa-eye " aria-hidden="true"></i>
                                  <span style={{ marginLeft: "7px" }}>Student Ledger</span>
                                </span>

                              </span>
                          }


                          <span class="collapse mt-3" id="collapseExample">
                            <span class="form-control mb-2 d-flex justify-content-between align-items-center mt-3">


                              <span className="btn btn-sm btn-success col-md-5"
                                onClick={() => { setstatusChek(0) }} >History</span>
                              <span className="btn btn-sm btn-danger col-md-5" onClick={() => { setstatusChek(1) }}>Unpaid</span>

                            </span>
                            {/*  */}
                            {
                              adcanceremainingLedger.map((data) => {

                                return (
                                  <>
                                    <span class="form-control d-flex justify-content-between align-items-center mb-2">
                                      <span>Rs {data.amount}/-</span>
                                      <Link to={"/more-details/" + data._id}>
                                        {data.remaning === 0 ? <span className="btn btn-sm btn-success shadow" >Paid</span> : <span className="btn btn-sm btn-warning shadow" >PayNow!</span>}
                                      </Link>
                                    </span>
                                  </>
                                )
                              })
                            }

                            {/*  */}

                          </span>
                        </div>
                        {/* fee payment */}
                        <div className="col-sm-12 col-md-12 p-3">

                          <span className="form-control" data-bs-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample"><i class="fa fa-credit-card shadow" aria-hidden="true"></i>
                            <span style={{ marginLeft: "7px" }}>{item.status === "Teacher" ? "Teacher Sellery" : "Student Fee"} </span> </span>
                          <div class="collapse mt-3" id="collapseExample1">
                            {teacherOrStudent.map((item) => {
                              return (
                                <>
                                  <span class="form-control d-flex justify-content-between align-items-center mb-2"><span>{item.startingDate}</span><span>Rs {item.payableAmoun}/-</span>
                                  {item.remaning !== 0 ? <span className="btn btn-sm btn-warning shadow" >PayNow!</span>:<span className="btn btn-sm btn-success shadow" >Paid</span>}
                                  
                                  
                                   </span>
                                </>
                              )
                            })}

                          </div>
                        </div>


                      </div>

                    </form>
                  </div>
                  <div className="col-lg-8">

                    <form className="card mb-4">
                      <div className="card-header">
                        <h4 className="card-heading">Edit Profile</h4>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-5">
                            <div className="mb-4">
                              <label className="form-label">Name</label>
                              <span className="form-control">{item.name}</span>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3">
                            <div className="mb-4">
                              <label className="form-label">Father Name</label>
                              <span className="form-control">{item.fatherName}</span>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div className="mb-4">
                              <label className="form-label">Mother Name</label>
                              <span className="form-control"> {item.motherName}</span>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-6">
                            <div className="mb-4">
                              <label className="form-label">Date Of Birth</label>
                              <span className="form-control"> {item.dateBirth}</span>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-6">
                            <div className="mb-4">
                              <label className="form-label">CNIC Number</label>
                              <span className="form-control">{item.cnic}</span>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-4">
                              <label className="form-label">Address</label>
                              <span className="form-control">
                                {item.address}
                              </span>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-8">
                            <div className="mb-4">
                              <label className="form-label">{item.status === "Teacher" ? "Education" : "Class Name"}</label>
                              {item.status === "Teacher" ? <span className="form-control">{item.education}th className</span> : <span className="form-control">{item.classname}th className</span>}

                            </div>

                          </div>
                          <div className="col-sm-6 col-md-3">
                            <div className="mb-4">
                              <label className="form-label">{item.status === "Teacher" ? "Teacher Pay" : "Student Fee"}</label>
                              <span className="form-control">Rs {item.fee}/-</span>
                            </div>
                          </div>
                          {item.status === "Teacher" ? "" : <div className="col-md-5">
                            <div className="mb-4">
                              <label className="form-label">Roll Number</label>
                              <span className="form-control">{item.rollNumber}</span>
                            </div>
                          </div>}

                        </div>
                      </div>
                    </form>
                  </div>
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
                    <p className="mb-0">Version 1.3.0</p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </>)
      })}

    </>
  );
}

export default Profile;
