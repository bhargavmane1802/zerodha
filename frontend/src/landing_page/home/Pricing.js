import react from "react";
function Pricing () {
    return (
        <>
            <div className="container pt-3">
                <div className="row">
                    <div className="col">
                        <h1 className="fs-2">Unbeatable pricing</h1>
                        <p className="fs-6 fw-normal mt-3">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <p className="fs-6 fw-normal mt-3"><a href="">See Pricing </a></p>
                    </div>
                    <div className="col"> 
                        <div className="row text-center ">
                            <div className="col border ">
                                <h1 className="fs-1 pt-3"> ₹0</h1>
                                <p className="fs-6 fw-normal mt-3 pb-3 pl-5" >Free equity delivery and direct mutual funds</p>
                            </div>
                            <div className="col border">
                                <h1 className="fs-1 mt-3 "> ₹20</h1>
                                <p className="fs-6 fw-normal mt-3"> Intraday and F&O</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Pricing;