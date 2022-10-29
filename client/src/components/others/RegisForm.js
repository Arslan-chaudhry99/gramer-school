import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from "react";
const RegisForm = () => {
  const variCnic = /^-[0-9]/g
  const [Status, setStatus] = useState("Teacher")
 

  const [Admission, setAdmission] = useState({
    name: "",
    motherName: "",
    cnic: "",
    status: "",
    fatherName: "",
    phone: "",
    fee: "",
    address: "",
    dateBirth: "",
    classname: 0,
    rollNumber: 0,
    education: "",
    currentStatus: true

  });



  let name;
  let value;
  const setData = (e) => {
    e.preventDefault();

    name = e.target.name;
    value = e.target.value;

    setAdmission({ ...Admission, [name]: value })

  }
  useEffect(() => {
    Admission.status = Status

  }, [Status])

  const registerCandi = async (e) => {
    e.preventDefault();
    const id = toast.loading("Please wait...")
    const {
      name, motherName, cnic, status, fatherName, phone, fee, address, dateBirth, classname, rollNumber, education, currentStatus
    } = Admission;

    if (!name || !motherName || !cnic || !status || !fatherName || !phone || !fee || !address || !dateBirth) {
     return toast.update(id, { render: "Please fill each an every field correctly", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true },);
      
    }
    if (cnic.length < 13 || cnic.length > 13) {
     return toast.update(id, { render: "CNIC no correct please enter cnic without slah or space and cnic must have 13 digits", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true },);
  
    }
    else {
      try {

        const res = await fetch("/admit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Admission),
          credentials: "include"
        });
        if ((await res).status === 401) {
         return toast.update(id, { render: "This Roll Number is not available please try another.", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true },);
          
        }
         if ((await res).status === 200) {
        
          setAdmission({
            name: "",
            motherName: "",
            cnic: "",
            status: "",
            fatherName: "",
            phone: "",
            fee: "",
            address: "",
            dateBirth: ""
          })
          return toast.update(id, { render: "Register successful", type: "success", isLoading: false, autoClose: 5000, closeOnClick: true },);
          

        }
      if ((await res).status === 201) {
       return   toast.update(id, { render: "Seems Like user already exist.", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true },);
          
        }
        if ((await res).status === 400) {

          return window.location.reload()
        }

      } catch (error) {

        return alert("Please try again.")
      }
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
      <div className="py-2 m-2" >
        <div className="card mb-4">
          <div className="card-header">
            <h4 class="card-heading">Add member</h4>
          </div>

          <div className="row p-4">
            <form method="POST" encType="multipart/form-data">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input className="form-control" name="name" value={Admission.name} type="text" onChange={setData} />
              </div>
              <div className="mb-3">
                <label class="form-label">Mother Name</label>
                <input class="form-control" name="motherName" type="text" value={Admission.motherName} onChange={setData} />
              </div>
              <div className="mb-3">
                <label htmlFor="cnic" className="form-label"> CNIC</label>
                <input className="form-control" name="cnic" type="text" value={Admission.cnic} onChange={setData} pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}" />
                <small>35103-3313331-7</small>
              </div>
              <div className="mb-3">
                <input
                  type="file"
                  accept="image"
                  alt="image"
                  name="image"
                />
              </div>
              <select
                className="form-select d-inline-block w-auto me-3 mb-1 mb-lg-0"

                id="Status" value={Status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option >Pleaase Select an opction</option>
                <option value={"Teacher"}>Teachers</option>
                <option value={"Student"}>Students</option>
              </select>
              <div className="mb-3">
                <label className="form-label">Father Name</label>
                <input className="form-control" onChange={setData} type="text" name="fatherName" value={Admission.fatherName} />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input className="form-control" onChange={setData} type="Number" name="phone" value={Admission.phone} />
              </div>
              {
                Status === "Student" ?
                  <div className="mb-3">
                    <label className="form-label">Class</label>
                    <input className="form-control" onChange={setData} type="Number" name="classname" />
                  </div> : ""
              }
              {
                Status === "Student" ?
                  <div className="mb-3">
                    <label className="form-label">Roll Number</label>
                    <input className="form-control" onChange={setData} type="Number" name="rollNumber" value={Admission.rollNumber} />
                  </div> : <div className="mb-3">
                    <label className="form-label">Education</label>
                    <input className="form-control" onChange={setData} type="text" name="education" value={Admission.education} />
                  </div>
              }

              <div className="mb-3">
                <label className="form-label">{Status !== "Teacher" ? "Fee" : "Sellery"} </label>
                <input className="form-control" onChange={setData} type="Number" name="fee" value={Admission.fee} />

                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input className="form-control" onChange={setData} type="text" name="address" value={Admission.address} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Date of Birth</label>
                  <input className="form-control" name="dateBirth" type="date" onChange={setData} />
                </div>
              </div>

              <button
                className="btn btn-warning"
                type="submit"
                style={{ float: "right", boxShadow: "none" }}
                onClick={registerCandi}
              >
                ADD NOW!
              </button>

            </form>
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

export default RegisForm;
