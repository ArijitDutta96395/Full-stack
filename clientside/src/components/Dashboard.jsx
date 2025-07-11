/*import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  
  const handleLogout = async () => {
    try {
      let response = await axios.get("http://localhost:8000/auth/logout");
      if (response.data.status) {
        localStorage.removeItem("valid");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="container-fluid bg-white">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark border-end">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link to={"/dashboard"} className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"></Link>
            <span className="fs-5 fw-bolder d-none d-sm-inline text-primary">SNEHA CHOURASIA</span>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
              <li className="w-100">
                <Link to={"/dashboard"} className="nav-link text-white px-0 align-middle">
                  <i className="fs-4 bi-speedometer2 ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="w-100">
                <Link to={"/dashboard/employee"} className="nav-link text-white px-0 align-middle">
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Manage Employees</span>
                </Link>
              </li>
              <li className="w-100">
                <Link to={"/dashboard/category"} className="nav-link text-white px-0 align-middle">
                  <i className="fs-4 bi-speedometer2 ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Category</span>
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/profile"} className="nav-link text-white px-0 align-middle">
                  <i className="fs-4 bi-person ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Profile</span>
                </Link>
              </li>
              <li className="w-100" onClick={handleLogout}>
                <Link to={"/logout"} className="nav-link text-danger px-0 align-middle">
                  <i className="fs-4 bi-power ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col p-0 m-0">
          <div className="p-4 d-flex justify-content-center shadow bg-white mb-3">
            <h4 className="text-primary">EMPLOYEE MANAGEMENT SYSTEM</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;*/
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  
  const handleLogout = async () => {
    try {
      let response = await axios.get("http://localhost:8000/auth/logout");
      if (response.data.status) {
        localStorage.removeItem("valid");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="container-fluid" style={{ background: "linear-gradient(to right, #E3F2FD, #FFFFFF)" }}>
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark border-end">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link to={"/dashboard"} className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"></Link>
            <span className="fs-5 fw-bolder d-none d-sm-inline text-white">SNEHA SINGH</span>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
              <li className="w-100">
                <Link to={"/dashboard"} className="nav-link text-white px-0 align-middle">
                  <i className="fs-4 bi-speedometer2 ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="w-100">
                <Link to={"/dashboard/employee"} className="nav-link text-white px-0 align-middle">
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Manage Employees</span>
                </Link>
              </li>
              <li className="w-100">
                <Link to={"/dashboard/category"} className="nav-link text-white px-0 align-middle">
                  <i className="fs-4 bi-speedometer2 ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Category</span>
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/profile"} className="nav-link text-white px-0 align-middle">
                  <i className="fs-4 bi-person ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Profile</span>
                </Link>
              </li>
              <li className="w-100" onClick={handleLogout}>
                <Link to={"/logout"} className="nav-link text-danger px-0 align-middle">
                  <i className="fs-4 bi-power ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col p-0 m-0">
          <div className="p-4 d-flex justify-content-center shadow mb-3" style={{ background: "linear-gradient(to right, #BBDEFB, #E3F2FD)" }}>
            <h4 className="text-dark fw-bold" style={{ color: "#00008B" }}>EMPLOYEE MANAGEMENT SYSTEM</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;