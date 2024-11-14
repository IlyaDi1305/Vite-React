import {ways} from "../data.js";
import WayToTeach from "./WayToTech.jsx";

export default function TeachingSection() {
    return (
        <section>
            <h3>Что делать ?</h3>
            <ul>
                {ways.map((way) => (
                    <WayToTeach key={way.title}{...way}/>
                ))}
            </ul>
        </section>
    )
}