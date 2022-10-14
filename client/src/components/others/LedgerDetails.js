import React from 'react'
import { useContext ,useEffect} from 'react'
import { useParams } from 'react-router'
import { AppContext } from '../Context/Context'
const LedgerDetails = () => {
    const { ledgerDataVal,ftechLedger } = useContext(AppContext)
    let { id } = useParams()
    const currentData = ledgerDataVal.filter((objs) => {
        return objs._id === id
    })
   
    
    console.log(currentData);
    useEffect(() => {
     ftechLedger()
    }, [])
    
    return (
        <>{
            currentData.map((date)=>{
                return(<>
                  <form className="card mb-4 container mt-4" method='POST'>
                <div className="card-header">
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
                                <span className='form-control'>{ date.amount>0? date.amount:date.remaning}</span>
                            </div>
                        </div>

                        {/* 
                        <div className="col-md-12 mb-3">
                            <div className="mb-0">
                                <label className="form-label">Details</label>
                                <textarea className="form-control" rows="1"
                                    placeholder="Details"></textarea>
                            </div>
                        </div> */}
                        <div className="col-sm-10 col-md-4">
                            <div className="mb-4">
                                <label className="form-label">Pay Now!</label>
                                <input className="form-control" type="text" placeholder="Please Enter the amount" />
                            </div>
                        </div>


                    </div>
                    <button className="btn btn-warning shadow" type="submit">Pay Now!</button>

                </div>

            </form>
                </>)
            })
        }
          
        </>
    )
}

export default LedgerDetails