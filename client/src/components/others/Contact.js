import React from "react";
import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/Context";
import { NavLink } from "react-router-dom";
import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getDataTriger } from "../../store/SchoolData";
import STATUSES from "../../store/LodingObject";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [Schoolfilter, setSchoolfilter] = useState('Student')
    const [ClsFilter, setClsFilter] = useState(1)
    const { data, status } = useSelector((State) => State.datasets)
    console.log(data);
    const initialState = {
        query: Schoolfilter,
        className: ClsFilter,
        offSet: 0
    }
    useEffect(() => {

        dispatch(getDataTriger(initialState))
    }, [Schoolfilter, ClsFilter]);


    // set status
    if (status === STATUSES.LODING) {

    }


    // setSchoolfilter
    const mainFilter = (e) => {
        setSchoolfilter(e.target.value)

    }
    const mainClassFilter = (e) => {
        setClsFilter(Number(e.target.value))
    }
    return (
        <>

            <div className="page-holder bg-gray-100">
                <div className="container-fluid px-lg-4 px-xl-5">
                    {/* <!-- Page Header--> */}
                    <div className="page-header d-flex justify-content-between align-items-center">
                        <h1 className="page-heading mb-0">All About School</h1>
                    </div>

                    <section className="mb-5">
                        <div className="card mb-5">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <select className="form-select d-inline-block w-auto me-3 mb-1 mb-lg-0" name="sort" id="sort"
                                            onChange={mainFilter}>
                                            <option value="Student">Students</option>
                                            <option value="Teacher">Teachers</option>
                                            <option value="disable">Disabled</option>
                                        </select>
                                        {
                                            Schoolfilter === "Student" ? <select className="form-select d-inline-block w-auto mt-3  mb-lg-0" name="sort" id="sort"
                                                onChange={mainClassFilter}>
                                                <option value="1">1st Class</option>
                                                <option value="2">2st Class</option>
                                                <option value="3">3rd Class</option>
                                                <option value="4">4th Class</option>
                                                <option value="5">5th Class</option>
                                                <option value="6">6th Class</option>
                                                <option value="7">7th Class</option>
                                                <option value="8">8th Class</option>
                                                <option value="9">9th Class</option>
                                                <option value="10">10th Class</option>
                                                <option value="11">11th Class</option>
                                                <option value="12">12th Class</option>
                                            </select> : ""
                                        } </div>

                                </div>
                            </div>
                        </div>
                        {/* student section */}
                        <section className="mb-3 mb-lg-5">
                            <div className="row mb-3">
                                {
                                    data.map((items) => {

                                        return (
                                            <>

                                                <div className="col-md-6 col-lg-3">
                                                    <div className="card mb-4">
                                                        <div className="card-body "
                                                            style={
                                                                { cursor: "pointer" }
                                                            }>
                                                            <div className="  "
                                                                style={
                                                                    {
                                                                        position: "absolute",
                                                                        top: "1rem",
                                                                        right: "1rem",
                                                                        cursor: "pointer"
                                                                    }
                                                                }>

                                                                <NavLink id="RouterNavLink"
                                                                    to={
                                                                        "/Profile/" + items._id
                                                                    }>
                                                                    <img className="avatar p-1 me-2 object-fit-cover"
                                                                        style={{ objectPosition: "top" }}
                                                                        src={
                                                                            items.reqFiles[0]
                                                                        }
                                                                        alt="img"></img>
                                                                </NavLink>
                                                            </div>

                                                            <h6>{
                                                                items.name
                                                            }</h6>
                                                            <h3 className="text-info"
                                                                style={
                                                                    { inlineSize: "min-content" }
                                                                }>
                                                                {
                                                                    items.status
                                                                } </h3>
                                                            {
                                                                items.status === "Student" ? <p className="text-muted text-sm mb-0">
                                                                    {
                                                                        `Class: ${items.classname
                                                                        }`
                                                                    }</p> : <p className="text-muted text-sm mb-0">
                                                                    {
                                                                        `${items.education
                                                                        }`
                                                                    }</p>
                                                            }
                                                            {
                                                                items.status === "Student" ? <p className="text-muted text-sm mb-0">
                                                                    {
                                                                        `RollNo: ${items.rollNumber
                                                                        }`
                                                                    }</p> : ""
                                                            }
                                                            {
                                                                items.currentStatus === true ? <p className="text-success">Active</p> : <p className="text-danger">Blocked</p>
                                                            } </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                } </div>
                            <div className="row mb-3"></div>
                        </section>
                    </section>
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
            <ToastContainer />
        </>
    );
};

export default Contact;
