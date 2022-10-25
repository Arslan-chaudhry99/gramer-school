import React from 'react'

const Preloding = () => {
  return (
    <>
      <div className="col-md-12 d-flex" style={{ position: "absolute", zIndex: "1000", height: "100vh", width: "100vw" }}>

        <div className="card-body d-flex align-items-center pt-5 pb-5 " style={{flexDirection:"column"}}  >
          <div className="sk-fading-circle mb-3">
            <div className="sk-circle1 sk-circle" ></div>
            <div className="sk-circle2 sk-circle"></div>
            <div className="sk-circle3 sk-circle"></div>
            <div className="sk-circle4 sk-circle"></div>
            <div className="sk-circle5 sk-circle"></div>
            <div className="sk-circle6 sk-circle"></div>
            <div className="sk-circle7 sk-circle"></div>
            <div className="sk-circle8 sk-circle"></div>
            <div className="sk-circle9 sk-circle"></div>
            <div className="sk-circle10 sk-circle"></div>
            <div className="sk-circle11 sk-circle"></div>
            <div className="sk-circle12 sk-circle"> </div>
          </div>
          <div>
          <h3>Please Wait</h3>
          </div>
        </div>
      
      </div>

    </>
  )
}

export default Preloding