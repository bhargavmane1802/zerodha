import react from "react";
function Award () {
    return (
       <>
        <div className="container mt-5 pt-5 pb-5 mb-5" style={{maxWidth:1100}}>
            <div className="row pt-5">
                <div className="col " >
                    <h1 className=" fs-2" >Trust with confidence</h1>
                    <div className=" mt-5">
                        <h3 className=" fs-4 ">Customer-first always</h3>
                        <p className=" fs-6 fw-normal mt-3">That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.</p>
                    </div>
                    <div className="mt-3">
                        <h3 className=" fs-4 mt-3" >No spam or gimmicks</h3>
                        <p className=" fs-6 fw-normal mt-3">No spam or gimmicks</p>
                    </div>
                    <div className="mt-3" >
                        <h3 className=" fs-4">The Zerodha universe</h3>
                        <p className=" fs-6 fw-normal mt-3">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className="mt-3" >
                        <h3 className=" fs-4">Do better with money</h3>
                        <p className=" fs-6 fw-normal mt-3" >With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>

                </div>
                <div className="col">
                    <img src="media/ecosystem.png" alt="not found" className="" style={{height:500 ,width:500}} />
                </div>
            </div>
        </div>
       </>
    );
}
export default Award;