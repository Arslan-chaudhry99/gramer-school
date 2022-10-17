import React from "react";
import Header from "./Header";
import { useState, useEffect, useRef } from "react";
const Setting = () => {
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

    const { name, phone, password, cpassword } = User;
    if (!name || !phone || !password || !cpassword) {
      return alert("Please fill each and every field");
    }
    if (password !== cpassword) {
      return alert("Conform password not the same.");
    }

    if (!password.match(passw)) {
      return alert(
        "password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
      );
    }
    if (!name.match(userNameVarify)) {
      return alert("Username must start with Alphanumeric");
    } else {
      try {
        const res = await fetch("/signup", {

          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(User),
        });

        if ((await res).status === 422) {

          return alert("Please try another username");
        }
        if ((await res).status === 200) {
          setUser({
            name: "",
            phone: "",
            password: "",
            cpassword: "",
          })
          return alert("User register successfuly");
        }
        if ((await res).status === 422) {

          return alert("Error 500. please try again later");
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
    console.log(Rest);
    const { name, oldPass, newPass, cnewPass } = Rest
    if (!name || !oldPass || !newPass || !cnewPass) {
      return alert("Please fill out each and every field in order to reset your password.")
    }
    if (newPass !== cnewPass) {
      return alert("Conform password is not same")
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
          return alert("User not found.")
        }
        if ((await res).status === 402) {
          return alert("Invalid old password")
        }
        if ((await res).status === 203) {
          setRest({
            name: "",
            oldPass: "",
            newPass: "",
            cnewPass: ""
          })
          return alert("Password updated success")
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <>
      {/* <Header /> */}
      <dir className="row">
        <div className="col-lg-4 mb-5">
          <div className="card">
            <div className="card-header">
              <h4 className="card-heading">Reset password</h4>
            </div>
            <div className="card-body">
              <form method="POST">
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
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
                    className="form-control"
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
                    className="form-control"
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
                    className="form-control"
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
        <div className="col-lg-7 mb-5">
          <div className="card">
            <div className="card-header">
              <h4 className="card-heading">add admin</h4>
            </div>
            <div className="card-body">
              <form method="POST">
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
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
                    className="form-control"
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
                <div className="form-floating mb-3 d-flex align-items-center">
                  <input
                    className="form-control"
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
                    className="form-control"
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
                    className="btn btn-warning"
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
                    <th>Location</th>
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
                    <td>Laahore</td>
                    <td className="text-end">
                      {/* <span className="btn btn-danger btn-sm text-white">
                                offline
                              </span> */}
                      <span className="btn btn-success btn-sm text-white">
                        Online
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
                  name="CandidateId"
                  type="text"
                  value={""}
                  // onChange={}
                  autoComplete="off"
                  required
                  placeholder=""
                />
                <button className="btn btn-warning btn-sm" style={{ marginLeft: "-100px" }} type="submit">Search Candidate</button>
                <label htmlFor="floatingInput">Please Enter Candidate ID</label>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-borderless table-hover mb-0">
                    <thead className="light">
                      <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Roll Number</th>
                        
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
                        
                        <td>
                          <span class="form-check form-switch" >
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />

                          </span>
                        </td>

                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>





            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
