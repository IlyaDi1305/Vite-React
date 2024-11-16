import {aboutMe} from "../../data.js";

export default function SiteInfo() {
    return (
        <section>
            <h1>{aboutMe['site']}</h1>
            <p style={{fontFamily: "PT Serif, Times, serif", fontSize: '20px'}}>{aboutMe['siteInfo']}</p>
        </section>
    )
}