import react from "react";
import Hero from "./Hero.js"
import Pricing from "./Pricing.js"
import Award from "./Award.js"
import Stats from "./Stats.js"
import Education from "./Education.js"
import Openaccount from "../support/Openaccount.js"
function Home () {
    return (
        <>
            <Hero/>
            <Openaccount/>
            <Stats/>
            <Award/>
            <Pricing/>
            <Education/>
        </>

    );
}
export default Home;