import React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router";

const Login = () => {
  
  const navigate = useNavigate();
  const [Auth, setAuth] = useState({ name: "", password: "" });
  let name;
  let value;
  const setChanges = (e) => {
    name = e.target.name;
    value = e.target.value;
    setAuth({ ...Auth, [name]: value });
  };
  // signInNow
  const signInNow = async (e) => {
    e.preventDefault();
    const { name, password } = Auth;
    if (!name || !password) {
      return alert("Invalid username or password");
    }
    const res = fetch("/signin", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Auth),
      credentials:"include"
    });
    console.log( (await res).status);
    if ((await res).status === 201) {
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 2000);
      return alert("Login successfuly");
      
    }
    if (!(await res).status === 404 || 400) {
      return  alert("Invalid username or password");
      
    }
  };
  
  
  
  return (
    <>
      <div className="page-holder align-items-center py-4 bg-gray-100 vh-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 px-lg-4">
              <div className="card">
                <div className="card-header px-lg-5">
                  <div className="card-heading text-primary">
                  Standard Grammar School
                  </div>
                </div>
                <div className="card-body p-lg-5">
                  <h3 className="mb-4">Hi, Sir Usman! 👋👋</h3>
                  <p className="text-muted text-sm mb-5">
                    Enter Your Password to login.
                  </p>
                  <form id="loginForm" method="POST">
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="floatingInput"
                        type="email"
                        name="name"
                        placeholder="name@example.com"
                        value={Auth.name}
                        onChange={setChanges}
                      />
                      <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="floatingPassword"
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="off"
                        value={Auth.password}
                        onChange={setChanges}
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button
                      className="btn btn-primary btn-lg"
                      type="submit"
                      onClick={signInNow}
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <div className="card-footer px-lg-5 py-lg-4"></div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 ms-xl-auto px-lg-4 text-center text-primary mt-5">
              <img
                className="img-fluid mb-4"
                width="100"
                src="/usman2.PNG"
                alt=""
              />
              <h1 className="mb-4">Engr Usman Ali</h1>
              <p className="lead text-muted">Welcome to the Standard Grammar School</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
