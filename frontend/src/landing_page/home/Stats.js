import react from "react";
function Stats () {
    return (
        <>
            <div className="container pt-5 mt-5 mb-5 pb-5" style={{maxWidth:1200}}>
                <div className="row">
                    <div className="col pr-5">
                        <img src="media/largestBroker.svg"/>
                    </div>
                    <div className="col pt-5">
                        <h1>Largest stock broker in India</h1>
                        <p className="pt-2 fw-normal fs-6 " style={{fontSize:20}}>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                        <div className="row ml-3 pl-3 ">
                                <ul className="col fs-3 mt-3 ml-5 ">
                                    <li className="pt-2 fw-normal fs-6" style={{fontSize:20}}><p >Futures and Options</p></li>
                                    <li className="pt-2 fw-normal fs-6" style={{fontSize:20}}><p>Commodity derivatives</p></li>
                                    <li className="pt-2 fw-normal fs-6" style={{fontSize:20}}><p>Currency derivatives</p></li>
                                </ul>
                                <ul className="col fs-3 mt-3 ml-5">
                                    <li className="pt-2 fw-normal fs-6" style={{fontSize:20}}><p>Stocks & IPOs</p></li>
                                    <li className="pt-2 fw-normal fs-6" style={{fontSize:20}} ><p>Direct mutual funds</p></li>
                                    <li className="pt-2 fw-normal fs-6" style={{fontSize:20}}><p>Bonds and Govt. Securities

</p></li>
                                </ul>
                                <img src="media/pressLogos.png"/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Stats;