import Header from "./components/Header/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import AdviceSection from "./components/AdviceSection.jsx";
import {useState} from "react";
import Footer from "./components/Footer/Footer.jsx";
import AdviceButtonSection from "./components/AdviсeButtonSection.jsx";

export default function App() {
    const [tab, setTab] = useState('main')

    return (
        <>
            <Header/>
            <main>
                <TabsSection active={tab} onChange={(current) => setTab(current)}/>
                {tab === 'main' && (<>
                    <TeachingSection/></>)}
                {tab === 'advice' && (<><AdviceSection/> <AdviceButtonSection/></>)}
            </main>
            <Footer/>
        </>
    )
}