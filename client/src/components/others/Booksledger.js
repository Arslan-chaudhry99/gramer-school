import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../Context/Context";
import { Link } from "react-router-dom"

const Booksledger = () => {
  const [hisFilter, sethisFilter] = useState(1)
  const { ledgerDataVal, ftechLedger } = useContext(AppContext)
  const [regData, setregData] = useState([])
  //navigation
  const navigate = useNavigate()
  const [Ledger, setLedger] = useState({
    name: "", className: "", rollNumber: "", amount: "", details: "", remaning: 0
  })
  let name;
  let value;
  console.log(Ledger);
  const setLedgerData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setLedger({ ...Ledger, [name]: value })
  }
  const addNewLedger = async (e) => {
    e.preventDefault()
    const { name, className, rollNumber, amount, details } = Ledger
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

          setLedger({ name: "", className: "", rollNumber: "", amount: "", details: "" })
          window.location.reload(true);
          return alert("New student ledger created successfully")

        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    ftechLedger()
  }, [])
  // filtring data
  const hisFilterArr = ledgerDataVal.filter((item) => {
    if (hisFilter === 1) {
      return item.remaning !== 0
    }
    else if (hisFilter === 0) {
      return item.remaning === 0
    }

  })


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
              <input class="form-control" name="amount" value={Ledger.amount} type="Number" min={"1"} onChange={setLedgerData} required />

            </div>
            <div class="mb-3">
              <label class="form-label">Details*</label>
              <input class="form-control" name="details" type="text" value={Ledger.details} onChange={setLedgerData} required />

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
          <div className="dataTable-top">
            <div className="dataTable-dropdown">
              <span className="me-2" id="categoryBulkAction">
                <select
                  className="form-select form-select-sm d-inline w-auto"
                  name="categoryBulkAction"
                >
                  <option onClick={() => { sethisFilter(1) }}>Active</option>
                  <option onClick={() => { sethisFilter(0) }}>History</option>
                </select>
                <button className="btn btn-sm btn-outline-primary align-top "
                  data-bs-toggle="collapse"
                  href="#collapseMedia"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseMedia"
                  style={{ marginLeft: "5px" }}
                >Add Record <i class="fa fa-plus text-white"></i></button>
              </span>

            </div>
            <div class="dataTable-search">
              <input
                class="dataTable-input form-control form-control-sm"
                placeholder="Search..."
                type="text"
              />
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-borderless table-hover mb-0" >
                <thead className="light">
                  <tr>
                    <th>Name</th>
                    <th>Roll NO</th>

                    <th>PayAble</th>
                    <th>Remaining</th>
                    <th>Details</th>
                    <th className="text-end">Status*</th>
                    <th className="text-end">Pay Now!</th>
                  </tr>
                </thead>
                {
                  hisFilterArr.length > 0 ?
                    hisFilterArr.map((data) => {

                      return (
                        <>

                          <tbody className="align-middle " style={{ cursor: "pointer" }} >
                            <tr>
                              <td>
                                <span className="d-flex align-items-center">

                                  <span className="d-inline-block">
                                    <strong>{data.name}</strong>

                                    <br />
                                    <span className="text-muted text-sm">{`${data.className}th Class`} </span>
                                  </span>
                                </span>
                              </td>
                              <td>{data.rollNumber}</td>

                              <td className="text-danger " style={{ fontWeight: "900" }}>
                                Rs {data.amount} /-
                              </td>
                              <td>{data.remaning}</td>
                              <td>{data.details}</td>
                              <td className="text-end">
                                {
                                  data.remaning > 0 ?

                                    <span class="badge me-2 badge-danger-light">Unpaid</span> : <span class="badge me-2 badge-success-light">Paid</span>
                                }
                              </td>
                              <td className="text-end">
                                {
                                  data.remaning > 0 ?
                                    <Link to={"/more-details/" + data._id}>
                                      <span class="btn btn-sm btn-warning">PayNow!</span></Link> :
                                    <Link to={"/more-details/" + data._id}>
                                      <span class="btn btn-sm btn-success">Paid</span>
                                    </Link>
                                }
                              </td>

                            </tr>

                          </tbody>


                        </>
                      )
                    }) : <div className=" d-flex justify-content-center align-items-center bg-danger col-lg-11 text-white">No Data Found!</div>
                }

              </table>
            </div>
          </div>
        </div>
      </div>






    </>
  );
};

export default Booksledger;
