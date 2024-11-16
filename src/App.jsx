import Header from "./components/Header/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import AdviceSection from "./components/AdviceSection.jsx";
import {useState} from "react";
import Footer from "./components/Footer/Footer.jsx";
import AdviceButtonSection from "./components/AdviсeButtonSection.jsx";
import Cv from "./components/CV/Cv.jsx";
import EffectSection from "./components/EffectSection.jsx";

export default function App() {
    const [tab, setTab] = useState('effect')

    return (
        <>
            <Header/>
            <main>
                <TabsSection active={tab} onChange={(current) => setTab(current)}/>
                {tab === 'сv' && (<><Cv/></>)}
                {tab === 'feedback' && (<><TeachingSection/></>)}
                {tab === 'advice' && (<><AdviceSection/><AdviceButtonSection/></>)}
                {tab === 'effect' && (<><EffectSection/></>)}
            </main>
            <Footer/>
        </>
    )
}