import Header from "./components/Header";
import TeachingSection from "./components/TeachingSection.jsx";
import AdviceSection from "./components/AdviсeSection.jsx";
import IntroSection from "./components/IntroSection.jsx";

export default function App() {
    return (
        <>
            <Header/>
            <main>
                <IntroSection />
                <TeachingSection />
                <AdviceSection />
            </main>
        </>
    )
}
