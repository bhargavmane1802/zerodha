import react from "react";
function Education () {
    return (
       <>
       <div className="container mt-5 pt-5 " style={{maxWidth:1300}}>
        <div className="row mt-5">
            <div className="col">
                <img src="/media/education.svg" alt="not found"/>
            </div>
            <div className="col">
                <h1 className=" fs-2 "> Free and open market education</h1>
                <p className=" fs-6 fw-normal mt-3"> Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <p><a className=" fs-6 fw-normal pt-0"  href="#">Versity</a></p>
                <p className=" fs-6 fw-normal mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a className=" fs-6 fw-normal "  href="#">TradingQ&A</a>
            </div>
        </div>
        <div className="row mt-5 pt-5">
            <div className="cointaner pt-5 text-center" >
                <h1 className="">Open a Zerodha account</h1>
                <p className="pt-2 fw-normal " style={{fontSize:15 }} >Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button style={{fontSize:20, width:200, height:40}} className="bg-primary text-white rounded border-primary mb-5" >Signup now</button>
            </div>
        </div>
       </div>
       </>
    );
}
export default Education;