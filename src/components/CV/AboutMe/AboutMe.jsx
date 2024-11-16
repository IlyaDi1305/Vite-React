import {aboutMe} from "../../../data.js";

export default function AboutMe() {
    return (
        <section>
            <p style={{fontFamily: 'PT Serif, Times, serif',
                fontSize: '20px',
                margin: '20px 0px 0px'
            }}>{aboutMe['nameIlia']}</p>
        </section>
    )
}