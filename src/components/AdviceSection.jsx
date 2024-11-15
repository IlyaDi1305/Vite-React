import {ways} from "../data.js";
import WayToTeach from "./WayToTech.jsx";
import IntroSection from "./IntroSection.jsx";

export default function AdviceSection(){
    return (
        <section>
            <IntroSection/>
            <h3>Что делать ?</h3>
            <ul>
                {ways.map((way) => (
                    <WayToTeach key={way.title}{...way}/>
                ))}
            </ul>
        </section>
    )
}