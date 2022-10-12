import React from 'react'
import Header from './Header'
const SchoolCards = () => {
  return (
    <>
    <Header/>
        <div className="page-holder bg-gray-100">
        <div className="container-fluid px-lg-4 px-xl-5">
         
          <div className="page-breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a >Home</a></li>
              <li className="breadcrumb-item active">Invoice</li>
            </ul>
          </div>
       
          <div className="page-header">
            <h1 className="page-heading">Invoice</h1>
          </div>
          <section>
          
            <div className="row mb-5">
              <div className="col-sm-6 d-sm-flex align-items-center">
                <h2 className="h4 display mb-4 mb-sm-0">Invoice #20190204</h2>
              </div>
              <div className="col-sm-6">
                <p className="text-sm-end mb-0">
                  <button className="btn btn-outline-secondary mb-2 mb-sm-0">
                    Download
                  </button>
                  <button className="btn btn-primary mb-2 mb-sm-0">Pay</button>
                </p>
              </div>
            </div>
           
            <div className="card card-body p-5 mb-5">
              <div className="row">
                <div className="col text-end">
                
                  <div className="badge bg-danger">Overdue</div>
                </div>
              </div>
              <div className="text-center mb-5">
                {/* <img
                  className="img-fluid mb-4"
                  src="dist/img/brand/brand-1.svg"
                  alt="..."
                  style="max-width: 6rem"
                /> */}
              
                <h2 className="mb-2">Invoice from Vintage, Ltd.</h2>
                <p className="text-muted">Invoice #20190204</p>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <h6 className="text-uppercase text-muted">Invoiced from</h6>
                  <p className="text-muted mb-4">
                    <strong className="text-body">Franz Kafka</strong><br />
                    Bank Clerk<br />
                    Nerudova 23<br />111 50 Praha
                  </p>
                  <h6 className="text-uppercase text-muted">Invoiced ID</h6>
                  <p className="mb-4">#20190204</p>
                </div>
                <div className="col-12 col-md-6 text-md-right">
                  <h6 className="text-uppercase text-muted">Invoiced to</h6>
                  <p className="text-muted mb-4">
                    <strong className="text-body">Jack London</strong><br />
                    Lonely Wolf<br />1150 Lost St.<br />
                    Middle of Nowhere
                  </p>
                  <h6 className="text-uppercase text-muted">Due date</h6>
                  <p className="mb-4">
                    <time datetime="2018-04-23">Feb 23, 2021</time>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  
                  <div className="table-responsive">
                    <table className="table my-4">
                      <thead>
                        <tr>
                          <th className="px-0 bg-transparent border-top-0">
                            <span className="h6">Description</span>
                          </th>
                          <th className="px-0 bg-transparent border-top-0">
                            <span className="h6">Hours</span>
                          </th>
                          <th className="px-0 bg-transparent border-top-0 text-end">
                            <span className="h6">Cost</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-0">Novel proofreading</td>
                          <td className="px-0">50</td>
                          <td className="px-0 text-end">$9230</td>
                        </tr>
                        <tr>
                          <td className="px-0">Consulting</td>
                          <td className="px-0">3</td>
                          <td className="px-0 text-end">$333</td>
                        </tr>
                        <tr>
                          <td className="px-0 border-top">
                            <strong>Total amount due</strong>
                          </td>
                          <td className="px-0 text-end border-top" colspan="2">
                            <span className="h3">$9533</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <hr className="my-5" />
                  <h6 className="text-uppercase">Note</h6>
                  <p className="text-muted text-sm mb-0">
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer
          className="footer bg-white shadow align-self-end py-3 px-xl-5 w-100"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 text-center text-md-start fw-bold">
                <p className="mb-2 mb-md-0 fw-bold">Your company &copy; 2022</p>
              </div>
              <div className="col-md-6 text-center text-md-end text-gray-400">
                <p className="mb-0">Version 1.3.0</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default SchoolCards