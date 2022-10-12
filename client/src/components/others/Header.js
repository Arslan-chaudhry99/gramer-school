import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
const Header = () => {
  const navigate = useNavigate();
  const main = () => {
    navigate("/Home");
  };
  const settingUser=()=>{
    navigate("/setting");
  }
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg px-4 py-2bg-white ">
          <li className="nav-item dropdown " style={{ listStyle: "none" }}>
            <a
              className="sidebar-toggler text-gray-500 me-4 me-lg-5 lead "
              id="userInfo"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-align-left  "></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-start dropdown-menu-animated"
              aria-labelledby="userInfo"
            >
              <Link to="/Home">
                <a className="dropdown-item ">Home</a>
              </Link>
            </div>
          </li>

          <a
            className="navbar-brand fw-bold text-uppercase text-base "
            onClick={main}
            style={{ cursor: "pointer" }}
          >
            <span className="d-none d-brand-partial">Usman's </span>
            <span className="d-none d-sm-inline">Dashboard</span>
          </a>
          <ul className="ms-auto d-flex align-items-center list-unstyled mb-0">
            <li className="nav-item dropdown">
              <form className="ms-auto me-4 d-none d-lg-block" id="searchForm">
                <div className="input-group input-group-sm input-group-navbar">
                  <input
                    className="form-control"
                    id="searchInput"
                    type="search"
                    placeholder="Search"
                  />
                  <button className="btn" type="button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </form>
            </li>

            <li className="nav-item dropdown ms-auto">
              <a
                className="nav-link pe-0 "
                id="userInfo"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="avatar p-1"
                  src="dist/img/avatar-6.jpg"
                  alt="Jason Doe"
                  style={{ cursor: "pointer" }}
                />
              </a>
              <div
                className="dropdown-menu dropdown-menu-end dropdown-menu-animated"
                aria-labelledby="userInfo"
              >
                <div className="dropdown-header text-gray-700">
                  <h6 className="text-uppercase font-weight-bold">Usman</h6>
                  <small>Principal</small>
                </div>

                <div className="dropdown-divider"></div>
                <a className="dropdown-item d-flex" style={{alignItems:"center", cursor:"pointer"}} onClick={settingUser}>
                  <i
                    class="fa fa-cog "
                    aria-hidden="true"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <span style={{marginLeft:"10px"}} >Setting</span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-danger" style={{cursor:"pointer"}}>
                Logout</a>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
