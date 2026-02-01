import React from "react";

function Hero() {
  return (
    <section className="container-fluid text-white" id="supportHero" style={{backgroundColor:"#447fd9"}}>
      <div className="p-5 " id="supportWrapper" style={{display:"flex ", justifyContent:"space-between"}}>
        <h4 style={{paddingLeft:"10%"}}>Support Portal</h4>
        <a href="" className="text-white" style={{paddingRight:"10%"}}>Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3" >
          <h1 className="fs-3 text-white" >
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input  className="fs-5 " placeholder="            Eg. how do I activate F&O" style={{width:"100%", height:"60%" ,borderRadius:"10px" ,borderColor:"transparent"}}/>
          <br />
          <a href="" className="text-white">Track account opening</a>
          <a href="" className="text-white">Track segment activation</a>
          <a href="" className="text-white">Intraday margins</a>
          <a href="" className="text-white">Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol className="text-white">
            <li>
              <a href="" className="text-white">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" className="text-white">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
