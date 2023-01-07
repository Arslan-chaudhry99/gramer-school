import React from "react";
import Header from "./Header";
import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Setting = () => {
  const [CandidateId, setCandidateId] = useState("")
  const [CandidateData, setCandidateData] = useState([])

  const getCandidate = async (e) => {
    e.preventDefault()
    const id = toast.loading("Please wait...")
    if (!CandidateId) {
     return toast.update(id, { render: "Please paste the candidate id.", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true },);
      
    }
    else {
      const CandidateIdObj = {
        CandidateId: CandidateId
      }

      const res = await fetch("/disableCandidate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(CandidateIdObj),
        credentials: "include"
      });
      if ((await res).status === 200) {
        const Data = await res.json()
        setCandidateData(Data)
        return toast.update(id, { render: "User found!", type: "success", isLoading: false, autoClose: 1000, closeOnClick: true },);
      }
      if ((await res).status === 401) {
        return toast.update(id, { render: "Candidate Not found", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true },);
        

      }

    }


  }

  // hide unhide password
  const pass = useRef()
  const cpass = useRef()

  // hide pass or unhide
  const hideOrvis = (e) => {

  }
  // password and username authentication
  const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  const userNameVarify = /^[A-Za-z][A-Za-z0-9]+$/;
  //signup a user
  const [User, setUser] = useState({
    name: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  // reset password

  const [Rest, setRest] = useState({
    name: "",
    oldPass: "",
    newPass: "",
    cnewPass: ""
  })

  // add as an admin
  let name;
  let value;
  const addAdmin = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...User, [name]: value });
  };

  // registerNewUser

  const registerNewUser = async (e) => {
    e.preventDefault();
    const id = toast.loading("Please wait...")
    const { name, phone, password, cpassword } = User;
    if (!name || !phone || !password || !cpassword) {
      return toast.update(id, { render: "Please fill each and every field", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true },);

    }
    if (password !== cpassword) {
      return toast.update(id, { render: "Conform password not the same.", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true },);

    }

    if (!password.match(passw)) {
      return toast.update(id, { render: "password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true },);

    }
    if (!name.match(userNameVarify)) {
      return toast.update(id, { render: "Username must start with Alphanumeric", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true },);

    }

    else {
      try {

        const res = await fetch("/signup", {

          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(User),
        });

        if ((await res).status === 422) {
          return toast.update(id, { render: "Please try another username", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true },);

        }
        if ((await res).status === 200) {

          setUser({
            name: "",
            phone: "",
            password: "",
            cpassword: "",
          })
          return toast.update(id, { render: "User register successfuly", type: "success", isLoading: false, autoClose: 5000, closeOnClick: true },);

        }
        if ((await res).status === 422) {
          return toast.update(id, { render: "Error 500. please try again later", type: "success", isLoading: false, autoClose: 5000, closeOnClick: true },);

        }
      } catch (error) {

        console.log(error);
      }
    }
  };

  // setRestPass
  let restName;
  let restValue;
  const setRestPass = (e) => {
    restName = e.target.name;
    restValue = e.target.value
    setRest({ ...Rest, [restName]: restValue })
  }
  const resetNow = async (e) => {
    e.preventDefault();
    const id = toast.loading("Please wait...")
    const { name, oldPass, newPass, cnewPass } = Rest
    if (!name || !oldPass || !newPass || !cnewPass) {

      return toast.update(id, { render: "Please fill out each and every field in order to reset your password.", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true },);
    }
    if (newPass !== cnewPass) {
      return toast.update(id, { render: "Conform password is not same", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true },);
      
    }
    else {
      try {

        const res = await fetch("/resetpassword", {

          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Rest),
        });
        if ((await res).status === 401) {
          return toast.update(id, { render: "User not found.", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true },);
          
        }
        if ((await res).status === 402) {
          return toast.update(id, { render: "Invalid old password.", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true },);
          
        }
        if ((await res).status === 203) {

          setRest({
            name: "",
            oldPass: "",
            newPass: "",
            cnewPass: ""
          })
          return toast.update(id, { render: "Password updated success", type: "success", isLoading: false, autoClose: 5000, closeOnClick: true },);
         
        }
      } catch (error) {

        console.log(error);
      }
    }
  }

  // onOff


  const onOff = async () => {
    

    const data = {
      id: CandidateId
    }
    try {
      const id = toast.loading("Please wait...")
      const res = fetch("/enableDisable", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include"
      });
      if ((await res).status === 201) {
        setTimeout(() => {
          window.location.reload()
        }, 6000);
        return toast.update(id, { render: "Update Success", type: "success", isLoading: false, autoClose: 5000, closeOnClick: true },);
        
        
      }

      if ((await res).status === 403) {
        
        return toast.update(id, { render: "Unable to update", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true },);
        
      }
    } catch (error) {

      return alert("Try gain later")
    }



  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <dir className="row w-100" style={{ marginRight: "0" }}>
        <div className="col-lg-4 mb-5">
          <div className="card">
            <div className="card-header">
              <h4 className="card-heading">Reset password</h4>
            </div>
            <div className="card-body">
              <form method="POST">
                <div className="form-floating ">
                  <input
                    className="form-control shadow-0"
                    id="floatingInput"
                    type="text"
                    name="name"
                    placeholder=""
                    value={Rest.name}
                    onChange={setRestPass}
                  />
                  <label htmlFor="floatingInput">Username</label>
                  <small>Please Enter Your Username*</small>
                </div>
                <div className="dropdown-divider"></div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control shadow-0"
                    id="floatingPassword"
                    type="password"
                    name="oldPass"
                    placeholder=""
                    value={Rest.oldPass}
                    onChange={setRestPass}
                  />
                  <label htmlFor="floatingPassword">Old Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control shadow-0"
                    id="floatingPassword"
                    type="password"
                    name="newPass"
                    placeholder=""
                    value={Rest.newPass}
                    onChange={setRestPass}
                  />
                  <label htmlFor="floatingPassword">New Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control shadow-0"
                    id="floatingPassword"
                    type="password"
                    name="cnewPass"
                    placeholder="Password"
                    value={Rest.cnewPass}
                    onChange={setRestPass}
                  />
                  <label htmlFor="floatingPassword">Conform New Password</label>
                </div>
                <button className="btn btn-warning" type="submit" onClick={resetNow}>Change Password</button>
              </form>
            </div>
          </div>
        </div>
        {/* adding a user */}
        {/* adding a user */}
        {/* adding a user */}
        <div className="col-lg-8 mb-5">
          <div className="card">
            <div className="card-header">
              <h4 className="card-heading">add admin</h4>
            </div>
            <div className="card-body">
              <form method="POST" encType="multipart/form-data">
                <div className="form-floating mb-3">
                  <input
                    className="form-control shadow-0"
                    id="name"
                    name="name"
                    type="text"
                    value={User.name}
                    onChange={addAdmin}
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="dropdown-divider"></div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control shadow-0"
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="phone"
                    value={User.phone}
                    onChange={addAdmin}
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="floatingPassword">Phone</label>
                  <small>exp: 341-5403790</small>
                </div>
                <button className="btn btn-success shadow mb-3">
                  <input type="file" accept="image/*" name="photo"
                    onChange={(e) => {
                      console.log(e.target.files[0]);
                    }}
                  />
                </button>

                <div className="form-floating mb-3 d-flex align-items-center">
                  <input
                    className="form-control shadow-0"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={User.password}
                    onChange={addAdmin}
                    autoComplete="off"
                    required
                    ref={pass}
                  />

                  <label htmlFor="floatingPassword">Password</label>
                  <i className="fa fa-eye-slash active " onClick={hideOrvis} style={{ marginLeft: "-40px", fontSize: "20px", cursor: "pointer" }} aria-hidden="true"></i>
                </div>
                <div className="form-floating mb-3 d-flex align-items-center">
                  <input
                    className="form-control shadow-0"
                    id="cpassword"
                    name="cpassword"
                    type="password"
                    placeholder="cpassword"
                    value={User.cpassword}
                    onChange={addAdmin}
                    autoComplete="off"
                    required
                    ref={cpass}
                  />
                  <label htmlFor="floatingPassword">Conform Password</label>
                  <i className="fa fa-eye-slash active " style={{ marginLeft: "-40px", fontSize: "20px", cursor: "pointer" }} aria-hidden="true"></i>
                </div>

                <div>
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="btn btn-warning shadow-0"
                    value="Register User"
                    onClick={registerNewUser}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </dir>
      {/* active user */}
      <div className="col-lg-10 mb-4 " style={{ marginLeft: "5%", marginRight: "5%" }}>
        <div className="card card-table h-100">
          <div className="card-header">
            <h5 className="card-heading">Current Admins</h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-borderless table-hover mb-0">
                <thead className="light">
                  <tr>
                    <th>Name</th>
                    <th>IP Address</th>
                    <th>Device</th>

                    <th className="text-end">Status</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  <tr>
                    <td>
                      <span className="d-flex align-items-center">

                        <span className="d-inline-block">
                          <strong>Arslan</strong>

                        </span>
                      </span>
                    </td>
                    <td>17:9:88</td>
                    <td>Win 10</td>

                    <td className="text-end">
                      {/* <span className="btn btn-danger btn-sm text-white">
                                offline
                              </span> */}
                      <span className="btn btn-success btn-sm text-white">
                        Active
                      </span>
                    </td>

                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      <div className="col-lg-10 mb-5 " style={{ marginLeft: "5%" }}>
        <div className="card">
          <div className="card-header">
            <h4 className="card-heading">Enable Or Disable Candidate</h4>
          </div>
          <div className="card-body">
            <form method="POST">
              <div className="form-floating mb-3 d-flex">
                <input
                  className="form-control shadow-0"
                  id="name"

                  type="text"

                  onChange={(e) => { setCandidateId(e.target.value) }}
                  autoComplete="off"
                  required
                  placeholder=""
                />
                <button className="btn btn-warning btn-sm" style={{ marginLeft: "-100px" }} type="submit" id="btns" onClick={getCandidate}>Search Candidate</button>
                <label htmlFor="floatingInput">Please Enter Candidate ID</label>
              </div>






            </form>
            {
              CandidateData.map((item) => {
                return (
                  <>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-borderless table-hover mb-0">
                          <thead className="light">
                            <tr>
                              <th>Name</th>
                              <th>{item.status !== "Teacher" ? "Class Name" : "CNIC"}</th>
                              <th>{item.status !== "Teacher" ? "Roll Number" : "Education"}</th>
                              <th>Candidate</th>
                              <th className="text-end">Status</th>
                            </tr>
                          </thead>
                          <tbody className="align-middle">
                            <tr>
                              <td>
                                <span className="d-flex align-items-center">

                                  <span className="d-inline-block">
                                    <strong>{item.name}</strong>

                                  </span>
                                </span>
                              </td>
                              <td>{item.status !== "Teacher" ? item.classname : item.cnic}</td>
                              <td>
                                {item.status !== "Teacher" ? item.rollNumber : item.education}
                              </td>
                              <td>{item.status}</td>
                              <td className="text-end">
                                {
                                  <span class="form-check form-switch">
                                    <input class="form-check-input shadow-0" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                                      value={"i am "}
                                      checked={item.currentStatus === true ? true : false}
                                      onClick={onOff}
                                    />
                                  </span>

                                }




                              </td>

                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                )
              })

            }

          </div>
        </div>
      </div>
      <footer className="footer bg-white shadow align-self-end py-3 px-xl-5 w-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 text-center text-md-start fw-bold">
              <p className="mb-2 mb-md-0 fw-bold">School &copy; 2022</p>
            </div>
            <div className="col-md-6 text-center text-md-end text-gray-400">
              <p className="mb-0">Version 1.0</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Setting;
