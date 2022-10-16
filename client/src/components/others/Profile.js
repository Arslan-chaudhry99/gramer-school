import React from "react";
import Header from "./Header";
import { useContext, useEffect } from "react";
import { AppContext } from "../Context/Context";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
function Profile() {
  const { fetchSchoolAbout, schoolData, ftechLedger, ledgerDataVal } = useContext(AppContext)
  const { userId } = useParams("userId")
  useEffect(() => {
    fetchSchoolAbout()
    ftechLedger()
  }, [])
  const canData = schoolData.filter((item) => {
    return item._id === userId
  })
  // console.log(canData[0].classname,canData[0].rollNumber);
  let remainingLedger = ledgerDataVal.filter((ledg) => {
    return ledg.className === canData[0].classname && ledg.rollNumber === canData[0].rollNumber

  })
  //  console.log(remainingLedger);

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
                          src="/avatar-1.jpg"
                          alt="Nathan Andrews"
                        />
                        <h3 className="mb-3">{item.name}</h3>
                        <p className="mb-4">{item.status}</p>
                        <button class="btn btn-outline-dark btn-sm" onClick={() => {
                          window.print()
                        }}>
                          Active</button>
                      </div>

                    </div>

                    <form className="card mb-4">
                      <div className="card-header">
                        <h4 className="card-heading">Payment Details</h4>
                      </div>
                      <div>
                        <div className="col-sm-12 col-md-12 p-3">

                          <span className="form-control" data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="fa fa-eye " aria-hidden="true"></i>
                            <span style={{ marginLeft: "7px" }}>Student Ledger</span> </span>
                          <div class="collapse mt-3" id="collapseExample">

                            {/*  */}
                            {
                              remainingLedger.map((data) => {

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

                          </div>
                        </div>
                        {/* fee payment */}
                        <div className="col-sm-12 col-md-12 p-3">

                          <span className="form-control" data-bs-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample"><i class="fa fa-credit-card shadow" aria-hidden="true"></i>
                            <span style={{ marginLeft: "7px" }}>Student Fee</span> </span>
                          <div class="collapse mt-3" id="collapseExample1">

                            <span class="form-control d-flex justify-content-between align-items-center"><span>12/3/2022</span><span>Rs 40000/-</span><span className="btn btn-sm btn-warning shadow" >PayNow!</span> </span>
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
