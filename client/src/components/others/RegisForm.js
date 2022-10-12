import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
const RegisForm = () => {
  const [Status, setStatus] = useState("teacher")
  const [Admission, setAdmission] = useState({
    name: "",
    motherName: "",
    cnic: "",
    status: "",
    fatherName: "",
    phone: "",
    fee: "",
    address: "",
    dateBirth: ""

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
    const {
      name, motherName, cnic, status, fatherName, phone, fee, address, dateBirth
    } = Admission;

    if (!name || !motherName || !cnic || !status || !fatherName || !phone || !fee || !address || !dateBirth || cnic.length<13 || cnic.length>13 ) {
      return alert("Please fill each an every field correctly")
    }
    else {
      try {
        const res = await fetch("/admit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Admission),
        });

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
        return alert("Register successful")
        
      }
      if ((await res).status === 201) {
        return alert("Seems Like user already exist.")
      }

      } catch (error) {
        console.log(error);
      }
    }




  }



  return (
    <>
      <Header />
      <div className="py-2 m-2">
        <div class="card mb-4">
          <div class="card-header">
            <h4 class="card-heading">Add member</h4>
          </div>

          <div class="row p-4">
            <form method="POST">
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input class="form-control" name="name" value={Admission.name} type="text" onChange={setData} />
              </div>
              <div class="mb-3">
                <label class="form-label">Mother Name</label>
                <input class="form-control" name="motherName" type="text" value={Admission.motherName} onChange={setData} />
              </div>
              <div class="mb-3">
                <label htmlFor="cnic" class="form-label"> CNIC</label>
                <input class="form-control" name="cnic" type="tel" value={Admission.cnic} onChange={setData} pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"/>
                <small>35103-3313331-7</small>
              </div>
              <div class="mb-3">
                <input
                  type="file"
                  accept="image"
                  className="btn btn-warning shadow"
                />
              </div>
              <select
                className="form-select d-inline-block w-auto me-3 mb-1 mb-lg-0"

                id="Status" value={Status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option >Pleaase Select an opction</option>
                <option value={"teacher"}>Teachers</option>
                <option value={"student"}>Students</option>
              </select>
              <div class="mb-3">
                <label class="form-label">Father Name</label>
                <input class="form-control" onChange={setData} type="text" name="fatherName" value={Admission.fatherName} />
              </div>
              <div class="mb-3">
                <label class="form-label">Phone</label>
                <input class="form-control" onChange={setData} type="Number" name="phone" value={Admission.phone} />
              </div>
              <div class="mb-3">
                <label class="form-label">Fee / Sellery </label>
                <input class="form-control" onChange={setData} type="Number" name="fee" value={Admission.fee} />

                <div class="mb-3">
                  <label class="form-label">Address</label>
                  <input class="form-control" onChange={setData} type="text" name="address" value={Admission.address} />
                </div>
                <div class="mb-3">
                  <label class="form-label">Date of Birth</label>
                  <input class="form-control" name="dateBirth" type="date" onChange={setData} />
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
    </>
  );
};

export default RegisForm;
