import react from "react";
import Hero from "./Hero.js"
import Pricing from "./Pricing.js"
import Award from "./Award.js"
import Stats from "./Stats.js"
import Education from "./Education.js"
import OpenAccount from "../support/OpenAccount.js"
function Home () {
    return (
        <>
            <Hero/>
            <OpenAccount/>
            <Stats/>
            <Award/>
            <Pricing/>
            <Education/>
        </>

    );
}
export default Home;