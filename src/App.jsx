import Header from "./components/Header/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import AdviceSection from "./components/AdviсeSection.jsx";
import IntroSection from "./components/IntroSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";
import {useState} from "react";

export default function App() {
    const [tab, setTab] = useState('main')

    return (
        <>
            <Header/>
            <main>
                <IntroSection/>
                <TabsSection active={tab} onChange={(current) => setTab(current)}/>
                {tab === 'main' && ( <>
                    <TeachingSection/>
                    <AdviceSection/>
                </>)}
                {tab === 'feedback' && <FeedbackSection/>}
            </main>
        </>
    )
}