import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
const Header = () => {
  const navigate = useNavigate();
  const main = () => {
    navigate("/");
  };
  const settingUser = () => {
    navigate("/setting");
  }

  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg px-4 py-2bg-white ">
          <li className="nav-item dropdown " style={{ listStyle: "none" }}>
            <span
              className="sidebar-toggler text-gray-500 me-4 me-lg-5 lead "
              id="userInfo"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-align-left  "></i>
            </span>
            <div
              className="dropdown-menu dropdown-menu-start dropdown-menu-animated"
              aria-labelledby="userInfo"
            >
              <NavLink to="/">
                <span className="dropdown-item ">Home</span>
              </NavLink>
            </div>
          </li>

          <span
            className="navbar-brand fw-bold text-uppercase text-base "
            onClick={main}
            style={{ cursor: "pointer" }}
          >
            <span className="d-none d-brand-partial">Standard Grammar School</span>
            <span className="d-none d-sm-inline"></span>
          </span>
          <ul className="ms-auto d-flex align-items-center list-unstyled mb-0">
            <li className="nav-item dropdown">

            </li>

            <li className="nav-item dropdown ms-auto">
              <span
                className="nav-link pe-0 "
                id="userInfo"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="avatar p-1"
                  src="/usman2.PNG"
                  alt="img"
                  style={{ cursor: "pointer", objectFit: "contain" }}
                />
              </span>
              <div
                className="dropdown-menu dropdown-menu-end dropdown-menu-animated"
                aria-labelledby="userInfo"
              >
                <div className="dropdown-header text-gray-700">
                  <h6 className="text-uppercase font-weight-bold">Usman</h6>
                  <small>Principal</small>
                </div>

                <div className="dropdown-divider"></div>
                <span className="dropdown-item d-flex" style={{ alignItems: "center", cursor: "pointer" }} onClick={settingUser}>
                  <i
                    className="fa fa-cog "
                    aria-hidden="true"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <span style={{ marginLeft: "10px" }} >Setting</span>
                </span>
                <div className="dropdown-divider"></div>
                <NavLink to="/logout">
                  <span className="dropdown-item text-danger" style={{ cursor: "pointer" }}>
                    Logout
                  </span>
                </NavLink>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
