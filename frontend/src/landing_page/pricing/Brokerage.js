import react from "react";
function Brokerage() {
  return (
    <>
      <div className="container border-top pt-5 pb-5 mb-5 " style={{maxWidth:"70%"}}>
        <div className="row pt 4 pb-5">
          <div className="col-7">
            <h3 className="text-center pb-3">
              <a href="#" className="fs-5 ">Brokerage calculator</a>
            </h3>
            <ul>
              <li className="text-secondary" style={{fontSize:"13px", paddingBottom:"10px" }}>
                Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
                GST per order.
              </li>
              <li className="text-secondary" style={{fontSize:"13px", paddingBottom:"10px" }}>Digital contract notes will be sent via e-mail.</li>
              <li className="text-secondary" style={{fontSize:"13px", paddingBottom:"10px" }}> 
                Physical copies of contract notes, if required, shall be charged
                ₹20 per contract note. Courier charges apply.
              </li>
              <li className="text-secondary" style={{fontSize:"13px", paddingBottom:"10px" }}>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li className="text-secondary" style={{fontSize:"13px", paddingBottom:"10px" }}>
                For NRI account (PIS), 0.5% or ₹200 per executed order for
                equity (whichever is lower).
              </li>
              <li className="text-secondary" style={{fontSize:"13px", paddingBottom:"10px" }}>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </li>
            </ul>
          </div>
          <div className="col-5">
            <h3 className="text-center pb-3">
              <a href="#" className="fs-5 ">List of charges</a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
export default Brokerage;
<li></li>;
