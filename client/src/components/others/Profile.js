import React from "react";
import Header from "./Header";
import { useContext, useEffect } from "react";
import { AppContext } from "../Context/Context";
import { useParams } from "react-router";
function Profile() {
  const { fetchSchoolAbout, schoolData } = useContext(AppContext)
  const { userId } = useParams("userId")
  useEffect(() => {
    fetchSchoolAbout()
  }, [])
  const canData = schoolData.filter((item) => {
    return item._id === userId
  })
console.log(canData);
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
                        <button class="btn btn-outline-dark btn-sm">
                          Active</button>
                      </div>
                      
                    </div>

                    <form className="card mb-4">
                      <div className="card-header">
                        <h4 className="card-heading">Update Student Profile</h4>
                      </div>
                      <div className="card-body">
                        <div className="row mb-3">
                          <div className="col-auto d-flex align-items-center ">
                            <img
                              type="image"
                              className="avatar avatar-lg p-1"
                              src="/avatar-1.jpg"
                              alt="Avatar"
                            />
                          </div>
                          <div className="col">
                            <label className="form-label">Name</label>
                            <input className="form-control" placeholder="Your name" />
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input
                            className="form-control"
                            placeholder="you@domain.com"
                          />
                        </div>
                        <label className="form-label">Password</label>
                        <input
                          className="form-control"
                          type="password"
                        // value="password"
                        />
                      </div>
                      <div className="card-footer text-end">
                        <button className="btn btn-primary">Edit Information</button>
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
                          <div className="col-sm-6 col-md-4">
                            <div className="mb-4">
                              <label className="form-label">{item.status === "Teacher"? "Education":"Class Name"}</label>
                              <span className="form-control">4th className</span>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3">
                            <div className="mb-4">
                              <label className="form-label">{item.status === "Teacher"? "Teacher Pay":"Student Fee"}</label>
                              <span className="form-control">Rs {item.fee}/-</span>
                            </div>
                          </div>
                          {item.status === "Teacher"? "": <div className="col-md-5">
                            <div className="mb-4">
                              <label className="form-label">Roll Number</label>
                              <span className="form-control">12</span>
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
