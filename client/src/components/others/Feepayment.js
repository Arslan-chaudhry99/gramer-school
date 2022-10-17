import React from 'react'
import { AppContext } from '../Context/Context'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
const Feepayment = () => {
    const { candidatesFee, candiFees } = useContext(AppContext);
    const { id } = useParams()
    useEffect(() => {
        candidatesFee()

    }, [])
    const paymentData = candiFees.filter((item) => {
        return item._id === id
    })
    console.log(paymentData);

    return (
        <>
            {
                paymentData.map((data,index) => {
                    return (
                        <>
                            <span className="card mb-4 container mt-4" key={index} >
                                <div style={{ width: "100px", height: "100px", borderRadius: "50%" }} className="shadow mt-2">
                                    <img src="/logo.jpeg" alt="img" style={{ width: "100%", borderRadius: "50%" }} />
                                </div>

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="mb-4">
                                                <label className="form-label">Name</label>
                                                <span className="form-control">{data.name}</span>
                                            </div>
                                        </div>
                                        {data.status !== "Teacher"? <div className="col-sm-6 col-md-3">
                                            <div className="mb-4">
                                                <label className="form-label">Class Name</label>
                                                <span className='form-control'>{data.classname}</span>
                                            </div>
                                        </div>: <div className="col-sm-6 col-md-3">
                                            <div className="mb-4">
                                                <label className="form-label">CNIC</label>
                                                <span className='form-control'>{data.cnic}</span>
                                            </div>
                                        </div>}
                                       {
                                        data.status !== "Teacher"? <div className="col-sm-6 col-md-4">
                                        <div className="mb-4">
                                            <label className="form-label">Roll Number</label>
                                            <span className='form-control'>{3}</span>
                                        </div>
                                    </div>: <div className="col-sm-6 col-md-4">
                                            <div className="mb-4">
                                                <label className="form-label">Status</label>
                                                <span className='form-control'>{data.status}</span>
                                            </div>
                                        </div>
                                       }
                                       
                                        <div className="col-sm-6 col-md-6">
                                            <div className="mb-4">
                                                <label className="form-label">Payable Amount</label>
                                                <span className='form-control'>{data.payableAmoun}</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="mb-4">
                                                <label className="form-label">Remaining Amount</label>
                                                <span className='form-control'>{data.remaning}</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="mb-4">
                                                <label className="form-label">Starting Date</label>
                                                <span className='form-control'>{data.startingDate}</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="mb-4">
                                                <label className="form-label">End Date</label>
                                                <span className='form-control'>{data.endDate === ""?"N/A":data.endDate}</span>
                                            </div>
                                        </div>






                                    </div>
                                    {<form method='POST'>
                                        <div className="col-sm-10 col-md-4">
                                            <div className="mb-4">
                                                <label className="form-label">Pay Now!</label>
                                                <input className="form-control" type="text" placeholder="Please Enter the amount" name="payAmount" />
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label">Current Date</label>
                                                <input className="form-control" type="date" name="date" />
                                            </div>
                                        </div>
                                        {data.remaning !==0 ? <button className="btn btn-warning shadow" type="submit" >Pay Now!</button>:<button className="btn btn-success shadow" style={{ marginLeft: '10px' }}>Print Now!</button>}
                                        

                                    </form>

                                    }

                                </div>

                            </span>
                        </>
                    )
                })
            }

        </>
    )
}

export default Feepayment
{/* <span className='d-flex'>
<button className="btn btn-info shadow " style={{ marginRight: "10px" }}><i className="fa fa-history" aria-hidden="true"></i>
    History</button>
<form method='POST' >
    <button className="btn btn-danger shadow " type="submit" onClick={deleteLedger} ><i className="fa fa-trash" aria-hidden="true"></i></button>
</form></span> */}