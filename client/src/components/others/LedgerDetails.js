import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { AppContext } from '../Context/Context'
import { useNavigate } from 'react-router'
const LedgerDetails = () => {
    const navigate = useNavigate()
    const { ledgerDataVal, ftechLedger } = useContext(AppContext)
    let { id } = useParams()
    // filtring data start
    const currentData = ledgerDataVal.filter((objs) => {
        return objs._id === id
    })
    useEffect(() => {
        ftechLedger()
    }, [])
    // payment request
    // payments
    const [Payment, setPayment] = useState({ payAmount: 0, ledger: id, payStatus: false, date: "" })
    let ledgerName;
    let ledgerValues
    const setQuerys = (e) => {
        e.preventDefault()
        ledgerName = e.target.name;
        ledgerValues = e.target.value;
        setPayment({ ...Payment, [ledgerName]: ledgerValues })
    }
    console.log(ledgerDataVal);

    const payNow = async (e) => {
        e.preventDefault()

        const { payAmount, ledger, payStatus } = Payment
        console.log(payStatus);
        if (!payAmount || !ledger) {
            return alert("Please fill out the amount or check internet connection")
        }
        if (currentData[0].remaning === 0) {
            return alert("No amount remains to pay")
        }
        if (payAmount > currentData[0].remaning) {
            return alert("Payment amount is greate than payable amount")
        }
        else {
            try {
                const res = fetch("/paymentRequest", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(Payment),
                })
                if ((await res).status === 201) {
                    window.location.reload();
                    return alert("Payment done some remains")
                }

            } catch (error) {
                console.log(error);
            }
        }

    }
    const deleteLedger = async (e) => {
        e.preventDefault()
        try {
            let sure = window.confirm("Are you sure to delete?");
            let deleteData = { item: currentData[0]._id }
            if (sure) {
                const res = fetch("/deleteLedger", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(deleteData),
                })
                if ((await res).status === 200) {
                    window.location.reload();
                    return alert("Item deleted successfuly")
                }
            }
        } catch (error) {
            return alert("Please try agin later")
        }

    }

    const goBack = () => {
        navigate("/Books-ledger")
    }

    return (
        <>
            {
                currentData.length > 0 ? <div>

                    {
                        currentData.map((date, index) => {
                            return (<>
                            
                                <span className="card mb-4 container mt-4" key={index}>
                                    <div className="card-header d-flex align-items-center ">
                                        <i className="fa fa-arrow-left btn btn-sm btn-warning " style={{ marginRight: "10px" }} aria-hidden="true" onClick={goBack}></i>
                                        <h4 className="card-heading">Pay Now!</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="mb-4">
                                                    <label className="form-label">Name</label>
                                                    <span className="form-control">{date.name}</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3">
                                                <div className="mb-4">
                                                    <label className="form-label">Class Name</label>
                                                    <span className='form-control'>{date.className}</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-4">
                                                <div className="mb-4">
                                                    <label className="form-label">Roll Number</label>
                                                    <span className='form-control'>{date.rollNumber}</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-6">
                                                <div className="mb-4">
                                                    <label className="form-label">Payable Amount</label>
                                                    <span className='form-control'>{date.amount}</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-6">
                                                <div className="mb-4">
                                                    <label className="form-label">Remaining Amount</label>
                                                    <span className='form-control'>{date.remaning}</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-6">
                                                <div className="mb-4">
                                                    <label className="form-label">Starting Date</label>
                                                    <span className='form-control'>{date.date}</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-6">
                                                <div className="mb-4">
                                                    <label className="form-label">End Date</label>
                                                    <span className='form-control'>{date.endDate ? date.endDate : "N/A"}</span>
                                                </div>
                                            </div>


                                            <div className="col-md-12 mb-3">
                                                <div className="mb-0">
                                                    <label className="form-label">Details</label>
                                                    <textarea className="form-control" rows="1"
                                                        placeholder="Details">
                                                        {date.details}
                                                    </textarea>
                                                </div>
                                            </div>



                                        </div>
                                        {date.remaning !== 0 ? <form method='POST'>
                                            <div className="col-sm-10 col-md-4">
                                                <div className="mb-4">
                                                    <label className="form-label">Pay Now!</label>
                                                    <input className="form-control" type="text" placeholder="Please Enter the amount" name="payAmount" onChange={setQuerys} />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="form-label">Current Date</label>
                                                    <input className="form-control" type="date" name="date" onChange={setQuerys} />
                                                </div>
                                            </div>
                                            {<button className="btn btn-warning shadow" type="submit" onClick={payNow}>Pay Now!</button>}

                                        </form> :
                                            <span className='d-flex'>
                                                <button className="btn btn-info shadow " style={{ marginRight: "10px" }}><i className="fa fa-history" aria-hidden="true"></i>
                                                    History</button>
                                                <form method='POST' >
                                                    <button className="btn btn-danger shadow " type="submit" onClick={deleteLedger} ><i className="fa fa-trash" aria-hidden="true"></i></button>
                                                </form></span>}
                                    </div>

                                </span>
                            </>
                            )
                        })
                    }
                </div> : <div>
                    <h1>Eoror 404 content not found</h1>
                    <span className='btn btn-info' onClick={goBack}>Go Back</span>
                </div>
            }



        </>
    )
}

export default LedgerDetails