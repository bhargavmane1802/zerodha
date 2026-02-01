import Hero from "./Hero"
import Cost from "./Cost"
import OpenAccount from "../support/OpenAccount"
import Brokerage from "./Brokerage"
function Pricingpage (){
    return (<>
        <Hero/>
        <Cost/> 
        <OpenAccount heading="Open a Zerodha account" para="Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades."/>
        <Brokerage/>
    </>)
}
export default Pricingpage