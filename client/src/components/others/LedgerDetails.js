import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { AppContext } from '../Context/Context'

const LedgerDetails = () => {
    const { ledgerDataVal, ftechLedger } = useContext(AppContext)
    let { id } = useParams()
    // payments
    const [Payment, setPayment] = useState({ payAmount: 0, ledger: id })
    let ledgerName;
    let ledgerValues
    const setQuerys = (e) => {
        e.preventDefault()
        ledgerName = e.target.name;
        ledgerValues = e.target.value;
        setPayment({ ...Payment, [ledgerName]: ledgerValues })
    }

    // filtring data start
    const currentData = ledgerDataVal.filter((objs) => {
        return objs._id === id
    })
    useEffect(() => {
        ftechLedger()
    }, [])
    // payment request
    const payNow = async (e) => {
        e.preventDefault()
        const { payAmount, ledger } = Payment
        console.log(payAmount, id);
        if (!payAmount || !ledger) {
            return alert("Please fill out the amount or check internet connection")
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
                if ((await res).status === 401) {
                   return alert('Your payment amount is greater than or less than your payable amount')
                }
                if ((await res).status === 402) {
                   return alert('No amount remains to pay.')
                }
                if ((await res).status === 200) {
                   return alert('No amount reains to pay')
                }
                if ((await res).status === 201) {
                   return alert('Payment done but some amount remains')
                }
            } catch (error) {
                console.log(error);
            }
        }

    }
    return (
        <>

            <div>

                {
                    currentData.map((date, index) => {
                        return (<>
                            <span className="card mb-4 container mt-4" key={index}>
                                <div className="card-header d-flex align-items-center ">
                                    <i class="fa fa-arrow-left btn btn-sm btn-warning " style={{ marginRight: "10px" }} aria-hidden="true" ></i>
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
                                                <span className='form-control'>{date.amount > 0 ? date.amount : date.remaning}</span>
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
                                    <form method='POST'>
                                        <div className="col-sm-10 col-md-4">
                                            <div className="mb-4">
                                                <label className="form-label">Pay Now!</label>
                                                <input className="form-control" type="text" placeholder="Please Enter the amount" name="payAmount" onChange={setQuerys} />
                                            </div>
                                        </div>
                                        <button className="btn btn-warning shadow" type="submit" onClick={payNow}>Pay Now!</button>
                                    </form>
                                </div>

                            </span>
                        </>)
                    })
                }
            </div>


        </>
    )
}

export default LedgerDetails