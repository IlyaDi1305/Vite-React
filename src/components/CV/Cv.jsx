import AboutMe from "./AboutMe/AboutMe.jsx";
import Contacts from "./Contacts/Contacts.jsx";
import SiteInfo from "./SiteInfo.jsx";

export default function Cv(){
    return (
        <section>
            <h1>Привет !</h1>
            <AboutMe/>
            <SiteInfo/>
            <Contacts/>
        </section>
    )
}