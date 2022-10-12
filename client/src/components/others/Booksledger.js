import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
const Booksledger = () => {
  const [Ledger, setLedger] = useState({
    name: "", className: "", rollNumber: "", amount: "", details:""
  })
  let name;
  let value;
  const setLedgerData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setLedger({ ...Ledger, [name]: value })
  }
  const addNewLedger = async (e) => {
    e.preventDefault()
    const { name, className, rollNumber, amount , details} = Ledger
    if (!name || !className || !rollNumber || !amount || !details) {
      return alert("Please fill each and every field and not that class name, roll number and amout must be a number")
    }

    else {

      try {
        const res = fetch("/registerLedger", {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Ledger),
        });
        if ((await res).status === 200) {
          setLedger({ name: "", className: "", rollNumber: "", amount: "" })
          return alert("New student ledger created successfully")

        }
      } catch (error) {
        console.log(error);
      }
    }
  }


  return (
    <>
      <Header />

      <div
        class="collapse"
        id="collapseMedia"

      >
        <div class="col-lg-11  p-4 card  mb-3" style={{ marginLeft: "5%" }}>
          <form>
            <div class="mb-3">
              <label class="form-label">Name*</label>
              <input class="form-control" name="name" value={Ledger.name} type="text" onChange={setLedgerData} required />
            </div>
            <div class="mb-3">
              <label class="form-label">Class*</label>
              <input class="form-control" name="className" value={Ledger.className} type="Number" min={"1"} onChange={setLedgerData} required />
            </div>
            <div class="mb-3">
              <label class="form-label">Roll Number*</label>
              <input class="form-control" name="rollNumber" value={Ledger.rollNumber} type="Number" min={"1"} onChange={setLedgerData} required />
            </div>
            <div class="mb-3">
              <label class="form-label">Payable Amount*</label>
              <input class="form-control" name="amount" value={Ledger.amount} type="Number" min={"1"} onChange={setLedgerData}  required/>

            </div>
            <div class="mb-3">
              <label class="form-label">Details*</label>
              <input class="form-control" name="details" type="text" value={Ledger.details} onChange={setLedgerData}  required />

            </div>
            <div>
              <button
                type="submit"
                className="btn btn-warning"
                onClick={addNewLedger}
                style={{ float: "right", boxShadow: "none" }}
              >
                ADD NOW!
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="col-lg-11 "
        style={{ marginLeft: "5%" }}
      >
        <div className="card card-table h-100">
          <div
            className="card-header d-flex"
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <h5 className="card-heading">Students Ledger </h5>
            <span
              className="bg-primary rounded d-flex justify-content-center align-items-center"
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
              data-bs-toggle="collapse"
              href="#collapseMedia"
              role="button"
              aria-expanded="false"
              aria-controls="collapseMedia"
            >
              <i class="fa fa-plus text-white"> </i>
            </span>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-borderless table-hover mb-0">
                <thead className="light">
                  <tr>
                    <th>Name</th>
                    <th>Roll NO</th>

                    <th>PayAble</th>
                    <th>Remaining</th>
                    <th>Details</th>
                    <th className="text-end">Status*</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  <tr>
                    <td>
                      <span className="d-flex align-items-center">

                        <span className="d-inline-block">
                          <strong>Arslan</strong>
                          <br />
                          <span className="text-muted text-sm">4th Class</span>
                        </span>
                      </span>
                    </td>
                    <td>14</td>

                    <td className="text-danger " style={{ fontWeight: "900" }}>
                      Rs 1550 /-
                    </td>
                    <td>N/A</td>
                    <td>books</td>
                    <td className="text-end">
                      {/* <span className="btn btn-success btn-sm text-white">
                                Paid
                              </span> */}
                      <button className="btn btn-info btn-sm" onClick={addNewLedger} >Pay Now</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booksledger;
