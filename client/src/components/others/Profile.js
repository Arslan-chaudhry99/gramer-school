import React from "react";
import Header from "./Header";
import { useContext, useEffect, useState, useRef } from "react";
import { AppContext } from "../Context/Context";
import { json, useParams } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css"
import axios from "axios";
function Profile() {
  const { userId } = useParams("userId")
  const [statusChek, setstatusChek] = useState(1)
  const [UpdateData, setUpdateData] = useState()
  const [updateNow, setupdateNow] = useState({})
  // data
  const [schoolData, setschoolData] = useState([])

  const { ftechLedger, ledgerDataVal, candidatesFee, candiFees } = useContext(AppContext)
  // new modification
  const [profileInfo, setprofileInfo] = useState([]);
  // fetching school data
  const fetchSchoolAbout = async () => {
    const id = toast.loading("Loding Data.....")
    try {
      const res = await fetch("/getschool", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })
      const Data = await res.json()
      console.log(await Data + "cfdd");
      await setschoolData(Data)
      await ftechLedger()
      await candidatesFee()
      return await toast.update(id, {
        render: "Done",
        type: "success",
        isLoading: false,
        autoClose: 250,
        closeOnClick: true
      },);
    } catch (error) {
      return alert("Please try again later.")
    }
  }

  let profileData = async () => {
    let data = await axios.get(`/getProfileInfo?Id=${userId}`)
    setprofileInfo(await data.data)
  }


  const canData = schoolData.filter((item) => {
    return item._id === userId
  })

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


  const copyToClip = () => {
    navigator.clipboard.writeText(document.getElementById("currentId").value);
    return alert("Copied!")

  }
  // updated values
  const updateInput = useRef()
  const updateValue = (e) => {
    e.preventDefault()
    const nameIng = e.target.id
    updateInput.current.placeholder = nameIng
    const ID = canData[0]._id
    const value = UpdateData
    setupdateNow({ candidateId: ID, nameIng, inputValue: value })
  }
  // update on every change in input

  // UpdateDataBaseData

  useEffect(() => {
    profileData()

  }, [])


  return (
    <>
      <ToastContainer position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" /> {
        profileInfo.map((item) => {

          return (
            <>

              <div className="page-holder bg-gray-100">
                <div className="container-fluid px-lg-4 px-xl-5">
                  {/* <!-- Breadcrumbs --> */}
                  <div className="page-breadcrumb">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a>Home</a>
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
                          <div className="card-header"
                            style={
                              { backgroundImage: "url(/dist/img/photos/paul-morris-116514-unsplash.jpg)" }
                            }></div>
                          <div className="card-body text-center">
                            {/* new here */}
                            <input type="file" />
                            {/* new here */}
                            <img className="card-profile-img"
                              src={
                                item.reqFiles[0]
                              }
                              alt="Nathan Andrews" />
                            
                              <div className="camera-icon">
                                  <i class="fa fa-camera " aria-hidden="true" st></i>
                                  
                              </div>
                            <h3 className="mb-3">
                              {
                                item.name
                              }</h3>
                            <p className="mb-4">
                              {
                                item.status
                              }</p>

                            {
                              item.currentStatus === true ? <button className="btn btn-sm btn-success shadow-0">Active</button> : <button className="btn btn-sm btn-danger shadow-0"></button>
                            }
                            <div class="input-group mb-3 mt-3">
                              <input type="text" class="form-control shadow-0"
                                value={
                                  item._id
                                }
                                id="currentId" />


                              <span class="input-group-text" id="liveToastBtn"
                                style={
                                  { cursor: "pointer" }
                                }>

                                <i class="fa fa-clone text-info mute" aria-hidden="true"
                                  onClick={copyToClip}></i>

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
                                item.status === "Teacher" ? "" : <span className="form-control" data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                  <span>
                                    <i class="fa fa-eye " aria-hidden="true"></i>
                                    <span style={
                                      { marginLeft: "7px" }
                                    }>Student Ledger</span>
                                  </span>

                                </span>
                              }


                              <span class="collapse mt-3" id="collapseExample">
                                <span class="form-control mb-2 d-flex justify-content-between align-items-center mt-3">


                                  <span className="btn btn-sm btn-success col-md-5"
                                    onClick={
                                      () => {
                                        setstatusChek(0)
                                      }
                                    }>History</span>
                                  <span className="btn btn-sm btn-danger col-md-5"
                                    onClick={
                                      () => {
                                        setstatusChek(1)
                                      }
                                    }>Unpaid</span>

                                </span>
                                {/*  */}
                                {
                                  adcanceremainingLedger.map((data) => {

                                    return (
                                      <>
                                        <span class="form-control d-flex justify-content-between align-items-center mb-2">
                                          <span>Rs {
                                            data.amount
                                          }/-</span>
                                          <Link to={
                                            "/more-details/" + data._id
                                          }>
                                            {
                                              data.remaning === 0 ? <span className="btn btn-sm btn-success shadow">Paid</span> : <span className="btn btn-sm btn-warning shadow">PayNow!</span>
                                            } </Link>
                                        </span>
                                      </>
                                    )
                                  })
                                }

                                {/*  */} </span>
                            </div>
                            {/* fee payment */}
                            <div className="col-sm-12 col-md-12 p-3">

                              <span className="form-control" data-bs-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                                <i class="fa fa-credit-card shadow" aria-hidden="true"></i>
                                <span style={
                                  { marginLeft: "7px" }
                                }>
                                  {
                                    item.status === "Teacher" ? "Teacher Sellery" : "Student Fee"
                                  } </span>
                              </span>
                              <div class="collapse mt-3" id="collapseExample1">
                                {
                                  [].map((item) => {
                                    return (
                                      <>
                                        <span class="form-control d-flex justify-content-between align-items-center mb-2">
                                          <span>{
                                            item.startingDate
                                          }</span>
                                          <span>Rs {
                                            item.payableAmoun
                                          }/-</span>
                                          {
                                            item.remaning !== 0 ?
                                              <span className="btn btn-sm btn-warning shadow">PayNow!</span>
                                              :
                                              <span className="btn btn-sm btn-success shadow">Paid</span>
                                          } </span>
                                      </>
                                    )
                                  })
                                } </div>
                            </div>


                          </div>

                        </form>
                      </div>

                      <div className="col-lg-8 ">


                        <form className="card mb-4">
                          <div className="card-header d-flex justify-content-between">
                            <h4 className="card-heading">Edit Profile</h4>
                            <i class="fa fa-edit text-success"></i>
                          </div>
                          <div className="card-body">

                            <div className="row">

                              <div className="col-md-5">
                                <div className="mb-4">
                                  <label className="form-label">Name</label>
                                  <input type="text"
                                    value={
                                      item.name
                                    }
                                    className="form-control editField" />
                                </div>
                              </div>
                              <div className="col-sm-6 col-md-3">
                                <div className="mb-4">
                                  <label className="form-label">Father Name</label>
                                  <input type="text"
                                    value={
                                      item.fatherName
                                    }
                                    className="form-control editField" />

                                </div>
                              </div>
                              <div className="col-sm-6 col-md-4">
                                <div className="mb-4">
                                  <label className="form-label">Mother Name</label>
                                  <input type="text"
                                    value={
                                      item.motherName
                                    }
                                    className="form-control editField" />

                                </div>
                              </div>
                              <div className="col-sm-6 col-md-6">
                                <div className="mb-4">
                                  <label className="form-label">Date Of Birth</label>
                                  <input type="text"
                                    value={
                                      item.dateBirth
                                    }
                                    className="form-control editField" />

                                </div>
                              </div>
                              <div className="col-sm-6 col-md-6">
                                <div className="mb-4">
                                  <label className="form-label">CNIC Number</label>
                                  <input type="text"
                                    value={
                                      item.cnic
                                    }
                                    className="form-control editField" />

                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="mb-4">
                                  <label className="form-label">Address</label>
                                  <input type="text"
                                    value={
                                      item.address
                                    }
                                    className="form-control editField" />

                                </div>
                              </div>
                              <div className="col-sm-6 col-md-8">
                                <div className="mb-4">
                                  <label className="form-label">
                                    {
                                      item.status === "Teacher" ? "Education" : "Class Name"
                                    }</label>
                                  {
                                    item.status === "Teacher" ? <input type="text"
                                      value={
                                        item.education
                                      }
                                      className="form-control editField" /> : <input type="text"
                                        value={
                                          item.classname
                                        }
                                        className="form-control editField" />
                                  }
                                </div>

                              </div>
                              <div className="col-sm-6 col-md-3">
                                <div className="mb-4">
                                  <label className="form-label">
                                    {
                                      item.status === "Teacher" ? "Teacher Pay" : "Student Fee"
                                    }</label>
                                  <input type="text"
                                    value={
                                      item.fee
                                    }
                                    className="form-control editField" />

                                </div>
                              </div>
                              {
                                item.status === "Teacher" ? "" : <div className="col-md-5">
                                  <div className="mb-4">
                                    <label className="form-label">Roll Number</label>
                                    <input type="text"
                                      value={
                                        item.rollNumber
                                      }
                                      className="form-control editField" />

                                  </div>
                                </div>
                              } </div>

                          </div>

                        </form>
                      </div>

                    </div>
                  </section>
                </div>

              </div>
            </>
          )
        })
      } </>
  );
}

export default Profile;
